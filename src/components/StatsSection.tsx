export const StatsSection = () => {
  const stats = [
    {
      number: "11+",
      label: "Peoples",
      sublabel: "Recommend"
    },
    {
      number: "4+",
      label: "Years of",
      sublabel: "Experience"
    },
    {
      number: "100+",
      label: "Projects",
      sublabel: "Completed"
    },
    {
      number: "10M+",
      label: "Achieving",
      sublabel: "in sales"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-2 animate-fade-in group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  <div>{stat.label}</div>
                  <div className="text-white/70">{stat.sublabel}</div>
                </div>
                
                {/* Decorative line */}
                <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
    </section>
  );
};