import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise Cognition Infrastructure & Offer Stacks",
  description:
    "Model-agnostic Enterprise Cognition Infrastructure and documented three-layer offer stacks across all six Techfusion Automata service pillars. Instant specification dispatch, B-BBEE Level 1 (135%), ISO/IEC 42001 and POPIA Sec 71 aligned.",
  keywords: [
    "Enterprise Cognition Infrastructure",
    "Model-Agnostic AI Gateway South Africa",
    "Deterministic AI Architecture",
    "POPIA Section 71 HITL Behavioural Capture",
    "ISO 42001 AI Governance South Africa",
    "Techfusion Automata Offer Stacks",
    "Multi-Agent MCP Orchestration",
    "B-BBEE Level 1 AI Consultancy",
  ],
  alternates: {
    canonical: "https://techfusion-ventures.xyz/architecture",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLM Summary" },
        { url: "/llms-full.txt", title: "LLM Full Documentation" },
      ],
    },
  },
  openGraph: {
    locale: "en_ZA",
    title:
      "Enterprise Cognition Infrastructure & Offer Stacks | Techfusion Automata",
    description:
      "Models are commodities; institutional cognition is the moat. Explore our model-agnostic cognition pipeline and request full offer stack specifications across all six service pillars.",
    url: "https://techfusion-ventures.xyz/architecture",
    siteName: "Techfusion Automata (Pty) Ltd",
    type: "article",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata Enterprise Cognition Infrastructure & Service Offer Stacks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Enterprise Cognition Infrastructure & Offer Stacks | Techfusion Automata",
    description:
      "Models are commodities; institutional cognition is the moat. Model-agnostic AI gateways, POPIA Sec 71 HITL capture, and documented offer stacks across six service pillars.",
    images: ["/techfusion_automata_jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
