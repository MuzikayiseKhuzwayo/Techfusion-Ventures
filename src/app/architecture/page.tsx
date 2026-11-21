"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BentoCard from "@/components/BentoCard";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  CloudCog,
  Code2,
  Cpu,
  Database,
  FileText,
  Landmark,
  Layers,
  Mail,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { OFFER_STACKS } from "@/lib/offer-stacks";
import { trackEvent } from "@/lib/analytics";

const THESIS_PILLARS = [
  {
    label: "80/20 Architecture",
    title: "Contract over model",
    summary:
      "Treat LLMs as swappable substrates behind a unified API contract and deterministic verification shell.",
  },
  {
    label: "Behavioural Knowledge",
    title: "HITL as a learning engine",
    summary:
      "Every POPIA Sec 71 human override captures Data, Context, Feedback, and Outcomes into institutional memory.",
  },
  {
    label: "Pipelines over Checkpoints",
    title: "Evals and swaps as CI/CD",
    summary:
      "Model checkpoints depreciate; reproducible evaluation harnesses let you upgrade models without breaking SLAs.",
  },
];

function StackIcon({ id }: { id: string }) {
  const cls = "w-5 h-5";
  switch (id) {
    case "cognition-infrastructure":
      return <Cpu className={cls} />;
    case "digital-transformation":
      return <Workflow className={cls} />;
    case "automation-ai":
      return <Bot className={cls} />;
    case "data-engineering":
      return <Database className={cls} />;
    case "custom-software":
      return <Code2 className={cls} />;
    case "cloud-integration":
      return <CloudCog className={cls} />;
    default:
      return <Landmark className={cls} />;
  }
}

export default function ArchitecturePage() {
  const [selectedStackId, setSelectedStackId] = useState<string>("all");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [dispatchedLabel, setDispatchedLabel] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function selectStackForRequest(stackId: string) {
    setSelectedStackId(stackId);
    setStatus("idle");
    setErrorMessage("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 350);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/offer-stack-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization,
          stackId: selectedStackId,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to dispatch specification.");
      }

      setDispatchedLabel(payload.selectionLabel || "Offer Stack Specification");
      trackEvent("offer_stack_dossier_requested", {
        stack_id: selectedStackId,
        selection_label: payload.selectionLabel || selectedStackId,
      });
      setStatus("success");
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  const flagship = OFFER_STACKS[0];
  const servicePillars = OFFER_STACKS.slice(1);

  const architectureJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://techfusion-ventures.xyz/architecture#article",
        headline:
          "Enterprise Cognition Infrastructure & Complete Service Offer Stacks",
        description:
          "Model-agnostic Enterprise Cognition Infrastructure doctrine and documented three-layer offer stacks across all six Techfusion Automata service pillars.",
        inLanguage: "en-ZA",
        author: {
          "@id": "https://techfusion-ventures.xyz/#organization",
        },
        publisher: {
          "@id": "https://techfusion-ventures.xyz/#organization",
        },
        mainEntityOfPage: "https://techfusion-ventures.xyz/architecture",
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://techfusion-ventures.xyz/architecture#offer-stacks",
        name: "Techfusion Automata Service Offer Stacks",
        itemListElement: OFFER_STACKS.map((stack, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          itemOffered: {
            "@type": "Service",
            name: `${stack.code}: ${stack.title}`,
            description: stack.shortSummary,
            url: `https://techfusion-ventures.xyz/architecture#request-dossier`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://techfusion-ventures.xyz/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cognition Architecture & Offer Stacks",
            item: "https://techfusion-ventures.xyz/architecture",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(architectureJsonLd) }}
      />
      {/* HERO SECTION (Matches landing page ambient grid, centered layout, and readiness strip) */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden py-20 md:py-28 border-b border-surface-200/70">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/70 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-200 bg-surface-100/80 backdrop-blur-md text-accent-light text-xs font-mono mb-6">
              <Cpu className="w-3.5 h-3.5 text-accent-dark" />
              <span>Enterprise Cognition Architecture</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.08]">
              Models are commodities.{" "}
              <span className="text-gradient">
                Institutional cognition is the moat.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              As foundation models converge into interchangeable compute
              substrates, lasting advantage shifts to{" "}
              <strong className="text-accent-light font-semibold">
                model-agnostic cognition pipelines
              </strong>
              —infrastructure that turns lived operational experience into
              verified, auditable intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => selectStackForRequest("all")}
                className="px-8 py-4 rounded-full bg-accent-light text-background font-semibold hover:bg-white transition-colors duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                Request Complete 7-Stack Dossier
                <Mail className="w-4 h-4" />
              </button>
              <a
                href="#offer-stacks"
                className="px-8 py-4 rounded-full glass-panel text-foreground font-medium hover:border-accent-light/50 transition-colors duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                Explore Offer Stacks
                <Layers className="w-4 h-4 text-accent-dark" />
              </a>
            </div>
          </motion.div>

          {/* Three-Pillar Thesis Strip (Mirrors landing page Readiness Strip) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-16 pt-8 border-t border-surface-200/70 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
          >
            {THESIS_PILLARS.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-surface-100/40 border border-surface-200/60 backdrop-blur-sm"
              >
                <div className="font-mono text-xs text-accent-dark">
                  {item.label}
                </div>
                <div className="text-base font-bold text-accent-light mt-1">
                  {item.title}
                </div>
                <p className="text-xs text-foreground/65 mt-1.5 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFFER STACK DIRECTORY (Matches landing page #capabilities BentoCard grid) */}
      <section
        id="offer-stacks"
        aria-labelledby="stacks-heading"
        className="py-24 container mx-auto px-4 scroll-mt-20"
      >
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs text-accent-dark">
            Service Offer Stacks &middot; Instant Email Dispatch
          </span>
          <h2
            id="stacks-heading"
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground"
          >
            Architecture &amp; Offer Stack Dossiers
          </h2>
          <p className="text-foreground/65 leading-relaxed">
            Every Techfusion Automata service pillar is packaged as a documented
            three-layer delivery stack. Select any stack below to have the full
            technical specification, deliverables, and engagement cadence
            emailed to you immediately.
          </p>
        </div>

        {/* Flagship Cross-Pillar Stack 00 */}
        <BentoCard delay={0.05} className="mb-6 border-emerald-500/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light shrink-0">
                  <StackIcon id={flagship.id} />
                </div>
                <div>
                  <span className="font-mono text-xs text-emerald-400 block">
                    Stack 00 &middot; Flagship Cross-Pillar Spine
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {flagship.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                {flagship.shortSummary}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                {flagship.layers.map((layer) => (
                  <span
                    key={layer.tier}
                    className="px-2.5 py-1 rounded bg-surface-200/70"
                  >
                    {layer.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => selectStackForRequest(flagship.id)}
                aria-label={`Request specification dossier for ${flagship.title}`}
                className="w-full lg:w-auto px-6 py-3.5 rounded-full bg-accent-light text-background font-semibold text-xs font-mono hover:bg-white transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </BentoCard>

        {/* Six Core Service Pillars Grid (Matches landing page 3-column BentoCard grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((stack, index) => (
            <BentoCard
              key={stack.id}
              delay={0.05 * (index + 1)}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light">
                    <StackIcon id={stack.id} />
                  </div>
                  {stack.divisionUrl && (
                    <a
                      href={stack.divisionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-200 border border-surface-200 hover:border-accent-light text-xs font-mono text-accent-light transition-colors"
                    >
                      <span>TechFusion Alchemy</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <span className="font-mono text-xs text-accent-dark">
                  Pillar 0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">
                  {stack.title}
                </h3>
                <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                  {stack.shortSummary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                  {stack.layers.map((layer) => (
                    <span
                      key={layer.tier}
                      className="px-2.5 py-1 rounded bg-surface-200/70"
                    >
                      {layer.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-surface-200/60">
                <button
                  type="button"
                  onClick={() => selectStackForRequest(stack.id)}
                  aria-label={`Request specification dossier for Pillar 0${index + 1}: ${stack.title}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
                >
                  <span>Request Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* INSTANT SPECIFICATION DISPATCH SECTION (Matches landing page #governance / #procurement band) */}
      <section
        ref={formRef}
        id="request-dossier"
        aria-labelledby="dispatch-heading"
        className="py-24 bg-surface-100/20 border-t border-surface-200/70 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-surface-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 border border-surface-200 text-accent-light font-mono text-xs mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Email Dispatch</span>
                </div>
                <h2
                  id="dispatch-heading"
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
                >
                  Receive the full specification immediately.
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Select an individual offer stack or the complete 7-stack
                  dossier. We email the full three-layer architecture, technical
                  components, deliverables, engagement cadence, and compliance
                  baseline straight to your inbox.
                </p>

                <div className="p-5 rounded-2xl bg-background/50 border border-surface-200/70 space-y-2 font-mono text-xs text-foreground/65">
                  <div className="text-accent-light font-semibold">
                    Statutory &amp; Governance Baseline
                  </div>
                  <div>B-BBEE Level 1 EME (135% Recognition)</div>
                  <div>ISO/IEC 42001 &amp; POPIA Sec 71 Aligned</div>
                  <div className="pt-2 border-t border-surface-200/60">
                    Need a private tender bid pack?{" "}
                    <Link
                      href="/contact?doc=bid-pack"
                      className="text-accent-light underline underline-offset-4 hover:text-white transition-colors"
                    >
                      Visit SCM Desk
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                {status === "success" ? (
                  <div
                    role="status"
                    className="rounded-2xl bg-background/70 border border-emerald-500/40 p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-2.5 text-emerald-400 font-semibold mb-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Specification dispatched</span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                      We have sent the full specification dossier for{" "}
                      <strong className="text-foreground">
                        {dispatchedLabel}
                      </strong>{" "}
                      to <strong className="text-accent-light">{email}</strong>.
                      Reply directly to that email whenever you are ready to
                      scope an engagement.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setDispatchedLabel("");
                      }}
                      className="px-5 py-2.5 rounded-full bg-surface-200 text-accent-light hover:bg-accent-light hover:text-background font-mono text-xs transition-colors"
                    >
                      Request another offer stack
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="stack-select"
                        className="block font-mono text-xs text-foreground/75 mb-1.5"
                      >
                        Specification Dossier
                      </label>
                      <select
                        id="stack-select"
                        name="stackId"
                        value={selectedStackId}
                        onChange={(e) => setSelectedStackId(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl bg-background border border-surface-200 text-sm text-foreground focus:outline-none focus:border-accent-light"
                      >
                        <option value="all">
                          Complete 7-Stack Enterprise Dossier (All Services)
                        </option>
                        {OFFER_STACKS.map((stack) => (
                          <option key={stack.id} value={stack.id}>
                            {stack.code}: {stack.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="requester-name"
                          className="block font-mono text-xs text-foreground/75 mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          ref={nameInputRef}
                          id="requester-name"
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Mokoena"
                          className="w-full h-11 px-3.5 rounded-xl bg-background border border-surface-200 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent-light"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="requester-email"
                          className="block font-mono text-xs text-foreground/75 mb-1.5"
                        >
                          Work Email
                        </label>
                        <input
                          id="requester-email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@organisation.co.za"
                          className="w-full h-11 px-3.5 rounded-xl bg-background border border-surface-200 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="requester-org"
                        className="block font-mono text-xs text-foreground/75 mb-1.5"
                      >
                        Organisation or Department{" "}
                        <span className="text-foreground/40">(Optional)</span>
                      </label>
                      <input
                        id="requester-org"
                        name="organization"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Department, SOE, or Enterprise Name"
                        className="w-full h-11 px-3.5 rounded-xl bg-background border border-surface-200 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent-light"
                      />
                    </div>

                    {status === "error" && (
                      <div
                        role="alert"
                        className="flex items-center gap-2 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3.5 py-2.5"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-accent-light text-background font-semibold text-sm hover:bg-white transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
                      >
                        <Mail className="w-4 h-4" />
                        <span>
                          {status === "submitting"
                            ? "Sending specification..."
                            : "Send Specification Immediately"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
