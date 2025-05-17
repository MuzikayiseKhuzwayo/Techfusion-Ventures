
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import TechFusionMediaSection from '@/components/sections/techfusion-media-section';
import TechFusionCapitalSection from '@/components/sections/techfusion-capital-section';
import FounderSection from '@/components/sections/founder-section';
import PersonalizedGreetingSection from '@/components/sections/personalized-greeting-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechFusionMediaSection />
      <TechFusionCapitalSection />
      <FounderSection />
      <PersonalizedGreetingSection />
    </>
  );
}
