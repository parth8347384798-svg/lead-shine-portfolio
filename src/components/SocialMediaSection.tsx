import { Button } from "@/components/ui/button";

export const SocialMediaSection = () => {
  const socialPlatforms = [
    {
      icon: "📘",
      name: "Facebook",
      description: "Build communities and drive engagement with targeted Facebook campaigns",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📷",
      name: "Instagram", 
      description: "Visual storytelling that captures attention and builds brand loyalty",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: "🐦",
      name: "Twitter/X",
      description: "Real-time engagement and thought leadership content",
      color: "from-gray-700 to-black"
    },
    {
      icon: "💼",
      name: "LinkedIn",
      description: "Professional networking and B2B lead generation strategies",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: "🎵",
      name: "TikTok",
      description: "Viral content creation for younger demographics",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "📺",
      name: "YouTube",
      description: "Long-form content and educational marketing videos",
      color: "from-red-600 to-red-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Social Media <span className="text-primary">Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Dominating every platform with strategic content and engagement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1 border border-white/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="portfolio" size="lg">
            View Social Media Portfolio 📱
          </Button>
        </div>
      </div>
    </section>
  );
};