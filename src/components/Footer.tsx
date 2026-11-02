import Link from "next/link";
import Image from "next/image";
import SignUpForm from "@/components/SignUpForm";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-background py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image
              src="/techfusion_automata_ico.ico"
              alt="TechFusion Automata Logo"
              width={22}
              height={22}
            />
            <h3 className="font-bold text-lg text-accent-light">
              Techfusion Automata
            </h3>
          </div>
          <p className="text-foreground/70 text-sm max-w-xs leading-relaxed">
            Deterministic AI, data engineering, and bespoke digital
            transformation for public-sector, development agency, and
            enterprise mandates.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-accent-light mb-4">
            Divisions &amp; Delivery
          </h4>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            <li>
              <a
                href="https://techfusion-alchemy.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors inline-flex items-center gap-1"
              >
                TechFusion Alchemy
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <Link
                href="/#capabilities"
                className="hover:text-accent-light transition-colors"
              >
                6 Core Service Pillars
              </Link>
            </li>
            <li>
              <Link
                href="/#governance"
                className="hover:text-accent-light transition-colors"
              >
                AI &amp; Security Governance
              </Link>
            </li>
            <li>
              <Link
                href="/#procurement"
                className="hover:text-accent-light transition-colors"
              >
                Procurement Readiness
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-accent-light mb-4">
            Private Executive Desk
          </h4>
          <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
            For service inquiries, RFPs, or statutory verification packs:
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm text-accent-light hover:text-white transition-colors underline underline-offset-4"
          >
            Send a private inquiry &rarr;
          </Link>
        </div>

        <div>
          <h4 className="font-semibold text-accent-light mb-2">
            Stay Connected
          </h4>
          <p className="text-xs text-foreground/60 mb-3 leading-relaxed">
            Sign up to receive updates on our engineering developments and
            initiatives.
          </p>
          <SignUpForm />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-surface-200/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
        <p>
          &copy; {new Date().getFullYear()} Techfusion Automata (Pty) Ltd. All
          rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px]">B-BBEE Level 1 (135%)</span>
          <span className="font-mono text-[11px]">ISO/IEC 42001 &amp; 27001 Aligned</span>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
