import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyItMatters } from "@/components/WhyItMatters";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhyItMatters />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;