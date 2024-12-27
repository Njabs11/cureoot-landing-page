import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "50,000+",
    label: "Medicinal Plants in Africa",
  },
  {
    number: "80%",
    label: "of World Population Using Traditional Medicine",
  },
  {
    number: "25%",
    label: "of Modern Medicines from Natural Products",
  },
];

export const WhyItMatters = () => {
  return (
    <section className="bg-primary text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Unlocking the potential of African biodiversity for global health solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-center p-8 hover:bg-white/20 transition-colors">
              <CardContent>
                <p className="text-5xl font-bold mb-4 font-heading">{stat.number}</p>
                <p className="text-lg text-white/90">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            By integrating traditional knowledge with modern science and AI technology, we're creating innovative treatments while preserving Africa's rich medicinal heritage.
          </p>
        </div>
      </div>
    </section>
  );
};