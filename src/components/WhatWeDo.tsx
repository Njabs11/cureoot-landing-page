import { Leaf, Beaker, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Drug Discovery",
    description: "Identifying and studying bioactive molecules from African plants using cutting-edge AI technology and computational testing.",
    icon: Beaker,
  },
  {
    title: "Chemical Library",
    description: "Building one of the world's most comprehensive libraries of secondary metabolites derived from African medicinal plants.",
    icon: Leaf,
  },
  {
    title: "Therapeutic Focus",
    description: "Targeting critical health challenges including infectious diseases, oncology, cardiometabolic disease, and autoimmune disorders with innovative solutions.",
    icon: Pill,
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-accent">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Leveraging cutting-edge technology to unlock the potential of African medicinal plants
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="text-center pt-10">
                <div className="mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl font-bold mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
