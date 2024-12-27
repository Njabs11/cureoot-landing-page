import { Leaf, Beaker, Brain } from "lucide-react";
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
    description: "Targeting critical health challenges including infectious diseases, oncology, and autoimmune disorders with innovative solutions.",
    icon: Brain,
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-accent">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge technology to unlock the potential of African medicinal plants
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-2 border-primary/10 bg-white">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};