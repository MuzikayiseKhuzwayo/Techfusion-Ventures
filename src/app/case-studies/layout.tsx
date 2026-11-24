import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Live Production Builds",
  description:
    "Engineering dossiers and live production proof from Techfusion Automata: sovereign managed applications, autonomous AI agents, and custom operational software running in production.",
  alternates: {
    canonical: "https://techfusion-ventures.xyz/case-studies",
  },
  openGraph: {
    title: "Case Studies & Live Production Builds | Techfusion Automata",
    description:
      "Inside the sovereign applications, AI agents, and commercial engines engineered and managed by Techfusion Automata.",
    url: "https://techfusion-ventures.xyz/case-studies",
    siteName: "Techfusion Automata (Pty) Ltd",
    type: "website",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata Case Studies & Live Production Builds",
      },
    ],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
