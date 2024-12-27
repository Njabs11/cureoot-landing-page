import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-secondary">
          Ready to Learn More?
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Explore how CureRoot is bringing innovation to drug discovery while preserving and honoring Africa's indigenous knowledge systems.
        </p>
        <div className="space-x-4">
          <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
            Contact Us
          </Button>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
        <p className="mt-8 text-xl font-heading text-primary">Let's grow health, together.</p>
      </div>
    </section>
  );
};