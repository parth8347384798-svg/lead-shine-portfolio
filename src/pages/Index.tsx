import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SocialMediaSection />
      <ContactSection />
    </div>
  );
};

export default Index;
