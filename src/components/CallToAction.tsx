import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.tf) {
      // @ts-ignore
      window.tf.load();
    }
    console.log("Initializing Typeform in CallToAction");
  }, []);

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-accent">
          Ready to <span className="text-primary">Learn More?</span>
        </h2>
        <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Learn how CureRoot is transforming drug discovery by harnessing Africa's biodiversity and contributing to global scientific progress.
        </p>
        <div className="flex justify-center items-center">
          <div data-tf-live="01JG8QXHDHVY781MC3GJV483VD"></div>
        </div>
        <p className="mt-16 text-2xl font-heading text-primary font-medium">Advancing global health, one discovery at a time.</p>
      </div>
    </section>
  );
};