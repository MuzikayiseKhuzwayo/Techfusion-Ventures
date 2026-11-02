import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
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
          <Link href="/#ecosystem" className="text-foreground/80 hover:text-accent-light transition-colors">
            Ecosystem
          </Link>
          <Link href="/#philosophy" className="text-foreground/80 hover:text-accent-light transition-colors">
            Our Philosophy
          </Link>
          <Link href="/founder" className="text-foreground/80 hover:text-accent-light transition-colors">
            Founder
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded-md bg-surface-100 border border-surface-200 text-accent-light hover:border-accent-dark transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden p-2 text-foreground/80 hover:text-accent-light">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
