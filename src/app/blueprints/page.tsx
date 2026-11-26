import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLUEPRINTS_CATALOG } from "@/lib/blueprints-catalog";

export const metadata: Metadata = {
  title: "Architecture Blueprints Library (97 Systems) | Techfusion Automata",
  description:
    "Explore 97 deterministic B2B automation, ERP/CRM integration, and sovereign AI engineering blueprints.",
};

export default function BlueprintsIndexPage() {
  const entries = Object.values(BLUEPRINTS_CATALOG);

  return (
    <main className="min-h-screen bg-[#0B0B0C] px-5 pt-28 pb-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            TECHFUSION AUTOMATA · ARCHITECTURE LIBRARY
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            97 Production Architecture Blueprints
          </h1>
          <p className="mt-3 text-base text-slate-400">
            Select any blueprint below to unlock the 5-page Obsidian-Silver PDF dossier, cost-of-inaction calculator, and stack-aware implementation prompt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((bp) => (
            <Link
              key={bp.keyword}
              href={`/blueprints/${bp.keyword.toLowerCase()}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#141416] p-5 transition hover:border-emerald-400/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-emerald-300 uppercase">
                    {bp.keyword}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-emerald-400" />
                </div>
                <h2 className="mt-3 text-base font-bold leading-snug text-white">
                  {bp.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                  {bp.outcome}
                </p>
              </div>
              <div className="mt-4 border-t border-slate-800/80 pt-3 text-[11px] font-medium text-slate-500">
                {bp.clusterLabel}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
