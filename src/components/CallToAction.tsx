import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-accent">
          Ready to <span className="text-primary">Learn More?</span>
        </h2>
        <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          Explore how CureRoot is bringing innovation to drug discovery while preserving and honoring Africa's indigenous knowledge systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Contact Us <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Learn More
          </Button>
        </div>
        <p className="mt-12 text-xl font-heading text-primary">Let's grow health, together.</p>
      </div>
    </section>
  );
};