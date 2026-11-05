"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  Code2,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  calculateEnterpriseRoi,
  type CalculatorInputs,
} from "@/lib/calculator-math";
import { trackEvent } from "@/lib/analytics";

const SCENARIO_PRESETS: Array<{
  id: string;
  label: string;
  badge: string;
  inputs: CalculatorInputs;
}> = [
  {
    id: "public-edrms",
    label: "Public-Sector EDRMS & Case Automation",
    badge: "PILLAR 06 // GOVTECH & MIS",
    inputs: {
      monthlyWorkflowVolume: 8500,
      manualMinutesPerRun: 25,
      hourlyStaffCostZar: 380,
      targetAutomationRatePct: 84,
      costPerComplianceDefectZar: 2200,
      annualContractSpendZar: 850_000,
    },
  },
  {
    id: "enterprise-idp",
    label: "Enterprise IDP/OCR & FinOps Pipeline",
    badge: "PILLAR 02 // MULTI-AGENT MCP",
    inputs: {
      monthlyWorkflowVolume: 4500,
      manualMinutesPerRun: 22,
      hourlyStaffCostZar: 420,
      targetAutomationRatePct: 82,
      costPerComplianceDefectZar: 1850,
      annualContractSpendZar: 650_000,
    },
  },
  {
    id: "data-governance",
    label: "ETL Data Warehouse & POPIA Audit Suite",
    badge: "PILLAR 03 // DATA & ANALYTICS",
    inputs: {
      monthlyWorkflowVolume: 12000,
      manualMinutesPerRun: 15,
      hourlyStaffCostZar: 520,
      targetAutomationRatePct: 88,
      costPerComplianceDefectZar: 3100,
      annualContractSpendZar: 1_200_000,
    },
  },
];

function formatZar(value: number): string {
  return `R ${ value.toLocaleString("en-ZA") }`;
}

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>(
    SCENARIO_PRESETS[1].inputs
  );
  const [activePreset, setActivePreset] = useState<string>(
    SCENARIO_PRESETS[1].id
  );
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const results = useMemo(() => calculateEnterpriseRoi(inputs), [inputs]);

  function handlePresetSelect(preset: (typeof SCENARIO_PRESETS)[number]) {
    setActivePreset(preset.id);
    setInputs(preset.inputs);
    trackEvent("calculator_preset_select", {
      preset_id: preset.id,
    });
  }

  function updateField(field: keyof CalculatorInputs, rawValue: string) {
    setActivePreset("custom");
    const parsed = rawValue === "" ? 0 : Number(rawValue);
    setInputs((prev) => ({
      ...prev,
      [field]: Number.isFinite(parsed) ? parsed : 0,
    }));
  }

  const citationSummaryText = `Enterprise AI & B-BBEE 135% ROI Estimate (Techfusion Automata Calculator): Automating ${results.clampedInputs.targetAutomationRatePct}% of ${results.clampedInputs.monthlyWorkflowVolume.toLocaleString("en-ZA")} monthly workflow runs reclaims ${results.annualHoursReclaimed.toLocaleString("en-ZA")} staff hours/year (${formatZar(results.annualLaborSavingsZar)} labor savings) and prevents ${(results.unguardedDefectCount - results.mcpHitlDefectCount).toLocaleString("en-ZA")} POPIA/audit compliance defects (${formatZar(results.annualComplianceRiskSavingsZar)} risk reduction), delivering a ${results.netRoiPct}% net 12-month ROI (${results.paybackMonths} mo payback) plus ${formatZar(results.bbbeeRecognizedSpendZar)} in B-BBEE Level 1 (135%) recognized procurement spend. Source: https://techfusion-ventures.xyz/calculator`;

  const embedSnippetCode = `<figure style="margin:1.5rem 0;padding:1.25rem;border:1px solid #1e293b;border-radius:12px;background:#0a0d12;color:#f1f5f9;font-family:system-ui,sans-serif;">
  <h4 style="margin:0 0 0.5rem 0;color:#38bdf8;">Interactive Enterprise AI ROI &amp; B-BBEE 135% Procurement Calculator</h4>
  <p style="margin:0 0 0.75rem 0;font-size:0.9rem;color:#94a3b8;">Estimate annual hours reclaimed, POPIA Section 71 HITL compliance defect reduction, and 135% B-BBEE Level 1 recognized procurement value.</p>
  <a href="https://techfusion-ventures.xyz/calculator" target="_blank" rel="noopener" style="display:inline-block;padding:0.5rem 1rem;background:#38bdf8;color:#07090e;font-weight:600;border-radius:6px;text-decoration:none;font-size:0.85rem;">Launch Free Calculator &rarr;</a>
  <figcaption style="margin-top:0.75rem;font-size:0.75rem;color:#64748b;">Source: <a href="https://techfusion-ventures.xyz/calculator" style="color:#38bdf8;">Techfusion Automata (Pty) Ltd — Enterprise AI &amp; Procurement Calculator</a> (Methodology: <a href="https://techfusion-ventures.xyz/research" style="color:#38bdf8;">/research</a>)</figcaption>
</figure>`;

  function copySummary() {
    navigator.clipboard.writeText(citationSummaryText);
    setCopiedSummary(true);
    trackEvent("copy_calculator_summary", {
      net_roi_pct: results.netRoiPct,
    });
    setTimeout(() => setCopiedSummary(false), 2500);
  }

  function copyEmbed() {
    navigator.clipboard.writeText(embedSnippetCode);
    setCopiedEmbed(true);
    trackEvent("copy_embed_widget", {
      page: "/calculator",
    });
    setTimeout(() => setCopiedEmbed(false), 2500);
  }

  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Enterprise AI ROI, POPIA Defect Reduction & B-BBEE 135% Procurement Calculator",
    url: "https://techfusion-ventures.xyz/calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    description:
      "Interactive buyer calculator estimating annual workflow automation savings, POPIA Section 71 HITL defect reduction, payback period, and B-BBEE Level 1 (135%) procurement value in ZAR.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ZAR",
    },
    provider: {
      "@type": "Organization",
      name: "Techfusion Automata (Pty) Ltd",
      url: "https://techfusion-ventures.xyz",
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-200 bg-surface-100/80 text-accent-light text-xs font-mono mb-4">
          <Calculator className="w-3.5 h-3.5 text-accent-dark" />
          <span>FREE INTERACTIVE BUYER &amp; SCM UTILITY</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Enterprise AI ROI &amp;{" "}
          <span className="text-gradient">B-BBEE 135% Procurement</span>{" "}
          Calculator
        </h1>
        <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
          Model the quantitative operational return of deploying deterministic
          multi-agent AI (MCP), Intelligent Document Processing (IDP/OCR), and
          POPIA Section 71 Human-in-the-Loop (HITL) guardrails—alongside your{" "}
          <strong className="text-accent-light">
            135% B-BBEE Level 1 procurement recognition value
          </strong>{" "}
          in South African Rand (ZAR). Grounded in our{" "}
          <Link
            href="/research"
            className="text-accent-light underline underline-offset-4 hover:text-white"
          >
            2026 Enterprise AI &amp; Governance Benchmark Study (/research)
          </Link>
          .
        </p>
      </div>

      {/* Scenario Preset Buttons */}
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-wider text-foreground/55 block mb-3">
          Select Benchmark Mandate Preset or Customize Inputs Below:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCENARIO_PRESETS.map((preset) => {
            const isSelected = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetSelect(preset)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-surface-200/90 border-accent-light shadow-lg"
                    : "bg-surface-100/40 border-surface-200 hover:border-accent-light/50"
                }`}
              >
                <span className="font-mono text-[10px] text-accent-dark block">
                  {preset.badge}
                </span>
                <span className="font-bold text-sm text-foreground mt-1 block">
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-surface-200 space-y-6">
          <div className="flex items-center justify-between border-b border-surface-200 pb-4">
            <h2 className="font-bold text-lg text-foreground">
              1. Operational &amp; Mandate Inputs
            </h2>
            <span className="font-mono text-xs text-accent-light">
              ZAR / Monthly
            </span>
          </div>

          {/* Field 1 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="monthlyWorkflowVolume"
                className="font-medium text-foreground/85"
              >
                Monthly Workflow / Document Runs
              </label>
              <span className="font-mono text-accent-light">
                {results.clampedInputs.monthlyWorkflowVolume.toLocaleString(
                  "en-ZA"
                )}{" "}
                runs/mo
              </span>
            </div>
            <input
              id="monthlyWorkflowVolume"
              type="number"
              min={0}
              max={10000000}
              step={100}
              value={inputs.monthlyWorkflowVolume}
              onChange={(e) =>
                updateField("monthlyWorkflowVolume", e.target.value)
              }
              className="w-full bg-surface-200/60 border border-surface-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent-light"
            />
          </div>

          {/* Field 2 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="manualMinutesPerRun"
                className="font-medium text-foreground/85"
              >
                Manual Processing Time per Run (Minutes)
              </label>
              <span className="font-mono text-accent-light">
                {results.clampedInputs.manualMinutesPerRun} mins
              </span>
            </div>
            <input
              id="manualMinutesPerRun"
              type="number"
              min={0}
              max={10000}
              step={1}
              value={inputs.manualMinutesPerRun}
              onChange={(e) =>
                updateField("manualMinutesPerRun", e.target.value)
              }
              className="w-full bg-surface-200/60 border border-surface-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent-light"
            />
          </div>

          {/* Field 3 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="hourlyStaffCostZar"
                className="font-medium text-foreground/85"
              >
                Fully Loaded Staff Cost (ZAR / Hour)
              </label>
              <span className="font-mono text-accent-light">
                {formatZar(results.clampedInputs.hourlyStaffCostZar)}/hr
              </span>
            </div>
            <input
              id="hourlyStaffCostZar"
              type="number"
              min={0}
              max={50000}
              step={10}
              value={inputs.hourlyStaffCostZar}
              onChange={(e) =>
                updateField("hourlyStaffCostZar", e.target.value)
              }
              className="w-full bg-surface-200/60 border border-surface-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent-light"
            />
          </div>

          {/* Field 4 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="targetAutomationRatePct"
                className="font-medium text-foreground/85"
              >
                Target MCP + IDP Automation Rate (%)
              </label>
              <span className="font-mono text-emerald-400">
                {results.clampedInputs.targetAutomationRatePct}%
              </span>
            </div>
            <input
              id="targetAutomationRatePct"
              type="range"
              min={0}
              max={98}
              value={results.clampedInputs.targetAutomationRatePct}
              onChange={(e) =>
                updateField("targetAutomationRatePct", e.target.value)
              }
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-foreground/45 mt-1">
              <span>0% (Manual)</span>
              <span>82% (MCP Benchmark)</span>
              <span>98% (Max HITL Gate)</span>
            </div>
          </div>

          {/* Field 5 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="costPerComplianceDefectZar"
                className="font-medium text-foreground/85"
              >
                Rework / Audit Cost per Compliance Defect (ZAR)
              </label>
              <span className="font-mono text-accent-light">
                {formatZar(results.clampedInputs.costPerComplianceDefectZar)}
              </span>
            </div>
            <input
              id="costPerComplianceDefectZar"
              type="number"
              min={0}
              max={1000000}
              step={50}
              value={inputs.costPerComplianceDefectZar}
              onChange={(e) =>
                updateField("costPerComplianceDefectZar", e.target.value)
              }
              className="w-full bg-surface-200/60 border border-surface-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent-light"
            />
          </div>

          {/* Field 6 */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <label
                htmlFor="annualContractSpendZar"
                className="font-medium text-foreground/85"
              >
                Estimated Annual Project / Contract Spend (ZAR)
              </label>
              <span className="font-mono text-accent-light">
                {formatZar(results.clampedInputs.annualContractSpendZar)}
              </span>
            </div>
            <input
              id="annualContractSpendZar"
              type="number"
              min={0}
              max={500000000}
              step={25000}
              value={inputs.annualContractSpendZar}
              onChange={(e) =>
                updateField("annualContractSpendZar", e.target.value)
              }
              className="w-full bg-surface-200/60 border border-surface-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent-light"
            />
          </div>
        </div>

        {/* Right Column: Live Calculated Outputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Primary KPI Output Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl glass-panel border border-surface-200">
              <span className="font-mono text-xs text-foreground/55 uppercase">
                Gross Annual Operational Savings
              </span>
              <div className="font-mono text-3xl font-bold text-emerald-400 mt-2">
                {formatZar(results.grossAnnualBenefitZar)}
              </div>
              <p className="text-xs text-foreground/65 mt-1.5">
                {formatZar(results.annualLaborSavingsZar)} labor +{" "}
                {formatZar(results.annualComplianceRiskSavingsZar)} defect
                avoidance
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-surface-200">
              <span className="font-mono text-xs text-foreground/55 uppercase">
                Net 12-Month ROI &amp; Payback
              </span>
              <div className="font-mono text-3xl font-bold text-accent-light mt-2">
                {results.netRoiPct > 0 ? `+${results.netRoiPct}%` : `${results.netRoiPct}%`}
              </div>
              <p className="text-xs text-foreground/65 mt-1.5">
                Payback Period:{" "}
                <strong className="text-foreground">
                  {results.paybackMonths > 0
                    ? `${results.paybackMonths} months`
                    : "N/A"}
                </strong>{" "}
                • Net Benefit: {formatZar(results.netAnnualBenefitZar)}
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-surface-200">
              <span className="font-mono text-xs text-foreground/55 uppercase">
                Annual Staff Capacity Reclaimed
              </span>
              <div className="font-mono text-2xl font-bold text-foreground mt-2">
                {results.annualHoursReclaimed.toLocaleString("en-ZA")} hrs / yr
              </div>
              <p className="text-xs text-foreground/65 mt-1.5">
                Reduced from{" "}
                {results.annualManualHours.toLocaleString("en-ZA")} manual hours
                (~{Math.round(results.annualHoursReclaimed / 1920)} FTEs freed)
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-surface-200">
              <span className="font-mono text-xs text-foreground/55 uppercase">
                POPIA Sec 71 / Audit Defects Prevented
              </span>
              <div className="font-mono text-2xl font-bold text-emerald-400 mt-2">
                {(
                  results.unguardedDefectCount - results.mcpHitlDefectCount
                ).toLocaleString("en-ZA")}{" "}
                fewer errors/yr
              </div>
              <p className="text-xs text-foreground/65 mt-1.5">
                Drops from {results.unguardedDefectCount.toLocaleString("en-ZA")}{" "}
                baseline defects to{" "}
                {results.mcpHitlDefectCount.toLocaleString("en-ZA")} via HITL
                gates
              </p>
            </div>
          </div>

          {/* B-BBEE Level 1 (135% Recognition) Procurement Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-500/5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>
                B-BBEE Level 1 EME (135% Procurement Recognition Multiplier)
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 items-center mt-3">
              <div>
                <div className="text-xs text-foreground/65">
                  Recognized B-BBEE Procurement Spend (1.35&times;)
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-accent-light mt-1">
                  {formatZar(results.bbbeeRecognizedSpendZar)}
                </div>
              </div>
              <div>
                <div className="text-xs text-foreground/65">
                  Preferential Scorecard Surplus (+35% Bonus)
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                  +{formatZar(results.bbbeeProcurementBonusZar)}
                </div>
              </div>
            </div>
            <p className="text-xs text-foreground/65 mt-4 leading-relaxed">
              Because Techfusion Automata (Pty) Ltd is a 100% Black-Owned B-BBEE
              Level 1 Contributor, every Rand of your{" "}
              {formatZar(results.clampedInputs.annualContractSpendZar)} mandate
              counts as{" "}
              <strong>{formatZar(results.bbbeeRecognizedSpendZar)}</strong>{" "}
              toward your organization&apos;s Preferential Procurement scorecard.
            </p>
          </div>

          {/* Action Strip: Copy Summary & Prefilled Consultation */}
          <div className="p-6 rounded-2xl glass-panel border border-surface-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-accent-dark">
                Quotable Business Case Summary
              </span>
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-accent-light hover:text-background text-xs font-mono text-accent-light transition-colors"
              >
                {copiedSummary ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ROI Summary</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-foreground/75 font-mono bg-background/60 p-3.5 rounded-xl border border-surface-200/70 leading-relaxed">
              {citationSummaryText}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact?service=automation-ai"
                className="px-5 py-3 rounded-full bg-accent-light text-background font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Validate This Scope With Our Architects
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/research"
                className="px-5 py-3 rounded-full bg-surface-200 text-foreground font-mono text-xs hover:border-accent-light border border-surface-200 transition-colors inline-flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent-light" />
                Inspect Benchmark Methodology (/research)
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embed & Citation Widget (Tactics 43 & 55) */}
      <section className="mt-16 pt-12 border-t border-surface-200">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-surface-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-light font-mono text-xs mb-1">
                <Code2 className="w-4 h-4" />
                <span>PUBLISHER &amp; GUIDE EMBED WIDGET</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Embed or Cite This Calculator in Your Guide
              </h2>
              <p className="text-xs sm:text-sm text-foreground/65 mt-1">
                Writing a guide on South African AI governance, POPIA Section 71
                compliance, or B-BBEE IT procurement? Copy the HTML snippet
                below to give your readers direct access with source
                attribution.
              </p>
            </div>
            <button
              type="button"
              onClick={copyEmbed}
              className="px-4 py-2.5 rounded-lg bg-accent-light text-background font-mono text-xs font-semibold hover:bg-white transition-colors inline-flex items-center gap-2 shrink-0"
            >
              {copiedEmbed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>HTML Snippet Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Embed HTML</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-[11px] font-mono bg-background/80 p-4 rounded-xl border border-surface-200 overflow-x-auto text-foreground/75">
            {embedSnippetCode}
          </pre>
        </div>
      </section>
    </div>
  );
}
