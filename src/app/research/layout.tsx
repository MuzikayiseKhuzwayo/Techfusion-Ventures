import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise AI, Multi-Agent MCP & POPIA Sec 71 Research (Methodology Under Revision)",
  description:
    "Research notes on deterministic Multi-Agent MCP orchestration, IDP/OCR accuracy, ISO/IEC 42001 governance, and POPIA Section 71 compliance in South Africa. Earlier figures are under revision pending a production-only rerun.",
  alternates: {
    canonical: "https://techfusion-ventures.xyz/research",
  },
  openGraph: {
    title:
      "Enterprise AI, Multi-Agent MCP & POPIA Sec 71 Benchmark Study | Techfusion Automata",
    description:
      "Citable empirical findings (N=18,400 runs) comparing unguarded LLM pipelines vs. deterministic MCP + POPIA Section 71 HITL architectures.",
    url: "https://techfusion-ventures.xyz/research",
    siteName: "Techfusion Automata (Pty) Ltd",
    type: "article",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata Enterprise AI & Governance Benchmark Research",
      },
    ],
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
