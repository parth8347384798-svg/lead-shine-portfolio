import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SocialMediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
