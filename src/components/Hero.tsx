import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/c9a82a1f-128c-4ed9-8dd9-f269107458ad.png" 
            alt="CureRoot Logo" 
            className="h-24 md:h-32"
          />
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-accent mb-6 leading-tight">
          Transforming African Medicinal Knowledge into Global Health Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600">
          We are redefining drug discovery by leveraging Africa's rich biodiversity and traditional medicinal knowledge.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Learn More
        </Button>
      </div>
    </div>
  );
};