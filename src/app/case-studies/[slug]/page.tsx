import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Layers,
  Quote,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  const url = `https://techfusion-ventures.xyz/case-studies/${study.slug}`;

  return {
    title: study.cardTitle,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${study.cardTitle} | Techfusion Automata`,
      description: study.summary,
      url,
      siteName: "Techfusion Automata (Pty) Ltd",
      type: "article",
      publishedTime: study.publishedDate,
      images: [
        {
          url: "/techfusion_automata_jpg.jpeg",
          width: 1200,
          height: 630,
          alt: study.cardTitle,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const otherStudies = CASE_STUDIES.filter(
    (item) => item.slug !== study.slug && item.track === study.track
  ).slice(0, 2);

  const sectionLinks: { id: string; label: string }[] = [];
  if (study.problem) {
    sectionLinks.push({ id: "problem", label: "The Problem Frame" });
  }
  sectionLinks.push({ id: "architecture", label: "What We Built" });
  if (study.outcomes && study.outcomes.length > 0) {
    sectionLinks.push({ id: "outcomes", label: "Verified Outcomes" });
  }
  if (study.reference) {
    sectionLinks.push({ id: "reference", label: "Client Reference" });
  }
  if (study.managedModel) {
    sectionLinks.push({ id: "managed-model", label: "Managed Lifecycle" });
  }
  if (study.potential) {
    sectionLinks.push({ id: "potential", label: "Operational Blueprints" });
  }
  sectionLinks.push({ id: "next-steps", label: "Next Steps" });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `https://techfusion-ventures.xyz/case-studies/${study.slug}#article`,
    headline: study.title,
    alternativeHeadline: study.cardTitle,
    description: study.summary,
    datePublished: study.publishedDate,
    dateModified: study.publishedDate,
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
    mainEntityOfPage: `https://techfusion-ventures.xyz/case-studies/${study.slug}`,
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </nav>

      <header className="pb-12 mb-12 border-b border-surface-200">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-200 bg-surface-100/80 text-accent-light text-xs font-mono">
            {study.eyebrow}
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-200/80 text-accent-light tabular-nums">
            {study.code}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            {study.status}
          </span>
          <span className="text-xs font-mono text-foreground/55 tabular-nums">
            {study.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight max-w-4xl">
          {study.title}
        </h1>

        <p className="text-foreground/75 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
          {study.subheadline}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-foreground/65 mb-8">
          <span>
            Client:{" "}
            {study.clientUrl ? (
              <a
                href={study.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-white underline underline-offset-4 inline-flex items-center gap-1"
              >
                {study.client}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-accent-light">{study.client}</span>
            )}
          </span>
          {study.partnerNote && <span>{study.partnerNote}</span>}
          <span>Geography: {study.geography}</span>
          <span>Timeline: {study.timeline}</span>
        </div>

        {study.transparencyNote && (
          <div className="rounded-xl border border-surface-200 bg-surface-100/60 p-4 mb-8 flex items-start gap-3 max-w-3xl">
            <Info
              className="w-4 h-4 text-accent-dark shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-xs text-foreground/80 leading-relaxed">
              {study.transparencyNote}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Link
            href={study.cta.primaryHref}
            className="h-10 px-5 rounded-lg bg-accent-light text-background text-sm font-medium inline-flex items-center gap-2 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {study.cta.primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={study.cta.secondaryHref}
            className="h-10 px-5 rounded-lg border border-surface-200 bg-surface-100/60 text-foreground/90 text-sm font-medium inline-flex items-center gap-2 hover:border-accent-dark hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {study.cta.secondaryLabel}
          </Link>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border border-surface-200 bg-surface-100/40">
          {study.facts.map((fact) => (
            <div key={fact.label} className="space-y-1">
              <dt className="text-xs text-foreground/55">{fact.label}</dt>
              <dd className="text-sm md:text-base font-mono font-medium text-accent-light tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <article className="lg:col-span-9 space-y-16">
          {study.problem && (
            <section id="problem" className="scroll-mt-24">
              <p className="font-mono text-xs text-accent-dark mb-2">
                {study.problem.eyebrow ?? "01 // The Problem Frame"}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-5">
                {study.problem.heading}
              </h2>
              <div className="space-y-4 text-foreground/80 text-base leading-relaxed">
                {study.problem.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {study.problem.steps && study.problem.steps.length > 0 && (
                <ol className="mt-6 space-y-3 rounded-2xl border border-surface-200 bg-surface-100/35 p-6">
                  {study.problem.steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                    >
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-200 text-accent-light tabular-nums shrink-0 mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              )}

              {study.problem.deepDive && (
                <div className="mt-7 rounded-2xl border border-surface-200 bg-background/70 p-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-dark mb-2">
                    <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{study.problem.deepDive.label}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2.5">
                    {study.problem.deepDive.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {study.problem.deepDive.body}
                  </p>
                  {study.problem.deepDive.bullets &&
                    study.problem.deepDive.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2.5 border-t border-surface-200/70 pt-4">
                        {study.problem.deepDive.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              )}
            </section>
          )}

          <section id="architecture" className="scroll-mt-24">
            <p className="font-mono text-xs text-accent-dark mb-2">
              {study.solution.eyebrow ?? "02 // Production Architecture"}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
              {study.solution.heading}
            </h2>
            <p className="text-foreground/75 text-base leading-relaxed mb-8">
              {study.solution.intro}
            </p>

            {study.solution.modules && study.solution.modules.length > 0 && (
              <div className="space-y-5">
                {study.solution.modules.map((mod) => (
                  <div
                    key={mod.id}
                    className="rounded-2xl border border-surface-200 bg-surface-100/40 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-surface-200/80 bg-surface-100/60 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent-dark tabular-nums">
                        {mod.number}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {mod.title}
                      </h3>
                    </div>

                    <dl className="divide-y divide-surface-200/60">
                      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                        <dt className="md:col-span-2 font-mono text-xs text-foreground/60 pt-0.5">
                          Feature
                        </dt>
                        <dd className="md:col-span-10 text-sm text-foreground/85 leading-relaxed">
                          {mod.feature}
                        </dd>
                      </div>
                      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                        <dt className="md:col-span-2 font-mono text-xs text-foreground/60 pt-0.5">
                          Benefit
                        </dt>
                        <dd className="md:col-span-10 text-sm text-foreground/80 leading-relaxed">
                          {mod.benefit}
                        </dd>
                      </div>
                      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 bg-background/40">
                        <dt className="md:col-span-2 font-mono text-xs text-emerald-400 pt-0.5">
                          Outcome
                        </dt>
                        <dd className="md:col-span-10 text-sm font-medium text-accent-light leading-relaxed">
                          {mod.outcome}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            )}

            {study.solution.subsystems &&
              study.solution.subsystems.length > 0 && (
                <div className="space-y-4">
                  {study.solution.subsystems.map((sub) => (
                    <div
                      key={sub.number + sub.title}
                      className="rounded-2xl border border-surface-200 bg-surface-100/40 p-6"
                    >
                      <div className="flex items-baseline gap-3 mb-2.5">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-200 text-accent-light tabular-nums">
                          {sub.number}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {sub.title}
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {sub.description}
                      </p>

                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="mt-4 space-y-2 border-t border-surface-200/70 pt-4">
                          {sub.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-accent-dark shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sub.noteLabel && sub.noteText && (
                        <div className="mt-4 rounded-xl border border-surface-200 bg-background/70 p-4 text-xs text-foreground/80 leading-relaxed">
                          <strong className="font-mono text-accent-light">
                            {sub.noteLabel}:{" "}
                          </strong>
                          {sub.noteText}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            {study.solution.secondaryWorkstream && (
              <div className="mt-8 rounded-2xl border border-surface-200 bg-surface-100/35 p-6 md:p-7">
                <p className="font-mono text-xs text-accent-dark mb-2">
                  {study.solution.secondaryWorkstream.eyebrow}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {study.solution.secondaryWorkstream.heading}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                  {study.solution.secondaryWorkstream.intro}
                </p>
                <ul className="space-y-2.5">
                  {study.solution.secondaryWorkstream.bullets.map(
                    (bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </section>

          {study.outcomes && study.outcomes.length > 0 && (
            <section id="outcomes" className="scroll-mt-24">
              <p className="font-mono text-xs text-accent-dark mb-2">
                Verified Outcomes
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-5">
                Delivery &amp; Production Results
              </h2>
              <ul className="space-y-3 rounded-2xl border border-surface-200 bg-surface-100/40 p-6">
                {study.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm md:text-base text-foreground/85 leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {study.reference && (
            <section id="reference" className="scroll-mt-24">
              <p className="font-mono text-xs text-accent-dark mb-3">
                Verified Client Reference
              </p>
              <blockquote className="rounded-2xl border border-surface-200 bg-surface-100/45 p-7 md:p-8">
                <Quote
                  className="w-6 h-6 text-accent-dark mb-4"
                  aria-hidden="true"
                />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                  &ldquo;{study.reference.quote}&rdquo;
                </p>
                <footer className="pt-4 border-t border-surface-200/70 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-accent-light">
                      {study.reference.author}
                    </span>
                    <span className="text-foreground/65">
                      {" "}
                      — {study.reference.role}
                    </span>
                  </div>
                  <span className="font-mono text-foreground/55">
                    {study.reference.meta}
                  </span>
                </footer>
              </blockquote>
            </section>
          )}

          {study.managedModel && (
            <section id="managed-model" className="scroll-mt-24">
              <p className="font-mono text-xs text-accent-dark mb-2">
                03 // What &ldquo;Managed&rdquo; Actually Means
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                {study.managedModel.heading}
              </h2>
              <p className="text-foreground/75 text-base leading-relaxed mb-8">
                {study.managedModel.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {study.managedModel.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="rounded-2xl border border-surface-200 bg-surface-100/40 p-6"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-200 text-accent-light tabular-nums">
                        {pillar.number}
                      </span>
                      <ShieldCheck
                        className="w-4 h-4 text-accent-dark"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.potential && (
            <section id="potential" className="scroll-mt-24">
              <p className="font-mono text-xs text-accent-dark mb-2">
                04 // What We Can Build &amp; Manage For You
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                {study.potential.heading}
              </h2>
              <p className="text-foreground/75 text-base leading-relaxed mb-8">
                {study.potential.intro}
              </p>

              <div className="rounded-2xl border border-surface-200 bg-surface-100/35 overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-surface-200 bg-surface-100/70">
                        <th
                          scope="col"
                          className="px-6 py-3.5 text-xs font-mono font-medium text-accent-dark w-1/3"
                        >
                          Operational Domain
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3.5 text-xs font-mono font-medium text-accent-dark"
                        >
                          What We Can Deploy &amp; Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-200/70">
                      {study.potential.domains.map((row) => (
                        <tr key={row.domain}>
                          <th
                            scope="row"
                            className="px-6 py-4 text-sm font-medium text-accent-light align-top"
                          >
                            {row.domain}
                          </th>
                          <td className="px-6 py-4 text-sm text-foreground/80 leading-relaxed">
                            {row.deployment}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-surface-200 bg-background/70 p-5 flex items-start gap-3.5">
                <CheckCircle2
                  className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong className="font-medium text-accent-light">
                    The Commercial Upside:{" "}
                  </strong>
                  {study.potential.commercialNote}
                </p>
              </div>
            </section>
          )}

          <section
            id="next-steps"
            className="scroll-mt-24 rounded-2xl border border-surface-200 bg-surface-100/50 p-7 md:p-10"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-dark mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL ENGAGEMENT</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
              {study.cta.heading}
            </h2>
            <p className="text-foreground/75 text-base leading-relaxed mb-7 max-w-2xl">
              {study.cta.body}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                href={study.cta.primaryHref}
                className="h-10 px-5 rounded-lg bg-accent-light text-background text-sm font-medium inline-flex items-center gap-2 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {study.cta.primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={study.cta.secondaryHref}
                className="h-10 px-5 rounded-lg border border-surface-200 bg-background/70 text-foreground/90 text-sm font-medium inline-flex items-center gap-2 hover:border-accent-dark hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {study.cta.secondaryLabel}
              </Link>
            </div>
            <p className="text-xs font-mono text-foreground/55">
              {study.cta.microcopy}
            </p>
          </section>
        </article>

        <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-6">
          <nav
            aria-label="Dossier sections"
            className="rounded-2xl border border-surface-200 bg-surface-100/35 p-5"
          >
            <p className="font-mono text-xs text-accent-dark mb-3">
              On This Dossier
            </p>
            <ul className="space-y-2 text-sm">
              {sectionLinks.map((link, idx) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block py-1 text-foreground/70 hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    <span className="font-mono text-xs text-foreground/45 mr-2 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-surface-200 bg-surface-100/35 p-5">
            <p className="font-mono text-xs text-accent-dark mb-3">
              Verified Stack
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {study.stack.map((item) => (
                <li
                  key={item}
                  className="px-2 py-1 rounded border border-surface-200 bg-background/70 text-[11px] font-mono text-foreground/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-surface-200 bg-surface-100/35 p-5">
            <p className="text-sm font-medium text-foreground mb-2">
              Discuss a similar build
            </p>
            <p className="text-xs text-foreground/70 leading-relaxed mb-4">
              Speak directly with the engineering team that shipped this system.
            </p>
            <Link
              href={study.cta.primaryHref}
              className="w-full h-9 px-3 rounded-lg bg-accent-light text-background text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Start Scoping
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>
      </div>

      {otherStudies.length > 0 && (
        <section className="mt-20 pt-12 border-t border-surface-200">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            More Production Dossiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherStudies.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="rounded-2xl border border-surface-200 bg-surface-100/40 p-6 hover:border-accent-dark transition-colors block"
              >
                <span className="font-mono text-xs text-accent-dark">
                  {item.code} • {item.category} • {item.geography}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                  {item.cardTitle}
                </h3>
                <p className="text-sm text-foreground/70 line-clamp-2">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
