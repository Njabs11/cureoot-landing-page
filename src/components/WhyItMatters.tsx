import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "50,000",
    label: "Known Plant Species in Africa",
  },
  {
    number: "25%",
    label: "of the World's Plant Genetic Resources",
  },
  {
    number: "<1%",
    label: "of African Plant Metabolites Studied",
  },
];

export const WhyItMatters = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/43c7e6ae-7219-4abd-bcc7-a19c765e1e73.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Why It Matters
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Unlocking the potential of African biodiversity for global health solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-none text-center p-10 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-0">
                <p className="text-6xl font-bold mb-4 font-heading text-white">{stat.number}</p>
                <p className="text-xl text-white/90 leading-relaxed">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            Natural products and hybrid drugs outperform synthetics in clinical trials, advancing further with higher success rates and lower toxicity—paving the way for safer, more effective treatments.
          </p>
        </div>
      </div>
    </section>
  );
};