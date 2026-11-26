import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, FileText, Layers, Sparkles } from "lucide-react";
import {
  BLUEPRINTS_CATALOG,
  getBlueprintByKeyword,
} from "@/lib/blueprints-catalog";
import BlueprintGateForm from "./BlueprintGateForm";

export async function generateStaticParams() {
  return Object.keys(BLUEPRINTS_CATALOG).map((kw) => ({
    keyword: kw.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ keyword: string }>;
}): Promise<Metadata> {
  const { keyword } = await params;
  const bp = getBlueprintByKeyword(keyword);
  if (!bp) {
    return { title: "Blueprint Not Found | Techfusion Automata" };
  }
  return {
    title: `${bp.keyword} Blueprint — ${bp.title} | Techfusion Automata`,
    description: bp.outcome,
  };
}

export default async function BlueprintDetailPage({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  const { keyword } = await params;
  const blueprint = getBlueprintByKeyword(keyword);
  if (!blueprint) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0C] px-5 pt-28 pb-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/blueprints"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase transition hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Architecture Blueprints
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Blueprint Value & Breakdown */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-bold tracking-widest text-emerald-300 uppercase">
                BLUEPRINT: {blueprint.keyword}
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                {blueprint.clusterLabel}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {blueprint.title}
            </h1>

            <p className="text-base leading-relaxed text-slate-300">
              {blueprint.systemName}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-[#141416] p-5">
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Built For
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {blueprint.icp}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/30 bg-[#141416] p-5">
                <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                  Target Outcome
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {blueprint.outcome}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#141416] p-6">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-slate-300 uppercase">
                Inside This 5-Page Engineering Dossier
              </h2>
              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">Cost-of-Inaction Calculator:</strong>{" "}
                    Plug in your weekly hours and exception rate to quantify quarterly Rand leakage.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">4-Stage Guardrail Architecture:</strong>{" "}
                    Deterministic triggers, validation gates, exception-only HITL routing, and audit trails.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">Stack-Aware AI Implementation Prompt:</strong>{" "}
                    Paste into Claude, Gemini, or ChatGPT to map this design onto your exact ERP, CRM, and data model.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">10-Point Production Readiness Checklist:</strong>{" "}
                    Pre-launch verification covering idempotency, POPIA security, and silent-failure prevention.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Gated Lead-Capture Form */}
          <div className="lg:col-span-5">
            <BlueprintGateForm blueprint={blueprint} />
          </div>
        </div>
      </div>
    </main>
  );
}
