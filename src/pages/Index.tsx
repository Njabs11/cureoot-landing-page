import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { KeyProgrammes } from "@/components/KeyProgrammes";
import { WhyItMatters } from "@/components/WhyItMatters";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <KeyProgrammes />
      <WhyItMatters />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;