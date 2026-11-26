// Auto-generated from Techfusion Alchemy 97-Blueprint Library.
// Do not edit manually; re-run Automation/export_ts_catalog.py if blueprints change.

export interface BlueprintEntry {
  keyword: string;
  slug: string;
  wave: string;
  title: string;
  systemName: string;
  cluster: string;
  clusterLabel: string;
  icp: string;
  outcome: string;
  pdfUrl: string;
  qualQuestion: string;
  qualOptions: string[];
}

export interface FollowUpStep {
  step: number;
  delay_days: number;
  subject: string;
  goal: string;
  body: string;
}

export interface ClusterSequence {
  cluster_name: string;
  cadence_days: number[];
  emails: FollowUpStep[];
}

export const BLUEPRINTS_CATALOG: Record<string, BlueprintEntry> = {
  "BRAIN": {
    "keyword": "BRAIN",
    "slug": "short43_four_md_files_company_brain",
    "wave": "Wave 3 · Live",
    "title": "How 4 Markdown Files Replaced a R240,000 Corporate Training Portal.",
    "systemName": "4-File Markdown Operating System (AGENTS.md, CONTEXT.md, MEMORY.md, SKILLS.md)",
    "cluster": "ai_ops",
    "clusterLabel": "AI Operating Systems & Team Codification",
    "icp": "Founders, COOs & Operations Directors Scaling Teams",
    "outcome": "Replaces R240,000 corporate training portals with 4 structured, AI-readable Markdown files that onboard staff and ground AI agents instantly.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/brain_blueprint.pdf",
    "qualQuestion": "How many staff currently prompt AI tools from scratch?",
    "qualOptions": [
      "1–5 staff",
      "6–20 staff",
      "21–50 staff",
      "50+ staff"
    ]
  },
  "CONTEXT": {
    "keyword": "CONTEXT",
    "slug": "short44_fifty_percent_context_rot",
    "wave": "Wave 3 · Live",
    "title": "Why Enterprise AI Agents Silently Ignore Rules After 100,000 Tokens.",
    "systemName": "Sub-Agent State Compaction & 40% Context-Budget Guardrail",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "AI Engineers, Technical Founders & Automation Builders",
    "outcome": "Stops enterprise AI agents from silently ignoring instructions past 100k tokens by enforcing modular context budgets and fresh-state workers.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/context_blueprint.pdf",
    "qualQuestion": "What is your primary LLM workflow bottleneck?",
    "qualOptions": [
      "Dropped rules/hallucinations",
      "High token costs",
      "Slow multi-step chains",
      "No guardrails yet"
    ]
  },
  "LOCAL": {
    "keyword": "LOCAL",
    "slug": "short45_airgapped_local_llm_popia",
    "wave": "Wave 3 · Live",
    "title": "Running an Air-Gapped Legal & Medical AI With Zero Internet Connection.",
    "systemName": "Air-Gapped Local LLM Deployment Spec (vLLM / Ollama + Zero-Egress Firewall)",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Law Firms, Medical Practices, Financial Advisors & POPIA-Strict Enterprises",
    "outcome": "Enables private legal and medical AI document analysis with zero internet egress and 100% POPIA/client confidentiality compliance.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/local_blueprint.pdf",
    "qualQuestion": "What regulated data are you trying to keep private?",
    "qualOptions": [
      "Legal / client privilege",
      "Medical / patient records",
      "Financial / FICA / POPIA",
      "Proprietary IP"
    ]
  },
  "ROUTER": {
    "keyword": "ROUTER",
    "slug": "short46_three_model_enterprise_router",
    "wave": "Wave 3 · Live",
    "title": "Why Routing Every Task to One LLM Wastes 64% of Your API Budget.",
    "systemName": "3-Tier Cost-Optimised LLM Router (Flash-Lite / Flash / Pro)",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "CTOs, AI Product Leads & High-Volume Automation Operators",
    "outcome": "Cuts enterprise AI API spend by 64% by routing classification, extraction, and complex reasoning to the right-sized model tier automatically.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/router_blueprint.pdf",
    "qualQuestion": "What is your approximate monthly AI API spend?",
    "qualOptions": [
      "Under R10k / $500",
      "R10k–R50k",
      "R50k–R200k",
      "R200k+"
    ]
  },
  "AVS": {
    "keyword": "AVS",
    "slug": "short47_ceo_fake_iban_vendor_fraud",
    "wave": "Wave 3 · Live",
    "title": "How a Spoofed Supplier Bank-Change PDF Stole R680,000 From Finance.",
    "systemName": "Automated Bank AVS & Dual-Channel Vendor Change Control Protocol",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "CFOs, Finance Directors & Accounts Payable Teams",
    "outcome": "Stops R680,000+ CEO/vendor spoofed-IBAN bank-change PDF fraud using mandatory AVS API checks and dual-channel phone verification.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/avs_blueprint.pdf",
    "qualQuestion": "How many supplier payments do you process monthly?",
    "qualOptions": [
      "Under 50",
      "50–250",
      "250–1,000",
      "1,000+"
    ]
  },
  "STACK": {
    "keyword": "STACK",
    "slug": "short48_five_tool_million_rand_ops_stack",
    "wave": "Wave 3 · Live",
    "title": "How a 12-Person B2B Firm Runs R1.4M/Mo of Operations With Just 5 Tools.",
    "systemName": "The 5-Tool R1.4M/Mo Lean B2B Operations Stack Architecture",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "B2B Founders, Agency Owners & 10–30 Person Ops Teams",
    "outcome": "Shows how a 12-person B2B firm runs R1.4M/month of operations cleanly on 5 integrated tools instead of 18 bloated SaaS subscriptions.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/stack_blueprint.pdf",
    "qualQuestion": "How many SaaS tools is your team currently paying for?",
    "qualOptions": [
      "3–5 tools",
      "6–10 tools",
      "11–15 tools",
      "16+ tools"
    ]
  },
  "SPEC": {
    "keyword": "SPEC",
    "slug": "short49_interrogate_before_execution",
    "wave": "Wave 3 · Live",
    "title": "The 1 Prompt Rule That Stops AI From Generating Useless Business Slop.",
    "systemName": "Interrogate-Before-Execution Master Prompt & SDD Specification Pack",
    "cluster": "ai_ops",
    "clusterLabel": "AI Operating Systems & Team Codification",
    "icp": "Founders, Product Managers & AI-Assisted Builders",
    "outcome": "Eliminates generic AI business slop by forcing the model to ask clarifying architectural questions and lock a deterministic spec before executing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/spec_blueprint.pdf",
    "qualQuestion": "Where does AI currently produce the most rework for your team?",
    "qualOptions": [
      "Proposals & sales docs",
      "SOPs & operations",
      "Code & automations",
      "Client reporting"
    ]
  },
  "VAULT": {
    "keyword": "VAULT",
    "slug": "short50_obsidian_meeting_vault_sync",
    "wave": "Wave 3 · Live",
    "title": "How Executive Teams Turn Every Meeting Into a Linked Knowledge Graph in 60s.",
    "systemName": "60-Second Meeting-to-Obsidian Knowledge Graph & Task Sync Pipeline",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "Executive Teams, Founders & Management Consultants",
    "outcome": "Turns every executive meeting into linked, searchable decisions and CRM/task updates in 60 seconds with zero manual note-taking.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/vault_blueprint.pdf",
    "qualQuestion": "How many leadership/client meetings does your team run weekly?",
    "qualOptions": [
      "5–10/week",
      "10–25/week",
      "25–50/week",
      "50+/week"
    ]
  },
  "MEMORY": {
    "keyword": "MEMORY",
    "slug": "short51_persistent_client_memory_palace",
    "wave": "Wave 3 · Live",
    "title": "Why Your AI Support Agent Treats 5-Year VIP Clients Like Strangers.",
    "systemName": "Persistent VIP Client Memory Palace (PostgreSQL + Vector Context)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Head of CX, Account Management Directors & B2B Support Leads",
    "outcome": "Stops AI support agents from treating 5-year VIP clients like strangers by injecting structured account history, preferences, and open issues.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/memory_blueprint.pdf",
    "qualQuestion": "How does your team currently track VIP client preferences?",
    "qualOptions": [
      "In reps' heads / WhatsApp",
      "Basic CRM notes",
      "Spreadsheets",
      "Helpdesk tickets"
    ]
  },
  "MCP": {
    "keyword": "MCP",
    "slug": "short52_mcp_server_erp_bridge",
    "wave": "Wave 3 · Live",
    "title": "Connecting Claude Directly to Sage, Xero & Postgres via a Read-Only MCP Server.",
    "systemName": "Read-Only Enterprise MCP Server Bridge (Xero / Sage / PostgreSQL)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CTOs, Finance Systems Leads & AI Architects",
    "outcome": "Lets leadership query live ERP and accounting data in natural language safely through a read-only, audited Model Context Protocol bridge.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/mcp_blueprint.pdf",
    "qualQuestion": "Which accounting / ERP system holds your core financial truth?",
    "qualOptions": [
      "Xero",
      "Sage",
      "QuickBooks",
      "Custom ERP / SQL"
    ]
  },
  "RADAR": {
    "keyword": "RADAR",
    "slug": "short53_reverse_engineer_competitor_ads",
    "wave": "Wave 3 · Live",
    "title": "How We Automatically Deconstruct Competitor Outliers Before Writing a Script.",
    "systemName": "Competitor Outlier Multiplier & Ad Longevity Deconstruction Radar",
    "cluster": "growth_content",
    "clusterLabel": "Programmatic B2B Content & Outlier Intelligence",
    "icp": "Growth Marketers, Content Directors & B2B Founders",
    "outcome": "Eliminates content guesswork by automatically identifying competitor outlier videos and long-running winning ads before scripting.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/radar_blueprint.pdf",
    "qualQuestion": "How do you currently decide what B2B content or ads to produce?",
    "qualOptions": [
      "Gut feel / brainstorming",
      "Agency briefs",
      "Manual competitor checks",
      "Data-driven outlier radar"
    ]
  },
  "VOICE": {
    "keyword": "VOICE",
    "slug": "short54_after_hours_ai_voice_receptionist",
    "wave": "Wave 3 · Live",
    "title": "Why Missed After-Hours Phone Calls Cost Service Businesses R45,000 a Month.",
    "systemName": "24/7 After-Hours AI Voice Receptionist (Vapi + Calendar + CRM)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Service Business Owners, Clinics, Contractors & Trade Desks",
    "outcome": "Recovers R45,000+/month in missed after-hours calls by answering 24/7, qualifying urgency, booking slots, and logging structured CRM leads.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/voice_blueprint.pdf",
    "qualQuestion": "Roughly how many inbound calls go missed after hours each week?",
    "qualOptions": [
      "1–5 calls",
      "6–15 calls",
      "16–40 calls",
      "40+ calls"
    ]
  },
  "MODS": {
    "keyword": "MODS",
    "slug": "short55_three_claude_code_guardrails",
    "wave": "Wave 3 · Live",
    "title": "3 Production Guardrails Every Business AI Pipeline Needs Before Launch.",
    "systemName": "3 Mandatory Production AI Pipeline Guardrails (Schema, Spend Cap, HITL)",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "AI Engineers, DevOps Leads & Operations Directors",
    "outcome": "Prevents AI automations from breaking production or burning budgets using three mandatory engineering gates before launch.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/mods_blueprint.pdf",
    "qualQuestion": "Have you had an AI workflow fail silently or hallucinate in production?",
    "qualOptions": [
      "Yes — cost us money/time",
      "We're still in pilot",
      "Planning first rollout",
      "Not sure — no monitoring"
    ]
  },
  "ENGINE": {
    "keyword": "ENGINE",
    "slug": "short56_automated_meta_ad_variant_engine",
    "wave": "Wave 3 · Live",
    "title": "How B2B Teams Render 21 Data-Backed Video Shorts a Week Without an Agency.",
    "systemName": "Programmatic 9:16 Vertical Cinema Video Pipeline (HTML5 + TTS + FFmpeg)",
    "cluster": "growth_content",
    "clusterLabel": "Programmatic B2B Content & Outlier Intelligence",
    "icp": "B2B Marketing Teams, Founders & Content Operators",
    "outcome": "Enables lean B2B teams to render 21+ data-backed vertical videos per week in-house without paying R60k/month to video agencies.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/engine_blueprint.pdf",
    "qualQuestion": "What is your current monthly video content output?",
    "qualOptions": [
      "0–2 videos/mo",
      "3–8 videos/mo",
      "9–20 videos/mo",
      "Paying an agency R30k+/mo"
    ]
  },
  "SKILL": {
    "keyword": "SKILL",
    "slug": "short57_one_recording_to_reusable_skill",
    "wave": "Wave 3 · Live",
    "title": "How to Turn Any Senior Employee's 4-Hour Task Into a Reusable AI Skill File.",
    "systemName": "1-Recording-to-Reusable-AI-Skill SOP (Screen Capture → SKILL.md)",
    "cluster": "ai_ops",
    "clusterLabel": "AI Operating Systems & Team Codification",
    "icp": "Operations Managers, Department Heads & Team Leads",
    "outcome": "Turns any senior employee's repeatable 4-hour weekly task into a documented, versioned AI skill file in under 30 minutes.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/skill_blueprint.pdf",
    "qualQuestion": "Which 4-hour weekly task do you want to codify first?",
    "qualOptions": [
      "Reporting & reconciliation",
      "Client onboarding",
      "Quoting / admin",
      "Content / marketing"
    ]
  },
  "DEMAND": {
    "keyword": "DEMAND",
    "slug": "short58_eskom_tariff_peak_shaving_ai",
    "wave": "Wave 3 · Live",
    "title": "How 1 Modbus Script Cut a Factory's Eskom Maximum Demand Penalty by R94,000/Mo.",
    "systemName": "Eskom Maximum Demand Peak-Shaving Modbus Telemetry Architecture",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Factory Managers, Industrial Plant COOs & Energy Engineers (SA)",
    "outcome": "Cuts industrial Eskom maximum-demand penalties by R94,000+/month by detecting 30-minute kVA spikes early and staging non-critical loads.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/demand_blueprint.pdf",
    "qualQuestion": "What is your facility's approximate monthly electricity bill?",
    "qualOptions": [
      "R50k–R150k/mo",
      "R150k–R500k/mo",
      "R500k–R1.5M/mo",
      "R1.5M+/mo"
    ]
  },
  "PACKHOUSE": {
    "keyword": "PACKHOUSE",
    "slug": "short59_agri_packhouse_vision_grading",
    "wave": "Wave 3 · Live",
    "title": "How a Local Vision Camera Caught R310,000 in Export Quality Claims Before Packing.",
    "systemName": "Edge Vision Packhouse Grading & Export Defect Prevention Architecture",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Agri-Packhouse Managers, Export Producers & Quality Directors (SA)",
    "outcome": "Catches R310,000+ in export fruit/produce quality defects before packing using low-latency local edge vision cameras.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/packhouse_blueprint.pdf",
    "qualQuestion": "What is your primary export/packing quality risk?",
    "qualOptions": [
      "Port / PPECB rejections",
      "Manual grading drift",
      "Cold-chain disputes",
      "Lot traceability"
    ]
  },
  "THEATRE": {
    "keyword": "THEATRE",
    "slug": "short60_private_hospital_theatre_slate_ai",
    "wave": "Wave 3 · Live",
    "title": "Why Last-Minute Cancelled Theatre Slots Cost Surgical Clinics R180,000 a Week.",
    "systemName": "Surgical Theatre Slate Backfill AI & Pre-Cleared Waitlist Cascade",
    "cluster": "healthcare_ops",
    "clusterLabel": "Clinical Capacity & Theatre Utilisation",
    "icp": "Private Hospital Managers, Surgical Clinic Directors & Theatre Coordinators",
    "outcome": "Recovers R180,000/week in cancelled surgical theatre slots by automatically filling sudden gaps from pre-cleared waitlist patients.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/theatre_blueprint.pdf",
    "qualQuestion": "How many cancelled theatre slots occur at your clinic per month?",
    "qualOptions": [
      "1–3 slots",
      "4–8 slots",
      "9–15 slots",
      "15+ slots"
    ]
  },
  "TRUST": {
    "keyword": "TRUST",
    "slug": "short61_law_firm_trust_account_lpc_audit",
    "wave": "Wave 3 · Live",
    "title": "How 1 Unreconciled Trust Account Transfer Triggered a Legal Practice Council Audit.",
    "systemName": "LPC-Compliant Law Firm Trust Account Daily Reconciliation & Lock",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Managing Partners, Law Firm Financial Managers & Attorneys (SA)",
    "outcome": "Prevents Legal Practice Council audit breaches by automating daily trust-vs-business ledger matching and blocking unverified trust transfers.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/trust_blueprint.pdf",
    "qualQuestion": "How often does your practice currently reconcile trust accounts?",
    "qualOptions": [
      "Monthly manually",
      "Weekly in Excel",
      "Daily with delays",
      "Need audit-ready automation"
    ]
  },
  "BOWSER": {
    "keyword": "BOWSER",
    "slug": "short62_mine_diesel_bowser_rfid_lock",
    "wave": "Wave 3 · Live",
    "title": "How Unmetered Mobile Diesel Bowsers Leak R165,000 a Month on Earthmoving Sites.",
    "systemName": "Mobile Diesel Bowser RFID/PIN Dispensing Lock & Fleet Telemetry",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Mining, Civil Construction & Earthmoving Operations Directors",
    "outcome": "Stops R165,000/month in unmetered site diesel theft by requiring asset RFID + operator PIN verification before every litre dispenses.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/bowser_blueprint.pdf",
    "qualQuestion": "How many litres of diesel does your fleet/site consume monthly?",
    "qualOptions": [
      "Under 10,000L",
      "10,000–50,000L",
      "50,000–150,000L",
      "150,000L+"
    ]
  },
  "ROYALTY": {
    "keyword": "ROYALTY",
    "slug": "short63_franchise_pos_royalty_recon",
    "wave": "Wave 3 · Live",
    "title": "Why Manual POS Franchise Reports Hide R120,000 in Uncollected Monthly Royalties.",
    "systemName": "Automated Multi-Store POS-to-Royalty Reconciliation Engine",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Franchise Directors, QSR/Retail Franchisors & Finance Heads",
    "outcome": "Recovers R120,000+/month in uncollected franchise royalties by pulling raw POS turnover directly instead of trusting manual store reports.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/royalty_blueprint.pdf",
    "qualQuestion": "How many franchise or retail branches report turnover to HQ?",
    "qualOptions": [
      "2–5 branches",
      "6–20 branches",
      "21–50 branches",
      "50+ branches"
    ]
  },
  "FAIS": {
    "keyword": "FAIS",
    "slug": "short64_insurance_broker_fais_roa_vault",
    "wave": "Wave 3 · Live",
    "title": "Why Missing FAIS Records of Advice Cost Insurance Brokers R250,000 at the Ombud.",
    "systemName": "Automated FAIS Record-of-Advice (ROA) Compiler & Ombud Vault",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Insurance Brokerages, Key Individuals & Financial Advisors (SA)",
    "outcome": "Protects brokerages from R250,000+ FAIS Ombud determinations by compiling compliant, timestamped Records of Advice automatically.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/fais_blueprint.pdf",
    "qualQuestion": "How are your advisors currently compiling FAIS Records of Advice?",
    "qualOptions": [
      "Manual Word templates",
      "CRM forms with gaps",
      "Post-call admin staff",
      "Inconsistent across reps"
    ]
  },
  "AIRFREIGHT": {
    "keyword": "AIRFREIGHT",
    "slug": "short65_airfreight_awb_customs_preclear",
    "wave": "Wave 3 · Live",
    "title": "How Pre-Clearing Airfreight Waybills in 45 Seconds Cuts Airport Storage by 82%.",
    "systemName": "45-Second Air Waybill (AWB) OCR & Pre-Touchdown Customs Engine",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Airfreight Forwarders, Importers & Urgent Supply Chain Leads",
    "outcome": "Cuts airport storage charges by 82% by extracting AWB + invoice data upon flight departure and pre-clearing customs before touchdown.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/airfreight_blueprint.pdf",
    "qualQuestion": "How many airfreight shipments do you clear per month?",
    "qualOptions": [
      "1–15/mo",
      "16–50/mo",
      "51–150/mo",
      "150+/mo"
    ]
  },
  "REORDER": {
    "keyword": "REORDER",
    "slug": "short66_b2b_whatsapp_reorder_catalog",
    "wave": "Wave 3 · Live",
    "title": "How a 30-Second WhatsApp Reorder Bot Lifted Repeat Wholesale Orders by 34%.",
    "systemName": "30-Second WhatsApp B2B Reorder Catalogue Bot (OMS + Xero Sync)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Wholesale Distributors, FMCG Suppliers & B2B Trade Sales Directors",
    "outcome": "Lifts repeat wholesale order frequency by 34% by letting busy store owners reorder usual SKUs inside WhatsApp in 30 seconds.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/reorder_blueprint.pdf",
    "qualQuestion": "How do repeat trade buyers currently place orders with you?",
    "qualOptions": [
      "WhatsApp texts to reps",
      "Email / phone calls",
      "Excel order sheets",
      "B2B portal"
    ]
  },
  "DEBTORS": {
    "keyword": "DEBTORS",
    "slug": "short67_debtor_promise_to_pay_watchdog",
    "wave": "Wave 3 · Live",
    "title": "Why 68% of Verbal Debtor Promises-to-Pay Vanish Without an Automated Lock.",
    "systemName": "Automated Promise-to-Pay (PTP) Watchdog & Missed-Payment Lock",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Credit Controllers, Finance Managers & Wholesale MDs",
    "outcome": "Stops 68% of verbal debtor promises-to-pay from vanishing by logging every PTP date and auto-escalating the hour a payment misses.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/debtors_blueprint.pdf",
    "qualQuestion": "What percentage of your debtors book is currently past 30 days?",
    "qualOptions": [
      "Under 10%",
      "10%–25%",
      "25%–40%",
      "Over 40%"
    ]
  },
  "ISO9001": {
    "keyword": "ISO9001",
    "slug": "short68_iso9001_nonconformance_capa_loop",
    "wave": "Wave 3 · Live",
    "title": "Why Paper NCR Clipboards Fail ISO 9001 Audits and Cost R220,000 in Rework.",
    "systemName": "Digital Non-Conformance Report (NCR) & Closed-Loop CAPA Engine",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Quality Managers, Manufacturing Plant Directors & ISO Auditors",
    "outcome": "Eliminates ISO 9001 audit findings and R220,000+ in repeat rework by tracking every NCR from root cause through verified corrective action.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/iso9001_blueprint.pdf",
    "qualQuestion": "How are non-conformances currently logged on your floor?",
    "qualOptions": [
      "Paper clipboards",
      "Excel spreadsheets",
      "Email threads",
      "Legacy QMS"
    ]
  },
  "UTILITIES": {
    "keyword": "UTILITIES",
    "slug": "short69_property_utility_submeter_recon",
    "wave": "Wave 3 · Live",
    "title": "How Unreconciled Municipal Bulk Utility Bills Cost Landlords R135,000 a Month.",
    "systemName": "Municipal Bulk Utility vs. Tenant Sub-Meter Reconciliation Engine",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Commercial Landlords, Property Managers & Shopping Centre Asset Managers",
    "outcome": "Recovers R135,000+/month in unbilled municipal water/electricity leakage by reconciling smart sub-meters against bulk municipal invoices.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/utilities_blueprint.pdf",
    "qualQuestion": "How many commercial/residential units do you sub-meter?",
    "qualOptions": [
      "10–50 units",
      "51–200 units",
      "201–500 units",
      "500+ units"
    ]
  },
  "BOARDPACK": {
    "keyword": "BOARDPACK",
    "slug": "short70_board_pack_sql_narrative_compiler",
    "wave": "Wave 3 · Live",
    "title": "How CFOs Compile Auditable Monthly Board Packs From Xero & Postgres in 4 Minutes.",
    "systemName": "4-Minute Auditable Board-Pack SQL & Narrative Compiler (Xero + PG)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CFOs, Group Financial Directors & Executive Teams",
    "outcome": "Compiles auditable monthly board packs with exact SQL-backed variance commentary in 4 minutes instead of 3 days of PowerPoint copy-paste.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p0_wave3/boardpack_blueprint.pdf",
    "qualQuestion": "How long does your finance team spend compiling monthly board packs?",
    "qualOptions": [
      "1 day",
      "2–3 days",
      "4–5 days",
      "Over a week"
    ]
  },
  "RELAY": {
    "keyword": "RELAY",
    "slug": "concept01_account_relay_waterfall",
    "wave": "Wave 4 · Pillar 1",
    "title": "How I Would Automate Multi-Threaded Enterprise Prospecting Without Burning Accounts",
    "systemName": "Account Relay Waterfall & Standby Queue Engine (CS-01 · Live Laravel CRM (Account Relay Waterfall))",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "B2B Sales Directors, Enterprise AEs & Wholesale Growth Leads",
    "outcome": "Penetrates enterprise retail accounts persistently without spamming 5 executives at once or letting single-threaded accounts die in Excel.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/relay_blueprint.pdf",
    "qualQuestion": "How many enterprise accounts does each sales rep actively prospect?",
    "qualOptions": [
      "Under 25 accounts",
      "25–75 accounts",
      "75–200 accounts",
      "200+ accounts"
    ]
  },
  "INGEST": {
    "keyword": "INGEST",
    "slug": "concept02_trade_list_ingestion",
    "wave": "Wave 4 · Pillar 1",
    "title": "How I Would Automate Trade Directory & LinkedIn List Ingestion Into Ready-to-Call Pipelines",
    "systemName": "Relational Trade Directory & LinkedIn Bulk Ingestion Engine (CS-01 · Live Laravel CRM (LinkedIn Ingestion & Dedup))",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "RevOps Managers, B2B Sales Leaders & Trade Distributors",
    "outcome": "Turns messy LinkedIn & trade directory CSVs into clean, territory-assigned, ready-to-call Stage-1 pipelines in seconds.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/ingest_blueprint.pdf",
    "qualQuestion": "How many raw trade or LinkedIn leads do you import per month?",
    "qualOptions": [
      "Under 250",
      "250–1,000",
      "1,000–5,000",
      "5,000+"
    ]
  },
  "DECK": {
    "keyword": "DECK",
    "slug": "concept03_inbound_sales_decks",
    "wave": "Wave 4 · Pillar 1",
    "title": "How I Would Automate Inbound Trade Enquiries Into Personalized Sales Decks",
    "systemName": "Dynamic Multi-Page B2B Sales Deck & Reply Classifier (CS-05 · OakFloors NY Dynamic Deck & Reply Engine)",
    "cluster": "growth_content",
    "clusterLabel": "Programmatic B2B Content & Outlier Intelligence",
    "icp": "Commercial Sales Directors, Flooring/Building/Trade Distributors & B2B Marketers",
    "outcome": "Delivers personalised multi-page B2B capability decks in under 5 minutes and auto-books discovery calls when buyers reply.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/deck_blueprint.pdf",
    "qualQuestion": "How long does it currently take to reply to a bulk trade enquiry?",
    "qualOptions": [
      "Under 1 hour",
      "Same business day",
      "24–48 hours",
      "3+ days"
    ]
  },
  "KIOSK": {
    "keyword": "KIOSK",
    "slug": "concept04_showroom_walkin_crm",
    "wave": "Wave 4 · Pillar 1",
    "title": "How I Would Automate Trade Showroom & Counter Walk-Ins Into CRM Deals",
    "systemName": "Doorway Computer-Vision Trigger & On-Site Voice Kiosk (CS-05 (OakFloors NY) + CS-06 (Rollin Mopeds Doorway CV))",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Trade Showroom Managers, Counter Distributors & Retail-Trade Directors",
    "outcome": "Captures unmeasured showroom and counter walk-ins into structured CRM deals and post-visit spec packs automatically.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/kiosk_blueprint.pdf",
    "qualQuestion": "Roughly how many trade buyers visit your showroom/counter weekly?",
    "qualOptions": [
      "Under 20",
      "20–50",
      "50–150",
      "150+"
    ]
  },
  "QUOTE": {
    "keyword": "QUOTE",
    "slug": "concept05_rfq_to_quote_engine",
    "wave": "Wave 4 · Pillar 2",
    "title": "How I Would Automate Messy PDF & Excel RFQs Into Validated Quotes in Minutes",
    "systemName": "PDF/Excel RFQ-to-Validated Quote Engine (Master Combined Kit) (CS-03 (PDF-to-SKU Verification) + CS-01 (Quoting Engine))",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Wholesale Sales Directors, Estimators & Commercial Managers",
    "outcome": "Turns messy 80-line PDF/Excel RFQs into validated, margin-checked draft quotes in under 3 minutes so reps quote 5× more volume.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/quote_blueprint.pdf",
    "qualQuestion": "How many multi-line RFQs does your team price per week?",
    "qualOptions": [
      "1–10 RFQs/wk",
      "11–30 RFQs/wk",
      "31–75 RFQs/wk",
      "75+ RFQs/wk"
    ]
  },
  "MARGIN": {
    "keyword": "MARGIN",
    "slug": "concept06_fx_margin_guardrails",
    "wave": "Wave 4 · Pillar 2",
    "title": "How I Would Automate FX, Freight & Margin Guardrails on Every Quote",
    "systemName": "Live FX, Freight & Gross-Margin Floor Guardrail Engine (CS-01 (Margin Rules) + CS-02 (Live Market/FX Ingestion))",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Import/Export MDs, Commercial Directors & Pricing Managers",
    "outcome": "Stops exchange-rate swings and freight surcharges from wiping out net margin before a quote is ever signed.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/margin_blueprint.pdf",
    "qualQuestion": "How often do you update landed costs for FX or freight swings?",
    "qualOptions": [
      "Monthly / static sheet",
      "Weekly manually",
      "Per large quote",
      "Need automated daily sync"
    ]
  },
  "GATES": {
    "keyword": "GATES",
    "slug": "concept07_preclose_stage_gates",
    "wave": "Wave 4 · Pillar 2",
    "title": "How I Would Automate Pre-Close Stage-Gates (Ops, Finance & Legal Sign-Off)",
    "systemName": "Hard Pre-Close Pipeline Stage-Gates (Ops, Finance & Legal) (CS-01 · Commercial Governance & Hard Stage-Gates)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "COOs, Commercial Directors, CFOs & Legal Leads",
    "outcome": "Eliminates post-close delivery surprises and unapproved 60-day terms by locking Closed-Won until all 3 departments approve.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/gates_blueprint.pdf",
    "qualQuestion": "Where do post-close deal surprises hit your business most?",
    "qualOptions": [
      "Unapproved payment terms",
      "Stock / delivery SLA gaps",
      "Uncapped legal liability",
      "All three"
    ]
  },
  "SIGN": {
    "keyword": "SIGN",
    "slug": "concept08_credit_onboarding_contracts",
    "wave": "Wave 4 · Pillar 2",
    "title": "How I Would Automate Trade Account Credit Onboarding & Dual-Signature Supply Agreements",
    "systemName": "Modular Credit Onboarding & Dual-Signature Supply Engine (F2 · Automated Contract Assembly & Dual-Signature Routing)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "Wholesale Operations Heads, Credit Managers & MDs",
    "outcome": "Compresses new wholesale trade account credit onboarding and supply agreements from 2 weeks down to 1 afternoon.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/sign_blueprint.pdf",
    "qualQuestion": "How long does it take to onboard a new wholesale credit account?",
    "qualOptions": [
      "1–2 days",
      "3–7 days",
      "1–2 weeks",
      "Over 2 weeks"
    ]
  },
  "PO": {
    "keyword": "PO",
    "slug": "concept09_po_reconciliation_3min",
    "wave": "Wave 4 · Pillar 3",
    "title": "How I Would Automate 3-Day Spreadsheet PO Reconciliation Down to 3 Minutes",
    "systemName": "3-Minute Buyer PO Reconciliation & Autonomous Supplier Split (CS-03 · Henry Cumines Pty Ltd (3 Days → 3 Minutes))",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Wholesale Distribution MDs, Account Managers & Operations Directors",
    "outcome": "Collapses 3-day manual Excel PO reconciliation down to 3 minutes, delivering 10× order throughput per account manager.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/po_blueprint.pdf",
    "qualQuestion": "How many incoming buyer POs do your account managers process weekly?",
    "qualOptions": [
      "Under 25/wk",
      "25–100/wk",
      "100–300/wk",
      "300+/wk"
    ]
  },
  "VECTOR": {
    "keyword": "VECTOR",
    "slug": "concept10_sku_vector_verification",
    "wave": "Wave 4 · Pillar 3",
    "title": "How I Would Automate SKU & Catalogue Verification Across Millions of Line Items",
    "systemName": "Dual-Layer Exact + 3072D Vector SKU Verification Engine (CS-03 (Millions of SKUs) + CS-02 (ArcadeDB 3072D Vector))",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Supply Chain Directors, Warehouse Heads & High-SKU Distributors",
    "outcome": "Achieves near-zero wrong-SKU shipments and returns across millions of shorthand or legacy catalogue items.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/vector_blueprint.pdf",
    "qualQuestion": "How many active SKUs are in your wholesale catalogue?",
    "qualOptions": [
      "Under 5,000",
      "5,000–50,000",
      "50,000–500,000",
      "500,000+ SKUs"
    ]
  },
  "SPLIT": {
    "keyword": "SPLIT",
    "slug": "concept11_backorder_splitting_chasing",
    "wave": "Wave 4 · Pillar 3",
    "title": "How I Would Automate Multi-Supplier Backorder Splitting & Supplier Chasing",
    "systemName": "Multi-Supplier Backorder Splitting & 24h/48h Auto-Chaser (CS-03 · Autonomous Branching & Supplier PO Compilation)",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Procurement Managers, Import/Export Coordinators & Account Managers",
    "outcome": "Cuts upstream supplier turnaround times and eliminates silent stockouts across multi-timezone factories.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/split_blueprint.pdf",
    "qualQuestion": "How many upstream suppliers do you typically source a backorder from?",
    "qualOptions": [
      "1–3 suppliers",
      "4–8 suppliers",
      "9–20 suppliers",
      "20+ suppliers"
    ]
  },
  "BID": {
    "keyword": "BID",
    "slug": "concept12_supplier_rfq_bidding",
    "wave": "Wave 4 · Pillar 3",
    "title": "How I Would Automate Multi-Supplier RFQ Bidding & Landed-Cost Comparison",
    "systemName": "Threshold-Triggered Multi-Supplier RFQ Bidding & COGS Optimizer (CS-03 · Document Extraction & Procurement Routing)",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Procurement Directors, Buyers & CFOs",
    "outcome": "Directly recovers 3%–8% on Cost of Goods Sold (flowing straight to EBITDA) by automating competitive multi-vendor restock bids.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/bid_blueprint.pdf",
    "qualQuestion": "What is your approximate monthly restock / procurement spend?",
    "qualOptions": [
      "Under R250k/mo",
      "R250k–R1M/mo",
      "R1M–R5M/mo",
      "R5M+/mo"
    ]
  },
  "LOAD": {
    "keyword": "LOAD",
    "slug": "concept13_shipment_consolidation_alerts",
    "wave": "Wave 4 · Pillar 4",
    "title": "How I Would Automate Multi-Supplier Shipment Consolidation & Cutoff Alerts",
    "systemName": "Multi-Supplier Shipment Consolidation & 48h Cutoff Radar (CS-03 · Consolidated Shipment Compilation Ledger)",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Export Managers, Warehouse Directors & Consolidation Leads",
    "outcome": "Maximises container/truck fill rates and eliminates split-shipment freight penalties by catching missing supplier boxes 48h early.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/load_blueprint.pdf",
    "qualQuestion": "How many consolidated trucks or export containers ship monthly?",
    "qualOptions": [
      "1–5/mo",
      "6–20/mo",
      "21–50/mo",
      "50+/mo"
    ]
  },
  "ETA": {
    "keyword": "ETA",
    "slug": "concept14_freight_eta_monitoring",
    "wave": "Wave 4 · Pillar 4",
    "title": "How I Would Automate Freight, Customs & Container ETA Exception Monitoring",
    "systemName": "Autonomous Freight, Customs & Container ETA Worker Fleet (CS-02 · Autonomous Monitoring Worker Fleet & Live Alerts)",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Logistics Directors, Freight Coordinators & Wholesale Account Managers",
    "outcome": "Turns reactive angry-customer freight firefighting into proactive institutional reliability.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/eta_blueprint.pdf",
    "qualQuestion": "How many active containers or carrier shipments do you track at once?",
    "qualOptions": [
      "Under 10",
      "10–30",
      "31–100",
      "100+"
    ]
  },
  "POD": {
    "keyword": "POD",
    "slug": "concept15_pod_ocr_discrepancy",
    "wave": "Wave 4 · Pillar 4",
    "title": "How I Would Automate Proof-of-Delivery (POD) Ingestion & Short-Delivery Discrepancy Flags",
    "systemName": "Mobile Vision-OCR Proof-of-Delivery & Short-Delivery Gate (CS-01 (Deliveries & Invoicing) + IDP/OCR Verification)",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Distribution COOs, Finance Controllers & Fleet Managers",
    "outcome": "Compresses Days Sales Outstanding via same-hour invoicing while catching handwritten shortages before bills go out.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/pod_blueprint.pdf",
    "qualQuestion": "How many days after delivery are VAT invoices currently issued?",
    "qualOptions": [
      "Same day",
      "1–3 days",
      "4–7 days",
      "Over 7 days"
    ]
  },
  "STOCK": {
    "keyword": "STOCK",
    "slug": "concept16_predictive_reorder_deadstock",
    "wave": "Wave 4 · Pillar 4",
    "title": "How I Would Automate Predictive Reorder Points & Dead-Stock Early Warnings",
    "systemName": "Nightly Predictive Reorder Points & >90d Dead-Stock Radar (CS-02 · Multi-Schema PostgreSQL Telemetry & Reporting)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "COOs, Inventory Planners & CFOs",
    "outcome": "Frees working capital trapped in warehouse dead stock while preventing lost revenue from A-grade stockouts.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/stock_blueprint.pdf",
    "qualQuestion": "Roughly how much working capital is sitting in slow-moving stock?",
    "qualOptions": [
      "Under R250k",
      "R250k–R1M",
      "R1M–R5M",
      "R5M+ / Not sure"
    ]
  },
  "AP": {
    "keyword": "AP",
    "slug": "concept17_ap_inbox_to_xero_qb",
    "wave": "Wave 4 · Pillar 5",
    "title": "How I Would Automate Supplier Invoices Straight From Inbox to Xero / QuickBooks",
    "systemName": "Monitored Inbox-to-Xero/QuickBooks Supplier Invoice Pipeline (CS-04B (Email-to-QuickBooks) + CS-01 (Bi-Directional Xero))",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Financial Controllers, AP Managers & Bookkeepers",
    "outcome": "Cuts AP data-entry labour by 80%+ and delivers real-time daily payables and cash-flow visibility.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/ap_blueprint.pdf",
    "qualQuestion": "How many supplier PDF invoices does Finance key in per month?",
    "qualOptions": [
      "Under 100",
      "100–300",
      "300–800",
      "800+"
    ]
  },
  "MATCH": {
    "keyword": "MATCH",
    "slug": "concept18_three_way_matching",
    "wave": "Wave 4 · Pillar 5",
    "title": "How I Would Automate 3-Way Matching (PO vs. Goods Received vs. Supplier Invoice)",
    "systemName": "Deterministic 3-Way Matching Engine (PO vs. GRN vs. Invoice) (CS-01 (Purchase Orders + Xero) + Deterministic Verification)",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "CFOs, Finance Directors & Procurement Controllers",
    "outcome": "Automatically stops supplier overbilling, unapproved price hikes, and duplicate payments before funds leave the bank.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/match_blueprint.pdf",
    "qualQuestion": "How do you currently check supplier bills against POs and GRNs?",
    "qualOptions": [
      "Manual line-by-line",
      "Spot-checks on big bills",
      "Only when issues arise",
      "No formal 3-way match"
    ]
  },
  "PORTAL": {
    "keyword": "PORTAL",
    "slug": "concept19_client_self_service_portals",
    "wave": "Wave 4 · Pillar 5",
    "title": "How I Would Automate Client Approvals With Self-Service Quote & Invoice Portals",
    "systemName": "Self-Service Client Quote & Invoice Portals (/p/quotes, /p/invoices) (CS-01 · Public Client Portals + Live Chat + Xero Sync)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Commercial Directors, Finance Leads & Wholesale Account Teams",
    "outcome": "Accelerates quote approvals 3×, eliminates 'resend invoice' support emails, and speeds up payment collection.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/portal_blueprint.pdf",
    "qualQuestion": "How often do buyers email asking for resent quotes or VAT invoices?",
    "qualOptions": [
      "Daily",
      "Several times a week",
      "Weekly",
      "Rarely"
    ]
  },
  "AR": {
    "keyword": "AR",
    "slug": "concept20_debtors_chasing_credit_locks",
    "wave": "Wave 4 · Pillar 5",
    "title": "How I Would Automate Debtors Chasing, Credit-Limit Locks & Escalations",
    "systemName": "Automated Debtors Chasing, ClickSend SMS & Credit-Limit Locks (CS-01 · Xero Sync + ClickSend SMS/Email + Soft Order Hold)",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Credit Controllers, CFOs & Wholesale MDs",
    "outcome": "Compresses Days Sales Outstanding and prevents shipping to overdue accounts without awkward manual rep chasing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/ar_blueprint.pdf",
    "qualQuestion": "What share of your debtors book is currently past 30 days?",
    "qualOptions": [
      "Under 10%",
      "10%–25%",
      "25%–40%",
      "Over 40%"
    ]
  },
  "CADENCE": {
    "keyword": "CADENCE",
    "slug": "concept21_repeat_order_cadence",
    "wave": "Wave 4 · Pillar 6",
    "title": "How I Would Automate Repeat-Order Cadence Detection ('Your Buyer Is Overdue to Restock')",
    "systemName": "Per-Account Repeat-Order Cadence Heartbeat (1.25× Drift Trigger) (CS-01 · CRM Heartbeat + Automated Task Creation)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Account Management Directors, Sales Leaders & Wholesale Founders",
    "outcome": "Catches silently churning repeat buyers weeks early and lifts annual order frequency at zero CAC.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/cadence_blueprint.pdf",
    "qualQuestion": "How many active repeat trade accounts buy from you monthly?",
    "qualOptions": [
      "Under 50",
      "50–150",
      "150–500",
      "500+"
    ]
  },
  "ORDER": {
    "keyword": "ORDER",
    "slug": "concept22_whatsapp_ai_order_desk",
    "wave": "Wave 4 · Pillar 6",
    "title": "How I Would Automate a WhatsApp / Telegram AI Order Desk for Repeat Trade Buyers",
    "systemName": "24/7 WhatsApp & Telegram AI Trade Order Desk (OMS + Xero) (CS-01 · Gemini Function-Calling Agent + Messaging Tools)",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Wholesale Distributors, Trade Suppliers & FMCG Sales Directors",
    "outcome": "Captures after-hours repeat trade orders with zero portal logins and zero manual chat re-keying.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/order_blueprint.pdf",
    "qualQuestion": "How do most repeat buyers send orders after business hours?",
    "qualOptions": [
      "WhatsApp texts to reps",
      "Email",
      "Wait until morning",
      "B2B portal"
    ]
  },
  "GAP": {
    "keyword": "GAP",
    "slug": "concept23_sku_gap_cross_sell",
    "wave": "Wave 4 · Pillar 6",
    "title": "How I Would Automate SKU-Gap Cross-Sell Alerts for Account Managers",
    "systemName": "Monthly SQL Peer-Basket SKU-Gap Cross-Sell Engine (CS-01 (Brand-Aware Playbooks) + CS-02 (SQL Analytics))",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Sales Directors, Key Account Managers & Commercial Analysts",
    "outcome": "Lifts Average Order Value and share-of-wallet from existing trade accounts at zero customer acquisition cost.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/gap_blueprint.pdf",
    "qualQuestion": "How many distinct product categories do you sell across?",
    "qualOptions": [
      "2–5 categories",
      "6–15 categories",
      "16–40 categories",
      "40+ categories"
    ]
  },
  "CLAIM": {
    "keyword": "CLAIM",
    "slug": "concept24_damaged_goods_claims",
    "wave": "Wave 4 · Pillar 6",
    "title": "How I Would Automate Damaged-Goods Claims & Credit-Note Triage",
    "systemName": "Structured Damaged-Goods Claim Portal & Factory Recovery Engine (CS-01 (Portals & Governance) + CS-03 (Supplier Routing))",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Operations Managers, Quality/Returns Leads & Wholesale MDs",
    "outcome": "Protects buyer loyalty with fast credit notes while recovering 92%+ of supplier defects normally written off.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/claim_blueprint.pdf",
    "qualQuestion": "How do you currently recover damaged stock from upstream factories?",
    "qualOptions": [
      "Manual email chasing",
      "Often written off",
      "Handled quarterly",
      "Structured portal"
    ]
  },
  "CHIEF": {
    "keyword": "CHIEF",
    "slug": "concept25_ai_chief_of_staff_telegram",
    "wave": "Wave 4 · Pillar 7",
    "title": "How I Would Automate an AI Chief of Staff on Telegram for the Managing Director",
    "systemName": "Native Gemini + Telegram AI Chief of Staff (4 Proactivity Modes) (CS-01 · Gemini + Telegram Heartbeat AI Chief of Staff)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "Managing Directors, Founders & COOs",
    "outcome": "Eliminates 5-dashboard fatigue so leadership manages stalled orders and overdue tasks by exception from their phone.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/chief_blueprint.pdf",
    "qualQuestion": "How many dashboards/apps do you check weekly to spot stalled deals?",
    "qualOptions": [
      "2–3 tools",
      "4–5 tools",
      "6+ tools",
      "I rely on staff reports"
    ]
  },
  "OWN": {
    "keyword": "OWN",
    "slug": "concept26_replace_saas_sprawl_sovereign",
    "wave": "Wave 4 · Pillar 7",
    "title": "How I Would Replace 6 Rented Per-Seat SaaS Tools With One Sovereign Managed CRM/OMS",
    "systemName": "Sovereign Managed Laravel CRM/OMS (Replacing 6 Rented SaaS Tools) (CS-01 · Managed Production CRM/OMS (R0 Per-Seat Tax))",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "Mid-Market MDs, CFOs & Operations Directors Paying R20k–R80k/mo in SaaS",
    "outcome": "Replaces 6 rented per-seat SaaS tools with one field-encrypted, POPIA-sovereign platform at R0 per-seat licence tax.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/own_blueprint.pdf",
    "qualQuestion": "What is your approximate monthly spend across CRM & sales SaaS tools?",
    "qualOptions": [
      "Under R15k/mo",
      "R15k–R40k/mo",
      "R40k–R80k/mo",
      "R80k+/mo"
    ]
  },
  "DATA": {
    "keyword": "DATA",
    "slug": "concept27_unified_executive_warehouse",
    "wave": "Wave 4 · Pillar 7",
    "title": "How I Would Automate a Unified Executive Data Warehouse Across ERP, Xero, Teams & Email",
    "systemName": "4-Schema PostgreSQL/Supabase Executive Data Warehouse + RLS (CS-02 (Dubstrata 4-Schema Warehouse) + F2 (6-Platform ETL))",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CFOs, Board Members & Operations Directors",
    "outcome": "Delivers sub-second board-level visibility into true net margin by supplier, reliability, and cash flow across all tools.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/data_blueprint.pdf",
    "qualQuestion": "How long does it take to answer 'true net margin by supplier' today?",
    "qualOptions": [
      "Real-time",
      "A few hours",
      "1–3 days in Excel",
      "We can't easily tell"
    ]
  },
  "SRE": {
    "keyword": "SRE",
    "slug": "concept28_self_healing_sre_ops",
    "wave": "Wave 4 · Pillar 7",
    "title": "How I Would Automate Self-Healing Operations So Your Automations Never Break Silently",
    "systemName": "24/7 Self-Healing SRE, Idempotent DLQ & Synthetic Playwright Stack (CS-02 (Dubstrata Self-Healing SRE) + CS-01 (Uptime/SSL))",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "CTOs, Operations Directors & Founders Burned by Fragile Zaps",
    "outcome": "Transforms fragile agency automations into 99.5%+ uptime production infrastructure that heals before staff notice.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p1_wave4/sre_blueprint.pdf",
    "qualQuestion": "Have fragile Zaps or automations ever failed silently on your team?",
    "qualOptions": [
      "Yes — cost us orders",
      "Yes — minor delays",
      "We don't monitor yet",
      "Building first stack"
    ]
  },
  "COIDA": {
    "keyword": "COIDA",
    "slug": "short22_coida_letter_of_good_standing",
    "wave": "Wave 2 · SA Statutory",
    "title": "How a Lapsed COIDA Letter Froze a R1.8M Mining Contractor Payout.",
    "systemName": "Automated COIDA Letter of Good Standing 60/30/14-Day Watchdog",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Mining, Construction & Industrial Contractors & Compliance Officers (SA)",
    "outcome": "Prevents R1.8M+ contractor payout freezes caused by lapsed COIDA certificates via 60/30/14-day automated renewal lock alerts.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/coida_blueprint.pdf",
    "qualQuestion": "How do you currently track COIDA & contractor certificate renewals?",
    "qualOptions": [
      "Manual calendar",
      "Excel spreadsheet",
      "Only when a client asks",
      "Automated watchdog"
    ]
  },
  "RECON": {
    "keyword": "RECON",
    "slug": "short23_payfast_ozow_xero_recon",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Matching PayFast & Ozow CSVs into Xero Steals 18 Hours a Month.",
    "systemName": "PayFast & Ozow Automated Settlement-to-Xero Reconciliation",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "E-Commerce Finance Leads, Bookkeepers & Financial Controllers (SA)",
    "outcome": "Reclaims 18+ hours/month of manual CSV matching by auto-splitting gateway fees, net payouts, and order references directly into Xero.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/recon_blueprint.pdf",
    "qualQuestion": "How many hours a month go into matching gateway CSVs into Xero?",
    "qualOptions": [
      "Under 4 hours",
      "4–10 hours",
      "10–20 hours",
      "20+ hours"
    ]
  },
  "CIPC": {
    "keyword": "CIPC",
    "slug": "short24_cipc_annual_return_deregistration",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Two Missed CIPC Annual Returns Triggered a Corporate Bank Freeze.",
    "systemName": "CIPC Annual Return & Beneficial Ownership Automated Watchdog",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Company Secretaries, SME Founders & Corporate Governance Leads (SA)",
    "outcome": "Prevents catastrophic CIPC deregistration and corporate bank freezes with automated annual return deadline monitors and proof-of-filing vaults.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/cipc_blueprint.pdf",
    "qualQuestion": "How many legal entities or subsidiaries do you manage CIPC filings for?",
    "qualOptions": [
      "1 entity",
      "2–5 entities",
      "6–20 entities",
      "20+ entities"
    ]
  },
  "VAT201": {
    "keyword": "VAT201",
    "slug": "short25_sars_vat201_input_rejection",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Invalid Supplier Tax Invoices Cost R190,000 in Disallowed VAT.",
    "systemName": "SARS Section 20 Tax Invoice Pre-Audit & VAT201 Input Guard",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Financial Controllers, Tax Managers & AP Leads (SA)",
    "outcome": "Prevents R190,000+ in disallowed SARS VAT201 input claims by auto-verifying supplier VAT numbers, addresses, and invoice fields before payment.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/vat201_blueprint.pdf",
    "qualQuestion": "How many supplier tax invoices do you claim VAT on monthly?",
    "qualOptions": [
      "Under 100",
      "100–300",
      "300–1,000",
      "1,000+"
    ]
  },
  "CUSTOMS": {
    "keyword": "CUSTOMS",
    "slug": "short26_customs_sad500_demurrage",
    "wave": "Wave 2 · SA Statutory",
    "title": "How One Mismatched HS Tariff Code Triggered R85,000 in Port Demurrage.",
    "systemName": "SAD500 & HS Tariff Code Pre-Clearance Validation Engine",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Import/Export Directors, Clearing Agents & Supply Chain Heads (SA)",
    "outcome": "Stops R85,000+ port demurrage penalties by validating HS tariff codes, commercial invoice weights, and packing lists before vessel arrival.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/customs_blueprint.pdf",
    "qualQuestion": "How many import containers or customs entries do you clear monthly?",
    "qualOptions": [
      "1–5/mo",
      "6–20/mo",
      "21–60/mo",
      "60+/mo"
    ]
  },
  "JBCC": {
    "keyword": "JBCC",
    "slug": "short27_jbcc_construction_payment_certificate",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Missing Site Diaries Cost a Subcontractor R320,000 in JBCC Claims.",
    "systemName": "Daily Site-Diary-to-JBCC Payment Certificate Evidence Builder",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Construction Subcontractors, Quantity Surveyors & Project Directors (SA)",
    "outcome": "Prevents R320,000+ in rejected JBCC progress claims by structuring daily site photos, weather logs, and variation orders into auditable claims.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/jbcc_blueprint.pdf",
    "qualQuestion": "How are site diaries and variation orders captured on your projects?",
    "qualOptions": [
      "Paper / WhatsApp",
      "Excel logs",
      "Email threads",
      "Dedicated QMS"
    ]
  },
  "PMB": {
    "keyword": "PMB",
    "slug": "short28_pmb_medical_preauth_denial",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Missing PMB Clinical Motivations Cost Surgical Practices R145,000/Mo.",
    "systemName": "PMB Clinical Motivation Auto-Compiler & ICD-10 Pairing Engine",
    "cluster": "healthcare_ops",
    "clusterLabel": "Clinical Capacity & Theatre Utilisation",
    "icp": "Surgical Practices, Specialists & Medical Practice Administrators (SA)",
    "outcome": "Recovers R145,000+/month in denied surgical pre-authorisations by generating compliant PMB clinical motivations with mandatory supporting evidence.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/pmb_blueprint.pdf",
    "qualQuestion": "How many surgical pre-authorisations does your practice submit weekly?",
    "qualOptions": [
      "1–10/wk",
      "11–30/wk",
      "31–75/wk",
      "75+/wk"
    ]
  },
  "SCORECARD": {
    "keyword": "SCORECARD",
    "slug": "short29_bbbee_supplier_procurement_drop",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Expired Supplier B-BBEE Affidavits Cost a Firm 2 Scorecard Levels.",
    "systemName": "Supplier B-BBEE Affidavit Expiry Tracker & Scorecard Guard",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Procurement Directors, Transformation Managers & B2B Suppliers (SA)",
    "outcome": "Stops expired supplier B-BBEE affidavits from silently dropping your company 2 scorecard levels before verification audits.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/scorecard_blueprint.pdf",
    "qualQuestion": "How many active suppliers feed into your B-BBEE procurement spend?",
    "qualOptions": [
      "Under 50",
      "50–200",
      "200–500",
      "500+"
    ]
  },
  "RESIDENCY": {
    "keyword": "RESIDENCY",
    "slug": "short30_popia_operator_agreement_breach",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Piping Client IDs to Unvetted US SaaS Tools Violates POPIA Section 72.",
    "systemName": "POPIA Section 72 Cross-Border Residency Audit & PII Redaction Gate",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "CTOs, Information Officers & Legal/Compliance Leads (SA)",
    "outcome": "Eliminates illegal cross-border PII leakage to unvetted US SaaS tools with PII redaction gateways and compliant Operator Agreements.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/residency_blueprint.pdf",
    "qualQuestion": "Do your staff currently paste client PII into overseas SaaS/AI tools?",
    "qualOptions": [
      "Yes — unmanaged",
      "Partially restricted",
      "Not sure",
      "Need compliant gateway"
    ]
  },
  "COLDCHAIN": {
    "keyword": "COLDCHAIN",
    "slug": "short31_ppecb_cold_chain_rejection",
    "wave": "Wave 2 · SA Statutory",
    "title": "How a 2-Degree Reefer Spike Cost a Citrus Exporter R480,000 at Port.",
    "systemName": "IoT Reefer Temperature Watchdog & PPECB Excursion Escalation",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Agri-Exporters, Cold-Storage Managers & PPECB Logistics Leads (SA)",
    "outcome": "Prevents R480,000+ port rejections on citrus/perishable exports by catching 2-degree reefer spikes in real time before container sealing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/coldchain_blueprint.pdf",
    "qualQuestion": "How many refrigerated containers or cold-chain loads ship monthly?",
    "qualOptions": [
      "1–10/mo",
      "11–40/mo",
      "41–120/mo",
      "120+/mo"
    ]
  },
  "LEVIES": {
    "keyword": "LEVIES",
    "slug": "short32_body_corporate_csos_levy_arrears",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Manual Levy Arrears Chasing Leaves Property Agents R410,000 Short.",
    "systemName": "CSOS-Compliant Body Corporate Levy Arrears Escalation Engine",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Managing Agents, Body Corporate Trustees & Property Portfolio Directors (SA)",
    "outcome": "Recovers R410,000+ in stagnant body corporate arrears through consistent, legally compliant automated reminders and CSOS escalation packs.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/levies_blueprint.pdf",
    "qualQuestion": "How many sectional-title units or schemes do you manage?",
    "qualOptions": [
      "Under 100 units",
      "100–500 units",
      "500–2,000 units",
      "2,000+ units"
    ]
  },
  "PAYROLL": {
    "keyword": "PAYROLL",
    "slug": "short33_ghost_employee_payroll_audit",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Unsynced Biometric Clocking Hid R78,000/Mo in Ghost Shift Payouts.",
    "systemName": "Biometric Clocking-to-Payroll Ghost-Shift Reconciliation Engine",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "HR Directors, Payroll Managers & Security/Construction/Retail COOs",
    "outcome": "Eliminates R78,000+/month in ghost-employee and buddy-clocking payouts by reconciling biometric attendance directly against payroll runs.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/payroll_blueprint.pdf",
    "qualQuestion": "How many shift or hourly staff are on your monthly payroll?",
    "qualOptions": [
      "Under 50",
      "50–200",
      "200–500",
      "500+"
    ]
  },
  "SOLAR": {
    "keyword": "SOLAR",
    "slug": "short34_solar_ppa_inverter_billing_leak",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Manual Inverter CSV Exports Leaked R115,000 in Commercial Solar PPA Billing.",
    "systemName": "Automated Inverter API-to-Solar PPA Billing & Tariff Engine",
    "cluster": "industrial_ops",
    "clusterLabel": "Industrial Telemetry, Edge Vision & Quality Loops",
    "icp": "Commercial Solar IPPs, Energy Asset Managers & Facilities Directors (SA)",
    "outcome": "Recovers R115,000+ in leaked commercial solar PPA billing caused by manual inverter CSV exports and missed TOU tariff tiers.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/solar_blueprint.pdf",
    "qualQuestion": "How many commercial solar PPA sites do you bill monthly?",
    "qualOptions": [
      "1–5 sites",
      "6–20 sites",
      "21–50 sites",
      "50+ sites"
    ]
  },
  "CREDIT": {
    "keyword": "CREDIT",
    "slug": "short35_wholesale_credit_limit_override",
    "wave": "Wave 2 · SA Statutory",
    "title": "How WhatsApp Credit-Hold Overrides Left a Distributor with R390,000 in Bad Debt.",
    "systemName": "Hard ERP/CRM Credit-Limit Lock & Auditable Director Override",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Wholesale Distribution MDs, Credit Controllers & Finance Directors",
    "outcome": "Prevents R390,000+ bad-debt write-offs caused by informal WhatsApp credit-hold overrides by enforcing hard system locks.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/credit_blueprint.pdf",
    "qualQuestion": "How are credit-hold exceptions currently approved in your business?",
    "qualOptions": [
      "WhatsApp / phone call",
      "Email threads",
      "Verbal at dispatch",
      "Hard system workflow"
    ]
  },
  "CCMA": {
    "keyword": "CCMA",
    "slug": "short36_ccma_lra_disciplinary_evidence_vault",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why Missing Procedural Audit Trails Cost Employers 6 Months' Pay at the CCMA.",
    "systemName": "LRA Schedule 8 Disciplinary Evidence Vault & Fairness Checklist",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "HR Directors, Industrial Relations Leads & SME Owners (SA)",
    "outcome": "Protects employers from 6-month CCMA compensation awards by locking timestamped warnings, hearing notices, and minutes into an immutable vault.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/ccma_blueprint.pdf",
    "qualQuestion": "How are employee warnings and hearing records stored today?",
    "qualOptions": [
      "Paper HR files",
      "Shared Drive / emails",
      "Basic HR tool",
      "Immutable audit vault"
    ]
  },
  "RMA": {
    "keyword": "RMA",
    "slug": "short38_ecommerce_return_rma_fraud",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Unverified Courier Returns Cost an Online Retailer R92,000 a Month.",
    "systemName": "Automated E-Commerce RMA Portal & Courier Fraud Detection Gate",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "E-Commerce Operations Heads, Retail COOs & Returns Managers",
    "outcome": "Stops R92,000/month in fraudulent or unverified e-commerce returns by validating order windows, courier weights, and item condition before refunding.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/rma_blueprint.pdf",
    "qualQuestion": "How many customer return/RMA requests do you process monthly?",
    "qualOptions": [
      "Under 50",
      "50–250",
      "250–1,000",
      "1,000+"
    ]
  },
  "LEASE": {
    "keyword": "LEASE",
    "slug": "short39_commercial_lease_escalation_leak",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Missed 8% Lease Escalation Dates Cost a Property Fund R275,000.",
    "systemName": "Commercial Lease Escalation, Renewal & Deposit Watchdog",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Commercial Property Fund Managers, Asset Managers & Landlords",
    "outcome": "Recovers R275,000+ in missed annual 8% commercial lease escalations by tracking anniversary dates and auto-updating billing ledgers.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/lease_blueprint.pdf",
    "qualQuestion": "How many commercial or retail leases are in your portfolio?",
    "qualOptions": [
      "Under 25",
      "25–100",
      "100–300",
      "300+"
    ]
  },
  "SAAS": {
    "keyword": "SAAS",
    "slug": "short40_SaaS_zombie_license_audit",
    "wave": "Wave 2 · SA Statutory",
    "title": "How Unrevoked Ex-Employee SaaS Seats Burn R38,000 Every Month.",
    "systemName": "Automated Offboarding-to-SaaS License Revocation & Shadow-IT Audit",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CFOs, IT Directors & Operations Heads",
    "outcome": "Eliminates R38,000+/month in zombie ex-employee SaaS seats by syncing HR offboarding directly with identity/SSO and license billing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/saas_blueprint.pdf",
    "qualQuestion": "How many staff seats across SaaS tools does your company pay for?",
    "qualOptions": [
      "Under 25",
      "25–75",
      "75–200",
      "200+"
    ]
  },
  "GUARDRAIL": {
    "keyword": "GUARDRAIL",
    "slug": "short41_sql_injection_prompt_data_exfiltration",
    "wave": "Wave 2 · SA Statutory",
    "title": "How a 12-Word Prompt Injection Dumped an Entire Customer Postgres Table.",
    "systemName": "LLM Prompt-Injection Defense & Read-Only Parameterised SQL Sandbox",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "CTOs, AI Engineers & Security Leads",
    "outcome": "Stops 12-word prompt injections from dumping customer Postgres tables using strict least-privilege DB roles, schema allowlists, and output filters.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/guardrail_blueprint.pdf",
    "qualQuestion": "Are you connecting LLMs to internal customer or financial databases?",
    "qualOptions": [
      "Yes — live today",
      "Building a pilot",
      "Planning this quarter",
      "Auditing security"
    ]
  },
  "TREASURY": {
    "keyword": "TREASURY",
    "slug": "short42_friday_cashflow_forecast_blindness",
    "wave": "Wave 2 · SA Statutory",
    "title": "Why 13-Week Cashflow Spreadsheets Are Already Stale by Tuesday Noon.",
    "systemName": "Live 13-Week Rolling Cashflow SQL Model (Xero + Bank Feeds)",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "CFOs, Treasury Managers & Managing Directors",
    "outcome": "Replaces stale Tuesday-noon cashflow spreadsheets with a live automated 13-week liquidity model updated daily from accounting and orders.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p2_wave2/treasury_blueprint.pdf",
    "qualQuestion": "How often is your 13-week cashflow forecast updated today?",
    "qualOptions": [
      "Weekly in Excel",
      "Monthly manually",
      "Ad-hoc when tight",
      "Need daily live model"
    ]
  },
  "INTAKE": {
    "keyword": "INTAKE",
    "slug": "short01_speed_to_lead_leak",
    "wave": "Wave 1 · Core Engineering",
    "title": "14 Missed WhatsApps. R28,000 Lost. The 5-Minute Lead Law.",
    "systemName": "5-Minute Webhook-to-WhatsApp Lead Intake & SLA Router",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "B2B Sales Directors, Agency Founders & Service MDs",
    "outcome": "Eliminates lead decay after 5 minutes by replacing manual inbox triage with instant webhook capture and automated WhatsApp/CRM routing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/intake_blueprint.pdf",
    "qualQuestion": "How quickly does your team respond to inbound leads today?",
    "qualOptions": [
      "Under 5 minutes",
      "1–4 hours",
      "Same business day",
      "Next day or later"
    ]
  },
  "OUTBOX": {
    "keyword": "OUTBOX",
    "slug": "short02_zapier_polling_tax",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Fragile No-Code Chains Silently Drop 11% of Payloads.",
    "systemName": "PostgreSQL Transactional Outbox & Idempotent Retry Bus",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "Operations Directors, RevOps Leads & Technical Founders",
    "outcome": "Stops silent 11% payload drops in multi-step no-code Zaps using a durable database outbox with idempotency keys.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/outbox_blueprint.pdf",
    "qualQuestion": "How many multi-step automations or Zaps run in your business?",
    "qualOptions": [
      "1–5 flows",
      "6–15 flows",
      "16–40 flows",
      "40+ flows"
    ]
  },
  "SCHEMA": {
    "keyword": "SCHEMA",
    "slug": "short03_invoice_ocr_hallucination",
    "wave": "Wave 1 · Core Engineering",
    "title": "68 Hours a Month Re-Typing PDFs. The Schema Validation Rule.",
    "systemName": "Pydantic Invoice OCR & Deterministic Math Checksum Gate",
    "cluster": "finance_ctrl",
    "clusterLabel": "Finance Controls, Fraud Prevention & Reconciliation",
    "icp": "Finance Managers, AP Leads & Operations Heads",
    "outcome": "Cuts 68+ hours/month of manual PDF re-typing while blocking LLM hallucinated totals via deterministic checksum verification.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/schema_blueprint.pdf",
    "qualQuestion": "How many PDF invoices or documents does your team re-type monthly?",
    "qualOptions": [
      "Under 50",
      "50–250",
      "250–1,000",
      "1,000+"
    ]
  },
  "CACHE": {
    "keyword": "CACHE",
    "slug": "short04_token_cache_burn",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Cold Context Windows Burn 90% of Your Enterprise AI Budget.",
    "systemName": "Prompt-Cache Architecture & Sliding-Window Token Optimiser",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "CTOs, AI Engineering Leads & SaaS Founders",
    "outcome": "Slashes enterprise LLM API spend by up to 90% by eliminating redundant cold context-window token burn.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/cache_blueprint.pdf",
    "qualQuestion": "What is your team's approximate monthly LLM API bill?",
    "qualOptions": [
      "Under R10k",
      "R10k–R50k",
      "R50k–R200k",
      "R200k+"
    ]
  },
  "POPIA": {
    "keyword": "POPIA",
    "slug": "short05_popia_section71_hitl",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Unchecked AI Credit & HR Scoring Violates POPIA Section 71.",
    "systemName": "POPIA Section 71 Human-in-the-Loop Automated Decision Gate",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Compliance Officers, HR Directors & Credit Risk Leads (SA)",
    "outcome": "Prevents illegal automated-only credit/HR rejections by inserting mandatory Human-in-the-Loop review gates and immutable audit logs.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/popia_blueprint.pdf",
    "qualQuestion": "Where does your organisation use automated scoring or screening?",
    "qualOptions": [
      "Credit approvals",
      "HR / recruitment",
      "Client onboarding",
      "Planning rollout"
    ]
  },
  "ONBOARD": {
    "keyword": "ONBOARD",
    "slug": "short06_client_onboarding_chasm",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 6-Day Manual Client Onboarding Triggers 34% Early Churn.",
    "systemName": "Zero-Touch Day-1 Client Onboarding & Portal Provisioner",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "B2B Agency Founders, SaaS CS Leads & Wholesale Ops",
    "outcome": "Compresses 6-day manual client onboarding down to minutes, preventing 34% early buyer remorse and churn.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/onboard_blueprint.pdf",
    "qualQuestion": "How long does it currently take to onboard a newly signed client?",
    "qualOptions": [
      "Same day",
      "2–3 days",
      "4–7 days",
      "Over a week"
    ]
  },
  "HYBRID": {
    "keyword": "HYBRID",
    "slug": "short07_rag_vector_hallucination",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Naive Vector-Only RAG Invents Fake Policy Clauses.",
    "systemName": "Hybrid BM25 + Vector Retrieval & Citation-Locked RAG Engine",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "Legal Tech Leads, Knowledge Managers & AI Architects",
    "outcome": "Stops naive vector-only RAG from inventing fake policy clauses by enforcing exact keyword + semantic hybrid retrieval with mandatory source citations.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/hybrid_blueprint.pdf",
    "qualQuestion": "What documents are you searching with AI today?",
    "qualOptions": [
      "Contracts & MSAs",
      "Internal SOPs & policies",
      "Product catalogues",
      "Client support history"
    ]
  },
  "UPSERT": {
    "keyword": "UPSERT",
    "slug": "short08_crm_duplicate_rot",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Unvalidated Web-to-CRM Syncs Corrupt 22% of Pipeline Records.",
    "systemName": "Deterministic CRM Upsert & Canonical Identity Deduplication",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "RevOps Managers, Sales Leaders & CRM Admins",
    "outcome": "Prevents 22% CRM pipeline corruption and duplicate rep collisions using strict domain/email/phone upsert constraints.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/upsert_blueprint.pdf",
    "qualQuestion": "Roughly what percentage of your CRM contains duplicate records?",
    "qualOptions": [
      "Under 5%",
      "5%–15%",
      "15%–30%",
      "Over 30% / Not sure"
    ]
  },
  "TENDER": {
    "keyword": "TENDER",
    "slug": "short09_scm_tender_bid_pack",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 38% of Public & Enterprise Tenders Fail on Statutory Admin.",
    "systemName": "Automated Statutory Bid-Pack Vault (SARS PIN, CSD, CIPC, B-BBEE)",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Bid Managers, Construction/SCM Directors & Public-Sector Suppliers (SA)",
    "outcome": "Eliminates 38% administrative tender disqualifications by auto-verifying and refreshing statutory certificates 30 days before expiry.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/tender_blueprint.pdf",
    "qualQuestion": "How many public or enterprise tenders does your firm submit monthly?",
    "qualOptions": [
      "1–3/month",
      "4–10/month",
      "11–25/month",
      "25+/month"
    ]
  },
  "VOICENOTE": {
    "keyword": "VOICENOTE",
    "slug": "short10_whatsapp_voice_note_triage",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 78% of Field Sales Context Dies Inside WhatsApp Voice Notes.",
    "systemName": "WhatsApp Voice-Note-to-CRM Context Extraction Pipeline",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Field Sales Directors, Wholesale Reps & Trade Distributors",
    "outcome": "Captures the 78% of field sales context trapped in WhatsApp voice notes and structures it into CRM deals and follow-up tasks automatically.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/voicenote_blueprint.pdf",
    "qualQuestion": "How many field sales updates currently live inside WhatsApp chats?",
    "qualOptions": [
      "A few daily",
      "Dozens daily",
      "Hundreds weekly",
      "Most of our sales ops"
    ]
  },
  "INVENTORY": {
    "keyword": "INVENTORY",
    "slug": "short11_erp_stock_out_latency",
    "wave": "Wave 1 · Core Engineering",
    "title": "How Overnight CSV Batch Syncs Trigger R240,000 in Oversold Stock.",
    "systemName": "Event-Driven Atomic Stock Reservation Ledger (Zero Oversells)",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "E-Commerce Directors, Wholesale COOs & Warehouse Managers",
    "outcome": "Eliminates R240,000+ in oversold stock caused by overnight CSV batch syncs by moving to event-driven atomic stock reservations.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/inventory_blueprint.pdf",
    "qualQuestion": "How often does your ERP/storefront currently sync stock levels?",
    "qualOptions": [
      "Overnight CSV batch",
      "Hourly",
      "Manual updates",
      "Real-time API"
    ]
  },
  "REDLINE": {
    "keyword": "REDLINE",
    "slug": "short12_legal_contract_redline_bottleneck",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Legal MSA Redlines Stall Enterprise Deal Velocity by 11 Days.",
    "systemName": "Playbook-Anchored MSA Redline & Fallback Clause Engine",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Commercial Directors, General Counsel & Enterprise Account Execs",
    "outcome": "Cuts 11-day enterprise legal redline bottlenecks down to hours using pre-approved fallback clauses and automated risk-tier routing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/redline_blueprint.pdf",
    "qualQuestion": "How many days do legal redlines typically stall enterprise deals?",
    "qualOptions": [
      "1–3 days",
      "4–7 days",
      "8–14 days",
      "Over 2 weeks"
    ]
  },
  "CLAIMS": {
    "keyword": "CLAIMS",
    "slug": "short13_medical_aid_claim_rejection",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 19% of Healthcare Practice Claims Bounce on ICD-10 Mismatches.",
    "systemName": "Pre-Submission ICD-10 & Medical Aid Claim Validation Engine",
    "cluster": "healthcare_ops",
    "clusterLabel": "Clinical Capacity & Theatre Utilisation",
    "icp": "Medical Practice Managers, Healthcare Billing Leads & Clinic Directors (SA)",
    "outcome": "Stops 19% medical aid claim bounces before submission by validating ICD-10 codes, tariff modifiers, and member eligibility upfront.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/claims_blueprint.pdf",
    "qualQuestion": "What is your practice's current medical aid claim rejection rate?",
    "qualOptions": [
      "Under 5%",
      "5%–12%",
      "12%–20%",
      "Over 20%"
    ]
  },
  "DAG": {
    "keyword": "DAG",
    "slug": "short14_multi_agent_infinite_loop",
    "wave": "Wave 1 · Core Engineering",
    "title": "How Unbounded Autonomous Agents Burn $420 in Recursive Retry Loops.",
    "systemName": "Bounded DAG Agent State-Machine & Spend Circuit-Breaker",
    "cluster": "ai_eng",
    "clusterLabel": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "icp": "AI Engineers, Automation Architects & Technical Founders",
    "outcome": "Prevents $420+ runaway autonomous agent retry loops using deterministic DAG budgets, step caps, and dead-letter halts.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/dag_blueprint.pdf",
    "qualQuestion": "What is your biggest concern with autonomous AI agents?",
    "qualOptions": [
      "Infinite retry loops",
      "Runaway API spend",
      "Wrong tool actions",
      "Zero observability"
    ]
  },
  "DELIVERABILITY": {
    "keyword": "DELIVERABILITY",
    "slug": "short15_cold_outbound_domain_burn",
    "wave": "Wave 1 · Core Engineering",
    "title": "How Unfiltered AI Outbound Torches Your Primary Corporate Domain.",
    "systemName": "Secondary-Domain Outbound Isolation & DMARC/Postmaster Guard",
    "cluster": "growth_content",
    "clusterLabel": "Programmatic B2B Content & Outlier Intelligence",
    "icp": "Outbound Sales Leaders, Growth Founders & RevOps Managers",
    "outcome": "Protects your primary corporate invoicing domain from spam blacklists by isolating outbound warmup, volume caps, and bounce-rate kill switches.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/deliverability_blueprint.pdf",
    "qualQuestion": "Are you currently sending cold outbound from your primary domain?",
    "qualOptions": [
      "Yes — primary domain",
      "Secondary domains",
      "Not sure",
      "Planning outbound"
    ]
  },
  "FLEET": {
    "keyword": "FLEET",
    "slug": "short16_fleet_fuel_recon_leak",
    "wave": "Wave 1 · Core Engineering",
    "title": "How Unmatched Paper Fuel Slips Leak R64,000 a Month in Fleet Ops.",
    "systemName": "Fuel-Slip OCR + GPS Odometer Variance Reconciliation Engine",
    "cluster": "logistics_ops",
    "clusterLabel": "Freight Pre-Clearance & Supply Chain Velocity",
    "icp": "Logistics Directors, Fleet Managers & Transport COOs",
    "outcome": "Stops R64,000/month in fleet fuel leakage by cross-matching paper fuel slips against GPS mileage and tank capacity automatically.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/fleet_blueprint.pdf",
    "qualQuestion": "How many vehicles or heavy assets are in your operational fleet?",
    "qualOptions": [
      "Under 10",
      "10–35",
      "35–100",
      "100+"
    ]
  },
  "TELEMETRY": {
    "keyword": "TELEMETRY",
    "slug": "short17_bi_dashboard_graveyard",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 86% of R500,000 BI Dashboards Become Executive Graveyards.",
    "systemName": "Exception-Driven Executive Push Telemetry (Replacing Passive BI)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CEOs, CFOs, COOs & BI Leads",
    "outcome": "Replaces unused R500k passive BI dashboards with automated anomaly alerts pushed directly to Slack/Telegram/WhatsApp when KPIs drift.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/telemetry_blueprint.pdf",
    "qualQuestion": "How often do executives actually log into your BI dashboards?",
    "qualOptions": [
      "Daily",
      "Weekly",
      "Monthly",
      "Almost never"
    ]
  },
  "FICA": {
    "keyword": "FICA",
    "slug": "short18_kyc_fica_onboarding_drop",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why 46% of High-Intent Clients Abandon Manual FICA & KYC Portals.",
    "systemName": "90-Second Guided Mobile FICA & KYC Verification Pipeline",
    "cluster": "compliance_ai",
    "clusterLabel": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "icp": "Financial Services Directors, Wealth/Legal/Property Compliance Leads (SA)",
    "outcome": "Recovers the 46% of high-intent clients who abandon manual FICA portals by turning onboarding into a 90-second guided capture flow.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/fica_blueprint.pdf",
    "qualQuestion": "What percentage of prospects drop off during manual FICA checks?",
    "qualOptions": [
      "Under 15%",
      "15%–30%",
      "30%–50%",
      "Over 50% / Not tracked"
    ]
  },
  "TRIAGE": {
    "keyword": "TRIAGE",
    "slug": "short19_support_ticket_ping_pong",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why Enterprise Support Tickets Bounce Across 4 Teams for 38 Hours.",
    "systemName": "Deterministic AI Support Ticket Triage & SLA Routing Engine",
    "cluster": "cx_retention",
    "clusterLabel": "24/7 Conversational Capture & Client Retention",
    "icp": "Customer Support Heads, MSP Directors & Ops Managers",
    "outcome": "Ends 38-hour internal support ticket ping-pong across 4 teams with instant AI triage, entity lookup, and direct specialist routing.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/triage_blueprint.pdf",
    "qualQuestion": "How many hours do complex support tickets bounce between teams?",
    "qualOptions": [
      "Under 4 hours",
      "4–12 hours",
      "12–36 hours",
      "Over 36 hours"
    ]
  },
  "LEDGER": {
    "keyword": "LEDGER",
    "slug": "short20_spreadsheet_version_chaos",
    "wave": "Wave 1 · Core Engineering",
    "title": "How 'Budget_Final_v7_REAL.xlsx' Silently Corrupts Board Reporting.",
    "systemName": "Single-Source-of-Truth SQL Financial Ledger (Killing Final_v7.xlsx)",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "CFOs, Financial Controllers & Board Reporting Teams",
    "outcome": "Eliminates board-pack version chaos by replacing manually emailed Excel files with a versioned, read-only SQL reporting layer.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/ledger_blueprint.pdf",
    "qualQuestion": "How many versioned Excel spreadsheets feed your board pack today?",
    "qualOptions": [
      "1–3 files",
      "4–10 files",
      "11–25 files",
      "Too many to count"
    ]
  },
  "SLA": {
    "keyword": "SLA",
    "slug": "short21_vendor_sla_breach_blindness",
    "wave": "Wave 1 · Core Engineering",
    "title": "Why You Only Discover SLA Breaches When Your Biggest Client Cancels.",
    "systemName": "75% Early-Warning Vendor & Client SLA Breach Watchdog",
    "cluster": "exec_ops",
    "clusterLabel": "Executive Visibility, Lean Ops & Board Telemetry",
    "icp": "COO, Procurement Heads & Enterprise Account Directors",
    "outcome": "Stops you from discovering SLA breaches only when a flagship client cancels by tracking live clock timers and alerting at 75% SLA consumption.",
    "pdfUrl": "https://mnrcnutbhgkqsvsvgoew.supabase.co/storage/v1/object/public/alchemy-assets/p3_wave1/sla_blueprint.pdf",
    "qualQuestion": "How do you currently learn about a client or vendor SLA breach?",
    "qualOptions": [
      "Client complains",
      "Month-end review",
      "Manual tracking",
      "Automated live alerts"
    ]
  }
};

export const BLUEPRINT_EMAIL_SEQUENCES: Record<string, ClusterSequence> = {
  "ai_ops": {
    "cluster_name": "AI Operating Systems & Team Codification",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "ai_eng": {
    "cluster_name": "Enterprise AI Engineering & Cost/Reliability Guardrails",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "compliance_ai": {
    "cluster_name": "Regulated AI, POPIA & Statutory Evidence Vaults",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "finance_ctrl": {
    "cluster_name": "Finance Controls, Fraud Prevention & Reconciliation",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "exec_ops": {
    "cluster_name": "Executive Visibility, Lean Ops & Board Telemetry",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "cx_retention": {
    "cluster_name": "24/7 Conversational Capture & Client Retention",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "growth_content": {
    "cluster_name": "Programmatic B2B Content & Outlier Intelligence",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "industrial_ops": {
    "cluster_name": "Industrial Telemetry, Edge Vision & Quality Loops",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "healthcare_ops": {
    "cluster_name": "Clinical Capacity & Theatre Utilisation",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  },
  "logistics_ops": {
    "cluster_name": "Freight Pre-Clearance & Supply Chain Velocity",
    "cadence_days": [
      0,
      1,
      2,
      4,
      6,
      9,
      12,
      16
    ],
    "emails": [
      {
        "step": 0,
        "delay_days": 0,
        "subject": "Your {{keyword}} Architecture Blueprint is ready (+ quick walkthrough)",
        "goal": "Instant asset delivery + direct 15-min Architecture Scoping Call booking link",
        "body": "Hi {{first_name}},\n\nHere is the direct link to your **{{blueprint_title}}** PDF blueprint: {{download_url}}\n\nYou noted that {{company_name}} is currently dealing with {{qual_answer}} — Page 2 has the exact plug-in cost calculator, and Page 4 has the copy-paste PostgreSQL guardrail schema.\n\nIf you want to walk through how this plugs into {{current_stack}} without disrupting your team, you can grab a 15-minute Architecture Scoping Call here: {{booking_url}}\n\nBest,\nMuzi · Techfusion Automata"
      },
      {
        "step": 1,
        "delay_days": 1,
        "subject": "Did you run the Page 2 leakage math for {{company_name}}?",
        "goal": "Anchor the Rand/hour cost of inaction in their specific business",
        "body": "Hi {{first_name}},\n\nQuick check-in — most leaders in {{cluster_name}} who grab the {{keyword}} blueprint are surprised when they plug their own monthly volume into the Page 2 formula.\n\nUsually the real cost isn't the admin hours — it's the silent exceptions that slip through before anyone notices.\n\nReply with your rough monthly volume if you'd like me to sanity-check the ROI math for {{company_name}}, or book 15 minutes here: {{booking_url}}"
      },
      {
        "step": 2,
        "delay_days": 2,
        "subject": "The #1 mistake teams make when building {{keyword}} in-house",
        "goal": "Demonstrate senior engineering depth & why fragile Zaps fail",
        "body": "Hi {{first_name}},\n\nIf your team decides to build the {{keyword}} pipeline internally, watch out for one trap: skipping the idempotency & validation gate on Page 3.\n\nWithout a deterministic schema check in PostgreSQL, one bad webhook or malformed PDF quietly corrupts downstream records inside {{current_stack}}.\n\nHappy to review your team's draft architecture on a quick 15-min call if helpful: {{booking_url}}"
      },
      {
        "step": 3,
        "delay_days": 4,
        "subject": "How we took a similar bottleneck from 3 days down to 3 minutes",
        "goal": "Social proof anchor (Henry Cumines / CS-01 / CS-02 production results)",
        "body": "Hi {{first_name}},\n\nA quick production benchmark relevant to {{cluster_name}}:\n\nWe recently deployed a deterministic intake & validation architecture for a wholesale distribution client that collapsed a 3-business-day manual spreadsheet bottleneck down to under 3 minutes — with zero extra admin hires and zero per-seat SaaS tax.\n\nIf you want to see what a 14-day deployment looks like for {{company_name}}, grab a slot here: {{booking_url}}"
      },
      {
        "step": 4,
        "delay_days": 6,
        "subject": "Why we never build this on rented per-seat SaaS glue",
        "goal": "Differentiate sovereign managed engineering vs. fragile Zapier/SaaS bloat",
        "body": "Hi {{first_name}},\n\nMost agencies glue 5 rented SaaS tools together with fragile Zaps that break silently on Friday night.\n\nWe deploy sovereign, field-encrypted systems directly into your own infrastructure (PostgreSQL, Laravel/Next.js, direct Xero/ERP APIs) so you own 100% of your data with R0 per-seat licence tax.\n\nWorth a 15-minute scoping chat for {{company_name}}? {{booking_url}}"
      },
      {
        "step": 5,
        "delay_days": 9,
        "subject": "Quick question on your {{current_stack}} setup",
        "goal": "Low-friction binary reply trigger to spark conversation",
        "body": "Hi {{first_name}},\n\nAre you planning to tackle the {{keyword}} bottleneck inside {{company_name}} this quarter, or is another operational fire higher priority right now?\n\nJust hit reply with a one-liner — even if it's a different bottleneck, I probably have a blueprint for it."
      },
      {
        "step": 6,
        "delay_days": 12,
        "subject": "14-day deployment roadmap for {{company_name}}",
        "goal": "De-risk the engagement with clear 2-week delivery milestones",
        "body": "Hi {{first_name}},\n\nIn case you're wondering what it actually takes to go live with {{keyword}} without derailing your staff:\n\n- Days 1–3: Architecture lock & read-only integration with {{current_stack}}\n- Days 4–10: Deterministic validation gates, audit ledger & exception alerts\n- Days 11–14: Shadow-mode QA against real data → full production cutover\n\nBook a 15-minute scoping call here if you'd like us to map this out: {{booking_url}}"
      },
      {
        "step": 7,
        "delay_days": 16,
        "subject": "Closing the loop on your {{keyword}} blueprint",
        "goal": "Polite breakup email leaving the door open",
        "body": "Hi {{first_name}},\n\nI'll stop following up after this so I don't clutter your inbox. Your {{keyword}} blueprint link stays active whenever your team is ready: {{download_url}}\n\nWhenever {{company_name}} is ready to turn manual bottlenecks into sovereign, self-healing infrastructure, just reply to this email or grab 15 minutes here: {{booking_url}}\n\nAll the best,\nMuzi · Techfusion Automata"
      }
    ]
  }
};

export function getBlueprintByKeyword(rawKeyword: string): BlueprintEntry | null {
  const key = rawKeyword.trim().toUpperCase();
  return BLUEPRINTS_CATALOG[key] ?? null;
}

export function interpolateTemplate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ")
    .replace(/\{\{(\w+)\}\} /g, (_, k) => (vars[k] ?? "") + " ");
}
