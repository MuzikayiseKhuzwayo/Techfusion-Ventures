
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, LineChart, Landmark, ShieldCheck, Lightbulb, Blocks } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capitalServices: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: "AI-Powered Investment Strategies",
    description: "Machine-learning algorithms optimize financial decisions."
  },
  {
    icon: LineChart,
    title: "Algorithmic Trading & Market Predictions",
    description: "AI-based real-time stock market analysis."
  },
  {
    icon: Landmark,
    title: "AI-Based Wealth Management",
    description: "Smart financial planning & asset growth automation."
  },
  {
    icon: ShieldCheck,
    title: "AI-Driven Risk & Fraud Detection",
    description: "Protecting businesses with AI-enhanced security."
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Venture Capital Insights",
    description: "Helping startups find ideal investors through AI analysis."
  },
  {
    icon: Blocks,
    title: "Blockchain & AI-Integrated Finance",
    description: "Secure, automated financial transactions using AI+blockchain."
  }
];

export default function TechFusionCapitalSection() {
  return (
    <section id="capital" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              TechFusion Capital
            </h2>
            <p className="text-xl font-medium text-accent md:text-2xl mt-2">
              AI Meets Finance: Smarter Investments, Bigger Returns
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              TechFusion Capital is an AI-driven investment and financial solutions division, specializing in automated trading, predictive analytics, and AI-driven financial strategies to maximize business growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 lg:max-w-6xl">
          {capitalServices.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold tracking-tighter text-primary">Impact</h3>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg/relaxed mt-3">
             TechFusion Capital would redefine financial intelligence by leveraging AI for smarter, faster, and data-driven investment decisions—ensuring businesses and individuals stay ahead of financial trends with automated insights.
            </p>
        </div>
      </div>
    </section>
  );
}
