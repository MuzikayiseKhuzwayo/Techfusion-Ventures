import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-background py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg text-accent-light mb-4">TechFusion Automata</h3>
          <p className="text-foreground/70 text-sm max-w-xs">
            Exploration and Digital Transformation through Automation
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-accent-light mb-4">Ecosystem</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href="https://techfusion-alchemy.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                TechFusion Alchemy
              </a>
            </li>
            <li>
              <a href="https://dubstrata.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                Dubstrata
              </a>
            </li>
            <li>
              <span className="text-foreground/40">Future Divisions</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-accent-light mb-4">Contact</h4>
          <Link href="/contact" className="inline-block text-sm text-accent-dark hover:text-accent-light transition-colors">
            Send us a message
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-surface-200/50 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/50">
        <p>&copy; {new Date().getFullYear()} TechFusion Automata. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
