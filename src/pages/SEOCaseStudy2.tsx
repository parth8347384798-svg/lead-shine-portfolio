import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, TrendingUp, Users, Target, BarChart3, Award, Quote, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const SEOCaseStudy2 = () => {
  const projectOverview = {
    client: "EcoStyle Store",
    industry: "E-commerce Fashion",
    projectType: "E-commerce SEO & Content Marketing",
    duration: "10 Months",
    budget: "$18,000",
    objective: "Boost organic revenue and product visibility for sustainable fashion e-commerce"
  };

  const beforeAfterMetrics = [
    { metric: "Organic Revenue", before: "$12K", after: "$89K", growth: "+642%" },
    { metric: "Product Page Traffic", before: "4,200", after: "31,800", growth: "+657%" },
    { metric: "Category Rankings", before: "23", after: "156", growth: "+578%" },
    { metric: "Conversion Rate", before: "1.8%", after: "4.2%", growth: "+133%" },
    { metric: "Average Order Value", before: "$45", after: "$67", growth: "+49%" },
    { metric: "Return Customers", before: "18%", after: "34%", growth: "+89%" }
  ];

  const keyStrategies = [
    {
      title: "Product Page Optimization",
      description: "Optimized product descriptions, meta tags, and schema markup for better product visibility",
      icon: <ShoppingCart size={24} className="text-primary" />
    },
    {
      title: "Content Hub Creation",
      description: "Built comprehensive fashion blog and style guides targeting long-tail keywords",
      icon: <Target size={24} className="text-primary" />
    },
    {
      title: "Technical E-commerce SEO",
      description: "Implemented structured data, optimized site architecture, and improved internal linking",
      icon: <Search size={24} className="text-primary" />
    },
    {
      title: "Local SEO Integration",
      description: "Optimized for local fashion searches and sustainable clothing queries",
      icon: <TrendingUp size={24} className="text-primary" />
    }
  ];

  const contentBreakdown = [
    { type: "Product Descriptions", percentage: 40, count: 120 },
    { type: "Style Guides", percentage: 25, count: 18 },
    { type: "Sustainability Content", percentage: 20, count: 15 },
    { type: "Trend Articles", percentage: 15, count: 12 }
  ];

  const testimonial = {
    text: "The SEO transformation has been incredible. Our organic revenue increased by over 600%, and we're now ranking for thousands of fashion-related keywords. The content strategy particularly helped establish us as a thought leader in sustainable fashion.",
    author: "Emma Rodriguez",
    position: "Founder, EcoStyle Store",
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
                <ShoppingCart size={32} className="text-green-600" />
                <Badge variant="secondary">E-commerce SEO Case Study</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce Fashion <span className="bg-gradient-primary bg-clip-text text-transparent">SEO Success</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we increased organic revenue by 642% for a sustainable fashion e-commerce store 
                through strategic SEO and content marketing.
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

        {/* Content Strategy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Content <span className="bg-gradient-primary bg-clip-text text-transparent">Strategy</span>
              </h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Content Distribution</CardTitle>
                  <p className="text-muted-foreground">Strategic content mix that drove organic growth</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contentBreakdown.map((content, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{content.type}</span>
                          <span className="text-sm text-muted-foreground">{content.count} pieces</span>
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

        {/* Key Strategies */}
        <section className="py-16 bg-muted/30">
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
      </main>
      <Footer />
    </div>
  );
};

export default SEOCaseStudy2;