import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyItMatters } from "@/components/WhyItMatters";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhyItMatters />
      <CallToAction />
    </div>
  );
};

export default Index;