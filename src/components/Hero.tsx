import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0" />
      <div className="max-w-6xl mx-auto text-center animate-fade-up relative z-10">
        <div className="mb-12 flex justify-center">
          <img 
            src="/lovable-uploads/c9a82a1f-128c-4ed9-8dd9-f269107458ad.png" 
            alt="CureRoot Logo" 
            className="h-28 md:h-36"
          />
        </div>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-8 leading-tight">
          Transforming African Medicinal Knowledge into{" "}
          <span className="text-primary">Global Health Solutions</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600">
          We are redefining drug discovery by leveraging Africa's rich biodiversity and traditional medicinal knowledge through cutting-edge AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Learn More <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};