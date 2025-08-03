import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("myself");

  const tabs = [
    { id: "myself", label: "My Self" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case "myself":
        return (
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate digital marketing professional with 15 years of experience helping brands 
              achieve their online goals. I specialize in creating comprehensive strategies that drive 
              real business results.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div><strong>Name:</strong> Marketing Expert</div>
              <div><strong>Location:</strong> Global Remote</div>
              <div><strong>Email:</strong> hello@expert.com</div>
              <div><strong>Phone:</strong> +1 (555) 123-4567</div>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="space-y-4">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="text-sm text-primary font-medium">(2001-2010)</div>
              <h4 className="font-semibold text-card-foreground">Education Prose</h4>
              <p className="text-sm text-muted-foreground">Stellar Learning Academy</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="text-sm text-secondary font-medium">(2012-2015)</div>
              <h4 className="font-semibold text-card-foreground">IT Consultation</h4>
              <p className="text-sm text-muted-foreground">Envato Inc.</p>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SEO & Analytics</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Social Media Marketing</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Content Strategy</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Brand Development</span>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="space-y-4">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="text-sm text-primary font-medium">(2015-2018)</div>
              <h4 className="font-semibold text-card-foreground">SEO Specialist</h4>
              <p className="text-sm text-muted-foreground">Upwork Inc.</p>
              <p className="text-sm mt-2">Led SEO strategies for 50+ clients, achieving 300% average organic traffic growth.</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="text-sm text-secondary font-medium">2024 At Present</div>
              <h4 className="font-semibold text-card-foreground">Content Strategist</h4>
              <p className="text-sm text-muted-foreground">Freelancer.com</p>
              <p className="text-sm mt-2">Managing comprehensive digital marketing campaigns for enterprise clients worldwide.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated Illustration Side */}
          <div className="relative">
            {/* Main illustration container */}
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20 shadow-float">
              
              {/* Animated Code/Digital Elements */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center" 
                  alt="Digital Innovation" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Animated overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-multiply"></div>
                
                {/* Floating code elements */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-mono animate-pulse">
                  &lt;/&gt;
                </div>
                <div className="absolute top-16 right-6 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>
                  {}
                </div>
                <div className="absolute bottom-8 left-8 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-mono animate-pulse" style={{ animationDelay: '1s' }}>
                  API
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-float animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs">YEARS</div>
                </div>
              </div>

              {/* Animated tech icons */}
              <div className="absolute -bottom-6 -left-6 grid grid-cols-3 gap-2">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft animate-float hover:scale-110 transition-transform">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft animate-float hover:scale-110 transition-transform" style={{ animationDelay: '0.3s' }}>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft animate-float hover:scale-110 transition-transform" style={{ animationDelay: '0.6s' }}>
                  <span className="text-2xl">📈</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ABOUT
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Navigating the Web, One 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Ranking </span>
              at a Time
            </h2>
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 my-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-soft'
                      : 'bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50 min-h-[200px]">
              {renderTabContent()}
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                View My Work
              </Button>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};