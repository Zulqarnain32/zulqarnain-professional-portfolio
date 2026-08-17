import { GoogleGenAI } from "@google/genai";
import { getSystemInstruction } from "./prompt";

export interface ChatHistoryMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

/**
 * Executes a question answering call against Gemini using the official Google Gen AI SDK.
 * Reads GEMINI_API_KEY from the server environment only.
 */
export async function generatePortfolioAnswer(
  userMessage: string,
  history: ChatHistoryMessage[] = []
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey });
  const systemInstruction = getSystemInstruction();

  // Format lightweight chat history for context (up to last 6 messages)
  const validHistory = (history || [])
    .filter((h) => h && typeof h.content === "string" && h.content.trim() !== "")
    .slice(-6)
    .map((msg) => ({
      role: msg.role === "assistant" ? "model" : msg.role === "model" ? "model" : "user",
      parts: [{ text: msg.content.trim() }],
    }));

  const contents = [
    ...validHistory,
    {
      role: "user",
      parts: [{ text: userMessage.trim() }],
    },
  ];

  // Prioritize modern Flash models with fallback
  const modelsToTry = [
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-flash-latest",
    "gemini-2.5-flash",
  ];
  let lastError: unknown = null;

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.2, // Low temperature for high factual accuracy
          maxOutputTokens: 800,
        },
      });

      const answer = response.text?.trim();
      if (answer) {
        return answer;
      }
    } catch (err: unknown) {
      lastError = err;
      // If a model is not found or deprecated, try the next available model
      continue;
    }
  }

  // If all models failed, throw the last encountered error
  throw lastError || new Error("Failed to generate response from Gemini model.");
}
