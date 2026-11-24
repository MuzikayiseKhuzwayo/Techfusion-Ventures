export type CaseStudyTrack = "client" | "founder";

export type CaseStudyCategory =
  | "Managed Applications"
  | "Institutional AI & SRE"
  | "AI & Automation"
  | "Computer Vision & Voice AI"
  | "Enterprise Integrations";

export interface CaseStudyModule {
  id: string;
  number: string;
  title: string;
  feature: string;
  benefit: string;
  outcome: string;
}

export interface CaseStudySubsystem {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  noteLabel?: string;
  noteText?: string;
}

export interface ManagedLifecyclePillar {
  number: string;
  title: string;
  description: string;
}

export interface OperationalDomainBlueprint {
  domain: string;
  deployment: string;
}

export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface ClientReference {
  quote: string;
  author: string;
  role: string;
  meta: string;
}

export interface CaseStudy {
  slug: string;
  code: string;
  track: CaseStudyTrack;
  status: string;
  category: CaseStudyCategory;
  eyebrow: string;
  title: string;
  cardTitle: string;
  client: string;
  clientUrl?: string;
  partnerNote?: string;
  sector: string;
  geography: string;
  timeline: string;
  summary: string;
  subheadline: string;
  publishedDate: string;
  readTime: string;
  stack: string[];
  facts: CaseStudyFact[];
  transparencyNote?: string;
  problem?: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
    steps?: string[];
    deepDive?: {
      label: string;
      title: string;
      body: string;
      bullets?: string[];
    };
  };
  solution: {
    eyebrow?: string;
    heading: string;
    intro: string;
    modules?: CaseStudyModule[];
    subsystems?: CaseStudySubsystem[];
    secondaryWorkstream?: {
      eyebrow: string;
      heading: string;
      intro: string;
      bullets: string[];
    };
  };
  outcomes?: string[];
  reference?: ClientReference;
  managedModel?: {
    heading: string;
    intro: string;
    pillars: ManagedLifecyclePillar[];
  };
  potential?: {
    heading: string;
    intro: string;
    domains: OperationalDomainBlueprint[];
    commercialNote: string;
  };
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    microcopy: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "managed-production-crm",
    code: "CS-01",
    track: "client",
    status: "In Production",
    category: "Managed Applications",
    eyebrow: "LIVE PRODUCTION PROOF • MANAGED APPLICATIONS",
    title:
      "We Don't Just Automate SaaS. We Engineer and Manage Sovereign Business Applications.",
    cardTitle:
      "Sovereign AI-Native Production CRM & Multi-Brand Revenue Engine",
    client: "Techfusion Automata (Internal Production Platform)",
    sector: "Commercial Operations, Revenue Engineering & Managed Applications",
    geography: "South Africa / Global",
    timeline: "Active Production (Continuous Managed Evolution)",
    summary:
      "How we transformed an open-source Laravel CRM foundation into a multi-brand, AI-native commercial engine with a Gemini + Telegram Chief of Staff, account relay waterfalls, operational stage-gates, and full quote-to-cash—running in production with zero per-seat tax.",
    subheadline:
      "Most agencies stitch together third-party subscriptions and leave you paying per-seat taxes for software that still doesn't fit your workflow. As proof of what we build and manage for clients, look at our own production CRM: an AI-native, full-lifecycle commercial engine engineered on Laravel, extended with autonomous agents and custom sales logic, and maintained continuously with zero drift.",
    publishedDate: "2026-11-24",
    readTime: "6 min dossier",
    stack: [
      "Laravel",
      "Gemini Function Calling",
      "Telegram Webhooks",
      "Xero Bi-Directional Sync",
      "ClickSend SMS/Email",
      "Field-Level Encryption",
    ],
    facts: [
      { label: "Deployment", value: "Live Production" },
      { label: "Per-Seat Licence Tax", value: "R0 / Seat" },
      { label: "Core Modules Shipped", value: "6 Custom Engines" },
      { label: "Data Sovereignty", value: "POPIA Encrypted" },
    ],
    problem: {
      heading: "The Hidden Tax of Rented Software",
      paragraphs: [
        "Off-the-shelf CRMs and operational tools force a bad trade-off: pay escalating per-seat licences for rigid pipelines you have to bend your team around, or bolt on fragile third-party automations that break silently every time an API changes.",
        "When your commercial process is your competitive advantage, renting generic software caps how fast you can operate—and locks your customer data inside someone else's ecosystem.",
      ],
    },
    solution: {
      heading: "Built to Run Real Revenue—Not Just Store Contacts",
      intro:
        "We took a battle-tested Laravel CRM foundation and engineered it into a managed, multi-brand revenue and operations platform. Every module below runs in production today:",
      modules: [
        {
          id: "ai-chief-of-staff",
          number: "01",
          title: "Autonomous AI Chief of Staff (Gemini + Telegram Heartbeat)",
          feature:
            "Native Gemini function-calling agent connected directly to CRM tools and Telegram webhooks, with four configurable proactivity modes (Relentless 1-Hour, Balanced 4-Hour Smart Delta, Daily Digest, and Silent On-Demand), snooze windows, and 1-click deep links back to leads, contacts, and organisations.",
          benefit:
            "Executives and operators query pipelines, update records, clear overdue tasks, and run bulk actions conversationally from Telegram—receiving alerts only when critical pipeline states actually change.",
          outcome:
            "Zero dashboard fatigue and zero alert spam; your CRM actively chases stalled deals instead of waiting to be checked.",
        },
        {
          id: "account-relay-waterfall",
          number: "02",
          title: "Account Relay Waterfall & Standby Queue",
          feature:
            "Automated account-based outreach engine that ranks stakeholders inside target organisations by seniority (C-Suite → Director → Manager), works one active contact at a time while holding backups in Standby, auto-rebases overdue tasks on rotation, and supports parallel activation or bulk release.",
          benefit:
            "Prevents reps from burning an entire target account by spamming five executives at once, while guaranteeing no account goes cold when a primary contact goes dark.",
          outcome:
            "Disciplined, multi-threaded enterprise prospecting without manual spreadsheet tracking.",
        },
        {
          id: "brand-aware-playbooks",
          number: "03",
          title: "Brand-Aware Sales Playbooks & Automated Stage Progression",
          feature:
            "Multi-brand sales motions embedded directly into the pipeline (Cold Prospect → Connection Request Sent → Connected / DM Sent → Engaged / Qualified), automatically creating stage-specific tasks and advancing lead stages as tasks are completed.",
          benefit:
            "New team members execute your exact outreach playbook from day one, and CRM stages stay 100% accurate without manual drag-and-drop hygiene.",
          outcome:
            "Predictable commercial execution across multiple brands or business units inside one system.",
        },
        {
          id: "linkedin-ingestion",
          number: "04",
          title: "LinkedIn Lead Ingestion & Deduplication",
          feature:
            "Bulk JSON dataset ingestion that resolves and links Leads, People, Organisations, and Addresses automatically, deduplicates on LinkedIn URLs, assigns owners, and drops prospects straight into Stage 1.",
          benefit:
            "Eliminates hours of manual CSV cleaning and duplicate-record pollution.",
          outcome: "Clean, queryable pipelines ready for immediate outreach.",
        },
        {
          id: "commercial-governance",
          number: "05",
          title: "Commercial Governance, Stage-Gates & Contract Telemetry",
          feature:
            "Hard operational clearance gates across Product, Operations, Finance, and Legal before a deal can close-won—paired with structured Contract Telemetry (payment terms, SLAs, rev-share, escalation clauses, bespoke work ratios), Derisking Playbooks (Problem → Pitfalls → Unique Insight → Execution), and Ansoff/AARRR + Knowledge Graph triplet tracking.",
          benefit:
            "Stops sales from over-promising custom engineering or eroding margin before delivery teams sign off.",
          outcome:
            "Protected margins, enforceable SLAs, and executive-grade commercial intelligence from first touch to renewal.",
        },
        {
          id: "quote-to-cash-suite",
          number: "06",
          title:
            "Complete Quote-to-Cash & Communications Suite (Zero Per-Seat Tax)",
          feature:
            "End-to-end Leads, Deals, Kanban boards, Quotes, Orders, Invoices, Deliveries, Purchase Orders, Products & Variations, Tax Rates, Public Client Portals (/p/quotes, /p/invoices), Embeddable Live Chat Widget, Email & SMS Campaigns (ClickSend), Bi-Directional Xero Accounting Sync, and Built-In Uptime & SSL Monitoring.",
          benefit:
            "Consolidates 5–7 disconnected SaaS subscriptions into one unified database with field-level encryption, multi-tenant team isolation, and role-based permissions.",
          outcome:
            "Lower recurring software overhead, full POPIA data sovereignty, and one source of truth across sales, delivery, and finance.",
        },
      ],
    },
    managedModel: {
      heading:
        "Open-Source Economics. Enterprise Reliability. Zero Maintenance Burden.",
      intro:
        "Building custom software is only half the job. Keeping it secure, fast, and up to date is where internal projects usually stall. Under our Managed Application model, Techfusion owns the entire operational lifecycle:",
      pillars: [
        {
          number: "01",
          title: "Upstream Upgrades Without Breaking Custom Logic",
          description:
            "We merge upstream security patches and core releases cleanly while preserving every bespoke playbook, AI tool, and workflow rule.",
        },
        {
          number: "02",
          title: "Self-Healing & Monitored Infrastructure",
          description:
            "Built-in URL/SSL monitoring, automated scheduled dispatchers (reminders, campaigns, Xero syncs, archiving), and defensive schema guards keep the system resilient.",
        },
        {
          number: "03",
          title: "Full Data Sovereignty & Security",
          description:
            "Field-level database encryption on sensitive contact data, dedicated hosting, role-based access control, and zero third-party AI training on your commercial records.",
        },
        {
          number: "04",
          title: "Continuous Evolution",
          description:
            "As your sales motion or operational model changes, we ship new modules, agents, and integrations directly into your application—no waiting on a SaaS vendor's roadmap.",
        },
      ],
    },
    potential: {
      heading: "This CRM Is One Blueprint. Your Operations Are Next.",
      intro:
        "The same architecture powering this CRM—modular full-stack backend, real-time reactive UI, autonomous AI agents, external API syncs, and managed hosting—adapts directly to any core operational bottleneck:",
      domains: [
        {
          domain: "Custom CRMs & Revenue Engines",
          deployment:
            "Multi-brand pipelines, WhatsApp/Telegram AI copilots, automated quoting, Xero/Stripe sync, and commission/partner tracking.",
        },
        {
          domain: "Client & Partner Portals",
          deployment:
            "Self-service onboarding, live project milestones, document vaults, invoice/quote approvals, and embedded support chat.",
        },
        {
          domain: "Order, Inventory & Ops Management (OMS/ERP)",
          deployment:
            "Purchase-order ingestion, approval stage-gates, delivery tracking, supplier reconciliation, and exception alerting.",
        },
        {
          domain: "Institutional & Compliance Platforms",
          deployment:
            "Multi-tenant Management Information Systems (MIS), POPIA-compliant audit trails, role-gated sign-offs, and automated executive reporting.",
        },
      ],
      commercialNote:
        "Instead of paying compounding per-seat licences every month for software you can never truly own, you get a sovereign, purpose-built system engineered around your exact margins, workflows, and compliance rules—managed by senior engineers on a predictable retainer.",
    },
    cta: {
      heading:
        "Ready to Own Your Operational Stack—Without Managing It Yourself?",
      body: "See our production CRM live, walk through the architecture, and map out what a custom managed application would replace in your current stack.",
      primaryLabel: "Scope Your Managed Application",
      primaryHref: "/contact?service=managed-applications",
      secondaryLabel: "Book a Live CRM Walkthrough",
      secondaryHref: "/contact?service=crm-walkthrough",
      microcopy:
        "30-minute technical session with our engineering team. No slide decks—live production walkthrough only.",
    },
  },
  {
    slug: "dubstrata-risk-intelligence-platform",
    code: "CS-02",
    track: "client",
    status: "Active 24/7 SRE",
    category: "Institutional AI & SRE",
    eyebrow: "INSTITUTIONAL AI • DATA WAREHOUSE & MANAGED CLOUD SRE",
    title:
      "Dubstrata — Institutional Risk Intelligence & Causal Data Platform",
    cardTitle:
      "Dubstrata: 7-Subsystem Institutional Risk Intelligence & Causal Data Platform",
    client: "Dubstrata (Pty) Ltd",
    clientUrl: "https://dubstrata.com",
    sector: "Quantitative Risk Intelligence, Alternative Data & Macroeconomic Forecasting",
    geography: "South Africa / Global",
    timeline: "July 2026 – October 2026 (Phase 2 Managed SRE Active)",
    summary:
      "Architected, engineered, deployed, and operated Dubstrata's standalone institutional risk intelligence platform across 7 production subsystems—combining 4-schema PostgreSQL warehousing, 3072D ArcadeDB graph/vector retrieval, RFC 3161 cryptographic provenance, and 24/7 self-healing GCP SRE.",
    subheadline:
      "Dubstrata engaged Techfusion Automata to architect, engineer, deploy, and operate its standalone institutional risk intelligence and macroeconomic forecasting platform from the ground up—spanning multi-schema relational warehousing, high-dimensional graph/vector retrieval, autonomous regulatory and market ingestion workers, real-time WebSocket streaming, cryptographic authentication, and zero-drift cloud operations under an ongoing 99.5%+ uptime SLA.",
    publishedDate: "2026-11-05",
    readTime: "7 min dossier",
    stack: [
      "Python",
      "FastAPI",
      "TypeScript / Next.js",
      "PostgreSQL / Supabase",
      "ArcadeDB (3072D Vector + Cypher)",
      "Redis + ARQ",
      "Docker Compose",
      "GCP / Linux (systemd)",
      "Nginx (TLS 1.3 / PKI)",
      "Playwright",
    ],
    facts: [
      { label: "Subsystems Delivered", value: "7 Production Engines" },
      { label: "Vendor Rating", value: "5.0 / 5.0" },
      { label: "Managed Uptime SLA", value: "99.5%+ Active" },
      { label: "Completion Status", value: "100% Ahead of Schedule" },
    ],
    problem: {
      heading: "Point-in-Time Signal Integrity Without Lookahead or Drift",
      paragraphs: [
        "Financial and macroeconomic risk platforms fail when their underlying data pipelines are noisy, lagged, or unverified. Dubstrata needed a production architecture capable of continuously ingesting heterogeneous real-world signals—regulatory filings, market microstructure, and live event streams—and resolving them into a coherent, point-in-time knowledge graph without lookahead contamination, silent ingestion failures, or operational drift.",
      ],
      deepDive: {
        label: "The Toughest Real-World Engineering Problem",
        title:
          "Surfacing a Faithful Real-World Representation from Asynchronous, Conflicting Streams",
        body: "Raw market feeds, regulatory filings, and event streams arrive asynchronously, at uneven cadences, and with conflicting entity references. Engineering a pipeline that continuously normalizes, verifies, timestamps, and monitors those signals—while keeping graph, vector, and relational stores synchronized and self-healing under load—required treating data provenance and observability as first-class infrastructure rather than afterthoughts.",
      },
    },
    solution: {
      eyebrow: "02 // Architecture & Delivery",
      heading: "What We Built: 7 Interconnected Production Subsystems",
      intro:
        "Every subsystem below was architected, deployed to hardened GCP infrastructure, and verified for zero-drift production operations:",
      subsystems: [
        {
          number: "01",
          title: "Multi-Schema Enterprise Data Warehouse (PostgreSQL / Supabase)",
          description:
            "Designed and migrated a 4-schema relational architecture (public, crm, partner_portal, and ops) spanning 30+ normalized tables, monthly time-partitioned telemetry ledgers, Row-Level Security (RLS) multi-tenant isolation, and POPIA-compliant audit logging.",
        },
        {
          number: "02",
          title: "Multi-Model Graph & High-Dimensional Vector Engine (ArcadeDB)",
          description:
            "Deployed and tuned a dedicated ArcadeDB instance combining 3072-dimension Cosine LSM vector indexes with Cypher/SQL graph ontologies for real-time entity resolution, causal knowledge graph triplet storage, and sub-10ms semantic retrieval.",
        },
        {
          number: "03",
          title: "Autonomous Ingestion & Intelligent Document Processing Fleet (ARQ)",
          description:
            "Engineered an asynchronous ARQ worker fleet and autonomous market/filing monitoring engine integrating dual-agent LLM triplet extraction, real-time SEC EDGAR regulatory ingestion, and RFC 3161 cryptographic timestamping with TLS provenance verification.",
        },
        {
          number: "04",
          title: "High-Throughput API Gateway & Cryptographic Access Control (FastAPI)",
          description:
            "Built a FastAPI gateway featuring hybrid SHA-256 enterprise API key management, role-based access control (RBAC), and HTTP 402 (x402) micropayment verification for programmatic institutional access.",
        },
        {
          number: "05",
          title: "Low-Latency Real-Time Streaming Engine (WebSockets + Redis Pub/Sub)",
          description:
            "Deployed a dedicated WebSocket streaming gateway backed by Redis Pub/Sub channels to push live risk alerts and multivariate telemetry updates directly to client terminals.",
        },
        {
          number: "06",
          title: "Executive BI Cockpit & Client Partner Portal (React / Next.js)",
          description:
            "Delivered a responsive web interface providing interactive causal graph exploration, paper-trading portfolio simulation, and live operational telemetry dashboards.",
        },
        {
          number: "07",
          title: "Zero-Drift Cloud DevOps, PKI Security & Self-Healing SRE (GCP / Linux)",
          description:
            "Configured hardened Linux production hosts on Google Cloud Platform with Nginx TLS 1.3 reverse proxy termination, automated container watchdog recovery (autoheal), six host-level systemd maintenance timers, synthetic Playwright end-to-end health checks, and a deterministic CI/CD rollout pipeline.",
        },
      ],
    },
    outcomes: [
      "100% Practical Completion of all seven production subsystems delivered ahead of schedule with zero critical defects.",
      "5.0 / 5.0 Vendor Rating across Technical Competence, Timeline Adherence, Information Security/POPIA Governance, and DevOps Reliability.",
      "Transitioned seamlessly into an ongoing 24/7 Managed SRE & DevOps retainer maintaining a 99.5%+ production uptime SLA.",
    ],
    cta: {
      heading: "Building Mission-Critical Data, AI, or Institutional Infrastructure?",
      body: "Discuss your data warehousing, graph/vector retrieval, or zero-drift cloud SRE requirements directly with our systems engineering team.",
      primaryLabel: "Scope an Enterprise Platform",
      primaryHref: "/contact?service=data-engineering",
      secondaryLabel: "Explore Cognition Architecture",
      secondaryHref: "/architecture",
      microcopy:
        "Turnkey platform engineering backed by POPIA governance and ongoing SRE.",
    },
  },
  {
    slug: "henry-cumines-oms-automation",
    code: "CS-03",
    track: "client",
    status: "Delivered",
    category: "AI & Automation",
    eyebrow: "AGENTIC DOCUMENT PROCESSING • OMS & LOGISTICS AUTOMATION",
    title:
      "Henry Cumines Pty Ltd — Autonomous Purchase Order & OMS Automation",
    cardTitle:
      "Henry Cumines Pty Ltd: Compressing 3-Day Manual PO Reconciliation into Minutes",
    client: "Henry Cumines Pty Ltd",
    clientUrl: "https://henrycumines.com.au/",
    partnerNote: "Contracted via UCS Global / Ulysses Group Ltd",
    sector: "International Shipping, Export Logistics & Wholesale Purchase Order Management",
    geography: "Australia / International Trade",
    timeline: "March 2025 – September 2025",
    summary:
      "Replaced a spreadsheet-driven wholesale purchase order workflow across hundreds of monthly suppliers and millions of SKUs with an autonomous email-to-PO agentic pipeline—cutting supplier cycles from up to 3 business days down to minutes.",
    subheadline:
      "Henry Cumines Pty Ltd manages international shipping and purchase order fulfillment across hundreds of monthly suppliers and millions of SKUs supplying independent stores and retail buyers. Contracted through UCS Global, Techfusion Automata replaced a brittle, spreadsheet-driven manual PO workflow—which previously took up to 3 full business days per supplier—with an autonomous email-to-PO agentic pipeline that processes, verifies, reserves, and dispatches purchase orders in minutes.",
    publishedDate: "2026-11-03",
    readTime: "5 min dossier",
    stack: [
      "Managed n8n",
      "Cost-Optimized LLMs",
      "PDF.co",
      "Supabase / Airtable",
      "SMTP / IMAP Automation",
      "Web Frontend Portal",
    ],
    facts: [
      { label: "Cycle Time", value: "3 Days → Minutes" },
      { label: "Catalogue Scale", value: "Millions of SKUs" },
      { label: "Supplier Volume", value: "100s / Month" },
      { label: "Region", value: "Australia / Global" },
    ],
    problem: {
      heading: "Drowning in Spreadsheets Across Time Zones",
      paragraphs: [
        "Before automation, Henry Cumines' entire order reconciliation workflow lived inside .xlsx spreadsheets. Because every step depended on human reading, spreadsheet lookup, and email drafting across international time zones, a single supplier cycle routinely consumed up to three full business days:",
      ],
      steps: [
        "A purchase order PDF landed in an account manager's inbox from a buyer stocking their store.",
        "The account manager manually read every requested line item and cross-referenced multiple spreadsheets to determine whether Henry Cumines held those SKUs in stock.",
        "Available items were manually marked and reserved for consolidated routing.",
        "For out-of-stock items, the manager manually drafted and emailed fresh purchase orders to upstream suppliers—or emailed the buyer back if an item could not be sourced.",
        "Multi-party back-and-forth across time zones repeated until the buyer, Henry Cumines, and all upstream suppliers signed off for consolidated shipment dispatch.",
      ],
    },
    solution: {
      eyebrow: "02 // Autonomous OMS Pipeline",
      heading: "What We Built: End-to-End Email-to-PO Orchestration",
      intro:
        "We engineered an autonomous document ingestion and order routing system centered on a dedicated managed n8n server:",
      subsystems: [
        {
          number: "01",
          title: "Zero-Friction Email Intake",
          description:
            "Account managers simply forward incoming POs to a dedicated intake inbox monitored continuously by n8n—requiring zero change to how buyers submit orders.",
        },
        {
          number: "02",
          title: "Automated PDF Capture & Cost-Optimized AI Extraction",
          description:
            "The automation catches tagged inbound emails, downloads attached PO PDFs, and routes them to a cost-optimized LLM extraction layer to parse line items, quantities, and product descriptors across varying international document formats.",
        },
        {
          number: "03",
          title: "Database SKU Verification & Catalogue Alignment",
          description:
            "Extracted products are verified against the relational product database—confirming both that each SKU exists in the catalogue and that it faithfully matches the source document.",
        },
        {
          number: "04",
          title: "Autonomous Branching & Outgoing PO Compilation",
          description:
            "Verified line items are routed automatically based on live stock status:",
          bullets: [
            "In-Stock Items: Automatically marked off and reserved in the system so they are ready for final consolidated shipment compilation.",
            "Missing / Out-of-Stock Items: Automatically compiled into structured outgoing supplier Purchase Order documents and dispatched directly to upstream suppliers.",
          ],
        },
        {
          number: "05",
          title: "Full Account Manager Audit Visibility",
          description:
            "Every outgoing supplier PO request automatically CCs the responsible account manager, giving human operators complete oversight without manually drafting a single document.",
        },
      ],
    },
    outcomes: [
      "Reduced manual purchase order reconciliation and upstream supplier PO drafting from up to 3 full business days down to minutes.",
      "Eliminated manual spreadsheet cross-referencing and drafting; account managers only forward POs to the intake address and monitor CC'd dispatches.",
      "Delivered and handed over as a complete production system to UCS Global and Henry Cumines.",
    ],
    reference: {
      quote:
        "The impact on operational velocity cannot be overstated. Account managers who once spent days reconciling documents can now review and dispatch validated purchase orders immediately. Muzi's work transformed an error-prone, labour-intensive department into a high-throughput, automated logistics operation.",
      author: "Dave Leng",
      role: "UCS Global",
      meta: "Signed Reference Letter, 3 November 2026",
    },
    cta: {
      heading: "Still Reconciling PDFs, Purchase Orders, or Invoices by Hand?",
      body: "Automate document ingestion, relational SKU verification, and multi-party dispatch with human-in-the-loop visibility.",
      primaryLabel: "Scope an IDP / OMS Pipeline",
      primaryHref: "/contact?service=automation-ai",
      secondaryLabel: "Estimate ROI in Calculator",
      secondaryHref: "/calculator",
      microcopy:
        "Deterministic extraction and database verification—built for real operational throughput.",
    },
  },
  {
    slug: "ai-sports-sweden-cv-analytics",
    code: "CS-04",
    track: "client",
    status: "Delivered",
    category: "Computer Vision & Voice AI",
    eyebrow: "COMPUTER VISION • REACT ENGINEERING & QUICKBOOKS AUTOMATION",
    title:
      "AI Sports Sweden & Levatus i Norden AB — Computer Vision Match Analytics & QuickBooks Automation",
    cardTitle:
      "AI Sports Sweden / Levatus i Norden AB: Single-Camera Football CV & QuickBooks AP Automation",
    client: "Levatus i Norden AB (AI Sports Sweden / Lerkils IF)",
    clientUrl: "https://www.instagram.com/aisportssweden/",
    sector: "Sports Analytics / Computer Vision & SME Financial Operations",
    geography: "Sweden / European Union",
    timeline: "May 2025 – October 2025",
    summary:
      "Partnered with Swedish consultancy Levatus i Norden AB to deliver a custom Roboflow + Kalman-filtered computer vision match analytics pipeline and React.js club hub for AI Sports Sweden (piloted with Lerkils IF), alongside an automated email-to-QuickBooks AP pipeline.",
    subheadline:
      "Operating as the dedicated implementation and testing engineering partner to Swedish software consultancy Levatus i Norden AB, Techfusion Automata delivered two distinct production workstreams: transforming AI Sports Sweden from a simple lineup-marketing chatbot into a full computer-vision football analytics and multi-team management platform piloted with Swedish club Lerkils IF, and building an end-to-end email-to-QuickBooks invoice automation pipeline for a separate European business client.",
    publishedDate: "2026-11-04",
    readTime: "6 min dossier",
    stack: [
      "Python",
      "Roboflow",
      "OpenCV",
      "Kalman Filtering",
      "React.js",
      "n8n",
      "Google Sheets",
      "QuickBooks API",
    ],
    facts: [
      { label: "Partner", value: "Levatus i Norden AB" },
      { label: "Pilot Club", value: "Lerkils IF (Sweden)" },
      { label: "Workstreams", value: "CV Sports + QuickBooks AP" },
      { label: "Geography", value: "Sweden / EU" },
    ],
    problem: {
      heading: "Pro-Grade Match Insights from a Single Panning Pitch-Side Camera",
      paragraphs: [
        "Grassroots and semi-professional football clubs rarely have multi-camera stadium tracking rigs. AI Sports Sweden (starting with Swedish club Lerkils IF) captured matches using a single stationary pitch-side camera that panned automatically to follow the ball.",
        "They needed to turn raw panning match video into structured player-level performance insights—and graduate their product from a single-team social media helper into a scalable multi-team analytics and management platform.",
      ],
    },
    solution: {
      eyebrow: "02 // Workstream A: Computer Vision & React Platform",
      heading: "Custom Vision Tracking + Multi-Team Club Operations Hub",
      intro:
        "We built the end-to-end computer vision processing pipeline and evolved the club-facing React.js product across two phases:",
      subsystems: [
        {
          number: "01",
          title: "Custom Computer Vision Dataset & Roboflow Model",
          description:
            "Split raw panning match footage into individual frames, manually annotated player bounding boxes, and trained a custom player-recognition model on Roboflow tailored to pitch-side camera perspectives.",
        },
        {
          number: "02",
          title: "Match Video Processing, Team Separation & Kalman Tracking",
          description:
            "Engineered a multi-stage Python/OpenCV pipeline that ingests full match videos and extracts structured pitch telemetry:",
          bullets: [
            "Decomposes footage into frames and detects all visible players on the pitch.",
            "Separates players by team using jersey color processing.",
            "Detects and tracks ball position across frames.",
            "Applies Kalman filtering to maintain consistent individual player identities across panning motion and occlusions, tracking each player's movement across the pitch over time.",
          ],
        },
        {
          number: "03",
          title: "Evolution of the React.js Management & Marketing Platform",
          description:
            "Graduated the frontend from a single-team marketing utility into a multi-team club operations platform:",
          bullets: [
            "Phase 1 (Matchday Marketing Automation): Coaches entered upcoming squad lineups into a chatbot, triggering automated Instagram and Facebook matchday formation posts.",
            "Phase 2 (Multi-Team Player Analytics Platform): Expanded the React.js hub so managers review past match performance, evaluate player form, manage squad selection for upcoming fixtures, oversee social marketing, and track player development across multiple teams.",
          ],
        },
      ],
      secondaryWorkstream: {
        eyebrow: "Workstream B // Financial Operations Automation",
        heading: "Automated Email-to-QuickBooks Invoice Pipeline (n8n)",
        intro:
          "For a separate Levatus European business client, we engineered a zero-touch accounts payable workflow using n8n:",
        bullets: [
          "Monitors inbound emails continuously for incoming supplier invoices.",
          "Feeds invoice documents into an AI extraction step to capture structured vendor, line-item, tax, and total fields.",
          "Writes clean, standardized records into a formatted Google Sheet ledger.",
          "Connects directly to the QuickBooks API, automating purchase entry end-to-end from inbox arrival straight into QuickBooks.",
        ],
      },
    },
    reference: {
      quote:
        "He designed and built AI-assisted workflows and assistants that were practical, reliable, and genuinely useful to the project, and he brought the same rigour to his React JS work, delivering clean, well-structured, and maintainable interfaces... He kept everyone informed of progress, raised issues early, explained complex technical matters clearly to both technical and non-technical colleagues, and was consistently responsive and dependable.",
      author: "Walid Valerius Namro",
      role: "Chief Executive Officer, Levatus i Norden AB",
      meta: "Signed Reference Letter, 4 November 2026",
    },
    cta: {
      heading: "Need a Technical Engineering Partner for Vision, React, or API Automation?",
      body: "We partner directly with product teams and consultancies to deliver custom computer vision pipelines, React interfaces, and accounting integrations.",
      primaryLabel: "Scope an Engineering Engagement",
      primaryHref: "/contact?service=custom-software",
      secondaryLabel: "Explore Service Pillars",
      secondaryHref: "/#capabilities",
      microcopy:
        "Senior full-stack, computer vision, and automation delivery across global time zones.",
    },
  },
  {
    slug: "oakfloors-ny-showroom-voice-ai",
    code: "CS-05",
    track: "client",
    status: "Delivered",
    category: "Computer Vision & Voice AI",
    eyebrow: "PHYSICAL-TO-DIGITAL CV • VOICE AI & COLLATERAL AUTOMATION",
    title:
      "OakFloors New York — Multi-Channel Showroom CV, Voice AI & B2B Collateral Engine",
    cardTitle:
      "OakFloors New York: Always-On Showroom Vision Greeter, Voice AI & Dynamic Deck Engine",
    client: "OakFloors New York",
    partnerNote: "Contracted via UCS Global / Ulysses Group Ltd",
    sector: "B2B Commercial Flooring & High-Ticket Showroom Retail",
    geography: "New York, United States",
    timeline: "2025 – 2026",
    summary:
      "United a New York showroom computer-vision door trigger, Bose + Vapi + OpenAI voice greeter, on-site transcript logger, website conversational agent, and n8n dynamic sales deck pipeline into one cohesive B2B lead-conversion engine.",
    subheadline:
      "OakFloors New York, a B2B commercial flooring contractor, was losing qualified commercial buyers across both its website and its physical New York showroom. Building on the edge-voice architecture we first pioneered for Rollin Mopeds, Techfusion Automata delivered a turnkey multi-channel conversion engine via UCS Global—uniting an always-on showroom computer-vision voice greeter, a matching website voice/conversational agent, a local transcript-logging backend, and an n8n dynamic sales deck and follow-up pipeline.",
    publishedDate: "2026-11-03",
    readTime: "5 min dossier",
    stack: [
      "Computer Vision (Door Trigger)",
      "Bose Audio Hardware",
      "Vapi",
      "OpenAI",
      "n8n",
      "Google Sheets",
      "Dynamic Deck Templating",
    ],
    facts: [
      { label: "Location", value: "New York, USA" },
      { label: "Channels Unified", value: "Showroom + Web + Email" },
      { label: "Hardware Stack", value: "CV Camera + Bose + Local PC" },
      { label: "Delivery", value: "Turnkey Build (UCS Global)" },
    ],
    problem: {
      heading: "Unqualified Walk-Ins and Leaking High-Ticket Pipeline",
      paragraphs: [
        "High-ticket commercial decision-makers were visiting both OakFloors' digital presence and physical New York showroom without consistent lead capture, guided discovery, or immediate tailored follow-up—causing warm commercial prospects to leak out of the sales pipeline.",
      ],
    },
    solution: {
      eyebrow: "02 // Multi-Channel Architecture",
      heading: "What We Built: Physical Showroom + Digital Qualification Engine",
      intro:
        "We engineered five synchronized layers connecting physical entrance hardware directly to automated B2B collateral dispatch:",
      subsystems: [
        {
          number: "01",
          title: "Always-On Showroom Computer Vision + Bose Voice Unit",
          description:
            "Deployed a dedicated computer-vision camera continuously monitoring the New York showroom entrance. The moment a visitor walked through the door, the CV loop activated a Bose speaker unit powered by a Vapi voice agent backed by OpenAI for real-time speech and text reasoning.",
        },
        {
          number: "02",
          title: "Context-Aware In-Showroom Guidance & Lead Capture",
          description:
            "The voice agent proactively welcomed visitors, captured their contact and project details, guided them around the showroom, and delivered tailored flooring recommendations dynamically based on the live conversation context.",
        },
        {
          number: "03",
          title: "Backend Transcript Logger & Google Sheets Lead Sink",
          description:
            "Connected the showroom hardware to a dedicated on-site backend computer that logged every conversation transcript for staff review and streamed structured visitor data directly into a Google Sheet monitored by the sales team.",
        },
        {
          number: "04",
          title: "Website Conversational Agent (Vapi + OpenAI)",
          description:
            "Deployed a parallel website agent built on Vapi with OpenAI handling text capture and conversational reasoning, giving online visitors the same structured qualification experience.",
        },
        {
          number: "05",
          title: "Automated Dynamic Sales Decks & Follow-Up Classification (n8n)",
          description:
            "Engineered an n8n workflow around a master multi-page sales deck template that dynamically populated lead-specific sections (names, details, and context) on demand and dispatched personalized collateral. The workflow waited several hours before sending the next value asset and automatically classified inbound replies when prospects reached out to book a viewing.",
        },
      ],
    },
    outcomes: [
      "Delivered an integrated physical-and-digital lead capture, showroom guidance, and personalized collateral system uniting edge vision, voice AI, and n8n pipeline automation.",
      "Handed off to UCS Global as a complete turnkey production build.",
    ],
    reference: {
      quote:
        "Muzi's ability to weave together front-end conversational interfaces, edge computer vision, automated document generation, and real-time voice telecommunications into a cohesive revenue engine is rare. He does not just write code or assemble APIs—he engineers end-to-end commercial outcomes.",
      author: "Dave Leng",
      role: "UCS Global",
      meta: "Signed Reference Letter, 3 November 2026",
    },
    cta: {
      heading: "Want to Connect Physical Spaces, Voice AI, and Automated Sales Follow-Up?",
      body: "Let's architect a multi-channel lead capture and automated collateral system tailored to your showroom or B2B sales motion.",
      primaryLabel: "Scope a Multi-Channel Build",
      primaryHref: "/contact?service=automation-ai",
      secondaryLabel: "Read the Pioneer Edge Build (CS-06)",
      secondaryHref: "/case-studies/rollin-mopeds-edge-iot-voice-ai",
      microcopy:
        "Hardware-to-cloud voice AI and automated B2B collateral workflows.",
    },
  },
  {
    slug: "rollin-mopeds-edge-iot-voice-ai",
    code: "CS-06",
    track: "client",
    status: "Delivered",
    category: "Computer Vision & Voice AI",
    eyebrow: "EDGE IoT • RASPBERRY PI, TWILIO VOIP & IN-STORE VOICE AI",
    title:
      "Rollin Mopeds — Pioneer Edge IoT, Computer Vision & In-Store AI Sales Agent",
    cardTitle:
      "Rollin Mopeds (Sydney): Pioneer Raspberry Pi + Twilio + Vapi In-Store AI Agent",
    client: "Rollin Mopeds",
    partnerNote: "Contracted via UCS Global / Ulysses Group Ltd",
    sector: "Physical Retail / Electric Mobility & Mopeds",
    geography: "Sydney, Australia",
    timeline: "2025 – 2026",
    summary:
      "Took an experimental physical-retail voice AI concept from zero to a working Sydney installation—pivoting from noisy acoustic triggers to doorway computer vision on a Raspberry Pi bridged via Twilio VoIP into Vapi, establishing the blueprint later scaled to OakFloors New York.",
    subheadline:
      "Rollin Mopeds in Sydney, Australia wanted to turn physical foot traffic into live, autonomous in-store sales conversations. Contracted through UCS Global, Techfusion Automata engineered this pioneer v1 edge-to-cloud retail voice system from zero to production—proving out the Raspberry Pi + Twilio + Vapi + Computer Vision architecture that later scaled into the OakFloors New York deployment. Alongside the engineering build, we also supported Rollin Mopeds with content marketing.",
    publishedDate: "2026-11-03",
    readTime: "5 min dossier",
    stack: [
      "Raspberry Pi",
      "Twilio (SIP/VoIP)",
      "Vapi",
      "On-Site Camera CV",
      "Store Audio Peripherals",
    ],
    facts: [
      { label: "Location", value: "Sydney, Australia" },
      { label: "Edge Compute", value: "Raspberry Pi + CV Camera" },
      { label: "Voice Bridge", value: "Twilio VoIP → Vapi" },
      { label: "Blueprint Reuse", value: "Scaled to OakFloors NY" },
    ],
    problem: {
      heading: "Bridging Physical Retail Hardware with Low-Latency Voice AI",
      paragraphs: [
        "Bridging physical retail hardware with low-latency conversational AI is notoriously messy outside a lab. Rollin Mopeds needed an autonomous in-store agent that could detect incoming shoppers, initiate a live voice conversation through store speakers, listen through an on-site microphone, and answer inventory and product questions reliably in a real brick-and-mortar shop.",
      ],
      deepDive: {
        label: "The Real-World Engineering Pivot",
        title: "Why Acoustic Triggering Failed in Sydney—and How Doorway CV Fixed It",
        body: "Our earliest prototype tested sound-based triggering to wake the voice agent when customers entered. In real-world testing, that approach broke immediately: the store sits in a busy, high-noise part of Sydney, and ambient street and traffic noise constantly triggered false outbound calls to the agent.",
        bullets: [
          "Architectural Discovery: After benchmarking multiple integration paths, we standardized on a Raspberry Pi running a Twilio VoIP service bridged directly into Vapi for low-latency voice streaming.",
          "Eliminating False Triggers: We replaced acoustic triggering with a camera pointed specifically at the store entrance. Because the vision trigger only fired when a person physically walked through the doorway, false triggers dropped away completely.",
          "Two-Way Audio Loop: Upon doorway detection, the Raspberry Pi triggered the Twilio → Vapi call, projecting the AI agent's voice through the store speakers while capturing customer responses via the on-site computer microphone.",
        ],
      },
    },
    solution: {
      eyebrow: "02 // Edge-to-Cloud Architecture",
      heading: "Production Hardware & Telephony Pipeline",
      intro:
        "Every layer from optical doorway detection to streaming telephony was tested live inside the Sydney store during fit-out:",
      subsystems: [
        {
          number: "01",
          title: "Doorway-Pointed Computer Vision Trigger",
          description:
            "Dedicated camera focused strictly on the physical store threshold to fire deterministic entry events immune to Sydney street and traffic noise.",
        },
        {
          number: "02",
          title: "Raspberry Pi Edge Controller + Twilio SIP/VoIP Bridge",
          description:
            "Lightweight edge service on Raspberry Pi initiating reliable low-latency Twilio VoIP sessions bridged directly into Vapi upon verified doorway entry.",
        },
        {
          number: "03",
          title: "In-Store Speaker & Microphone Conversational Loop",
          description:
            "Real-time Vapi voice agent projected through store speakers with live customer voice capture through the on-site microphone to answer product and inventory questions.",
        },
      ],
    },
    outcomes: [
      "Successfully took an experimental physical-retail AI concept from zero to a working edge-hardware installation in Sydney.",
      "Established the battle-tested Edge CV + VoIP + Vapi blueprint that UCS Global subsequently brought us back to refine and scale for OakFloors New York.",
      "Delivered and handed over as a turnkey build to UCS Global, complemented by content marketing support for Rollin Mopeds.",
    ],
    reference: {
      quote:
        "Most developers specialise either in embedded systems/IoT, network protocols, or AI application logic; Muzi handled the edge hardware, streaming audio pipeline, telephony bridge, and agent reasoning layer with seamless precision. He took a bold, futuristic retail concept and turned it into an elegant, reliable physical installation.",
      author: "Dave Leng",
      role: "UCS Global",
      meta: "Signed Reference Letter, 3 November 2026",
    },
    cta: {
      heading: "Bringing Real-Time Voice AI or Edge Vision into Physical Operations?",
      body: "From edge hardware and telephony bridges to production voice agents, we engineer physical-to-digital installations that survive real-world noise.",
      primaryLabel: "Discuss an Edge AI Build",
      primaryHref: "/contact?service=automation-ai",
      secondaryLabel: "See the OakFloors NY Evolution (CS-05)",
      secondaryHref: "/case-studies/oakfloors-ny-showroom-voice-ai",
      microcopy:
        "Battle-tested edge IoT, computer vision, and VoIP/voice AI engineering.",
    },
  },
  {
    slug: "founder-monthos-group-publishing-automation",
    code: "F1",
    track: "founder",
    status: "Founder Track Record",
    category: "AI & Automation",
    eyebrow: "FOUNDER TRACK RECORD • PRIOR INDEPENDENT ENGAGEMENT",
    title:
      "Monthos Group (Pty) Ltd — Automated Next.js/Supabase Publishing & Lead Sequencing",
    cardTitle:
      "Monthos Group (Pty) Ltd: Automated Next.js/Supabase GEO Publishing & Lead Sequencing",
    client: "Monthos Group (Pty) Ltd",
    sector: "Custom Software Consultancy",
    geography: "South Africa",
    timeline: "August 2025 – September 2025",
    summary:
      "Prior independent engineering engagement by Founder Muzikayise Khuzwayo: built a multi-step n8n + LLM publishing pipeline directly into Monthos Group's Supabase-backed Next.js site alongside webhook-driven lead intake and personalized follow-up.",
    subheadline:
      "Executed as an independent AI Automation Engineer prior to Techfusion Automata's incorporation, this engagement automated technical editorial publishing into a dynamic Next.js + Supabase stack and wired real-time webhook lead qualification and follow-up.",
    publishedDate: "2025-09-30",
    readTime: "4 min dossier",
    stack: [
      "n8n",
      "Supabase",
      "Next.js",
      "Google Sheets",
      "Webhooks",
      "LLM Content Pipelines",
    ],
    facts: [
      { label: "Capacity", value: "Independent Engineer" },
      { label: "Organization", value: "Monthos Group (Pty) Ltd" },
      { label: "Timeline", value: "Aug – Sep 2025" },
      { label: "Region", value: "South Africa" },
    ],
    transparencyNote:
      "Transparency Note: This engagement was executed by Techfusion Automata Founder & CEO Muzikayise Khuzwayo in an independent contractor capacity prior to Techfusion Automata's incorporation, and is presented as Founder Leadership Track Record rather than a Techfusion corporate client contract.",
    solution: {
      eyebrow: "01 // Systems Delivered",
      heading: "Automated Publishing & Real-Time Lead Intake",
      intro:
        "Two interconnected n8n automation pipelines eliminated manual publishing friction and lead response lag:",
      subsystems: [
        {
          number: "01",
          title: "Automated Multi-Step Blog Publishing into Supabase (Next.js)",
          description:
            "Monthos Group wanted to scale technical blog publishing early in the rise of AI Search Optimisation (GEO). Because their Next.js website rendered blog content dynamically from Supabase rather than accepting direct static pushes, an n8n pipeline was engineered to:",
          bullets: [
            "Pull prefilled editorial topics from a structured Google Sheet.",
            "Run a multi-step LLM generation sequence that drafted each article section-by-section and assembled a cohesive, theme-matched document.",
            "Insert the finished post directly into their Supabase instance for live rendering on the Next.js site and mark the topic complete on the tracking sheet.",
          ],
          noteLabel: "Key Strategic Lesson Captured",
          noteText:
            "Even for AI search visibility (GEO), foundational SEO, sitemapping, and Google/Bing indexing remained non-negotiable—AI engines still relied on traditional search indices as authority proxies to decide which sites were important enough to cite.",
        },
        {
          number: "02",
          title: "Webhook-Driven Lead Intake & Personalized Follow-Up",
          description:
            "Wired website form submissions into a Google Sheet that fired real-time webhooks into n8n. The automation looked up the lead's details, generated tailored AI follow-up content, dispatched the outreach sequence, and sent a structured logging email to the team lead.",
        },
      ],
    },
    cta: {
      heading: "Looking to Automate Content Pipelines or Lead Operations?",
      body: "Bring the same engineering discipline to your Next.js, Supabase, and CRM automation workflows.",
      primaryLabel: "Start a Conversation",
      primaryHref: "/contact?service=automation-ai",
      secondaryLabel: "View All Case Studies",
      secondaryHref: "/case-studies",
      microcopy:
        "Direct founder-led engineering from architecture through production handover.",
    },
  },
  {
    slug: "founder-enterprise-integrations-contract-ops",
    code: "F2",
    track: "founder",
    status: "Founder Track Record",
    category: "Enterprise Integrations",
    eyebrow: "FOUNDER TRACK RECORD • HEAD OF INTEGRATIONS (INDEPENDENT ROLE)",
    title:
      "Enterprise Performance Analytics Integrations & Automated Contract Ops",
    cardTitle:
      "Enterprise Performance Analytics: Multi-Platform Integrations & Dual-Signature Contract Ops",
    client: "Confidential US Digital Consultancy (Independent Specialist Role)",
    sector: "Enterprise SaaS & Workplace Performance Analytics",
    geography: "United States / Remote",
    timeline: "September 2025 – May 2026",
    summary:
      "Prior independent specialist role by Founder Muzikayise Khuzwayo as Head of Integrations on the founding engineering team of a multi-platform enterprise analytics product (Slack, HubSpot, Google Workspace, Zoom, Microsoft Teams) plus automated Google Drive-to-e-signature contract assembly.",
    subheadline:
      "Serving as Head of Integrations on the founding engineering team and AI Automation Engineer for a confidential US digital consultancy, Muzikayise Khuzwayo owned cross-platform enterprise ingestion reliability across six workplace ecosystems and eliminated manual client contract drafting via automated dual-signature workflows.",
    publishedDate: "2026-05-31",
    readTime: "4 min dossier",
    stack: [
      "n8n",
      "Microsoft Teams / Graph API",
      "Slack API",
      "HubSpot",
      "Google Workspace / Drive API",
      "Zoom API",
      "E-Signature Platforms",
    ],
    facts: [
      { label: "Role", value: "Head of Integrations" },
      { label: "Ecosystems Wired", value: "6 Enterprise Platforms" },
      { label: "Timeline", value: "Sep 2025 – May 2026" },
      { label: "Region", value: "United States / Remote" },
    ],
    transparencyNote:
      "Transparency Note: This engagement was executed by Techfusion Automata Founder & CEO Muzikayise Khuzwayo in an independent specialist capacity outside Techfusion Automata corporate contracts, and is presented anonymized under Founder Leadership Track Record.",
    solution: {
      eyebrow: "01 // Systems Delivered",
      heading: "Founding Integrations Architecture & Automated Contract Assembly",
      intro:
        "Owned end-to-end integration resilience for an internal-turned-flagship AI analytics product alongside automated client contracting:",
      subsystems: [
        {
          number: "01",
          title: "Multi-Platform Enterprise Integrations (Head of Integrations)",
          description:
            "Served on the founding engineering team for an internal-turned-flagship AI employee performance analytics platform designed to surface actionable signals from workplace activity across Slack, HubSpot, Email, Google Workspace, Zoom, and Microsoft Teams / Meetings. Owned integration reliability to ensure continuous, unbroken data ingestion across every connected enterprise workspace.",
          noteLabel: "Hardest Integration Hurdle",
          noteText:
            "Microsoft Teams proved to be the most fragmented and restrictive ecosystem—requiring a specialized Microsoft application type and explicit tenant-level approval workflows, forcing prolonged coordination meetings and troubleshooting before meeting telemetry could reliably flow into the platform.",
        },
        {
          number: "02",
          title: "Automated Client Contract Assembly & Dual-Signature Routing (n8n)",
          description:
            "Replaced a slow, manual contract drafting bottleneck whenever new clients signed or existing clients renewed/re-engaged. Built an n8n automation that ingested client details, pulled modular source documents from Google Drive, merged them into a single contract, populated all template placeholders dynamically, and dispatched the package through an e-signature platform configured to automatically route to the CEO for countersignature.",
        },
      ],
    },
    cta: {
      heading: "Integrating Fragmented Enterprise SaaS or Automating Contract Ops?",
      body: "From Microsoft Graph / Teams tenant permissions to automated document assembly and e-signature routing, we build resilient integration backbones.",
      primaryLabel: "Scope an Integration Project",
      primaryHref: "/contact?service=cloud-integration",
      secondaryLabel: "View All Case Studies",
      secondaryHref: "/case-studies",
      microcopy:
        "Proven across Microsoft 365, Google Workspace, Slack, HubSpot, Zoom, and e-signature APIs.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
