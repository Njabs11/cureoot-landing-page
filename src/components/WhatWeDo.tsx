import { Leaf, Flask, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Drug Discovery",
    description: "Identifying and studying bioactive molecules from African plants using cutting-edge AI technology.",
    icon: Flask,
  },
  {
    title: "Chemical Library",
    description: "Building comprehensive libraries of secondary metabolites derived from African plants.",
    icon: Leaf,
  },
  {
    title: "Therapeutic Focus",
    description: "Targeting high-need areas including infectious diseases, oncology, and autoimmune disorders.",
    icon: Brain,
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-2 border-primary/10">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};