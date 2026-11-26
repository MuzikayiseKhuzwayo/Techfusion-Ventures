"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Download,
  Lock,
  ShieldCheck,
} from "lucide-react";
import type { BlueprintEntry } from "@/lib/blueprints-catalog";

const STACK_OPTIONS = [
  "Xero",
  "Sage",
  "QuickBooks",
  "Custom ERP / SQL",
  "HubSpot / Salesforce",
  "Excel / Spreadsheets",
  "Other",
];

export default function BlueprintGateForm({
  blueprint,
}: {
  blueprint: BlueprintEntry;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [currentStack, setCurrentStack] = useState(STACK_OPTIONS[0]);
  const [qualAnswer, setQualAnswer] = useState(blueprint.qualOptions[0] || "");
  const [status, setStatus] = useState<"idle" | "submitting" | "unlocked" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [unlockedData, setUnlockedData] = useState<{
    pdfUrl: string;
    bookingUrl: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/blueprints/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: blueprint.keyword,
          name,
          email,
          company,
          role,
          currentStack,
          qualAnswer,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not unlock blueprint.");
      }
      setUnlockedData({
        pdfUrl: data.pdfUrl,
        bookingUrl: data.bookingUrl,
      });
      setStatus("unlocked");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "unlocked" && unlockedData) {
    return (
      <div className="rounded-2xl border border-emerald-400/40 bg-[#141416] p-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Blueprint Unlocked
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Your {blueprint.keyword} Blueprint is Ready
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          We have also emailed a permanent copy to <strong className="text-white">{email}</strong> along with a link to book a 30-minute Architecture Scoping Call.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={unlockedData.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-sm font-bold text-[#0B0B0C] transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            <Download className="h-4 w-4" />
            Download {blueprint.keyword} PDF Blueprint
          </a>
          <a
            href={unlockedData.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-[#1E1E20] px-5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          >
            <Calendar className="h-4 w-4 text-emerald-400" />
            Book 30-Min Architecture Scoping Call
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-[#141416] p-7"
    >
      <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            <Lock className="h-3.5 w-3.5" />
            Instant Access
          </div>
          <h2 className="mt-1 text-xl font-bold text-white">
            Unlock the {blueprint.keyword} PDF Blueprint
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="bp-name" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
            Full Name *
          </label>
          <input
            id="bp-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. David Khumalo"
            className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="bp-email" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
            Work Email *
          </label>
          <input
            id="bp-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="david@company.co.za"
            className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bp-company" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Company Name *
            </label>
            <input
              id="bp-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Meridian Retail Group"
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="bp-role" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Your Role / Title
            </label>
            <input
              id="bp-role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="COO / Finance Director"
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="bp-stack" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
            Primary ERP / Accounting Stack
          </label>
          <select
            id="bp-stack"
            value={currentStack}
            onChange={(e) => setCurrentStack(e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
          >
            {STACK_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {blueprint.qualOptions.length > 0 && (
          <div>
            <label htmlFor="bp-qual" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-300 uppercase">
              {blueprint.qualQuestion}
            </label>
            <select
              id="bp-qual"
              value={qualAnswer}
              onChange={(e) => setQualAnswer(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#0B0B0C] px-3.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              {blueprint.qualOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="min-h-[20px]">
          {status === "error" && (
            <p className="text-xs font-medium text-rose-400">{errorMsg}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-sm font-bold text-[#0B0B0C] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          {status === "submitting" ? (
            "Unlocking Blueprint..."
          ) : (
            <>
              Unlock &amp; Download PDF Blueprint
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          POPIA compliant · Instant PDF unlock + emailed copy
        </p>
      </div>
    </form>
  );
}
