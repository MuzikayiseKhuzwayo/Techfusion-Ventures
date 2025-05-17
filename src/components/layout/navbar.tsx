
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-primary">TechFusion Ventures</span>
        </Link>
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Alchemy
          </Link>
          <Link href="#media" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Media
          </Link>
          <Link href="#capital" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Capital
          </Link>
          <Link href="#founder" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Founder
          </Link>
          <Link href="#greeting" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Personalized Greeting
          </Link>
        </nav>
      </div>
    </header>
  );
}
