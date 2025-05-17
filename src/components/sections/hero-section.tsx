import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-fadeIn">
              TechFusion Ventures
            </h1>
            <p className="text-2xl font-semibold text-accent md:text-3xl animate-fadeIn delay-200">
              Innovating the Future, Automating Today.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 animate-fadeIn delay-400">
              Pioneering AI development company dedicated to crafting advanced, scalable, and intelligent solutions across multiple industries. We seamlessly integrate AI into business ecosystems, enhancing efficiency, productivity, and competitive advantage.
            </p>
            <div className="animate-fadeIn delay-600">
              <Link href="#services" passHref>
                <Button size="lg" className="mt-4">Explore Our Services</Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] animate-fadeInRight delay-200">
            <Image
              src="https://placehold.co/1200x800.png"
              alt="AI and Technology"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
              data-ai-hint="abstract technology"
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
