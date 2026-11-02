import Link from "next/link";
import BentoCard from "@/components/BentoCard";
import { ArrowUpRight, Zap, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        >
          <source src="/glass_hand.mp4" type="video/mp4" />
        </video>
        {/* Ambient background pulse & mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/70 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Accelerating towards the future in <span className="text-gradient">Africa.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Letting go of the past, and reaching for a better future. We build the automated infrastructure that empowers humanity to transcend old limitations and design what is next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#ecosystem"
              className="px-8 py-4 rounded-full bg-accent-light text-background font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Explore the Ecosystem
            </Link>
            <Link
              href="/founder"
              className="px-8 py-4 rounded-full glass-panel text-accent-light hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Section (Ecosystem) */}
      <section id="ecosystem" className="py-24 container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ecosystem</h2>
          <p className="text-foreground/60 max-w-2xl">Modular divisions working in synergy to drive technological acceleration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Block 1: TechFusion Alchemy (col-span-1, row-span-2) */}
          <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col" delay={0.1}>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-surface-200 rounded-lg inline-block">
                <Cpu className="w-8 h-8 text-accent-light" />
              </div>
              <a href="https://techfusion-alchemy.xyz" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-200 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4">TechFusion Alchemy</h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Our premier division focused on Automation & AI Product Development, building proprietary tools and systems that redefine operational efficiency and digital capabilities.
            </p>
            <div className="mt-auto pt-6 border-t border-surface-200/50">
              <span className="text-xs font-mono text-accent-dark uppercase tracking-wider">Live Division</span>
            </div>
          </BentoCard>

          {/* Block 2: Dubstrata (col-span-2, row-span-2) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between" delay={0.2}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-200 rounded-lg inline-block">
                  <Zap className="w-8 h-8 text-accent-light" />
                </div>
                <a href="https://dubstrata.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-200 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-foreground/70" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-2">dubstrata</h3>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xl mb-6">
                A premier Causal Financial &amp; Narrative Intelligence CDN designed for quant trading desks, risk officers, and autonomous agent swarms. Dubstrata deconstructs noisy, unstructured web data into dense, time-stamped causal substrates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <div className="p-4 border border-surface-200 rounded-xl bg-background/30">
                <h4 className="font-semibold text-sm mb-1 text-white lowercase">causal knowledge graph</h4>
                <p className="text-xs text-foreground/50">Real-time structured facts combined with crowdsourced conviction metrics.</p>
              </div>
              <div className="p-4 border border-surface-200 rounded-xl bg-background/30">
                <h4 className="font-semibold text-sm mb-1 text-white lowercase">low-latency CDN</h4>
                <p className="text-xs text-foreground/50">Delivering machine-readable time-series telemetry at sub-150ms latencies.</p>
              </div>
            </div>
          </BentoCard>

          {/* Block 3: Future Divisions (Medium) */}
          <BentoCard delay={0.3} className="bg-surface-100/30 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-200/50 rounded-lg inline-block">
                  <Globe className="w-6 h-6 text-foreground/40" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground/80">Future Divisions</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Innovations in infrastructure, supply chain automation, and digital education. Coming soon as we scale.
              </p>
            </div>
            <div className="w-full h-1 bg-surface-200 rounded-full overflow-hidden mt-6">
              <div className="w-1/3 h-full bg-accent-dark/30 rounded-full" />
            </div>
          </BentoCard>

          {/* Block 4: Our Perspective (Medium) */}
          <BentoCard delay={0.4} className="md:col-span-2 bg-gradient-to-br from-surface-200/20 to-transparent flex flex-col justify-between">
            <div>
              <div className="p-3 bg-accent-light/10 text-accent-light rounded-lg inline-block mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Achieving digital transformation in all sectors of the African economy is incredibly difficult. We do not underestimate the challenge—but with grounded, deliberate technology, we believe it is fully possible.
              </p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 border-t border-surface-200/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Transitioning from <span className="text-foreground/40 line-through">survival mode</span> to discovery.</h2>
          <div className="prose prose-invert prose-lg mx-auto text-foreground/70 text-left">
            <p className="mb-6">
              For too long, the default state for many has been survival—where daily labor consumes all available time and energy. This is a profound misallocation of human potential.
            </p>
            <p className="mb-6">
              At TechFusion Automata, we believe the true purpose of technology is liberation. By integrating AI and automation into core operations, we can effectively outsource routine, repetitive labor to systems designed for it.
            </p>
            <p>
              When we automate the mundane, we don't just increase efficiency; we generate abundance. We give people back their time, empowering them to develop their true interests, explore their creativity, and discover what more there is to life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden border-t border-surface-200/50">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src="/carbon_circuitry.mp4" type="video/mp4" />
        </video>
        {/* Gradients to blend video smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-background/40 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Have an Idea? <span className="text-gradient">Let's Collaborate.</span>
          </h2>
          <p className="text-lg text-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you are looking to integrate advanced automation into your business, partner on a project, or bring a new digital concept to life—let's build it together.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-accent-light text-background font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
