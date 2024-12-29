import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const loadTypeform = () => {
      // @ts-ignore
      if (window.tf) {
        try {
          // @ts-ignore
          window.tf.load();
          console.log("Typeform loaded successfully in Hero");
        } catch (error) {
          console.error("Error loading Typeform in Hero:", error);
        }
      } else {
        console.log("Typeform not available yet in Hero");
      }
    };

    // Initial load attempt
    loadTypeform();

    // Retry after a short delay to ensure script is loaded
    const retryTimeout = setTimeout(loadTypeform, 1000);

    return () => clearTimeout(retryTimeout);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0" />
      <div className="max-w-6xl mx-auto text-center animate-fade-up relative z-10">
        <div className="mb-12 flex justify-center">
          <img 
            src="/lovable-uploads/c9a82a1f-128c-4ed9-8dd9-f269107458ad.png" 
            alt="CureRoot Logo" 
            className="h-32 md:h-40 lg:h-44"
          />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 leading-tight">
          Ancient Wisdom, Modern Science,{" "}
          <span className="text-primary">Global Impact</span>
        </h1>
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-600">
          We are redefining drug discovery by leveraging Africa's rich biodiversity and traditional medicinal knowledge through cutting-edge AI technology.
        </p>
        <div className="flex justify-center items-center">
          <div data-tf-live="01JG8QXHDHVY781MC3GJV483VD"></div>
        </div>
      </div>
    </div>
  );
};