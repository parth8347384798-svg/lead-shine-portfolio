import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, TrendingUp, Users, Target, BarChart3, Award, Quote, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SEOCaseStudy3 = () => {
  const projectOverview = {
    client: "HealthFirst Clinic",
    industry: "Healthcare Services",
    projectType: "Local SEO & Medical Marketing",
    duration: "12 Months",
    budget: "$22,000",
    objective: "Dominate local healthcare searches and increase patient appointments through medical SEO"
  };

  const beforeAfterMetrics = [
    { metric: "Local Search Visibility", before: "15%", after: "89%", growth: "+493%" },
    { metric: "New Patient Appointments", before: "28/mo", after: "185/mo", growth: "+561%" },
    { metric: "Google My Business Views", before: "1,200", after: "12,800", growth: "+967%" },
    { metric: "Local Keyword Rankings", before: "8", after: "94", growth: "+1,075%" },
    { metric: "Online Reviews", before: "12", after: "247", growth: "+1,958%" },
    { metric: "Website Conversions", before: "3.2%", after: "8.7%", growth: "+172%" }
  ];

  const keyStrategies = [
    {
      title: "Local SEO Domination",
      description: "Optimized Google My Business, local citations, and location-based content for healthcare searches",
      icon: <MapPin size={24} className="text-primary" />
    },
    {
      title: "Medical Content Authority",
      description: "Created comprehensive health content library targeting medical conditions and treatments",
      icon: <Target size={24} className="text-primary" />
    },
    {
      title: "Reputation Management",
      description: "Implemented review generation system and online reputation management strategy",
      icon: <Award size={24} className="text-primary" />
    },
    {
      title: "Technical Healthcare SEO",
      description: "Ensured HIPAA compliance while optimizing for medical search algorithms",
      icon: <Search size={24} className="text-primary" />
    }
  ];

  const servicePages = [
    { service: "General Medicine", rankings: 95, traffic: "+450%" },
    { service: "Pediatric Care", rankings: 87, traffic: "+380%" },
    { service: "Cardiology", rankings: 92, traffic: "+520%" },
    { service: "Dermatology", rankings: 89, traffic: "+410%" },
    { service: "Women's Health", rankings: 94, traffic: "+480%" }
  ];

  const testimonial = {
    text: "The local SEO results have transformed our practice. We went from struggling to fill appointments to having a waiting list. The increase in new patients has exceeded our expectations, and the quality of leads is exceptional.",
    author: "Dr. Patricia Williams",
    position: "Medical Director, HealthFirst Clinic",
    image: "👩‍⚕️"
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
                <MapPin size={32} className="text-blue-600" />
                <Badge variant="secondary">Healthcare SEO Case Study</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare Clinic <span className="bg-gradient-primary bg-clip-text text-transparent">Local SEO Dominance</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we helped a healthcare clinic achieve 89% local search visibility and increase 
                new patient appointments by 561% through strategic medical SEO.
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

        {/* Service Performance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Service Page <span className="bg-gradient-primary bg-clip-text text-transparent">Performance</span>
              </h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Medical Service Rankings</CardTitle>
                  <p className="text-muted-foreground">Local search visibility for key medical services</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {servicePages.map((service, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{service.service}</span>
                          <div className="flex gap-4 text-sm">
                            <span className="text-green-600 font-semibold">{service.traffic}</span>
                            <span className="text-muted-foreground">traffic growth</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={service.rankings} className="flex-1" />
                          <span className="text-sm font-mono w-12">{service.rankings}%</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Local search visibility</div>
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

export default SEOCaseStudy3;