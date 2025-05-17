
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool, Film, Users2, Music2, Megaphone, UserCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const mediaServices: ServiceItem[] = [
  {
    icon: PenTool,
    title: "AI-Generated Content",
    description: "AI-powered articles, scripts, ad campaigns, and media copy."
  },
  {
    icon: Film,
    title: "AI Video Editing & Production",
    description: "Automated post-production & deep-learning-enhanced visuals."
  },
  {
    icon: Users2,
    title: "AI-Driven Social Media Management",
    description: "Intelligent content scheduling, audience engagement tools."
  },
  {
    icon: Music2,
    title: "AI-Powered Music & Sound Design",
    description: "Creating AI-generated compositions, audio branding."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & AI Ads",
    description: "Personalization engines that create high-conversion marketing campaigns."
  },
  {
    icon: UserCog,
    title: "Virtual Influencers & Digital Avatars",
    description: "AI-powered personas for branding, promotions & entertainment."
  }
];

export default function TechFusionMediaSection() {
  return (
    <section id="media" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              TechFusion Media
            </h2>
            <p className="text-xl font-medium text-accent md:text-2xl mt-2">
              Revolutionizing Creativity with AI
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              TechFusion Media is an AI-powered media and content creation division specializing in automated storytelling, immersive experiences, and intelligent content generation for brands, businesses, and entertainment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 lg:max-w-6xl">
          {mediaServices.map((service) => (
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
             TechFusion Media will disrupt traditional media creation by making AI-driven production more efficient, personalized, and scalable while maintaining human creativity at its core.
            </p>
        </div>
      </div>
    </section>
  );
}
