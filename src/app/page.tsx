import Link from "next/link";
import BentoCard from "@/components/BentoCard";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Workflow,
  Bot,
  Database,
  Code2,
  CloudCog,
  Landmark,
  Award,
  FileText,
  Shield,
  Scale,
  BadgeCheck,
  Lock,
  Layers,
} from "lucide-react";

const OEM_PARTNERS = [
  {
    name: "Microsoft",
    program: "Microsoft Partner Network",
    status: "Verified Partner",
  },
  {
    name: "OpenAI",
    program: "OpenAI Partner Network",
    status: "Approved Member",
  },
  {
    name: "Google Cloud",
    program: "Partner Advantage",
    status: "Approved Member",
  },
  {
    name: "Amazon Web Services",
    program: "AWS Partner Network (APN)",
    status: "Registered Partner",
  },
  {
    name: "DigiCert",
    program: "PKI & Certificate Lifecycle",
    status: "Approved Member",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Techfusion Automata (Pty) Ltd a B-BBEE Level 1 vendor?",
    answer:
      "Yes. Techfusion Automata (Pty) Ltd is a 100% Black-Owned Exempted Micro Enterprise (EME) with B-BBEE Level 1 Contributor status, providing 135% B-BBEE procurement recognition for South African public-sector departments, state-owned entities, and corporate supply chains.",
  },
  {
    question:
      "How do Supply Chain Management (SCM) officers request CIPC, SARS, and B-BBEE verification packs?",
    answer:
      "To safeguard statutory credentials against public scraping, CIPC registration certificates, SARS Tax Compliance PINs, B-BBEE Level 1 sworn affidavits, CSD vendor summaries, and OEM partner letters are dispatched privately upon request via our controlled SCM Verification Desk at /contact?doc=bid-pack.",
  },
  {
    question:
      "How does Techfusion Automata ensure AI compliance with POPIA Section 71 and ISO/IEC 42001?",
    answer:
      "Every AI and automated workflow is engineered under our ISO/IEC 42001:2023 (AIMS) and NIST AI Risk Management Framework (AI RMF 1.0) charter. We embed Human-in-the-Loop (HITL) approval gates, deterministic execution guardrails, cryptographic audit logs, and full POPIA Section 71 protections against solely automated adverse decisions.",
  },
  {
    question:
      "What are Techfusion Automata's Six Core Service Pillars for tenders and enterprise mandates?",
    answer:
      "Our delivery is structured across six core service pillars: (1) Digital Transformation & SOP Automation, (2) Automation & Intelligent AI Systems (Multi-Agent MCP, BPA/RPA, IDP/OCR), (3) Data Engineering & Advanced Analytics (ETL/ELT, BI, POPIA Data Governance), (4) Custom Software Development, (5) Cloud & Systems Integration (Microsoft 365, Power Platform, AWS, Google Cloud), and (6) Government & Public-Sector Solutions (MIS, EDRMS, UN/NGO M&E platforms).",
  },
  {
    question:
      "Which global OEM technology partners is Techfusion Automata accredited with?",
    answer:
      "Techfusion Automata is an accredited member across five global OEM ecosystems: Microsoft Partner Network (Verified Partner), OpenAI Partner Network (Approved Member), Google Cloud Partner Advantage (Approved Member), Amazon Web Services APN (Registered Partner), and DigiCert PKI & Certificate Lifecycle (Approved Member).",
  },
  {
    question:
      "What is the relationship between Techfusion Automata (Pty) Ltd and TechFusion Alchemy?",
    answer:
      "Techfusion Automata (Pty) Ltd is the CIPC-registered contracting entity for institutional, government, development agency, and enterprise mandates. TechFusion Alchemy (techfusion-alchemy.xyz) operates as our specialized commercial AI and workflow automation division.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO SECTION (Preserves glass_hand.mp4 background video & centered layout) */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden py-20 md:py-28">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/techfusion_automata_jpg.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        >
          <source src="/glass_hand.mp4" type="video/mp4" />
        </video>
        {/* Ambient background pulse & mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/70 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-200 bg-surface-100/80 backdrop-blur-md text-accent-light text-xs font-mono mb-6">
            <Cpu className="w-3.5 h-3.5 text-accent-dark" />
            <span>DETERMINISTIC AI, DATA &amp; DIGITAL TRANSFORMATION</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.06]">
            Accelerating towards the future in{" "}
            <span className="text-gradient">Africa.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-accent-light font-semibold">
              Techfusion Automata (Pty) Ltd
            </strong>{" "}
            is a digital transformation, artificial intelligence, data
            engineering, and bespoke software consultancy. We modernize
            institutional infrastructure and deploy automated, POPIA-compliant
            systems for public-sector departments, development agencies, and
            private enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#capabilities"
              className="px-8 py-4 rounded-full bg-accent-light text-background font-semibold hover:bg-white transition-colors duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Explore Service Pillars
              <Layers className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full glass-panel text-foreground font-medium hover:border-accent-light/50 transition-colors duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Initiate Engagement
              <ArrowRight className="w-4 h-4 text-accent-dark" />
            </Link>
          </div>

          {/* High-Level Readiness Strip */}
          <div className="mt-16 pt-8 border-t border-surface-200/70 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-surface-100/40 border border-surface-200/60 backdrop-blur-sm">
              <div className="font-mono text-2xl font-bold text-accent-light">
                135%
              </div>
              <div className="text-xs text-foreground/60 mt-1">
                B-BBEE Level 1 Procurement Recognition (100% Black-Owned EME)
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100/40 border border-surface-200/60 backdrop-blur-sm">
              <div className="font-mono text-2xl font-bold text-accent-light">
                5 OEMs
              </div>
              <div className="text-xs text-foreground/60 mt-1">
                Microsoft, OpenAI, Google Cloud, AWS &amp; DigiCert Partner
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100/40 border border-surface-200/60 backdrop-blur-sm">
              <div className="font-mono text-2xl font-bold text-accent-light">
                ISO 42001
              </div>
              <div className="text-xs text-foreground/60 mt-1">
                Aligned AI Governance, NIST AI RMF 1.0 &amp; POPIA Sec 71
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC OEM PARTNERSHIPS (Revolving Carousel) */}
      <section
        id="partners"
        className="border-y border-surface-200 bg-surface-100/25 py-12 overflow-hidden"
      >
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
            Strategic OEM Partnerships &amp; Accredited Technology Stack
          </p>
        </div>

        {/* Infinite Revolving Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-oem-marquee gap-6 py-2">
            {[...OEM_PARTNERS, ...OEM_PARTNERS, ...OEM_PARTNERS].map(
              (partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="w-72 shrink-0 p-5 rounded-xl glass-panel flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-accent-light text-base">
                      {partner.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  </div>
                  <div className="mt-3 font-mono text-xs text-foreground/60">
                    {partner.program}
                    <span className="block text-emerald-400/90 mt-0.5 font-medium">
                      {partner.status}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SIX CORE SERVICE PILLARS */}
      <section id="capabilities" className="py-24 container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-dark">
            Tender &amp; Enterprise Delivery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Six Core Service Pillars
          </h2>
          <p className="text-foreground/65 leading-relaxed">
            Structured for seamless alignment with public-sector Terms of
            Reference (ToR), international development agency frameworks, and
            private enterprise SLAs. Select any pillar to initiate a prefilled
            consultation inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <BentoCard delay={0.05} className="flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light mb-5">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 01
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Digital Transformation
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                End-to-end business process digitization, workflow
                re-engineering, SOP automation, and legacy institutional system
                modernization.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  Process Digitization
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  SOP Automation
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  Legacy Modernization
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=digital-transformation"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Digital Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Pillar 2 (Includes link to TechFusion Alchemy) */}
          <BentoCard delay={0.1} className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light">
                  <Bot className="w-5 h-5" />
                </div>
                <a
                  href="https://techfusion-alchemy.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-200 border border-surface-200 hover:border-accent-light text-xs font-mono text-accent-light transition-colors"
                >
                  <span>TechFusion Alchemy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 02
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Automation &amp; Intelligent AI Systems
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                Business/Robotic Process Automation (BPA/RPA), agentic
                multi-agent orchestration (MCP), Intelligent Document Processing
                (IDP/OCR), conversational AI, and executive decision-support
                platforms.
              </p>
              <div className="mt-4">
                <a
                  href="https://techfusion-alchemy.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent-light underline underline-offset-4 hover:text-white transition-colors"
                >
                  Explore our commercial division: TechFusion Alchemy
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  Multi-Agent MCP
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  IDP / OCR
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  BPA / RPA
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=automation-ai"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Automation &amp; AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Pillar 3 */}
          <BentoCard delay={0.15} className="flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light mb-5">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 03
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Data Engineering &amp; Advanced Analytics
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                Enterprise data warehouse design, real-time and batch ETL/ELT
                pipelines, BI executive dashboards, and POPIA-compliant data
                governance.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  ETL / ELT Pipelines
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  BI Dashboards
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  POPIA Data Governance
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=data-engineering"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Data &amp; Analytics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Pillar 4 */}
          <BentoCard delay={0.2} className="flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 04
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Custom Software Development
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                Cloud-native web and mobile applications, high-throughput
                REST/GraphQL APIs, and secure citizen or enterprise client
                portals.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  React / Next.js / RN
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  FastAPI / Node.js
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  REST &amp; GraphQL
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=custom-software"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Custom Software</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Pillar 5 */}
          <BentoCard delay={0.25} className="flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light mb-5">
                <CloudCog className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 05
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Cloud &amp; Systems Integration
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                Microsoft 365 &amp; Power Platform ecosystems, PostgreSQL and
                Supabase backends, ERP/CRM webhook integrations, and Identity
                &amp; Access Management (IAM).
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  M365 &amp; Power Platform
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  PostgreSQL / Supabase
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  ERP / CRM &amp; IAM
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=cloud-integration"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Cloud Integration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Pillar 6 */}
          <BentoCard delay={0.3} className="flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-surface-200 border border-surface-200 flex items-center justify-center text-accent-light mb-5">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-accent-dark">
                PILLAR 06
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Government &amp; Public-Sector Solutions
              </h3>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                Management Information Systems (MIS), case/grant/complaint
                management systems, electronic document &amp; records management
                (EDRMS), and M&amp;E platforms for UN/NGO programs.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground/75">
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  Public MIS &amp; EDRMS
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  Case &amp; Grant Systems
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-200/70">
                  UN / NGO M&amp;E
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-surface-200/60">
              <Link
                href="/contact?service=government-solutions"
                className="w-full py-2.5 px-4 rounded-lg bg-surface-200/80 hover:bg-accent-light hover:text-background text-accent-light text-xs font-mono font-medium transition-colors flex items-center justify-between"
              >
                <span>Inquire: Public-Sector Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* GOVERNANCE, COMPLIANCE & CERTIFICATIONS */}
      <section
        id="governance"
        className="py-24 bg-surface-100/20 border-t border-surface-200/70"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-dark">
                Sovereign &amp; Enterprise Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Engineered for Tier-1 Auditability.
              </h2>
              <p className="text-foreground/70 leading-relaxed text-sm mb-6">
                To compete as a Tier-1 enterprise and government vendor,
                Techfusion Automata maintains a comprehensive statutory and AI
                governance suite. We embed human-in-the-loop (HITL) controls,
                algorithmic transparency, and cryptographic auditability into
                every deployment.
              </p>

              <div className="p-6 rounded-2xl glass-panel space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-surface-200 text-accent-light shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      ISO/IEC 27701 &amp; SOC 2 Type II Roadmap
                    </h3>
                    <p className="text-xs text-foreground/65 mt-1 leading-relaxed">
                      Built upon our integrated ISO/IEC 27001:2022 (ISMS) and
                      ISO/IEC 42001:2023 (AIMS) Statement of Applicability and
                      ISO 9001–aligned Quality Policy Statement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <BentoCard delay={0.1}>
                <span className="font-mono text-xs text-accent-dark uppercase">
                  AI GOVERNANCE CHARTER
                </span>
                <h3 className="font-bold text-lg text-foreground mt-1">
                  ISO/IEC 42001 &amp; NIST AI RMF 1.0
                </h3>
                <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                  Active Artificial Intelligence Management System (AIMS)
                  governance charter and Statement of Applicability aligned with
                  the NIST AI Risk Management Framework (AI RMF 1.0).
                </p>
              </BentoCard>

              <BentoCard delay={0.15}>
                <span className="font-mono text-xs text-accent-dark uppercase">
                  DATA PRIVACY &amp; ALGORITHMIC RIGHTS
                </span>
                <h3 className="font-bold text-lg text-foreground mt-1">
                  POPIA Sec 71 &amp; PAIA Sec 51 Manual
                </h3>
                <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                  Full Section 51 PAIA Manual and POPIA compliance framework
                  incorporating explicit Section 71 safeguards for automated
                  decision-making and data subject protection.
                </p>
              </BentoCard>

              <BentoCard delay={0.2}>
                <span className="font-mono text-xs text-accent-dark uppercase">
                  INFORMATION SECURITY
                </span>
                <h3 className="font-bold text-lg text-foreground mt-1">
                  ISO/IEC 27001:2022 ISMS
                </h3>
                <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                  Integrated ISMS &amp; AIMS preparation pack and controls
                  governing access management, encryption, incident telemetry,
                  and supplier security assurance.
                </p>
              </BentoCard>

              <BentoCard delay={0.25}>
                <span className="font-mono text-xs text-accent-dark uppercase">
                  ETHICS &amp; STATUTORY INTEGRITY
                </span>
                <h3 className="font-bold text-lg text-foreground mt-1">
                  King IV &amp; PRECCA / FICA / POCA
                </h3>
                <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                  Enforced King IV Code of Ethics, Anti-Fraud &amp; Anti-Bribery
                  programme, Whistleblower policy, Conflict of Interest
                  register, and CSR / Socio-Economic Development programme.
                </p>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      {/* PROCUREMENT & STATUTORY VERIFICATION VAULT (Private-by-Default via Contact Desk) */}
      <section
        id="procurement"
        className="py-24 border-t border-surface-200/70"
      >
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-surface-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-surface-200 pb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 border border-surface-200 text-accent-light font-mono text-xs mb-3">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  CONTROLLED SCM &amp; VENDOR VERIFICATION DESK
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Procurement &amp; Statutory Readiness
                </h2>
                <p className="text-foreground/65 text-sm mt-2 max-w-2xl leading-relaxed">
                  To protect statutory credentials and corporate security, primary
                  registration numbers, tax compliance PINs, and governance
                  charters are not published for public scraping. All verification
                  packs are dispatched privately to accredited Supply Chain
                  Management (SCM) officers and tender committees upon request.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/contact?doc=bid-pack"
                  className="px-6 py-3.5 rounded-full bg-accent-light text-background font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Request Private Bid Pack
                </Link>
              </div>
            </div>

            {/* Public Readiness Summary (No sensitive PINs, Reg numbers, or Physical Addresses exposed) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 border-b border-surface-200 font-mono text-xs">
              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  CONTRACTING ENTITY
                </span>
                <span className="text-accent-light font-semibold mt-1 block text-sm">
                  Techfusion Automata (Pty) Ltd
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  CIPC Registered Private Company (South Africa)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  B-BBEE PROCUREMENT STATUS
                </span>
                <span className="text-emerald-400 font-semibold mt-1 block text-sm">
                  Level 1 EME (135% Recognition)
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  100% Black-Owned • Sworn Affidavit via SCM Request
                </span>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  TAX &amp; CSD STANDING
                </span>
                <span className="text-accent-light font-semibold mt-1 block text-sm">
                  SARS Tax Compliant
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  Active SARS PIN &amp; CSD Verification Dispatched Privately
                </span>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  ACCREDITED OEM ECOSYSTEM
                </span>
                <span className="text-accent-light font-semibold mt-1 block text-sm">
                  5 Verified Global OEMs
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  Microsoft, OpenAI, Google Cloud, AWS &amp; DigiCert
                </span>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  AI &amp; SECURITY GOVERNANCE
                </span>
                <span className="text-accent-light font-semibold mt-1 block text-sm">
                  ISO 42001 &amp; 27001 Aligned
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  NIST AI RMF 1.0 &amp; ISMS/AIMS Statement of Applicability
                </span>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surface-200/70">
                <span className="text-foreground/45 block text-[10px]">
                  STATUTORY &amp; ETHICS SUITE
                </span>
                <span className="text-accent-light font-semibold mt-1 block text-sm">
                  POPIA Sec 71 &amp; King IV
                </span>
                <span className="text-foreground/55 text-[11px] mt-1 block">
                  PAIA Sec 51 Manual, PRECCA/FICA Anti-Bribery &amp; QA Policy
                </span>
              </div>
            </div>

            {/* Gated Document Request Cards (All route to prefilled private contact form) */}
            <div className="pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-foreground/60 uppercase tracking-wider">
                  Request Specific Verification Dossiers (Private Dispatch)
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/contact?doc=corporate-profile"
                  className="p-4 rounded-xl bg-background/70 border border-surface-200 flex items-center justify-between hover:border-accent-light/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-light shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-foreground">
                        Corporate Profile
                      </div>
                      <div className="text-[10px] font-mono text-foreground/55">
                        Request Capability Statement
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent-light transition-colors shrink-0" />
                </Link>

                <Link
                  href="/contact?doc=ai-governance"
                  className="p-4 rounded-xl bg-background/70 border border-surface-200 flex items-center justify-between hover:border-accent-light/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent-light shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-foreground">
                        AI Governance Charter
                      </div>
                      <div className="text-[10px] font-mono text-foreground/55">
                        Request ISO 42001 / NIST Summary
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent-light transition-colors shrink-0" />
                </Link>

                <Link
                  href="/contact?doc=paia-popia"
                  className="p-4 rounded-xl bg-background/70 border border-surface-200 flex items-center justify-between hover:border-accent-light/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-accent-light shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-foreground">
                        PAIA &amp; POPIA Manual
                      </div>
                      <div className="text-[10px] font-mono text-foreground/55">
                        Request Sec 51 &amp; Sec 71 Pack
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent-light transition-colors shrink-0" />
                </Link>

                <Link
                  href="/contact?doc=oem-bbbee-sars"
                  className="p-4 rounded-xl bg-background/70 border border-surface-200 flex items-center justify-between hover:border-accent-light/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-accent-light shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-foreground">
                        Statutory &amp; OEM Pack
                      </div>
                      <div className="text-[10px] font-mono text-foreground/55">
                        Request B-BBEE, SARS &amp; OEMs
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent-light transition-colors shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE & PROCUREMENT FAQ (AEO / GEO Structured Knowledge Block) */}
      <section
        id="faq"
        className="py-24 bg-surface-100/15 border-t border-surface-200/70"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-dark">
              Executive &amp; Procurement Briefing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/65 text-sm sm:text-base leading-relaxed">
              Direct answers for Supply Chain Management (SCM) adjudicators,
              enterprise architecture boards, and technical due-diligence teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, index) => (
              <BentoCard
                key={faq.question}
                delay={0.05 * (index + 1)}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] text-accent-dark">
                    FAQ // 0{index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-1.5 mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (Preserves carbon_circuitry.mp4 background video) */}
      <section className="relative py-28 overflow-hidden border-t border-surface-200/50">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/techfusion_automata_jpg.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src="/carbon_circuitry.mp4" type="video/mp4" />
        </video>
        {/* Gradients to blend video smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-background/40 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Have a Mandate or Idea?{" "}
            <span className="text-gradient">Let&apos;s Collaborate.</span>
          </h2>
          <p className="text-lg text-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you are issuing an RFP/RFQ tender, modernizing public or
            enterprise infrastructure, forming a consortium JV, or bringing a
            new digital system to life—let&apos;s build it together.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-accent-light text-background font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
