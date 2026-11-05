import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise AI ROI & B-BBEE 135% Procurement Calculator | Techfusion Automata",
  description:
    "Free interactive buyer calculator to estimate annual workflow automation savings, POPIA Section 71 HITL defect reduction, payback period, and B-BBEE Level 1 (135% procurement recognition) value in ZAR.",
  alternates: {
    canonical: "https://techfusion-ventures.xyz/calculator",
  },
  openGraph: {
    title:
      "Enterprise AI ROI & B-BBEE 135% Procurement Calculator | Techfusion Automata",
    description:
      "Calculate your annual hours reclaimed, POPIA compliance risk reduction, net 12-month ROI, and 135% B-BBEE Level 1 procurement recognition value.",
    url: "https://techfusion-ventures.xyz/calculator",
    siteName: "Techfusion Automata (Pty) Ltd",
    type: "website",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata Enterprise AI & B-BBEE 135% Calculator",
      },
    ],
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
