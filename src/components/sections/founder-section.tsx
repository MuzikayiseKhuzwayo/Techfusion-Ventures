import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, Gauge, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PhilosophyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const businessPhilosophy: PhilosophyItem[] = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pushing the boundaries of AI beyond conventional applications."
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    description: "Expanding AI solutions across diverse industries."
  },
  {
    icon: Gauge,
    title: "Automation & Efficiency",
    description: "Helping businesses unlock new levels of productivity."
  },
  {
    icon: Rocket,
    title: "Future-Focused Leadership",
    description: "Driving technological evolution with purpose."
  }
];

export default function FounderSection() {
  return (
    <section id="founder" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Meet Our Visionary Leader
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Muzi Khuzwayo, Founder & CEO of TechFusion Ventures and TechFusion Alchemy.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-accent">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Muzi Khuzwayo, Founder & CEO"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait man"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-foreground">
              Muzi Khuzwayo is a visionary entrepreneur and technologist, leading the charge in AI development and automation solutions. He embodies a forward-thinking approach, merging deep technical expertise with strategic business acumen. His ability to identify emerging AI trends and transform them into impactful ventures sets him apart.
            </p>
            <p className="text-muted-foreground">
              Through <strong>TechFusion Ventures</strong>, Muzi has created a dynamic holding company that incubates multiple AI-driven projects. <strong>TechFusion Alchemy</strong>, his specialized AI automation agency, is an extension of his passion for optimizing business operations through intelligent systems. His work empowers companies to streamline processes, enhance decision-making, and scale efficiently in a rapidly evolving digital landscape.
            </p>
            <h3 className="text-2xl font-semibold text-primary pt-4">Business Philosophy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {businessPhilosophy.map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <item.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground pt-4">
              Muzi Khuzwayo's reputation as an AI innovator continues to grow as he establishes TechFusion Ventures as a hub for cutting-edge AI development. His work is shaping the future of AI integration in everyday operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
