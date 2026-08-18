"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "What technologies does Zulqarnain use?",
  "Tell me about his experience.",
  "What projects has he worked on?",
  "Tell me about GlintPro.",
  "What is his backend experience?",
];

// Helper to parse inline markdown (bold, links, code) without leaving raw syntax
function parseInlineStyles(text: string): React.ReactNode[] {
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2).trim();
      return (
        <strong key={index} className="font-semibold text-foreground">
          {boldText}
        </strong>
      );
    }
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const linkText = match[1];
        const linkUrl = match[2];
        return (
          <a
            key={index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-semibold inline-flex items-center gap-0.5 mx-0.5"
          >
            <span>{linkText}</span>
            <ExternalLink className="w-3 h-3 inline-block ml-0.5 opacity-80" />
          </a>
        );
      }
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="bg-black/10 dark:bg-white/10 text-foreground px-1.5 py-0.5 rounded text-[11px] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

// Clean custom response formatter that renders colorful yellow headings and styled round bullets
function renderFormattedResponse(content: string): React.ReactNode {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      continue;
    }

    // Check if line is a header (has # symbols or is plain uppercase title)
    const isMarkdownHeader = /^#{1,6}\s+/.test(trimmed);
    const strippedHeader = trimmed
      .replace(/^#{1,6}\s+/, "")
      .replace(/^\*\*|\*\*$/g, "")
      .replace(/:$/, "")
      .trim();

    const isUppercaseHeader =
      /^[A-Z0-9\s&/—–\-]{3,35}$/.test(strippedHeader) &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith("*") &&
      !trimmed.startsWith("•");

    if (isMarkdownHeader || isUppercaseHeader) {
      elements.push(
        <div
          key={`header-${i}`}
          className="text-secondary font-bold text-xs sm:text-sm uppercase tracking-wider mt-3.5 mb-1.5 first:mt-0 font-sans"
        >
          {strippedHeader}
        </div>
      );
      continue;
    }

    // Check if line is a bullet item (starts with -, *, or •)
    const isBullet =
      /^[-*•]\s+/.test(trimmed) || /^\s+[-*•]\s+/.test(rawLine);

    if (isBullet) {
      const bulletContent = trimmed.replace(/^[-*•]\s+/, "");
      elements.push(
        <div
          key={`bullet-${i}`}
          className="flex items-start gap-2 text-foreground/90 my-1 pl-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
          <span className="leading-relaxed flex-1 text-xs sm:text-sm">
            {parseInlineStyles(bulletContent)}
          </span>
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="mb-2 last:mb-0 leading-relaxed text-foreground/90 font-normal text-xs sm:text-sm"
      >
        {parseInlineStyles(trimmed)}
      </p>
    );
  }

  return <div className="space-y-0.5">{elements}</div>;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgCounterRef = useRef(0);

  // Auto scroll to bottom whenever messages or loading state changes
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputMessage).trim();
    if (!messageText || isLoading) return;

    setErrorMessage(null);
    msgCounterRef.current += 1;
    const userMsgId = `msg-user-${msgCounterRef.current}`;
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newUserMsg: ChatMessage = {
      id: userMsgId,
      role: "user",
      content: messageText,
      timestamp: timeString,
    };

    // Update conversation state
    const currentMessages = [...messages, newUserMsg];
    setMessages(currentMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Prepare lightweight history
      const historyPayload = currentMessages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to receive response.");
      }

      msgCounterRef.current += 1;
      const assistantMsg: ChatMessage = {
        id: `msg-ai-${msgCounterRef.current}`,
        role: "assistant",
        content: data.answer || "I am here to answer any questions about Zulqarnain Chohan.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || "An error occurred while connecting to the assistant.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    setErrorMessage(null);
    setInputMessage("");
  };

  return (
    <>
      {/* Floating Circular Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {!isOpen && (
          <div className="relative group flex items-center">
            {/* Tooltip on Hover */}
            <div className="absolute right-full mr-3 px-3.5 py-1.5 rounded-xl bg-primary text-white dark:bg-secondary dark:text-secondary-foreground text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-1.5 border border-white/10">
              <span>Ask AI about Zulqarnain</span>
              <Sparkles className="w-3.5 h-3.5 text-secondary dark:text-primary animate-pulse" />
            </div>

            {/* Circular Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white dark:bg-secondary dark:text-secondary-foreground flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-secondary/20 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer"
              aria-label="Ask AI about Zulqarnain"
            >
              <Bot className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              
              {/* Online Indicator Badge */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary dark:bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-secondary dark:bg-primary border-2 border-background" />
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Chat Window / Drawer Container */}
      <div
        className={cn(
          "fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[440px] max-w-full sm:max-w-[calc(100vw-3rem)] h-[90vh] sm:h-[630px] sm:max-h-[85vh] flex flex-col bg-background dark:bg-[#0f1410] border sm:border-border sm:rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-12 pointer-events-none"
        )}
        role="dialog"
        aria-label="AI Portfolio Assistant"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-primary text-white border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm leading-tight text-white font-sans">
                  Zulqarnain&apos;s AI Assistant
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-white/70">Verified Portfolio Knowledge</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                onClick={handleResetChat}
                className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Close chat"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 [scrollbar-width:thin]">
          {/* Empty State */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center px-3 py-6 space-y-4 animate-fade-in-up">
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-foreground font-sans">
                  Hi! I&apos;m Zulqarnain&apos;s AI Assistant
                </h4>
                <p className="text-xs text-foreground/70 max-w-xs leading-relaxed">
                  Ask me anything about Zulqarnain&apos;s experience, skills, projects, education, or technologies.
                </p>
              </div>

              {/* Suggested Questions */}
              <div className="w-full pt-2 space-y-2 text-left">
                <p className="text-[11px] font-semibold tracking-wider text-secondary uppercase px-1">
                  Suggested Questions
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      className="text-left text-xs bg-custom-gray/70 dark:bg-custom-gray/50 hover:bg-custom-gray dark:hover:bg-zinc-800/80 border border-border/60 hover:border-secondary/40 text-foreground/85 px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group"
                    >
                      <span>{q}</span>
                      <Send className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Render Messages */}
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={cn("flex gap-2.5 items-end", isUser ? "justify-end" : "justify-start")}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 text-xs font-bold shadow-sm mb-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
                    isUser
                      ? "bg-primary text-white rounded-br-none font-medium text-xs sm:text-sm leading-relaxed"
                      : "bg-custom-gray dark:bg-[#182019] text-foreground border border-border/60 rounded-bl-none"
                  )}
                >
                  {isUser ? (
                    <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                  ) : (
                    <div>{renderFormattedResponse(msg.content)}</div>
                  )}

                  <div
                    className={cn(
                      "text-[10px] mt-1.5 opacity-60 text-right select-none",
                      isUser ? "text-white/80" : "text-foreground/60"
                    )}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 dark:bg-primary/40 text-primary dark:text-foreground flex items-center justify-center shrink-0 text-xs font-bold mb-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Typing Indicator */}
          {isLoading && (
            <div className="flex gap-2.5 items-end justify-start">
              <div className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 text-xs font-bold shadow-sm mb-1">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-custom-gray dark:bg-[#182019] border border-border/60 rounded-2xl rounded-bl-none px-4 py-3 text-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">Unable to process request</p>
                <p className="opacity-90">{errorMessage}</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-3 sm:p-4 border-t border-border/50 bg-custom-gray/30 dark:bg-custom-gray/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about Zulqarnain's skills, projects..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              maxLength={500}
              className="flex-1 bg-background dark:bg-[#141a15] border border-border/80 rounded-full px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-secondary dark:focus:border-secondary transition-colors disabled:opacity-50 min-w-0"
              aria-label="Your question about Zulqarnain"
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="w-10 h-10 rounded-full bg-primary dark:bg-secondary text-white dark:text-secondary-foreground flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed shrink-0 shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
       
        </div>
      </div>
    </>
  );
}
