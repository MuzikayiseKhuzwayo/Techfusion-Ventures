"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to sign up. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
        <div>
          <span className="font-semibold block">You're on the list!</span>
          <span>We've received your email and will be in contact soon.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex items-center gap-1.5 bg-surface-200/60 border border-surface-200 rounded-lg p-1 focus-within:border-accent-light/50 transition-colors">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address for sign up"
          className="bg-transparent px-3 py-1.5 text-xs text-foreground placeholder:text-foreground/40 focus:outline-none w-full"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Sign up"
          className="px-3 py-1.5 rounded-md bg-accent-light text-background text-xs font-medium hover:bg-white transition-colors flex items-center justify-center shrink-0 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-[11px] text-red-400 pl-1">{errorMessage}</p>
      )}
    </form>
  );
}
