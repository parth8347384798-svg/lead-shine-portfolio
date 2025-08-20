import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Target, BarChart3, Award, Search, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const SEOPortfolio = () => {
  const clientResults = [
    {
      id: 1,
      client: "TechCorp Solutions",
      industry: "B2B Technology",
      image: "👔",
      metrics: {
        trafficGrowth: "+704%",
        keywordRankings: "+958%",
        monthlyLeads: "+611%",
        domainAuthority: "+86%"
      },
      duration: "8 Months",
      caseStudyLink: "/seo-case-study-1"
    },
    {
      id: 2,
      client: "GreenLife Wellness",
      industry: "Health & Wellness",
      image: "🌿",
      metrics: {
        trafficGrowth: "+445%",
        keywordRankings: "+673%",
        monthlyLeads: "+520%",
        domainAuthority: "+75%"
      },
      duration: "6 Months",
      caseStudyLink: "/seo-case-study-2"
    },
    {
      id: 3,
      client: "UrbanStyle Fashion",
      industry: "E-commerce Fashion",
      image: "👗",
      metrics: {
        trafficGrowth: "+892%",
        keywordRankings: "+1,240%",
        monthlyLeads: "+780%",
        domainAuthority: "+95%"
      },
      duration: "10 Months",
      caseStudyLink: "/seo-case-study-3"
    }
  ];

  const overallStats = [
    {
      label: "Total Clients Served",
      value: "150+",
      icon: <Users className="text-primary" size={24} />
    },
    {
      label: "Average Traffic Growth",
      value: "680%",
      icon: <TrendingUp className="text-primary" size={24} />
    },
    {
      label: "Keywords Ranked #1",
      value: "2,500+",
      icon: <Target className="text-primary" size={24} />
    },
    {
      label: "Total Leads Generated",
      value: "50,000+",
      icon: <BarChart3 className="text-primary" size={24} />
    }
  ];

  const services = [
    {
      title: "Technical SEO Audit",
      description: "Complete website analysis and optimization",
      icon: <Search className="text-primary" size={32} />
    },
    {
      title: "Content Strategy",
      description: "Data-driven content planning and creation",
      icon: <Target className="text-primary" size={32} />
    },
    {
      title: "Link Building",
      description: "Strategic high-authority backlink acquisition",
      icon: <Globe className="text-primary" size={32} />
    },
    {
      title: "Performance Optimization",
      description: "Core Web Vitals and speed optimization",
      icon: <Zap className="text-primary" size={32} />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Search size={40} className="text-primary" />
                <Badge variant="secondary" className="text-sm">SEO Specialist</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                SEO Results That <span className="bg-gradient-primary bg-clip-text text-transparent">Drive Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Proven track record of increasing organic traffic by 680% on average and generating 50,000+ leads for clients across industries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Target size={20} />
                  Start Your SEO Project
                </Button>
                <Button variant="outline" size="lg">
                  View All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Track Record</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overallStats.map((stat, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="mb-4">{stat.icon}</div>
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Client <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Real results from real businesses. See how we've transformed our clients' online presence through strategic SEO.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {clientResults.map((client) => (
                  <Card key={client.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4">{client.image}</div>
                      <CardTitle className="text-xl">{client.client}</CardTitle>
                      <Badge variant="outline">{client.industry}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">{client.metrics.trafficGrowth}</div>
                          <div className="text-xs text-muted-foreground">Traffic Growth</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{client.metrics.keywordRankings}</div>
                          <div className="text-xs text-muted-foreground">Keyword Rankings</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{client.metrics.monthlyLeads}</div>
                          <div className="text-xs text-muted-foreground">Monthly Leads</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">{client.metrics.domainAuthority}</div>
                          <div className="text-xs text-muted-foreground">Domain Authority</div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-muted-foreground">Project Duration</span>
                          <span className="text-sm font-medium">{client.duration}</span>
                        </div>
                        <Link to={client.caseStudyLink}>
                          <Button className="w-full group-hover:bg-primary/90 transition-colors">
                            View Full Case Study
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                SEO <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-lg">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Award size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Dominate</span> Search Results?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join 150+ successful businesses that have transformed their online presence with our proven SEO strategies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Search size={20} />
                  Get Your FREE SEO Audit
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SEOPortfolio;