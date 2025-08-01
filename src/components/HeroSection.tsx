import { Button } from "@/components/ui/button";
import { FloatingBadge } from "./FloatingBadge";
import { AnimatedText } from "./AnimatedText";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const HeroSection = () => {
  const greetings = ["Hola", "Hello", "Bonjour", "Hallo", "Ciao", "Olá", "こんにちは", "안녕하세요"];
  const specialties = ["A Brand & Marketing", "SEO", "Digital Marketing"];

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              <span>👋</span>
              <AnimatedText texts={greetings} interval={2000} />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              I'm <span className="text-primary">Helmi</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/80">
              <AnimatedText texts={specialties} interval={2000} className="text-primary" /> Specialist
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">"</div>
              <div>
                <p className="text-foreground/80 mb-3">
                  Working under Mas Helmi, and I can confidently say he is an exceptional marketer and brand strategist
                </p>
                <div className="text-sm text-foreground/60">— Client Testimonial</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="portfolio" size="lg">
              Portfolio 📁
            </Button>
            <Button variant="outline-dark" size="lg">
              Hire me
            </Button>
          </div>
        </div>
        
        {/* Right Content - Portrait & Badges */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Background Circle */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-primary rounded-full absolute inset-0 -z-10"></div>
            
            {/* Portrait */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-float">
              <img 
                src={heroPortrait} 
                alt="Marketing Specialist Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <FloatingBadge className="top-8 -left-8" animationDelay="0s">
              📈 Marketing
            </FloatingBadge>
            
            <FloatingBadge className="top-20 -right-16" animationDelay="1s">
              ⭐ Brand
            </FloatingBadge>
            
            <FloatingBadge className="bottom-32 -left-12" animationDelay="2s">
              🎯 Ads
            </FloatingBadge>
            
            <FloatingBadge className="bottom-8 -right-8" animationDelay="0.5s">
              📱 Social Media
            </FloatingBadge>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-8 right-0 bg-white rounded-lg p-6 shadow-float border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2 Years</div>
              <div className="text-sm text-muted-foreground">in Brand & Marketing</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};