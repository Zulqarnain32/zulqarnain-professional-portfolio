import { NextRequest, NextResponse } from "next/server";
import { generatePortfolioAnswer, ChatHistoryMessage } from "@/lib/ai/gemini";

// Lightweight in-memory rate limiting (10 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIp);

  // Garbage collect stale records if map gets large
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetTime < now) {
    rateLimitMap.set(clientIp, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return true; // allowed
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false; // rate limited
  }

  record.count += 1;
  return true; // allowed
}

export async function POST(req: NextRequest) {
  try {
    // 1. Get client IP for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwardedFor?.split(",")[0] || realIp || "unknown-ip").trim();

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          error: "You are sending messages too quickly. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate JSON body
    let body: { message?: unknown; history?: unknown };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { message, history } = body;

    // 3. Validate user message
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();

    // Max message length validation to prevent prompt ballooning
    if (trimmedMessage.length > 500) {
      return NextResponse.json(
        { error: "Message is too long. Please keep your question under 500 characters." },
        { status: 400 }
      );
    }

    // 4. Validate history if provided
    let parsedHistory: ChatHistoryMessage[] = [];
    if (Array.isArray(history)) {
      parsedHistory = history
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            typeof item.content === "string" &&
            (item.role === "user" || item.role === "model" || item.role === "assistant")
        )
        .slice(-6);
    }

    // 5. Generate AI answer
    const answer = await generatePortfolioAnswer(trimmedMessage, parsedHistory);

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error: unknown) {
    const err = error as { message?: string; status?: number; code?: string };

    if (err?.message === "API_KEY_MISSING") {
      return NextResponse.json(
        {
          error:
            "The AI assistant is temporarily unavailable because the API key is not configured.",
        },
        { status: 503 }
      );
    }

    // Provide friendly fallback message without exposing internal details
    return NextResponse.json(
      {
        error:
          "I encountered an issue generating a response. Please try again in a few moments.",
      },
      { status: 500 }
    );
  }
}
