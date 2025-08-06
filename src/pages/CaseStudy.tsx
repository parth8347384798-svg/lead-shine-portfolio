import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Instagram, TrendingUp, Users, Heart, MessageSquare, Share2, Calendar, Target, BarChart3, Award, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const projectOverview = {
    client: "StyleHub Fashion",
    industry: "Fashion & Retail",
    platform: "Instagram",
    duration: "6 Months",
    budget: "$15,000",
    objective: "Increase brand awareness and drive online sales through strategic Instagram marketing"
  };

  const beforeAfterMetrics = [
    { metric: "Followers", before: "5,200", after: "52,000", growth: "+900%" },
    { metric: "Monthly Reach", before: "45K", after: "2.1M", growth: "+4,567%" },
    { metric: "Engagement Rate", before: "2.1%", after: "7.3%", growth: "+248%" },
    { metric: "Monthly Sales", before: "$8,500", after: "$29,750", growth: "+250%" },
    { metric: "Website Traffic", before: "1,200", after: "8,900", growth: "+642%" },
    { metric: "Brand Mentions", before: "12", after: "284", growth: "+2,267%" }
  ];

  const strategyPhases = [
    {
      phase: "Phase 1: Research & Strategy",
      duration: "Week 1-2",
      description: "Conducted comprehensive market research, competitor analysis, and developed content strategy",
      activities: [
        "Audience research and persona development",
        "Competitor analysis and market positioning",
        "Content pillars and brand voice definition",
        "Hashtag research and strategy development"
      ]
    },
    {
      phase: "Phase 2: Content Creation & Planning",
      duration: "Week 3-4",
      description: "Developed visual identity and created content calendar with high-quality posts",
      activities: [
        "Brand visual identity refinement",
        "Professional photoshoot coordination",
        "Content calendar creation (30 days ahead)",
        "Influencer partnership planning"
      ]
    },
    {
      phase: "Phase 3: Community Building",
      duration: "Month 2-3",
      description: "Focus on organic growth and community engagement to build loyal following",
      activities: [
        "Daily posting with optimal timing",
        "Active community engagement and responses",
        "Story series and behind-the-scenes content",
        "User-generated content campaigns"
      ]
    },
    {
      phase: "Phase 4: Amplification & Scaling",
      duration: "Month 4-6",
      description: "Scaled successful content and launched paid campaigns for maximum reach",
      activities: [
        "Influencer collaboration campaigns",
        "Instagram Shopping integration",
        "Paid advertising campaigns",
        "Analytics optimization and scaling"
      ]
    }
  ];

  const contentTypes = [
    { type: "Product Showcases", percentage: 35, posts: 42 },
    { type: "Behind the Scenes", percentage: 25, posts: 30 },
    { type: "User Generated Content", percentage: 20, posts: 24 },
    { type: "Educational/Tips", percentage: 15, posts: 18 },
    { type: "Brand Lifestyle", percentage: 5, posts: 6 }
  ];

  const testimonial = {
    text: "The results exceeded our expectations. Not only did our follower count grow dramatically, but we saw real business impact with a 250% increase in sales. The team's strategic approach and creative content really set us apart in the competitive fashion space.",
    author: "Sarah Johnson",
    position: "Marketing Director, StyleHub Fashion",
    image: "👩‍💼"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <Instagram size={32} className="text-pink-500" />
                <Badge variant="secondary">Case Study</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fashion Brand Instagram <span className="bg-gradient-primary bg-clip-text text-transparent">Growth Strategy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we transformed a small fashion brand into an Instagram powerhouse with 52K followers 
                and 250% sales growth in just 6 months.
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Project <span className="bg-gradient-primary bg-clip-text text-transparent">Overview</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                {Object.entries(projectOverview).map(([key, value]) => (
                  <Card key={key} className="text-center">
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold">{value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Results <span className="bg-gradient-primary bg-clip-text text-transparent">Achieved</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beforeAfterMetrics.map((metric, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <h3 className="font-semibold mb-4 text-center">{metric.metric}</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Before</span>
                          <span className="font-mono">{metric.before}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">After</span>
                          <span className="font-mono font-bold">{metric.after}</span>
                        </div>
                        <Separator />
                        <div className="text-center">
                          <span className="text-lg font-bold text-green-600">{metric.growth}</span>
                          <div className="text-xs text-muted-foreground">Growth</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Strategy & <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
              </h2>
              
              <div className="space-y-8">
                {strategyPhases.map((phase, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Strategy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Content <span className="bg-gradient-primary bg-clip-text text-transparent">Strategy</span>
              </h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Content Distribution Breakdown</CardTitle>
                  <p className="text-muted-foreground">Strategic content mix that drove engagement and growth</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contentTypes.map((content, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{content.type}</span>
                          <span className="text-sm text-muted-foreground">{content.posts} posts</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={content.percentage} className="flex-1" />
                          <span className="text-sm font-mono w-12">{content.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Quote size={48} className="text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-medium leading-relaxed mb-8">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="text-left">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Key <span className="bg-gradient-primary bg-clip-text text-transparent">Learnings</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Target size={24} className="text-primary mb-4" />
                    <h3 className="font-semibold mb-3">Audience-First Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding the target audience's preferences and behavior was crucial for creating content that resonated and drove engagement.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <BarChart3 size={24} className="text-primary mb-4" />
                    <h3 className="font-semibold mb-3">Data-Driven Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring and optimization based on analytics data helped identify what worked and scale successful strategies.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Users size={24} className="text-primary mb-4" />
                    <h3 className="font-semibold mb-3">Community Building</h3>
                    <p className="text-sm text-muted-foreground">
                      Focusing on genuine engagement and community building created loyal customers who became brand advocates.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <TrendingUp size={24} className="text-primary mb-4" />
                    <h3 className="font-semibold mb-3">Consistent Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintaining consistent posting schedule and quality standards was essential for sustained growth and algorithm favor.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Similar <span className="bg-gradient-primary bg-clip-text text-transparent">Results?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a custom social media strategy that drives real growth for your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <MessageSquare size={20} />
                Start Your Project
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  View More Cases
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;