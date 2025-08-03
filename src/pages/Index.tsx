import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <SocialMediaSection />
      <ContactSection />
    </div>
  );
};

export default Index;
