import { Button } from "@/components/ui/button";

export const AboutSection = () => {
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
              ABOUT ME
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Navigating the Web, One 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Ranking </span>
              at a Time
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              With 15 years of experience in digital marketing and brand strategy, I help businesses 
              transform their online presence into powerful growth engines. From SEO optimization 
              to complete digital transformations.
            </p>

            {/* Experience timeline */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <div className="text-sm text-primary font-medium">(2015-2018)</div>
                <h4 className="font-semibold text-card-foreground">SEO Specialist</h4>
                <p className="text-sm text-muted-foreground">Digital Agency Inc.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <div className="text-sm text-secondary font-medium">2024 At Present</div>
                <h4 className="font-semibold text-card-foreground">Content Strategist</h4>
                <p className="text-sm text-muted-foreground">Freelancer.com</p>
              </div>
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