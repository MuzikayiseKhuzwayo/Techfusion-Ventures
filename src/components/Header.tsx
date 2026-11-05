"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-200 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/techfusion_automata_ico.ico"
            alt="TechFusion Automata Logo"
            width={24}
            height={24}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <div className="flex items-center gap-1">
            <span className="font-bold text-xl tracking-tight text-accent-light">
              TECHFUSION
            </span>
            <span className="font-light text-xl tracking-wide text-accent-dark hidden sm:inline-block">
              AUTOMATA
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/#capabilities"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            Service Pillars
          </Link>
          <Link
            href="/#partners"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            OEM Partners
          </Link>
          <Link
            href="/#governance"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            AI Governance
          </Link>
          <Link
            href="/#procurement"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            Procurement
          </Link>
          <Link
            href="/research"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            Research
          </Link>
          <Link
            href="/calculator"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            ROI Calculator
          </Link>
          <Link
            href="/#faq"
            className="text-foreground/80 hover:text-accent-light transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md bg-surface-100 border border-surface-200 text-accent-light hover:border-accent-dark transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-foreground/80 hover:text-accent-light"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-200 bg-background/95 backdrop-blur-xl px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="/#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              Service Pillars
            </Link>
            <Link
              href="/#partners"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              OEM Partners
            </Link>
            <Link
              href="/#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              AI Governance
            </Link>
            <Link
              href="/#procurement"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              Procurement
            </Link>
            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              Research
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              ROI Calculator
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent-light py-1"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-surface-100 border border-surface-200 text-accent-light font-medium mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
