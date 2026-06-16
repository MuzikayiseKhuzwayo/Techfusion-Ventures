import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechFusion Automata | Accelerating Africa's Future",
  description: "TechFusion Automata is an ecosystem hub accelerating digital transformation and automation in Africa.",
  icons: {
    icon: "/techfusion_automata_ico.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechFusion Automata",
  "url": "https://techfusionautomata.com",
  "logo": "https://techfusionautomata.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Muzikayise Khuzwayo"
  },
  "description": "Accelerating towards the future in Africa by driving digital transformation across all economic sectors."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
