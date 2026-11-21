export interface StackLayer {
  tier: string;
  name: string;
  summary: string;
  components: string[];
}

export interface OfferStack {
  id: string;
  code: string;
  pillarLabel: string;
  title: string;
  shortSummary: string;
  cognitionRole: string;
  division: string;
  divisionUrl?: string;
  engagementModel: string[];
  deliverables: string[];
  governance: string[];
  layers: StackLayer[];
}

export const OFFER_STACKS: OfferStack[] = [
  {
    id: "cognition-infrastructure",
    code: "Stack 00",
    pillarLabel: "Flagship Cross-Pillar Architecture",
    title: "Enterprise Cognition Infrastructure",
    shortSummary:
      "Model-agnostic AI gateway, deterministic MCP verification shell, POPIA Sec 71 HITL behavioural capture, and continuous eval and model-swap CI/CD.",
    cognitionRole: "Unifying Spine — Extract, Synthesise, Deploy & Upgrade",
    division: "Techfusion Automata & TechFusion Alchemy",
    engagementModel: [
      "Phase 1: Cognition Audit & Unified Contract Blueprint (2–4 weeks)",
      "Phase 2: Deterministic Shell, Gateway & HITL Capture Build (6–10 weeks)",
      "Phase 3: Continuous Eval CI/CD & Model-Swap Retainer (Ongoing SLA)",
    ],
    deliverables: [
      "Unified internal AI API contract (/chat, /embed, /rerank, /agent) across 5 OEM clouds and open weights",
      "3-layer deterministic shell (Decision Router -> Probabilistic Generation -> Schema/Source Verifier)",
      "POPIA Sec 71 HITL exception queue capturing structured Data + Context + Feedback + Outcomes",
      "Automated golden evaluation suite and zero-downtime model-swap benchmark harness",
    ],
    governance: [
      "ISO/IEC 42001:2023 AIMS",
      "NIST AI RMF 1.0",
      "POPIA Sec 71 HITL",
      "Cryptographic Audit Logs",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Model-Agnostic Gateway & Deterministic Shell",
        summary:
          "Decouples business applications from frontier model vendors through a single governed contract and deterministic validation perimeter.",
        components: [
          "Unified /chat, /embed, /rerank, /agent gateway",
          "Policy-based routing (sensitivity, latency, cost)",
          "Deterministic schema and source verification layer",
          "Multi-OEM substrate (Azure/OpenAI, GCP, AWS, open-weights)",
        ],
      },
      {
        tier: "Layer 2",
        name: "HITL Behavioural Capture & Organisational Memory",
        summary:
          "Transforms mandatory compliance reviews and operational exceptions into high-signal institutional training and policy datasets.",
        components: [
          "Confidence-gated HITL adjudication queues (p < 0.96)",
          "Structured override, rationale and outcome logging",
          "Governed knowledge graphs and hybrid RAG memory",
          "PII redaction and role-scoped retrieval controls",
        ],
      },
      {
        tier: "Layer 3",
        name: "Continuous Eval CI/CD & Model-Swap Engine",
        summary:
          "Treats model upgrades and post-training like software CI/CD so superior models drop in without breaking SLAs or audit trails.",
        components: [
          "Versioned golden evaluation and regression suites",
          "Shadow-mode benchmarking for new base models",
          "Hallucination, drift, latency and unit-cost telemetry",
          "Synthetic data and domain post-training / RL readiness",
        ],
      },
    ],
  },
  {
    id: "digital-transformation",
    code: "Pillar 01",
    pillarLabel: "Pillar 01 Offer Stack",
    title: "Digital Transformation & SOP Modernisation",
    shortSummary:
      "End-to-end process digitisation, workflow re-engineering, SOP automation, and phased legacy institutional system modernisation.",
    cognitionRole: "Stage 1: Extract — Turning Tribal Processes into Structured Exhaust",
    division: "Techfusion Automata (Pty) Ltd",
    engagementModel: [
      "Discovery: Process Telemetry, Bottleneck & ToR Mapping",
      "Execution: Phased Digitisation & Legacy Strangler-Fig Migration",
      "Enablement: Operator Training, SOP Playbooks & Handover SLA",
    ],
    deliverables: [
      "Current-state vs. target-state BPMN workflow maps and bottleneck audit",
      "Digitised intake forms, deterministic approval trees, and SLA escalation rules",
      "Modernised legacy modules with zero-data-loss migration scripts",
      "Role-based operator runbooks and institutional change-management pack",
    ],
    governance: [
      "ISO 9001 Quality Alignment",
      "POPIA Data Minimisation",
      "B-BBEE Level 1 (135%)",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Operational Discovery & Process Architecture",
        summary:
          "Maps paper-bound, spreadsheet-driven, and tribal workflows into measurable operational graphs with baseline cycle times.",
        components: [
          "SOP and Terms of Reference (ToR) decomposition",
          "Cycle-time and defect baseline instrumentation",
          "Legacy system dependency and risk audit",
        ],
      },
      {
        tier: "Layer 2",
        name: "Workflow Re-Engineering & SOP Automation",
        summary:
          "Replaces manual handoffs with deterministic state machines, automated notifications, and SLA-enforced routing.",
        components: [
          "Digital intake and validation portals",
          "Multi-stage approval and delegation engines",
          "Automated SLA timers and escalation telemetry",
        ],
      },
      {
        tier: "Layer 3",
        name: "Legacy Modernisation & Institutional Adoption",
        summary:
          "De-risks transitions off brittle legacy software while training internal operators to own and sustain the new stack.",
        components: [
          "Incremental strangler-fig modernisation",
          "Structured data migration and reconciliation",
          "Executive and operator adoption playbooks",
        ],
      },
    ],
  },
  {
    id: "automation-ai",
    code: "Pillar 02",
    pillarLabel: "Pillar 02 Offer Stack",
    title: "Automation & Intelligent AI Systems",
    shortSummary:
      "Production BPA/RPA, schema-typed multi-agent MCP orchestration, hybrid IDP/OCR extraction, and POPIA Sec 71 HITL review consoles.",
    cognitionRole: "Stage 2: Execute & Capture — Deterministic Agents + HITL Feedback",
    division: "Techfusion Automata & TechFusion Alchemy",
    divisionUrl: "https://techfusion-alchemy.xyz",
    engagementModel: [
      "Pilot Sprint: High-Volume Workflow + Benchmark Proof (4 weeks)",
      "Production Rollout: Multi-Agent MCP + HITL Desk Deployment",
      "Managed Ops: Drift Monitoring, Eval Tuning & SLA Support",
    ],
    deliverables: [
      "Schema-typed Model Context Protocol (MCP) agent servers and tool contracts",
      "Hybrid layout-aware IDP/OCR pipelines for CIPC, SARS, invoices, and case dossiers",
      "POPIA Sec 71 Human-in-the-Loop review console with confidence gating",
      "Cryptographic execution logs and ISO/IEC 42001 compliance telemetry",
    ],
    governance: [
      "ISO/IEC 42001 AIMS",
      "POPIA Sec 71 Safeguards",
      "NIST AI RMF 1.0",
      "92.5% Defect Reduction Benchmark",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Hybrid IDP / OCR & Process Automation (BPA/RPA)",
        summary:
          "Extracts structured fields from complex multi-page documents and automates high-frequency cross-system tasks.",
        components: [
          "Layout-aware OCR + deterministic schema validation",
          "CIPC, SARS, invoice and dossier extraction pipelines",
          "Event-driven BPA/RPA task execution",
        ],
      },
      {
        tier: "Layer 2",
        name: "Multi-Agent MCP Orchestration & Copilots",
        summary:
          "Deploys specialised functional agents bound by strict tool contracts, permissions, and deterministic state transitions.",
        components: [
          "Typed MCP tool servers and sandboxed execution",
          "Domain agents (Ops, Procurement, Compliance, Support)",
          "Executive decision-support and citation-grounded synthesis",
        ],
      },
      {
        tier: "Layer 3",
        name: "HITL Verification & Cryptographic Auditability",
        summary:
          "Routes low-confidence or high-impact decisions to human adjudicators while logging every step for statutory audit.",
        components: [
          "Confidence threshold routing (p < 0.96 to HITL)",
          "Immutable hash-chained execution and override logs",
          "Automated regression testing against historical cases",
        ],
      },
    ],
  },
  {
    id: "data-engineering",
    code: "Pillar 03",
    pillarLabel: "Pillar 03 Offer Stack",
    title: "Data Engineering & Advanced Analytics",
    shortSummary:
      "Automated ETL/ELT pipelines, medallion enterprise data warehouses, executive BI dashboards, and POPIA-compliant data governance.",
    cognitionRole: "Stage 1 & 2: Synthesise — Governed Organisational Knowledge",
    division: "Techfusion Automata (Pty) Ltd",
    engagementModel: [
      "Architecture: Data Audit, Medallion Schema & Governance Spec",
      "Build: Automated ETL/ELT Pipelines & Warehouse Deployment",
      "Operate: Lineage Monitoring, BI Expansion & Data Quality SLAs",
    ],
    deliverables: [
      "Automated cloud-native ETL/ELT ingestion replacing manual spreadsheet reporting",
      "Bronze/Silver/Gold enterprise warehouse on PostgreSQL/Supabase or cloud lakehouse",
      "Real-time executive BI and UN/NGO M&E analytical dashboards",
      "POPIA data catalogue, retention schedules, lineage, and access-control policies",
    ],
    governance: [
      "POPIA Data Governance",
      "ISO/IEC 27001 ISMS",
      "Automated Reconciliation Audits",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Automated Ingestion & ETL / ELT Pipelines",
        summary:
          "Eliminates manual CSV exports and reconciliation discrepancies with idempotent, observable ingestion pipelines.",
        components: [
          "Batch and streaming connectors (ERP, CRM, SQL, APIs)",
          "Automated schema validation and anomaly alerts",
          "Reconciliation checks and dead-letter recovery",
        ],
      },
      {
        tier: "Layer 2",
        name: "Enterprise Warehouse & Semantic Layer",
        summary:
          "Establishes a single governed source of truth powering both executive analytics and downstream AI retrieval.",
        components: [
          "PostgreSQL / Supabase and cloud analytical stores",
          "Medallion modelling (raw -> curated -> domain marts)",
          "Unified KPI and metric definitions",
        ],
      },
      {
        tier: "Layer 3",
        name: "Executive BI & POPIA Data Governance",
        summary:
          "Delivers decision-ready dashboards backed by strict row-level security, audit lineage, and statutory privacy controls.",
        components: [
          "Executive and operational BI dashboards",
          "Row-level security (RLS) and PII masking",
          "End-to-end lineage and retention enforcement",
        ],
      },
    ],
  },
  {
    id: "custom-software",
    code: "Pillar 04",
    pillarLabel: "Pillar 04 Offer Stack",
    title: "Custom Software Development",
    shortSummary:
      "Cloud-native web and mobile portals, high-throughput REST/GraphQL APIs, automated DevSecOps, and sovereign deployment.",
    cognitionRole: "Stage 3: Deploy — Sovereign Interfaces & Operational Surfaces",
    division: "Techfusion Automata (Pty) Ltd",
    engagementModel: [
      "Specification: Technical Architecture, UX Prototype & API Contract",
      "Delivery: Iterative Agile Sprints with CI/CD & Automated QA",
      "Support: Production SRE, Security Patching & Feature Roadmap",
    ],
    deliverables: [
      "Production React / Next.js web portals and React Native mobile apps",
      "High-throughput FastAPI / Node.js REST and GraphQL microservice backends",
      "Automated test suites, CI/CD pipelines, and Infrastructure-as-Code templates",
      "Full source-code handover, OpenAPI documentation, and security hardening",
    ],
    governance: [
      "ISO/IEC 27001 Secure SDLC",
      "WCAG 2.1 AA Accessibility",
      "DigiCert PKI & TLS Lifecycle",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Web, Mobile & Citizen / Enterprise Portals",
        summary:
          "Accessible, low-latency interfaces built for high-volume institutional operators and public-facing service delivery.",
        components: [
          "React, Next.js and TypeScript web platforms",
          "React Native cross-platform mobile apps",
          "Role-based workspaces and offline-resilient UX",
        ],
      },
      {
        tier: "Layer 2",
        name: "API Core & High-Throughput Services",
        summary:
          "Contract-first backend services engineered for concurrency, strict validation, and seamless third-party interoperability.",
        components: [
          "FastAPI (Python) and Node.js microservices",
          "Typed REST and GraphQL API contracts",
          "Async worker queues and transactional integrity",
        ],
      },
      {
        tier: "Layer 3",
        name: "DevSecOps, Testing & Sovereign Hosting",
        summary:
          "Automated verification, containerised deployment, and cryptographic security baked into every release.",
        components: [
          "Automated unit, integration and browser E2E suites",
          "CI/CD pipelines and zero-downtime rollouts",
          "Hybrid cloud or sovereign on-premise deployment",
        ],
      },
    ],
  },
  {
    id: "cloud-integration",
    code: "Pillar 05",
    pillarLabel: "Pillar 05 Offer Stack",
    title: "Cloud & Systems Integration",
    shortSummary:
      "Microsoft 365 & Power Platform modernisation, fault-tolerant ERP/CRM webhook orchestration, and multi-cloud Zero-Trust IAM.",
    cognitionRole: "Stage 1 & 3: Connect — Multi-Cloud Fabric & Event Backbone",
    division: "Techfusion Automata (Pty) Ltd",
    engagementModel: [
      "Assessment: Cloud Topology, IAM & Integration Risk Review",
      "Integration: Connector Build, Queue Hardening & Cloud Migration",
      "Managed Cloud: 99.9%+ Delivery Telemetry & Cost Governance",
    ],
    deliverables: [
      "Governed Microsoft 365, SharePoint, Teams and Power Platform workflows",
      "Idempotent ERP/CRM webhook buses with retry queues and dead-letter telemetry",
      "Multi-cloud infrastructure across Azure, AWS, and Google Cloud",
      "Zero-Trust Identity & Access Management (SSO, RBAC, MFA, audit trails)",
    ],
    governance: [
      "5 Verified OEM Ecosystems",
      "ISO/IEC 27001 Access Controls",
      "99.92% Webhook Delivery SLA",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Microsoft 365 & Power Platform Ecosystems",
        summary:
          "Unlocks existing enterprise licensing with governed automation, document hubs, and line-of-business apps.",
        components: [
          "SharePoint and Teams structured knowledge hubs",
          "Power Automate and Dataverse workflow orchestration",
          "M365 tenant governance and DLP policies",
        ],
      },
      {
        tier: "Layer 2",
        name: "ERP / CRM Webhooks & Event Orchestration",
        summary:
          "Bridges siloed financial, operational, and customer platforms with fault-tolerant message delivery.",
        components: [
          "Idempotent webhook gateways and retry queues",
          "Dead-letter queues and real-time failure telemetry",
          "PostgreSQL / Supabase real-time sync layers",
        ],
      },
      {
        tier: "Layer 3",
        name: "Multi-Cloud Infrastructure & Zero-Trust IAM",
        summary:
          "Provisions resilient, vendor-portable cloud foundations with strict identity and certificate management.",
        components: [
          "Microsoft Azure, AWS and Google Cloud architecture",
          "SSO, RBAC, conditional access and secret vaults",
          "DigiCert PKI and automated certificate lifecycle",
        ],
      },
    ],
  },
  {
    id: "government-solutions",
    code: "Pillar 06",
    pillarLabel: "Pillar 06 Offer Stack",
    title: "Government & Public-Sector Solutions",
    shortSummary:
      "Public MIS, citizen case/grant adjudication portals, PAIA/POPIA-compliant EDRMS archives, and UN/NGO Monitoring & Evaluation platforms.",
    cognitionRole: "Sovereign Institutional Memory — MIS, EDRMS & M&E Platforms",
    division: "Techfusion Automata (Pty) Ltd",
    engagementModel: [
      "Tender / ToR Alignment: Statutory Compliance & Architecture Bid",
      "Implementation: Modular Rollout with Departmental UAT",
      "Institutional Handover: Capacity Building, SLA & Audit Support",
    ],
    deliverables: [
      "Departmental Management Information Systems (MIS) and citizen case portals",
      "PAIA/POPIA-compliant EDRMS with automated classification and retention",
      "Donor-auditable Monitoring & Evaluation (M&E) platforms for UN/NGO programmes",
      "Full statutory audit trails, King IV ethics alignment and B-BBEE Level 1 recognition",
    ],
    governance: [
      "B-BBEE Level 1 EME (135%)",
      "PAIA Sec 51 & POPIA Sec 71",
      "King IV / PRECCA / FICA",
      "CSD & SARS Compliant",
    ],
    layers: [
      {
        tier: "Layer 1",
        name: "Public MIS & Case / Grant Adjudication",
        summary:
          "Digitises end-to-end citizen applications, beneficiary verification, grant disbursement, and complaint resolution.",
        components: [
          "Multi-channel citizen and beneficiary intake",
          "Deterministic eligibility and adjudication routing",
          "SLA tracking and anti-fraud verification controls",
        ],
      },
      {
        tier: "Layer 2",
        name: "Electronic Document & Records Management (EDRMS)",
        summary:
          "Replaces physical registries with searchable, retention-enforced, legally defensible institutional archives.",
        components: [
          "Automated indexing, OCR and taxonomy tagging",
          "Statutory retention and disposal schedules",
          "PAIA Sec 51 and POPIA Sec 71 access audit trails",
        ],
      },
      {
        tier: "Layer 3",
        name: "UN / NGO Monitoring & Evaluation (M&E)",
        summary:
          "Tracks programme indicators, field outcomes, and funding compliance across multi-region development initiatives.",
        components: [
          "Logframe and KPI indicator hierarchy tracking",
          "Field-ready capture and automated donor reporting",
          "Disaggregated impact telemetry and audit exports",
        ],
      },
    ],
  },
];

export function getOfferStacksBySelection(stackId: string): OfferStack[] {
  if (stackId === "all") {
    return OFFER_STACKS;
  }
  const found = OFFER_STACKS.find((s) => s.id === stackId);
  return found ? [found] : OFFER_STACKS;
}
