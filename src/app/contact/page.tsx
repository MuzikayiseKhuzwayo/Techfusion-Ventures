"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const PREFILL_PRESETS: Record<
  string,
  { badge: string; subject: string; message: string }
> = {
  "digital-transformation": {
    badge: "PILLAR 01 // DIGITAL TRANSFORMATION",
    subject: "Service Inquiry: Digital Transformation (Pillar 01)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing a Digital Transformation engagement (business process digitization, workflow re-engineering, SOP automation, or legacy system modernization).\n\nOrganization / Department:\nKey Objectives & Timeline:",
  },
  "automation-ai": {
    badge: "PILLAR 02 // AUTOMATION & INTELLIGENT AI",
    subject: "Service Inquiry: Automation & Intelligent AI Systems (Pillar 02)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing an Automation & Intelligent AI Systems engagement (BPA/RPA, multi-agent orchestration, Intelligent Document Processing IDP/OCR, or executive decision-support).\n\nOrganization / Department:\nKey Objectives & Timeline:",
  },
  "data-engineering": {
    badge: "PILLAR 03 // DATA ENGINEERING & ANALYTICS",
    subject: "Service Inquiry: Data Engineering & Advanced Analytics (Pillar 03)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing a Data Engineering & Advanced Analytics engagement (data warehouse architecture, real-time/batch ETL/ELT pipelines, BI executive dashboards, or POPIA data governance).\n\nOrganization / Department:\nKey Objectives & Timeline:",
  },
  "custom-software": {
    badge: "PILLAR 04 // CUSTOM SOFTWARE DEVELOPMENT",
    subject: "Service Inquiry: Custom Software Development (Pillar 04)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing a Custom Software Development engagement (cloud-native web/mobile applications, REST/GraphQL APIs, or secure client/citizen portals).\n\nOrganization / Department:\nKey Objectives & Timeline:",
  },
  "cloud-integration": {
    badge: "PILLAR 05 // CLOUD & SYSTEMS INTEGRATION",
    subject: "Service Inquiry: Cloud & Systems Integration (Pillar 05)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing a Cloud & Systems Integration engagement (Microsoft 365 & Power Platform, PostgreSQL/Supabase backends, ERP/CRM integrations, or Identity & Access Management).\n\nOrganization / Department:\nKey Objectives & Timeline:",
  },
  "government-solutions": {
    badge: "PILLAR 06 // GOVERNMENT & PUBLIC-SECTOR SOLUTIONS",
    subject: "Service Inquiry: Government & Public-Sector Solutions (Pillar 06)",
    message:
      "Hello Techfusion Automata team,\n\nWe are interested in discussing a Government / Public-Sector / Development Agency engagement (Management Information Systems, case/grant/complaint systems, EDRMS, or M&E platforms).\n\nDepartment / Agency:\nMandate / ToR Reference:",
  },
  "bid-pack": {
    badge: "PRIVATE SCM & TENDER DESK",
    subject: "SCM & Procurement Request: Full Statutory & Bid Verification Pack",
    message:
      "Hello Techfusion Automata Executive Desk,\n\nWe are requesting private access to your statutory verification and tender qualification pack (CIPC registration, SARS compliance pin, B-BBEE Level 1 certificate, and Capability Statement) for vendor onboarding / tender adjudication.\n\nIssuing Entity / Organization:\nTender / RFQ Reference (if applicable):",
  },
  "corporate-profile": {
    badge: "PRIVATE DOCUMENT REQUEST",
    subject: "Document Request: Corporate Profile & Capability Statement",
    message:
      "Hello Techfusion Automata Executive Desk,\n\nWe would like to request a copy of your Corporate Profile & Capability Statement.\n\nOrganization / Department:\nIntended Scope:",
  },
  "ai-governance": {
    badge: "PRIVATE GOVERNANCE REQUEST",
    subject: "Document Request: AI & Security Governance Charter (ISO 42001 / 27001 / NIST)",
    message:
      "Hello Techfusion Automata Executive Desk,\n\nWe would like to request controlled access to your AI Governance Summary (NIST AI RMF 1.0 & ISO/IEC 42001) and ISMS Statement of Applicability overview for due diligence.\n\nOrganization / Department:",
  },
  "paia-popia": {
    badge: "PRIVATE COMPLIANCE REQUEST",
    subject: "Document Request: PAIA Sec 51 & POPIA Sec 71 Compliance Framework",
    message:
      "Hello Techfusion Automata Executive Desk,\n\nWe would like to request access to your PAIA Section 51 Manual and POPIA Section 71 automated decision-making safeguards documentation.\n\nOrganization / Capacity:",
  },
  "oem-bbbee-sars": {
    badge: "PRIVATE STATUTORY VERIFICATION",
    subject: "Document Request: Statutory Certificates (B-BBEE, SARS & OEM Accreditations)",
    message:
      "Hello Techfusion Automata Executive Desk,\n\nWe would like to verify your statutory compliance certificates (B-BBEE Level 1 EME, SARS Tax Compliance status, and OEM Partner credentials) for procurement vetting.\n\nOrganization / SCM Officer:",
  },
};

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceKey = searchParams.get("service") || searchParams.get("doc") || "";
  const preset = PREFILL_PRESETS[serviceKey];

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [subject, setSubject] = useState(preset?.subject || "");
  const [message, setMessage] = useState(preset?.message || "");

  useEffect(() => {
    if (preset) {
      setSubject(preset.subject);
      setMessage(preset.message);
    }
  }, [preset]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-light to-accent-dark" />

      <div className="text-center mb-10">
        {preset ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 border border-surface-200 text-accent-light font-mono text-xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{preset.badge}</span>
          </div>
        ) : null}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Initiate Engagement
        </h1>
        <p className="text-foreground/70 text-sm sm:text-base max-w-lg mx-auto">
          All inquiries, tender invitations, and statutory verification dispatches
          are handled privately through our executive desk.
        </p>
      </div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Message Dispatched</h2>
          <p className="text-foreground/70 mb-6">
            Thank you for reaching out. Our executive desk will respond shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2 rounded-md bg-surface-200 text-foreground hover:bg-surface-100 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground/80"
              >
                Name &amp; Organization
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
                placeholder="Your name / organization"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground/80"
              >
                Corporate or Official Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
                placeholder="your@organization.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground/80"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
              placeholder="What is this regarding?"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground/80"
            >
              Message / Scope Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all resize-none"
              placeholder="How can we accelerate your mandate or project?"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-md">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">
                Something went wrong. Please try again later.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-lg bg-accent-light text-background font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            ) : (
              <>
                Send Private Inquiry
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex items-center justify-center">
      <Suspense
        fallback={
          <div className="w-full max-w-2xl glass-panel rounded-2xl p-12 text-center text-foreground/60">
            Loading inquiry form...
          </div>
        }
      >
        <ContactFormContent />
      </Suspense>
    </div>
  );
}
