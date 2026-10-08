"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  TrendingUp,
  Bot,
  Workflow,
  Database,
  Sparkles,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ValueBreakdown {
  target: string;
  detail: string;
}

interface Project {
  id: string;
  num: string;
  name: string;
  tagline: string;
  category: "agents" | "quant" | "tooling";
  categoryLabel: string;
  link: string;
  repoLink?: string;
  techStack: string[];
  whatItDoes: string;
  whyItMatters: ValueBreakdown[];
  icon: typeof Bot;
}

const PROJECTS: Project[] = [
  {
    id: "simulacra-uat",
    num: "01",
    name: "Simulacra UAT",
    tagline: "Autonomous User Simulation & Qualitative UX Testing Platform",
    category: "agents",
    categoryLabel: "Autonomous Agents & LLMs",
    link: "/simulacra-uat",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/simulacra-uat-tester",
    techStack: ["Python", "Playwright", "LLM Agentic Loops", "Synthetic Persona Modeling"],
    whatItDoes:
      "Instead of relying on brittle, selector-based end-to-end assertions (e.g., standard Cypress or Selenium scripts), Simulacra deploys a fleet of autonomous, persona-driven browser agents (such as SMB Owners, Enterprise Buyers, Software Engineers, and Low-Tech Consumers). These agents explore applications organically, exhibit human-like cognitive biases and hesitations, detect confusing UX patterns or dead-end flows, and rage-click misleading elements.",
    whyItMatters: [
      {
        target: "For Developers",
        detail:
          "Uncovers real-world drop-offs, accessibility traps, and onboarding friction before human users hit production, generating automated System Usability Scale (SUS) metrics and Customer Effort Scores (CES).",
      },
      {
        target: "For AI Researchers",
        detail:
          "Serves as a reference implementation for grounding LLMs in dynamic web environments with multi-step reasoning, perception feedback loops, and memory.",
      },
    ],
    icon: Bot,
  },
  {
    id: "dubstrata-btc-harness",
    num: "02",
    name: "Dubstrata 5-Minute BTC Harness",
    tagline: "5-Minute Prediction Market Research & Algorithmic Execution Engine",
    category: "quant",
    categoryLabel: "Quantitative & Prediction Markets",
    link: "/dubstrata-btc-harness",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/prediction-market-analysis",
    techStack: ["Python", "uv", "Polymarket CLOB & Kalshi APIs", "Parquet Indexing", "WebSockets"],
    whatItDoes:
      "An institutional-grade research and live execution harness for trading binary prediction markets (specifically 5-minute Bitcoin Up/Down contracts on Polymarket). Implements a Three-Stage Positioning Framework supporting both continuous simulated paper-trading and live CLOB execution.",
    whyItMatters: [
      {
        target: "For Quants & AI Practitioners",
        detail:
          "Prediction markets have rapidly become one of the most volatile and information-dense frontiers in financial ML. This repository provides a complete pipeline for orderbook microstructure analysis, alpha decomposition, calibration, and forecast evaluation without lookahead bias.",
      },
      {
        target: "For Engineers",
        detail:
          "Demonstrates high-throughput WebSocket ingestion, real-time state machine design, and deterministic trade execution against decentralized orderbooks.",
      },
    ],
    icon: TrendingUp,
  },
  {
    id: "agentic-os",
    num: "03",
    name: "Agentic Operating System (AOS)",
    tagline: "Next-Generation Inference Kernel & Semantic OS Architecture",
    category: "agents",
    categoryLabel: "Autonomous Agents & LLMs",
    link: "/aos",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/gemma4good",
    techStack: ["Python", "FastAPI", "Gemma / Local LLMs", "Vector Databases", "Generative UI"],
    whatItDoes:
      "Rethinks the foundational compute paradigm by shifting from the traditional Kernel → Application → User hierarchy to an Inference Kernel → Tool Interface → Agentic Intent model. Includes an inference daemon managing context token budgeting, a shell agent translating intent to system APIs, a Semantic File System (semantic_fs), and streaming generative UI.",
    whyItMatters: [
      {
        target: "For AI Engineers",
        detail:
          "Addresses one of the biggest frontiers in software engineering: operating system-level agent orchestration. The semantic_fs replaces rigid directory trees with vector-indexed retrieval, providing an architectural blueprint for agent-native operating environments.",
      },
    ],
    icon: Cpu,
  },
  {
    id: "strata",
    num: "04",
    name: "Strata",
    tagline: "Geopolitical Situation Monitor & Autonomous Multi-Agent Investigation Hub",
    category: "agents",
    categoryLabel: "Autonomous Agents & LLMs",
    link: "/strata",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/dubstrata-investigation",
    techStack: ["Python", "FastAPI", "Dubstrata MCP 1.3.0", "Causal Knowledge Graphs", "Multi-Agent SOPs", "Live Telemetry"],
    whatItDoes:
      "A macro risk intelligence workstation and multi-agent cockpit compliant with the Dubstrata MCP Standard 1.3.0. Screens international geopolitical cascades and financial contagion streams, detects systemic anomalies, traverses causal knowledge graphs, and autonomously orchestrates 5 specialized subagents bounded by strict Standard Operating Procedures (SOPs) with cryptographic audit logging.",
    whyItMatters: [
      {
        target: "For AI Engineers & Quants",
        detail:
          "Provides a reference implementation for deterministic multi-agent orchestration via MCP 1.3.0. Rather than unconstrained LLM loops, agents query causal graphs, debate across structured operational roles, and enforce verifiable compliance gates.",
      },
      {
        target: "For Systems Developers",
        detail:
          "Features an interactive glassmorphic cockpit with Server-Sent Events (SSE) telemetry, real-time graph visualization, and Diátaxis-compliant technical documentation.",
      },
    ],
    icon: Layers,
  },
  {
    id: "aura-partner-research",
    num: "05",
    name: "Aura Partner Research",
    tagline: "Autonomous B2B & Developer Intelligence Engine",
    category: "tooling",
    categoryLabel: "Developer Tooling & Infrastructure",
    link: "/aura-partner-research",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/aura-research",
    techStack: ["React", "Vite", "FastAPI", "Google Gemini API", "IMAP/SMTP Protocols"],
    whatItDoes:
      "An autonomous discovery and lead intelligence pipeline tailored for developer ecosystems. Dynamically crawls GitHub niches, rotates search heuristics with Gemini, parses technical profiles and star graphs, refines Ideal Customer Profiles (ICPs), and writes hyper-personalized multi-channel drafts directly into email inboxes (Gmail, Outlook, Yahoo) and social formats (LinkedIn, X).",
    whyItMatters: [
      {
        target: "For Builders",
        detail:
          "Combines LLM-driven web crawling, prompt expansion, and native protocol integrations (IMAP/SMTP draft generation) into a unified, privacy-first local server architecture.",
      },
    ],
    icon: Sparkles,
  },
  {
    id: "meta-marker",
    num: "06",
    name: "Meta-Marker",
    tagline: "Dynamic Regime Classifier & Market Intelligence Engine (MIE)",
    category: "quant",
    categoryLabel: "Quantitative & Prediction Markets",
    link: "/meta-marker",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/meta-marker",
    techStack: ["Python", "FastAPI", "MetaTrader 5 (MT5) API", "SQLite", "Candlestick Charting UI"],
    whatItDoes:
      "Solves the classic flaw of static technical indicators by dynamically scoring, backtesting, and re-weighting indicators (EMAs, RSI, MACD, Stochastic, Break-of-Structure) based on how well they perform in specific real-time market regimes (e.g., Strong Trend, Tight Range, Expanding Volatility).",
    whyItMatters: [
      {
        target: "For Quants & ML Engineers",
        detail:
          "Replaces naive lagging indicators with adaptive regime-conditional scoring. Connects directly to desktop MetaTrader 5 via IPC sync loops to produce a live confidence score matrix.",
      },
    ],
    icon: TrendingUp,
  },
  {
    id: "cold-outbound-skills",
    num: "07",
    name: "Cold Outbound Skills",
    tagline: "Modular Claude Code Agentic Skills Suite",
    category: "tooling",
    categoryLabel: "Developer Tooling & Infrastructure",
    link: "https://github.com/MuzikayiseKhuzwayo/coldoutboundskills",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/coldoutboundskills",
    techStack: ["Claude Code Skills", "YAML", "API Tooling (Prospeo, Google Maps)"],
    whatItDoes:
      "An open-source library of 29 modular Claude Code skills organized across 5 operational tracks: Strategy & ICP Intake, Infrastructure Provisioning, List Building, Stepwise Copywriting, and Deliverability Incident Response.",
    whyItMatters: [
      {
        target: "For Agent Developers",
        detail:
          "Serves as a masterclass in modern agentic skill authoring for Claude Code. Demonstrates how to write deterministic YAML contracts, chain multi-step workflows, and build tool calling interfaces for local agent runtimes.",
      },
    ],
    icon: Workflow,
  },
  {
    id: "polydata-v2",
    num: "08",
    name: "PolyData v2",
    tagline: "HyperSync On-Chain Polymarket Data Pipeline",
    category: "quant",
    categoryLabel: "Quantitative & Prediction Markets",
    link: "https://github.com/MuzikayiseKhuzwayo/poly_data",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/poly_data",
    techStack: ["Python", "Envio HyperSync", "Polygon CTF Exchange V2 Contracts", "CLOB API"],
    whatItDoes:
      "A high-speed indexing pipeline that streams order events and trade settlements directly from the Polygon CTF Exchange V2 contract across millions of blocks with zero RPC throttling, bypassing deprecated subgraphs.",
    whyItMatters: [
      {
        target: "For Data Engineers & Researchers",
        detail:
          "Provides unconstrained access to historical on-chain orderbook event logs and trade records for backtesting and predictive modeling.",
      },
    ],
    icon: Database,
  },
  {
    id: "media-magic",
    num: "09",
    name: "Media Magic (Mina Media Engine)",
    tagline: "Autonomous Media Studio & Deterministic Video Generation Pipeline",
    category: "tooling",
    categoryLabel: "Developer Tooling & Infrastructure",
    link: "/media-magic",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/mina-ai",
    techStack: ["Python", "FFmpeg", "FastAPI", "Async Queues", "Interactive Switchboard"],
    whatItDoes:
      "A low-latency, deterministic media operating system designed for instant AI video editing, subtitle generation, interactive presentations, and automated broadcasting pipelines with an interactive switchboard.",
    whyItMatters: [
      {
        target: "For Content Developers",
        detail:
          "Eliminates manual timeline scrubbing by providing programmable cuts, automated silence removal, multi-modal asset synthesis, and instant export.",
      },
      {
        target: "For AI Engineers",
        detail:
          "Bridges generative LLM reasoning with real-time media manipulation pipelines via declarative execution schemas.",
      },
    ],
    icon: Sparkles,
  },
  {
    id: "proposal-flow",
    num: "10",
    name: "ProposalFlow",
    tagline: "Autonomous Upwork Proposal & Teleprompter Studio",
    category: "tooling",
    categoryLabel: "Developer Tooling & Infrastructure",
    link: "/proposal-flow",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/upwork-proposal-gen",
    techStack: ["TypeScript", "React", "LLM Extraction", "Diátaxis Engine", "Lucide"],
    whatItDoes:
      "An autonomous pitch generation and teleprompter environment for client acquisition. Parses job postings, extracts key technical requirements and client pain points, and synthesizes structured, high-conversion proposals with synchronised teleprompter pacing.",
    whyItMatters: [
      {
        target: "For Agency Builders",
        detail:
          "Compresses outbound response times from hours to seconds while adhering to rigorous Diátaxis framework documentation structures.",
      },
      {
        target: "For AI Engineers",
        detail:
          "Demonstrates persona-driven prompt engineering and real-time structured LLM formatting for high-stakes business communication.",
      },
    ],
    icon: Workflow,
  },
  {
    id: "alchemy-crm",
    num: "11",
    name: "Alchemy CRM (Laravel CRM)",
    tagline: "Reactive Sales Pipelines, Omni-Channel Visitor Chat & Automated Motions for Laravel",
    category: "tooling",
    categoryLabel: "Developer Tooling & Infrastructure",
    link: "/alchemy-crm",
    repoLink: "https://github.com/MuzikayiseKhuzwayo/crm",
    techStack: ["PHP 8.2+", "Laravel 11-13", "Livewire", "Tailwind CSS", "REST API v2", "SQLite/MySQL"],
    whatItDoes:
      "An enterprise-grade, open-source CRM package engineered natively for the Laravel ecosystem (venturedrake/laravel-crm v2.4.0). Eliminates SaaS seat costs by turning any Laravel application into a complete revenue operating system with multi-stage visual sales kanbans, deal velocity tracking, omni-channel live visitor chat, automated sales playbooks (lead routing, dynamic follow-ups), and machine-accurate REST APIs.",
    whyItMatters: [
      {
        target: "For Laravel Developers & Founders",
        detail:
          "Runs natively within existing Eloquent models, migrations, and tenancy architectures. Eliminates recurring third-party SaaS fees (Salesforce, HubSpot) and removes brittle webhook synchronization lag.",
      },
      {
        target: "For Systems Architects",
        detail:
          "Exposes a comprehensive REST API v2 with machine-accurate contract schemas, reactive Livewire components, and event-driven automation hooks for outbound and inbound marketing workflows.",
      },
    ],
    icon: Workflow,
  },
];

type CategoryFilter = "all" | "agents" | "quant" | "tooling";

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="min-h-screen py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-light/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-accent-dark/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Breadcrumb & Tag */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-dark mb-6">
          <Link href="/" className="hover:text-accent-light transition-colors">
            TechFusion Automata
          </Link>
          <span>/</span>
          <span className="text-accent-light">Future Divisions & Projects</span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-200 bg-surface-100/40 text-xs font-mono text-foreground/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Source &amp; Research Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Standout Public Projects <br className="hidden sm:inline" />
            <span className="text-gradient">&amp; Why They Matter</span>
          </h1>

          <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
            A strong intersection of <strong className="text-accent-light font-semibold">autonomous agent engineering</strong>,{" "}
            <strong className="text-accent-light font-semibold">quantitative market microstructure</strong>, and{" "}
            <strong className="text-accent-light font-semibold">agentic developer tooling</strong>. Below is a detailed breakdown of our key open-source repositories and experimental architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 pb-4 border-b border-surface-200/50">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === "all"
                ? "bg-foreground text-background shadow-lg shadow-white/5 font-semibold"
                : "bg-surface-100/60 border border-surface-200/80 text-foreground/70 hover:text-accent-light hover:border-surface-200"
            }`}
          >
            <span>All Projects</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${selectedCategory === "all" ? "bg-background/20 text-background" : "bg-surface-200 text-foreground/60"}`}>
              {PROJECTS.length}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory("agents")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === "agents"
                ? "bg-foreground text-background shadow-lg shadow-white/5 font-semibold"
                : "bg-surface-100/60 border border-surface-200/80 text-foreground/70 hover:text-accent-light hover:border-surface-200"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Agents &amp; LLMs</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${selectedCategory === "agents" ? "bg-background/20 text-background" : "bg-surface-200 text-foreground/60"}`}>
              {PROJECTS.filter((p) => p.category === "agents").length}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory("quant")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === "quant"
                ? "bg-foreground text-background shadow-lg shadow-white/5 font-semibold"
                : "bg-surface-100/60 border border-surface-200/80 text-foreground/70 hover:text-accent-light hover:border-surface-200"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Quantitative &amp; Prediction Markets</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${selectedCategory === "quant" ? "bg-background/20 text-background" : "bg-surface-200 text-foreground/60"}`}>
              {PROJECTS.filter((p) => p.category === "quant").length}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory("tooling")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === "tooling"
                ? "bg-foreground text-background shadow-lg shadow-white/5 font-semibold"
                : "bg-surface-100/60 border border-surface-200/80 text-foreground/70 hover:text-accent-light hover:border-surface-200"
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Developer Tooling &amp; Infrastructure</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${selectedCategory === "tooling" ? "bg-background/20 text-background" : "bg-surface-200 text-foreground/60"}`}>
              {PROJECTS.filter((p) => p.category === "tooling").length}
            </span>
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-accent-light/40 transition-colors"
                >
                  {/* Background gradient hint */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent-light/[0.04] to-transparent pointer-events-none rounded-tr-2xl" />

                  {/* Top Bar: Number + Category + Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-accent-dark/80 bg-surface-200/50 px-2.5 py-1 rounded-md">
                        {project.num}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-accent-dark">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <a
                      href={project.repoLink || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-200/60 hover:bg-surface-200 border border-surface-200 text-accent-light text-xs sm:text-sm font-medium transition-all group/btn"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight className="w-4 h-4 text-foreground/70 group-hover/btn:text-accent-light group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-surface-200/60 rounded-xl border border-surface-200/80 shrink-0 text-accent-light hidden sm:block">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-accent-light transition-colors">
                          <a
                            href={project.link}
                            {...(project.link.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="inline-flex items-center gap-2 hover:underline underline-offset-4 decoration-accent-dark/50"
                          >
                            {project.name}
                          </a>
                        </h2>
                        <p className="text-sm sm:text-base text-accent-dark font-medium leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase text-foreground/50 tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-accent-dark" />
                      <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-background/50 border border-surface-200 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What It Does Section */}
                  <div className="mb-8 bg-surface-100/30 border border-surface-200/50 rounded-xl p-5 sm:p-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-accent-light mb-3 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-accent-dark" />
                      <span>What It Does</span>
                    </h3>
                    <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                      {project.whatItDoes}
                    </p>
                  </div>

                  {/* Why It's Valuable Section */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-accent-light mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Why It’s Valuable for Developers &amp; AI Practitioners</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.whyItMatters.map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-surface-200/60 bg-background/30 flex flex-col justify-between"
                        >
                          <div className="font-semibold text-sm text-accent-light mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-light/60" />
                            <span>{item.target}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer action bar */}
                  <div className="mt-8 pt-6 border-t border-surface-200/50 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-accent-dark">
                      Status: Active Open-Source Architecture
                    </span>
                    <a
                      href={project.link}
                      {...(project.link.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-xs font-mono text-accent-light hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Navigate to project landing page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Section: Ecosystem Connection */}
        <div className="mt-20 glass-panel rounded-3xl p-8 md:p-12 border border-surface-200 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-dark mb-3 block">
              Continuous Exploration
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
              Looking to deploy or collaborate on these systems?
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-8">
              These repositories form the operational bedrock of TechFusion Automata and our specialized divisions like TechFusion Alchemy and Dubstrata. We welcome architectural collaboration, research partnerships, and venture discussions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#ecosystem"
                className="px-6 py-3 rounded-xl bg-surface-100/60 border border-surface-200 text-foreground/80 hover:text-accent-light text-sm font-medium transition-colors"
              >
                Back to Ecosystem Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
