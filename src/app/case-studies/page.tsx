"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Globe,
  Layers,
  Quote,
  Terminal,
  UserCheck,
} from "lucide-react";
import { CASE_STUDIES, type CaseStudyCategory } from "@/lib/case-studies";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

type FilterOption = "All" | CaseStudyCategory;

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterOption>("All");

  const clientStudies = useMemo(
    () => CASE_STUDIES.filter((cs) => cs.track === "client"),
    []
  );
  const founderStudies = useMemo(
    () => CASE_STUDIES.filter((cs) => cs.track === "founder"),
    []
  );

  const availableCategories = useMemo<FilterOption[]>(() => {
    const present = Array.from(new Set(clientStudies.map((cs) => cs.category)));
    return ["All", ...present];
  }, [clientStudies]);

  const filteredClientStudies = useMemo(() => {
    if (activeCategory === "All") return clientStudies;
    return clientStudies.filter((cs) => cs.category === activeCategory);
  }, [activeCategory, clientStudies]);

  const [featured, ...gridStudies] = filteredClientStudies;

  const indexJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://techfusion-ventures.xyz/case-studies#collection",
    name: "Techfusion Automata Case Studies & Live Production Builds",
    description:
      "Engineering dossiers documenting sovereign business applications, institutional AI platforms, edge computer vision, voice AI, and enterprise integrations built by Techfusion Automata.",
    url: "https://techfusion-ventures.xyz/case-studies",
    publisher: {
      "@type": "Organization",
      name: "Techfusion Automata (Pty) Ltd",
      url: "https://techfusion-ventures.xyz",
    },
    hasPart: CASE_STUDIES.map((cs) => ({
      "@type": "TechArticle",
      headline: cs.cardTitle,
      description: cs.summary,
      datePublished: cs.publishedDate,
      url: `https://techfusion-ventures.xyz/case-studies/${cs.slug}`,
    })),
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indexJsonLd) }}
      />

      <header className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-200 bg-surface-100/80 text-accent-light text-xs font-mono mb-5">
          <Terminal className="w-3.5 h-3.5 text-accent-dark" />
          <span>PRODUCTION DOSSIERS // VERIFIED BUILDS</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-5 leading-tight">
          Systems We Engineered and{" "}
          <span className="text-gradient">Shipped to Production</span>
        </h1>
        <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
          Not slide-deck concepts or brittle no-code prototypes. Every dossier
          below is verified against live production codebases, signed client
          reference letters, and engineering debriefs—with zero fabricated ROI
          claims.
        </p>
      </header>

      <div
        data-slot="controls"
        role="group"
        aria-label="Filter client case studies by practice area"
        className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-surface-200"
      >
        <div className="flex flex-wrap items-center gap-2">
          {availableCategories.map((category) => {
            const count =
              category === "All"
                ? clientStudies.length
                : clientStudies.filter((cs) => cs.category === category).length;
            const isSelected = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`h-9 px-3.5 rounded-lg text-xs font-medium inline-flex items-center gap-2 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isSelected
                    ? "bg-accent-light text-background border-accent-light"
                    : "bg-surface-100 text-foreground/80 border-surface-200 hover:border-accent-dark hover:text-accent-light"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isSelected ? "text-background/75" : "text-foreground/55"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="font-mono text-xs text-foreground/60 tabular-nums">
          Showing {filteredClientStudies.length} of {clientStudies.length} client
          dossiers
        </p>
      </div>

      {featured && (
        <section aria-label="Featured case study" className="mb-10">
          <article className="rounded-2xl border border-surface-200 bg-surface-100/45 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-7 md:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-200/80 text-accent-light tabular-nums">
                      {featured.code}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <span
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        aria-hidden="true"
                      />
                      {featured.status}
                    </span>
                    <span className="text-xs font-mono text-foreground/55">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-foreground/55">
                      <Globe className="w-3 h-3" aria-hidden="true" />
                      {featured.geography}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4 leading-snug">
                    <Link
                      href={`/case-studies/${featured.slug}`}
                      onClick={() =>
                        trackEvent("case_study_opened", {
                          slug: featured.slug,
                          placement: "featured_title",
                        })
                      }
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {featured.cardTitle}
                    </Link>
                  </h2>

                  <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-6">
                    {featured.summary}
                  </p>

                  <ul
                    aria-label="Technology stack"
                    className="flex flex-wrap gap-2"
                  >
                    {featured.stack.slice(0, 6).map((item) => (
                      <li
                        key={item}
                        className="px-2.5 py-1 rounded-md border border-surface-200 bg-background/70 text-xs font-mono text-foreground/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/case-studies/${featured.slug}`}
                    aria-label={`Read full dossier: ${featured.cardTitle}`}
                    onClick={() =>
                      trackEvent("case_study_opened", {
                        slug: featured.slug,
                        placement: "featured_cta",
                      })
                    }
                    className="h-10 px-5 rounded-lg bg-accent-light text-background text-sm font-medium inline-flex items-center gap-2 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Read Production Dossier
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={featured.cta.secondaryHref}
                    className="h-10 px-4 rounded-lg border border-surface-200 bg-background/60 text-foreground/85 text-sm font-medium inline-flex items-center gap-2 hover:border-accent-dark hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {featured.cta.secondaryLabel}
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-surface-200 bg-background/60 p-7 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <p className="font-mono text-xs text-accent-dark mb-4">
                    Verified System Snapshot
                  </p>
                  <dl className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    {featured.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="pb-3.5 border-b border-surface-200/70 last:border-b-0 last:pb-0"
                      >
                        <dt className="text-xs text-foreground/55 mb-1">
                          {fact.label}
                        </dt>
                        <dd className="text-sm font-mono font-medium text-accent-light tabular-nums">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="pt-4 border-t border-surface-200/70 text-xs text-foreground/60 leading-relaxed">
                  {featured.partnerNote
                    ? `${featured.partnerNote} • ${featured.timeline}`
                    : `${featured.client} • ${featured.readTime}`}
                </div>
              </aside>
            </div>
          </article>
        </section>
      )}

      {gridStudies.length > 0 && (
        <section
          aria-label="Client and production platform case studies"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {gridStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-2xl border border-surface-200 bg-surface-100/40 p-6 md:p-7 flex flex-col justify-between gap-6 hover:border-accent-dark/70 transition-colors"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-200/80 text-accent-light tabular-nums">
                    {study.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />
                    {study.status}
                  </span>
                  <span className="text-xs font-mono text-foreground/55">
                    {study.geography}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-2 leading-snug">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    onClick={() =>
                      trackEvent("case_study_opened", {
                        slug: study.slug,
                        placement: "grid_title",
                      })
                    }
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {study.cardTitle}
                  </Link>
                </h2>

                <p className="text-xs font-mono text-accent-dark mb-3">
                  {study.client}
                  {study.partnerNote ? ` — ${study.partnerNote}` : ""}
                </p>

                <p className="text-sm text-foreground/75 leading-relaxed mb-5">
                  {study.summary}
                </p>

                <dl className="grid grid-cols-2 gap-3 p-3.5 rounded-xl border border-surface-200/70 bg-background/50 mb-5">
                  {study.facts.slice(0, 2).map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-[11px] text-foreground/55">
                        {fact.label}
                      </dt>
                      <dd className="text-xs font-mono font-medium text-accent-light tabular-nums mt-0.5">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul
                  aria-label="Technology stack"
                  className="flex flex-wrap gap-1.5"
                >
                  {study.stack.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="px-2 py-0.5 rounded border border-surface-200 bg-background/70 text-[11px] font-mono text-foreground/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-200/70">
                <span className="font-mono text-xs text-foreground/55 inline-flex items-center gap-1.5">
                  {study.reference ? (
                    <>
                      <Quote
                        className="w-3.5 h-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                      Signed Reference
                    </>
                  ) : (
                    study.readTime
                  )}
                </span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`Read dossier: ${study.cardTitle}`}
                  onClick={() =>
                    trackEvent("case_study_opened", {
                      slug: study.slug,
                      placement: "grid_cta",
                    })
                  }
                  className="text-sm font-medium text-accent-light hover:text-white inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Read dossier
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}

      {founderStudies.length > 0 && (
        <section
          aria-label="Founder and principal engineering track record"
          className="pt-14 mb-20 border-t border-surface-200"
        >
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-dark mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>FOUNDER &amp; PRINCIPAL TRACK RECORD</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
              Prior Independent Engineering Engagements
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              For procurement transparency, the engagements below were executed
              by Techfusion Automata Founder &amp; CEO{" "}
              <strong className="font-medium text-foreground/90">
                Muzikayise Khuzwayo
              </strong>{" "}
              in an independent contractor or specialist engineering capacity
              prior to or outside Techfusion Automata corporate contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-2xl border border-surface-200 bg-background/60 p-6 md:p-7 flex flex-col justify-between gap-6 hover:border-accent-dark/70 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-200/80 text-accent-light tabular-nums">
                      {study.code}
                    </span>
                    <span className="text-xs font-mono text-accent-dark">
                      {study.timeline}
                    </span>
                    <span className="text-xs font-mono text-foreground/55">
                      {study.geography}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      onClick={() =>
                        trackEvent("case_study_opened", {
                          slug: study.slug,
                          placement: "founder_grid_title",
                        })
                      }
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {study.cardTitle}
                    </Link>
                  </h3>

                  <p className="text-sm text-foreground/75 leading-relaxed mb-5">
                    {study.summary}
                  </p>

                  <ul
                    aria-label="Technology stack"
                    className="flex flex-wrap gap-1.5"
                  >
                    {study.stack.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className="px-2 py-0.5 rounded border border-surface-200 bg-surface-100/50 text-[11px] font-mono text-foreground/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-surface-200/70">
                  <span className="font-mono text-xs text-foreground/55">
                    Independent Role
                  </span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    aria-label={`Read founder dossier: ${study.cardTitle}`}
                    onClick={() =>
                      trackEvent("case_study_opened", {
                        slug: study.slug,
                        placement: "founder_grid_cta",
                      })
                    }
                    className="text-sm font-medium text-accent-light hover:text-white inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    Read dossier
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-surface-200 bg-surface-100/35 p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-dark mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>MANAGED APPLICATIONS &amp; TURNKEY ENGINEERING</span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Want to see what a sovereign system would replace in your stack?
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Book a 30-minute technical walkthrough of our production systems and
            map out your operational workflows with our engineering team.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("book_call_click", {
                location: "case_studies_cta",
              })
            }
            className="h-10 px-5 rounded-lg bg-accent-light text-background text-sm font-medium inline-flex items-center gap-2 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Calendar className="w-4 h-4" />
            Book 30-Min Walkthrough
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact?service=managed-applications"
            className="h-10 px-5 rounded-lg bg-surface-200 border border-surface-200 text-foreground text-sm font-medium inline-flex items-center gap-2 hover:border-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Scope Your Application
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
