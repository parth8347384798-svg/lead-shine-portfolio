export const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Brand Strategy",
      description: "Comprehensive brand development and strategic positioning to make your brand stand out in the market."
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns across multiple channels to maximize your ROI and reach."
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Engaging social media strategies that build communities and drive meaningful connections."
    },
    {
      icon: "💡",
      title: "Content Creation",
      description: "Compelling content that tells your brand story and converts prospects into loyal customers."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};