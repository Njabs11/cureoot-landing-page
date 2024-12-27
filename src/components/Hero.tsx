import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
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