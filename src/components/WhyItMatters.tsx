import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "50,000+",
    label: "Medicinal Plants",
  },
  {
    number: "80%",
    label: "of World's Population Using Traditional Medicine",
  },
  {
    number: "25%",
    label: "of Modern Medicines from Natural Products",
  },
];

export const WhyItMatters = () => {
  return (
    <section className="bg-primary text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
          Why It Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-none text-center p-8">
              <CardContent>
                <p className="text-4xl font-bold mb-2 font-heading">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            By integrating traditional knowledge with modern science, we aim to create life-saving treatments and contribute to global health equity.
          </p>
        </div>
      </div>
    </section>
  );
};