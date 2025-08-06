import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Calendar, Award, Users, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
    "AWS", "Docker", "Git", "Figma", "Tailwind CSS", "Next.js"
  ];

  const achievements = [
    { icon: Award, title: "50+ Projects", description: "Successfully completed" },
    { icon: Users, title: "100+ Clients", description: "Satisfied worldwide" },
    { icon: Coffee, title: "1000+ Hours", description: "Of coding experience" },
    { icon: Calendar, title: "5+ Years", description: "In the industry" },
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
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-friendly digital experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Download size={20} />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail size={20} />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">John Doe</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience in creating 
                  web applications that solve real-world problems. I specialize in modern JavaScript 
                  frameworks and have a keen eye for design and user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge with the developer community through 
                  blogs and tutorials.
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail size={16} className="text-primary" />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone size={16} className="text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the technologies and tools I work with on a regular basis.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Some numbers that reflect my journey and dedication to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
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
              Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Mail size={20} />
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;