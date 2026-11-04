import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact & SCM Procurement Desk | Techfusion Automata (Pty) Ltd",
  description:
    "Initiate a digital transformation, AI automation, data engineering, or public-sector consultation, or request private statutory verification packs (B-BBEE Level 1, SARS PIN, ISO 42001/27001, PAIA/POPIA).",
  alternates: {
    canonical: "https://techfusion-ventures.xyz/contact",
  },
  openGraph: {
    title: "Contact & SCM Procurement Desk | Techfusion Automata (Pty) Ltd",
    description:
      "Private executive desk for RFPs, enterprise consultations, and statutory vendor verification dispatches.",
    url: "https://techfusion-ventures.xyz/contact",
    siteName: "Techfusion Automata (Pty) Ltd",
    type: "website",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata (Pty) Ltd — Executive Contact & SCM Desk",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
