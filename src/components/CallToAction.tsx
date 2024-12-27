import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-accent">
          Ready to <span className="text-primary">Learn More?</span>
        </h2>
        <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore how CureRoot is bringing innovation to drug discovery while preserving and honoring Africa's indigenous knowledge systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg font-medium tracking-wide w-full sm:w-auto min-w-[200px] transition-all duration-300 ease-out transform hover:scale-105"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-7 text-lg font-medium tracking-wide w-full sm:w-auto min-w-[200px] transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        <p className="mt-16 text-2xl font-heading text-primary font-medium">Let's grow health, together.</p>
      </div>
    </section>
  );
};