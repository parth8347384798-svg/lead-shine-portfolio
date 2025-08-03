import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Brand Strategy",
      description: "Comprehensive brand development and strategic positioning to make your brand stand out in the market.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns across multiple channels to maximize your ROI and reach.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Engaging social media strategies that build communities and drive meaningful connections.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: "💡",
      title: "Content Creation",
      description: "Compelling content that tells your brand story and converts prospects into loyal customers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: "🎨",
      title: "Web Design",
      description: "Modern, responsive websites that deliver exceptional user experiences and drive conversions.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: "📊",
      title: "Analytics & SEO",
      description: "Data-driven insights and optimization strategies to improve your online visibility and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What I Do Best
          </h2>
          <p className="text-xl text-muted-foreground">
            Specialized services to elevate your brand and drive growth
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-2 border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 bg-primary/10 hover:bg-primary/20 border-primary/20" />
          <CarouselNext className="-right-12 bg-primary/10 hover:bg-primary/20 border-primary/20" />
        </Carousel>
      </div>
    </section>
  );
};