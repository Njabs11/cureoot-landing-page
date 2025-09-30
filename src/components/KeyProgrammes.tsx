import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain } from "lucide-react";

const programmes = [
  {
    title: "Infectious Diseases",
    focus: "Drug Resistant TB",
    description: "Developing innovative therapeutic solutions to combat drug-resistant tuberculosis, one of the world's most challenging infectious diseases.",
    icon: Activity,
    gradient: "from-primary/10 to-primary/5",
  },
  {
    title: "Oncology",
    focus: "Pancreatic and Brain Cancer",
    description: "Pioneering novel treatments for aggressive cancers with limited therapeutic options, targeting pancreatic and brain malignancies.",
    icon: Brain,
    gradient: "from-secondary/10 to-secondary/5",
  },
];

export const KeyProgrammes = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-accent">
            Our Key <span className="text-primary">Programmes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Focused research initiatives targeting critical global health challenges
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 max-w-5xl mx-auto">
          {programmes.map((programme, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${programme.gradient} opacity-50`}></div>
              <CardHeader className="relative z-10 pt-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                    <programme.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="font-heading text-3xl font-bold text-center mb-2 text-accent">
                  {programme.title}
                </CardTitle>
                <p className="text-center text-primary font-semibold text-lg">
                  {programme.focus}
                </p>
              </CardHeader>
              <CardContent className="relative z-10 pb-10">
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {programme.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
