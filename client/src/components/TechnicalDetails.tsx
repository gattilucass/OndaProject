import { Leaf, Droplets, Bot } from "lucide-react";

export default function TechnicalDetails() {
  const details = [
    {
      icon: Leaf,
      title: "Material",
      description: "Algodón premium 100%"
    },
    {
      icon: Droplets,
      title: "Lavado",
      description: "Lavar en frío - No centrifugar"
    },
    {
      icon: Bot,
      title: "Confección",
      description: "Diseño asistido por inteligencia artificial"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="font-playfair text-3xl font-bold text-center mb-12">Detalles Técnicos</h3>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className="glassmorphism p-8 rounded-2xl text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h4 className="font-inter font-semibold mb-2">{detail.title}</h4>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
