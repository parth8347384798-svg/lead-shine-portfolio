import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, TrendingUp, Users, Target, BarChart3, Award, Quote, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SEOCaseStudy1 = () => {
  const projectOverview = {
    client: "TechCorp Solutions",
    industry: "B2B Technology",
    projectType: "Technical SEO Audit & Optimization",
    duration: "8 Months",
    budget: "$25,000",
    objective: "Improve organic visibility and drive qualified B2B leads through comprehensive SEO strategy"
  };

  const beforeAfterMetrics = [
    { metric: "Organic Traffic", before: "2,300", after: "18,500", growth: "+704%" },
    { metric: "Keyword Rankings (Top 10)", before: "12", after: "127", growth: "+958%" },
    { metric: "Domain Authority", before: "28", after: "52", growth: "+86%" },
    { metric: "Monthly Leads", before: "45", after: "320", growth: "+611%" },
    { metric: "Page Load Speed", before: "4.2s", after: "1.8s", growth: "+57%" },
    { metric: "Core Web Vitals Score", before: "32", after: "94", growth: "+194%" }
  ];

  const keyStrategies = [
    {
      title: "Technical SEO Overhaul",
      description: "Complete technical audit and optimization including site speed, mobile responsiveness, and crawlability",
      icon: <Search size={24} className="text-primary" />
    },
    {
      title: "Content Strategy",
      description: "Developed comprehensive content strategy targeting high-intent B2B keywords",
      icon: <Target size={24} className="text-primary" />
    },
    {
      title: "Link Building Campaign",
      description: "Strategic link building campaign targeting industry-relevant, high-authority websites",
      icon: <Globe size={24} className="text-primary" />
    },
    {
      title: "Performance Optimization",
      description: "Core Web Vitals optimization for better user experience and search rankings",
      icon: <TrendingUp size={24} className="text-primary" />
    }
  ];

  const testimonial = {
    text: "The SEO results have been phenomenal. Our organic traffic increased by over 700%, and more importantly, we're now ranking for keywords that directly convert to high-value B2B clients. The technical improvements also enhanced our overall user experience.",
    author: "Michael Chen",
    position: "Marketing Director, TechCorp Solutions",
    image: "👨‍💼"
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
                <Search size={32} className="text-primary" />
                <Badge variant="secondary">SEO Case Study</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                B2B Tech Company <span className="bg-gradient-primary bg-clip-text text-transparent">SEO Transformation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we increased organic traffic by 704% and generated 320+ monthly leads for a B2B technology company 
                through comprehensive SEO strategy and technical optimization.
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
                      <div className="font-semibold text-sm">{value}</div>
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

        {/* Key Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Key <span className="bg-gradient-primary bg-clip-text text-transparent">Strategies</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyStrategies.map((strategy, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      {strategy.icon}
                      <h3 className="font-semibold mb-3 mt-4">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {strategy.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-muted/30">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">SEO?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a custom SEO strategy that drives real organic growth for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Target size={20} />
                Start Your SEO Project
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

export default SEOCaseStudy1;