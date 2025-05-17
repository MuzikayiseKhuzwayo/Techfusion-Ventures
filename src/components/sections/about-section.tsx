import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Settings2, Smartphone, Network, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expertiseAreas: ExpertiseItem[] = [
  {
    icon: BrainCircuit,
    title: "AI Development",
    description: "From machine learning models to intelligent automation, we specialize in building powerful AI-driven solutions."
  },
  {
    icon: Settings2,
    title: "Automation Projects",
    description: "Automating workflows and processes to streamline operations and improve business scalability."
  },
  {
    icon: Smartphone,
    title: "Mobile & Web AI Applications",
    description: "Creating dynamic, responsive, and AI-enhanced applications for optimal user experience."
  },
  {
    icon: Network, // Changed from Building to Network for better representation of integration
    title: "Enterprise AI Integration",
    description: "Helping businesses adopt AI-powered tools to revolutionize internal systems and decision-making."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              About TechFusion Ventures
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              TechFusion Ventures is a pioneering AI development company dedicated to crafting advanced, scalable, and intelligent solutions across multiple industries. As a holding company, it spearheads various ventures in the AI space, driving innovation in automation, mobile applications, and web platforms. Our mission is to seamlessly integrate artificial intelligence into business ecosystems, enhancing efficiency, productivity, and competitive advantage.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 xl:grid-cols-4 mt-12">
          {expertiseAreas.map((item) => (
            <Card key={item.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <item.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold tracking-tighter text-primary">Our Vision & Impact</h3>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg/relaxed mt-3">
             At TechFusion Ventures, we envision a world where AI seamlessly integrates with daily operations, driving businesses toward <strong>greater efficiency, profitability, and innovation</strong>. We continuously push boundaries in AI and automation, ensuring that companies, regardless of size, can leverage transformative technology without friction.
            </p>
        </div>
      </div>
    </section>
  );
}
