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

export const metadata: Metadata = {
  title: "Techfusion Automata (Pty) Ltd | Sovereign AI, Data & Digital Transformation",
  description:
    "Techfusion Automata (Pty) Ltd is a digital transformation, artificial intelligence, data engineering, and bespoke software consultancy. B-BBEE Level 1 (135% Recognition).",
  icons: {
    icon: "/techfusion_automata_ico.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Techfusion Automata (Pty) Ltd",
  "legalName": "Techfusion Automata (Pty) Ltd",
  "url": "https://techfusion-ventures.xyz",
  "logo": "https://techfusion-ventures.xyz/techfusion_automata_ico.ico",
  "description":
    "Digital transformation, artificial intelligence, data engineering, and bespoke software consultancy serving public-sector departments, international development agencies, and private enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <FirebaseAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
