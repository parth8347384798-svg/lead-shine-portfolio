import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Facebook, Twitter, Linkedin, Youtube, TrendingUp, Users, Heart, MessageSquare, Share2, BarChart3, Target, Camera, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Fashion Brand Instagram Growth",
      client: "StyleHub Fashion",
      platform: "Instagram",
      description: "Increased followers from 5K to 50K in 6 months through strategic content planning and influencer collaborations.",
      results: {
        followers: "+900%",
        engagement: "+340%",
        sales: "+250%"
      },
      image: "📸",
      tags: ["Instagram", "Fashion", "Influencer Marketing"]
    },
    {
      id: 2,
      title: "Tech Startup LinkedIn Strategy",
      client: "InnovateTech",
      platform: "LinkedIn",
      description: "Developed thought leadership content strategy that generated 500+ qualified leads in 4 months.",
      results: {
        followers: "+450%",
        engagement: "+280%",
        leads: "+500%"
      },
      image: "💼",
      tags: ["LinkedIn", "B2B", "Lead Generation"]
    },
    {
      id: 3,
      title: "Restaurant Chain Multi-Platform Campaign",
      client: "Delicious Bites",
      platform: "Multi-Platform",
      description: "Coordinated social media campaign across all platforms resulting in significant brand awareness and foot traffic.",
      results: {
        reach: "+600%",
        engagement: "+320%",
        visitors: "+180%"
      },
      image: "🍔",
      tags: ["Multi-Platform", "Food & Beverage", "Local Marketing"]
    },
    {
      id: 4,
      title: "E-commerce Brand TikTok Viral Success",
      client: "TrendyGoods",
      platform: "TikTok",
      description: "Created viral content strategy that generated millions of views and drove significant e-commerce sales.",
      results: {
        views: "+2M",
        followers: "+800%",
        sales: "+400%"
      },
      image: "🎵",
      tags: ["TikTok", "E-commerce", "Viral Marketing"]
    }
  ];

  const services = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "High-quality visual content, photography, and video production tailored to your brand."
    },
    {
      icon: Target,
      title: "Strategy Development",
      description: "Comprehensive social media strategies aligned with your business goals and target audience."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed performance analysis and insights to optimize your social media presence."
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Building and nurturing engaged communities around your brand across all platforms."
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Proven strategies to increase followers, engagement, and conversions organically."
    },
    {
      icon: Zap,
      title: "Paid Advertising",
      description: "Strategic paid campaigns to maximize ROI and reach your ideal customers effectively."
    }
  ];

  const platforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-sky-500" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
    { icon: Youtube, name: "YouTube", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Social Media <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming brands through strategic social media management and creative campaigns 
                that drive real business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <MessageSquare size={20} />
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Platforms I <span className="bg-gradient-primary bg-clip-text text-transparent">Master</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert social media management across all major platforms to maximize your reach and engagement.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div key={index} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon size={32} className={platform.color} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {platform.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real results from real campaigns. Here are some of my most successful social media projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <Badge variant="secondary">{project.platform}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-primary text-lg">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive social media management services to grow your brand and engage your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your <span className="bg-gradient-primary bg-clip-text text-transparent">Social Presence?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that turns your followers into customers and grows your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <MessageSquare size={20} />
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Heart size={20} />
                View More Work
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;