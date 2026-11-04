import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://techfusion-ventures.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Techfusion Automata (Pty) Ltd | Sovereign AI, Data & Digital Transformation",
    template: "%s | Techfusion Automata (Pty) Ltd",
  },
  description:
    "Techfusion Automata (Pty) Ltd is a South African digital transformation, deterministic AI, data engineering, and bespoke software consultancy. B-BBEE Level 1 EME (135% Recognition), ISO/IEC 42001 & 27001 aligned, POPIA Sec 71 compliant.",
  keywords: [
    "Techfusion Automata",
    "TechFusion Alchemy",
    "AI Consultancy South Africa",
    "Digital Transformation South Africa",
    "B-BBEE Level 1 IT Company",
    "POPIA Section 71 AI Compliance",
    "ISO 42001 AI Governance",
    "ISO 27001 Information Security",
    "Enterprise Data Engineering",
    "Public Sector MIS EDRMS South Africa",
    "Multi-Agent MCP Orchestration",
    "Custom Software Development Africa",
  ],
  authors: [{ name: "Techfusion Automata (Pty) Ltd", url: SITE_URL }],
  creator: "Techfusion Automata (Pty) Ltd",
  publisher: "Techfusion Automata (Pty) Ltd",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/techfusion_automata_ico.ico",
    apple: "/techfusion_automata_jpg_nobg.png",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: "Techfusion Automata (Pty) Ltd",
    title:
      "Techfusion Automata (Pty) Ltd | Sovereign AI, Data & Digital Transformation",
    description:
      "Deterministic AI, data engineering, cloud integration, and bespoke digital transformation for public-sector departments, development agencies, and private enterprises. B-BBEE Level 1 (135% Recognition).",
    images: [
      {
        url: "/techfusion_automata_jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Techfusion Automata (Pty) Ltd — Sovereign AI, Data & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Techfusion Automata (Pty) Ltd | Sovereign AI, Data & Digital Transformation",
    description:
      "B-BBEE Level 1 (135%) digital transformation, deterministic AI, data engineering, and public/private software consultancy in South Africa.",
    images: ["/techfusion_automata_jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Techfusion Automata (Pty) Ltd",
      alternateName: ["TechFusion Automata", "TechFusion Alchemy"],
      legalName: "Techfusion Automata (Pty) Ltd",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/techfusion_automata_jpg_nobg.png`,
      },
      image: `${SITE_URL}/techfusion_automata_jpg.jpeg`,
      description:
        "South African digital transformation, deterministic artificial intelligence, data engineering, and bespoke software consultancy serving public-sector departments, international development agencies (UN/NGOs), and private enterprises. B-BBEE Level 1 EME (135% Procurement Recognition).",
      areaServed: [
        {
          "@type": "Country",
          name: "South Africa",
        },
        {
          "@type": "Place",
          name: "Africa",
        },
      ],
      knowsAbout: [
        "Digital Transformation",
        "Artificial Intelligence & Multi-Agent Systems (MCP)",
        "Business & Robotic Process Automation (BPA/RPA)",
        "Intelligent Document Processing (IDP/OCR)",
        "Enterprise Data Engineering & ETL/ELT Pipelines",
        "Custom Cloud-Native Software Development",
        "Cloud & Systems Integration (Microsoft 365, Power Platform, AWS, GCP)",
        "Public-Sector MIS, EDRMS & UN/NGO M&E Platforms",
        "ISO/IEC 42001 AI Management Systems",
        "ISO/IEC 27001 Information Security",
        "NIST AI Risk Management Framework (AI RMF 1.0)",
        "POPIA Section 71 & PAIA Section 51 Compliance",
      ],
      sameAs: ["https://techfusion-alchemy.xyz"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Executive & SCM Procurement Desk",
          url: `${SITE_URL}/contact`,
          email: "muzikhuzwayo@techfusion-ventures.xyz",
          availableLanguage: ["English"],
          areaServed: "ZA",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Six Core Service Pillars",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 01: Digital Transformation",
              description:
                "End-to-end business process digitization, workflow re-engineering, SOP automation, and legacy institutional system modernization.",
              url: `${SITE_URL}/contact?service=digital-transformation`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 02: Automation & Intelligent AI Systems",
              description:
                "Business/Robotic Process Automation (BPA/RPA), agentic multi-agent orchestration (MCP), Intelligent Document Processing (IDP/OCR), conversational AI, and executive decision-support platforms.",
              url: `${SITE_URL}/contact?service=automation-ai`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 03: Data Engineering & Advanced Analytics",
              description:
                "Enterprise data warehouse design, real-time and batch ETL/ELT pipelines, BI executive dashboards, and POPIA-compliant data governance.",
              url: `${SITE_URL}/contact?service=data-engineering`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 04: Custom Software Development",
              description:
                "Cloud-native web and mobile applications, high-throughput REST/GraphQL APIs, and secure citizen or enterprise client portals.",
              url: `${SITE_URL}/contact?service=custom-software`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 05: Cloud & Systems Integration",
              description:
                "Microsoft 365 & Power Platform ecosystems, PostgreSQL and Supabase backends, ERP/CRM webhook integrations, and Identity & Access Management (IAM).",
              url: `${SITE_URL}/contact?service=cloud-integration`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pillar 06: Government & Public-Sector Solutions",
              description:
                "Management Information Systems (MIS), case/grant/complaint management systems, electronic document & records management (EDRMS), and M&E platforms for UN/NGO programs.",
              url: `${SITE_URL}/contact?service=government-solutions`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Techfusion Automata (Pty) Ltd",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-ZA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <FirebaseAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
