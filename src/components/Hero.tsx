import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0" />
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5d7089a6-942d-4e24-b32b-8becd19ee4f4.png')] bg-cover bg-center opacity-5 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 opacity-90">
            <img 
              src="/lovable-uploads/c9a82a1f-128c-4ed9-8dd9-f269107458ad.png" 
              alt="CureRoot Logo" 
              className="h-20 md:h-28 mx-auto"
            />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent tracking-tight mb-6">
            <span className="block">Transforming African</span>
            <span className="block text-primary">Medicinal Knowledge</span>
            <span className="block">into Global Solutions</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Redefining drug discovery through Africa's rich biodiversity and traditional knowledge, powered by cutting-edge AI technology.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg font-medium tracking-wide w-full sm:w-auto min-w-[200px] transition-all duration-300 ease-out transform hover:scale-105"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-7 text-lg font-medium tracking-wide w-full sm:w-auto min-w-[200px] transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};