import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Techfusion Automata (Pty) Ltd is a Cape Town-based B-BBEE Level 1 EME consultancy founded by Muzikayise Wiston Khuzwayo, building POPIA Sec 71 and ISO/IEC 42001-aligned AI, data and custom software systems.",
  alternates: {
    canonical: "https://techfusion-ventures.xyz/about",
  },
};

const OEM_PARTNERS = [
  { name: "Microsoft", status: "Microsoft Partner Network (Verified Partner)" },
  { name: "OpenAI", status: "OpenAI Partner Network (Approved Member)" },
  { name: "Google Cloud", status: "Partner Advantage (Approved Member)" },
  { name: "Amazon Web Services", status: "AWS Partner Network (Registered Partner)" },
  { name: "DigiCert", status: "PKI & Certificate Lifecycle (Approved Member)" },
];

const FOUNDER_LINKS = [
  { label: "Personal site", href: "https://muzikhuzwayo.xyz" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/",
  },
  { label: "GitHub", href: "https://github.com/MuzikayiseKhuzwayo" },
  { label: "YouTube", href: "https://www.youtube.com/@MuziKhuzwayoSystems" },
  { label: "X", href: "https://x.com/3mk4y_" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-gradient">
        About Techfusion Automata (Pty) Ltd
      </h1>

      <div className="space-y-10 text-foreground/80 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">Who we are</h2>
          <p>
            Techfusion Automata (Pty) Ltd is a South African digital
            transformation, deterministic artificial intelligence, data
            engineering and custom software consultancy based in Cape Town. We
            are a 100% Black Youth-Owned Exempted Micro Enterprise (EME) with
            B-BBEE Level 1 Contributor status, giving 135% B-BBEE procurement
            recognition to public-sector departments, state-owned entities,
            development agencies and private enterprises.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">
            What we build and how we differ
          </h2>
          <p>
            Many AI suppliers ship unguarded LLM wrappers or tie clients to
            per-seat subscriptions. We build systems that clients own, around
            three principles:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Deterministic verification:</strong> schema-typed Model
              Context Protocol (MCP) tool contracts and automated validation
              gates.
            </li>
            <li>
              <strong>Auditability:</strong> Human-in-the-Loop review queues and
              audit trails designed around POPIA Section 71, with our governance
              documents aligned to ISO/IEC 42001, ISO/IEC 27001 and NIST AI RMF
              1.0.
            </li>
            <li>
              <strong>Production ownership:</strong> managed open-source and
              cloud-native stacks with no per-seat licence tax.
            </li>
          </ul>
          <p>
            See our <Link href="/case-studies" className="underline">verified case studies</Link> and
            our <Link href="/architecture" className="underline">architecture and offer stacks</Link>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">Divisions</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Techfusion Automata:</strong> the contracting entity for
              institutional, public-sector, development agency and enterprise
              mandates across six service pillars.
            </li>
            <li>
              <strong>
                <a href="https://techfusion-alchemy.xyz" className="underline">
                  TechFusion Alchemy
                </a>
                :
              </strong>{" "}
              our commercial AI and backend automation division.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">Founder</h2>
          <p>
            <strong>Muzikayise Wiston Khuzwayo</strong> is Founder and Chief
            Executive Officer. He leads architecture, systems engineering and
            enterprise AI delivery. Earlier independent engagements, including
            his role as Head of Integrations on the founding engineering team of
            a US enterprise analytics product, are described transparently on our{" "}
            <Link href="/case-studies" className="underline">case-studies page</Link>.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOUNDER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline" rel="me noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">
            Technology partner programmes
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            {OEM_PARTNERS.map((partner) => (
              <li key={partner.name}>
                <strong>{partner.name}:</strong> {partner.status}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">Contact</h2>
          <ul className="space-y-2">
            <li>Location: Cape Town, Western Cape, South Africa</li>
            <li>
              Email:{" "}
              <a href="mailto:muzikhuzwayo@techfusion-ventures.xyz" className="underline">
                muzikhuzwayo@techfusion-ventures.xyz
              </a>
            </li>
            <li>Telephone: +27 81 813 1933</li>
            <li>
              <Link href="/contact?doc=bid-pack" className="underline">
                Request a private statutory verification pack
              </Link>
            </li>
            <li>
              <a
                href="https://calendly.com/muzikhuzwayo-techfusion-ventures/30min"
                className="underline"
              >
                Book a 30-minute scoping call
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
