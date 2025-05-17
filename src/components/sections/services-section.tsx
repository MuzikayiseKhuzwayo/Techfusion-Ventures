import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, ListChecks, MessageCircle, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const alchemyServices: ServiceItem[] = [
  {
    icon: Wand2,
    title: "Custom AI Automation",
    description: "Tailored automation for business operations, saving time and resources."
  },
  {
    icon: ListChecks,
    title: "Process Optimization",
    description: "Eliminating inefficiencies through intelligent workflow automation."
  },
  {
    icon: MessageCircle,
    title: "Chatbots & AI Assistants",
    description: "Enhancing customer interactions using conversational AI."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description: "Leveraging AI analytics for smarter insights and predictions."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              TechFusion Alchemy: AI Automation Agency
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              TechFusion Alchemy is a child venture under TechFusion Ventures, operating as a dedicated AI Automation Agency. This division focuses on delivering sophisticated automation solutions for businesses looking to optimize workflow efficiency, reduce manual intervention, and enhance performance across multiple industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 xl:grid-cols-4 mt-12">
          {alchemyServices.map((service) => (
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
      </div>
    </section>
  );
}
