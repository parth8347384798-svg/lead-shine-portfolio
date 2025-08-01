import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to Grow Your Brand?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's discuss how we can take your marketing to the next level
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="portfolio" size="lg" className="text-lg px-8">
            Start a Project
          </Button>
          <Button variant="outline-dark" size="lg" className="text-lg px-8">
            View Portfolio
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};