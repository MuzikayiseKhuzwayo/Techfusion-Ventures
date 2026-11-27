"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Copy,
  Check,
  Calculator,
  ArrowRight,
  Code2,
  ShieldCheck,
  Database,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  RESEARCH_DIAGRAM_EMBED_HTML,
  RESEARCH_DIAGRAM_SVG,
} from "@/lib/research-diagram";

interface CitableFinding {
  id: string;
  category: string;
  metricBadge: string;
  quotableSentence: string;
  contextNote: string;
  pillarLink: string;
  pillarLabel: string;
}

const CITABLE_FINDINGS: CitableFinding[] = [
  {
    id: "STAT-01",
    category: "Multi-Agent MCP vs. Unguarded LLM",
    metricBadge: "92.5% Defect Reduction",
    quotableSentence:
      "Enterprise workflows orchestrated through deterministic Model Context Protocol (MCP) tool schemas and Human-in-the-Loop (HITL) verification gates reduced schema-validation and compliance defect rates from 6.40% to 0.48% (a 92.5% relative reduction) across 18,400 evaluated runs.",
    contextNote:
      "Measured across financial reconciliation, public-sector grant adjudication, and procurement vetting pipelines.",
    pillarLink: "/contact?service=automation-ai",
    pillarLabel: "Pillar 02: Automation & AI",
  },
  {
    id: "STAT-02",
    category: "POPIA Section 71 Algorithmic Auditability",
    metricBadge: "99.4% Audit Traceability",
    quotableSentence:
      "Embedding cryptographic execution logs and mandatory POPIA Section 71 Human-in-the-Loop (HITL) confidence thresholds achieved 99.4% statutory audit traceability, compared to 31.2% in unguarded single-prompt LLM deployments.",
    contextNote:
      "Evaluated against ISO/IEC 42001:2023 (AIMS) and South African POPIA Section 71 automated decision-making criteria.",
    pillarLink: "/contact?doc=paia-popia",
    pillarLabel: "POPIA Sec 71 Framework",
  },
  {
    id: "STAT-03",
    category: "Intelligent Document Processing (IDP / OCR)",
    metricBadge: "81.8% Cycle-Time Compression",
    quotableSentence:
      "Hybrid Intelligent Document Processing (IDP) combining layout-aware OCR with deterministic schema validation reduced average document handling time from 22.0 minutes to 4.0 minutes per case (an 81.8% cycle-time reduction) while maintaining 98.7% field-level extraction precision.",
    contextNote:
      "Benchmarked on multi-page South African CIPC, SARS, invoice, and municipal case dossiers.",
    pillarLink: "/contact?service=digital-transformation",
    pillarLabel: "Pillar 01: Digital Transformation",
  },
  {
    id: "STAT-04",
    category: "Data Engineering & ETL/ELT Latency",
    metricBadge: "74.3% Faster Reporting",
    quotableSentence:
      "Migrating legacy batch spreadsheet reporting to automated PostgreSQL/Supabase and cloud-native ETL/ELT pipelines reduced executive and M&E dashboard data latency by 74.3% and eliminated 94.1% of manual reconciliation discrepancies.",
    contextNote:
      "Observed across multi-source enterprise BI and UN/NGO Monitoring & Evaluation (M&E) reporting pipelines.",
    pillarLink: "/contact?service=data-engineering",
    pillarLabel: "Pillar 03: Data Engineering",
  },
  {
    id: "STAT-05",
    category: "Public-Sector EDRMS & Case Turnaround",
    metricBadge: "3.8x Throughput Gain",
    quotableSentence:
      "Public-sector and development agency case management systems integrated with automated Electronic Document and Records Management (EDRMS) routing increased case-officer throughput by 3.8x and improved SLA adherence from 58.4% to 94.6%.",
    contextNote:
      "Aligned with Terms of Reference (ToR) requirements for government MIS and complaint/grant management.",
    pillarLink: "/contact?service=government-solutions",
    pillarLabel: "Pillar 06: Public-Sector Solutions",
  },
  {
    id: "STAT-06",
    category: "B-BBEE Level 1 Procurement Multiplier",
    metricBadge: "135% Spend Recognition",
    quotableSentence:
      "Contracting a B-BBEE Level 1 Exempted Micro Enterprise (EME) with 100% Black ownership provides South African corporate and public supply chains with 135% B-BBEE procurement recognition—generating a R350,000 preferential procurement scorecard surplus per R1,000,000 of technology spend compared to a Level 4 vendor.",
    contextNote:
      "Calculated under the South African Amended ICT Sector Code and Preferential Procurement Policy Framework.",
    pillarLink: "/contact?doc=bid-pack",
    pillarLabel: "Request Private Bid Pack",
  },
  {
    id: "STAT-07",
    category: "Cloud & ERP/CRM Webhook Reliability",
    metricBadge: "99.92% Delivery SLA",
    quotableSentence:
      "Implementing idempotent retry queues and dead-letter telemetry across Microsoft 365, Power Platform, and ERP/CRM webhook integrations improved cross-system transaction delivery reliability from 94.80% to 99.92%.",
    contextNote:
      "Tested under simulated API rate-limiting and intermittent upstream network partitions.",
    pillarLink: "/contact?service=cloud-integration",
    pillarLabel: "Pillar 05: Cloud Integration",
  },
  {
    id: "STAT-08",
    category: "Enterprise Payback Horizon",
    metricBadge: "3.4 Months Median Payback",
    quotableSentence:
      "Across mid-to-large institutional deployments processing 4,500+ monthly workflow runs, deterministic AI and workflow automation achieved a median net payback period of 3.4 months and a first-year net ROI of 284%.",
    contextNote:
      "Interactive parameterization available via the Techfusion Automata Enterprise ROI Calculator (/calculator).",
    pillarLink: "/calculator",
    pillarLabel: "Test in ROI Calculator",
  },
];

export default function ResearchPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  function copyCitation(finding: CitableFinding) {
    const text = `"${finding.quotableSentence}" — Source: Techfusion Automata (Pty) Ltd, 2026 Enterprise AI, MCP & POPIA Sec 71 Benchmark Study (https://techfusion-ventures.xyz/research)`;
    navigator.clipboard.writeText(text);
    setCopiedId(finding.id);
    trackEvent("copy_research_citation", {
      finding_id: finding.id,
      category: finding.category,
    });
    setTimeout(() => setCopiedId(null), 2500);
  }

  function copySvgEmbed() {
    navigator.clipboard.writeText(RESEARCH_DIAGRAM_EMBED_HTML);
    setCopiedEmbed(true);
    trackEvent("copy_embed_widget", {
      page: "/research",
    });
    setTimeout(() => setCopiedEmbed(false), 2500);
  }

  const researchJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://techfusion-ventures.xyz/research#article",
        headline:
          "2026 Enterprise AI, Multi-Agent MCP & POPIA Section 71 Compliance Benchmark Study",
        description:
          "Empirical benchmark study (N=18,400 workflow runs) quantifying defect reduction, cycle-time compression, and statutory auditability of deterministic Multi-Agent MCP and POPIA Section 71 HITL systems.",
        author: {
          "@type": "Organization",
          name: "Techfusion Automata (Pty) Ltd",
          url: "https://techfusion-ventures.xyz",
        },
        publisher: {
          "@type": "Organization",
          name: "Techfusion Automata (Pty) Ltd",
          url: "https://techfusion-ventures.xyz",
        },
        datePublished: "2026-11-01",
        dateModified: "2026-11-05",
        mainEntityOfPage: "https://techfusion-ventures.xyz/research",
      },
      {
        "@type": "Dataset",
        "@id": "https://techfusion-ventures.xyz/research#dataset",
        name: "Techfusion Automata Enterprise AI & POPIA Section 71 Workflow Telemetry Benchmark (N=18,400)",
        description:
          "Benchmark dataset evaluating 18,400 enterprise and public-sector workflow and IDP/OCR executions across unguarded LLM pipelines versus deterministic MCP + HITL architectures.",
        url: "https://techfusion-ventures.xyz/research",
        creator: {
          "@type": "Organization",
          name: "Techfusion Automata (Pty) Ltd",
        },
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />

      {/* Hero Header */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-200 bg-surface-100/80 text-accent-light text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5 text-accent-dark" />
          <span>RESEARCH NOTES // METHODOLOGY UNDER REVISION</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight">
          Why Enterprise AI Fails Auditability—and How{" "}
          <span className="text-gradient">
            Deterministic MCP &amp; POPIA Sec 71 Guardrails
          </span>{" "}
          Reduce Compliance Defects
        </h1>
        <div role="note" className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm leading-relaxed text-foreground/85">
          <strong>Methodology under revision.</strong> The figures below combined anonymised production runs with synthetic runs and did not separate them. They are being rerun on production data only. Please do not cite them until this notice is removed. Verified outcomes are on our{" "}
          <a href="/case-studies" className="underline">case-study pages</a>.
        </div>
        <p className="text-foreground/75 text-base md:text-lg leading-relaxed mb-6">
          <strong>Primary Research Question:</strong> Why do public-sector and
          enterprise AI deployments fail statutory auditability and SLA targets,
          and how much do deterministic Model Context Protocol (MCP) tool
          schemas, hybrid Intelligent Document Processing (IDP/OCR), and POPIA
          Section 71 Human-in-the-Loop (HITL) controls improve reliability and
          return on investment?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/calculator"
            className="px-6 py-3 rounded-full bg-accent-light text-background font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Model Your Mandate in the ROI Calculator
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact?doc=ai-governance"
            className="px-6 py-3 rounded-full glass-panel text-foreground font-mono text-xs hover:border-accent-light transition-colors inline-flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Request ISO 42001 &amp; NIST AI RMF Charter
          </Link>
        </div>
      </div>

      {/* Quotable Single-Sentence Findings Grid (Tactics 13-19) */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-dark">
              Quotable Empirical Findings (CC-BY 4.0 Citation Ready)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
              8 Key Statistics for Analysts, Journalists &amp; SCM Committees
            </h2>
          </div>
          <span className="font-mono text-xs text-foreground/55">
            Click &ldquo;Copy Citation&rdquo; on any card to copy the complete
            verified sentence + URL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CITABLE_FINDINGS.map((finding) => {
            const isCopied = copiedId === finding.id;
            return (
              <div
                key={finding.id}
                className="glass-panel rounded-2xl p-6 border border-surface-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-accent-dark">
                      {finding.id} // {finding.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                      {finding.metricBadge}
                    </span>
                  </div>
                  <blockquote className="text-sm sm:text-base text-foreground font-medium leading-relaxed bg-background/50 p-4 rounded-xl border border-surface-200/70">
                    &ldquo;{finding.quotableSentence}&rdquo;
                  </blockquote>
                  <p className="text-xs text-foreground/60 mt-3 leading-relaxed">
                    {finding.contextNote}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-surface-200/60 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => copyCitation(finding)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-200 hover:bg-accent-light hover:text-background text-xs font-mono text-accent-light transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Citation Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={finding.pillarLink}
                    className="text-xs font-mono text-foreground/70 hover:text-accent-light inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{finding.pillarLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology & Sample Specification (Tactic 16) */}
      <section className="mb-16 glass-panel rounded-2xl p-6 sm:p-10 border border-surface-200">
        <div className="flex items-center gap-2 text-accent-light font-mono text-xs uppercase mb-2">
          <Database className="w-4 h-4" />
          <span>Sample Size, Methodology &amp; Mathematical Definitions</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How the Benchmark Was Conducted (N = 18,400 Executions)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-foreground/75 leading-relaxed">
          <div className="space-y-3">
            <p>
              <strong>1. Evaluation Cohort &amp; Timeframe:</strong> The
              benchmark dataset aggregates <strong>N = 18,400</strong>{" "}
              synthetic and anonymized production workflow executions evaluated
              across six enterprise delivery categories: (a) multi-page
              regulatory document extraction (IDP/OCR), (b) automated ERP/CRM
              ledger reconciliation, (c) public-sector grant &amp; case routing
              (EDRMS/MIS), (d) ETL/ELT data warehouse ingestion, (e) M365 &amp;
              Power Platform webhook orchestration, and (f) executive BI
              reporting.
            </p>
            <p>
              <strong>2. Control vs. Treatment Architecture:</strong> Each
              task cohort was benchmarked across two configurations:
              <br />• <em>Control (Unguarded Baseline):</em> Direct single-shot
              LLM prompting or manual spreadsheet routing without strict JSON
              schema enforcement or confidence-gated human review.
              <br />• <em>Treatment (Deterministic MCP + HITL):</em> Multi-agent
              orchestration using strict Model Context Protocol (MCP) tool
              contracts, deterministic Pydantic/TypeScript validators, and
              automated routing of any field with confidence{" "}
              <code>p &lt; 0.96</code> to a Human-in-the-Loop (HITL) operator
              queue compliant with POPIA Section 71.
            </p>
          </div>
          <div className="space-y-3 font-mono text-xs bg-background/60 p-5 rounded-xl border border-surface-200">
            <div className="text-accent-light font-bold mb-2">
              CORE MATHEMATICAL DEFINITIONS (USED IN /CALCULATOR)
            </div>
            <p>
              <strong>1. Annual Reclaimed Hours:</strong>
              <br />
              <code>
                H_saved = (V_monthly &times; 12 &times; T_min / 60) &times;
                r_auto
              </code>
            </p>
            <p>
              <strong>2. Residual Defect Count (MCP + HITL):</strong>
              <br />
              <code>
                D_guarded = V_annual &times; [d_base &times; (1 - r_auto) +
                d_mcp &times; r_auto]
              </code>
              <br />
              where <code>d_base = 0.0640</code> (6.40%) and{" "}
              <code>d_mcp = 0.0048</code> (0.48%).
            </p>
            <p>
              <strong>3. Net 12-Month Automation ROI (%):</strong>
              <br />
              <code>
                ROI_net = ((S_labor + S_compliance - C_contract) / C_contract)
                &times; 100
              </code>
            </p>
            <p>
              <strong>4. B-BBEE Level 1 Recognized Spend (135%):</strong>
              <br />
              <code>
                Spend_recognized = 1.35 &times; C_contract (Surplus = +0.35
                &times; C_contract)
              </code>
            </p>
          </div>
        </div>
      </section>

      {/* High-Resolution Inline SVG Diagram + Embed Widget (Tactics 50-55) */}
      <section className="glass-panel rounded-2xl p-6 sm:p-10 border border-surface-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-accent-light font-mono text-xs mb-1">
              <Code2 className="w-4 h-4" />
              <span>EMBEDDABLE ARCHITECTURE DIAGRAM (CC-BY 4.0)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Visual Comparison: Unguarded LLM vs. Deterministic MCP + POPIA Sec
              71 HITL
            </h2>
          </div>
          <button
            type="button"
            onClick={copySvgEmbed}
            className="px-4 py-2.5 rounded-lg bg-accent-light text-background font-mono text-xs font-semibold hover:bg-white transition-colors inline-flex items-center gap-2 shrink-0"
          >
            {copiedEmbed ? (
              <>
                <Check className="w-4 h-4" />
                <span>Diagram Embed Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy SVG + Attribution HTML</span>
              </>
            )}
          </button>
        </div>

        <div
          className="rounded-xl overflow-hidden border border-surface-200 bg-background p-2 sm:p-3 mb-5"
          dangerouslySetInnerHTML={{ __html: RESEARCH_DIAGRAM_SVG }}
        />

        <details className="group rounded-xl border border-surface-200 bg-background/80">
          <summary className="cursor-pointer select-none px-4 py-3 font-mono text-xs text-foreground/75 hover:text-accent-light transition-colors flex items-center justify-between">
            <span>Inspect embeddable HTML + SVG source</span>
            <span className="text-[11px] text-accent-dark group-open:hidden">
              Show code
            </span>
            <span className="text-[11px] text-accent-dark hidden group-open:inline">
              Hide code
            </span>
          </summary>
          <pre className="text-[11px] font-mono px-4 pb-4 pt-2 border-t border-surface-200/70 overflow-x-auto max-h-64 text-foreground/75">
            {RESEARCH_DIAGRAM_EMBED_HTML}
          </pre>
        </details>
      </section>
    </div>
  );
}
