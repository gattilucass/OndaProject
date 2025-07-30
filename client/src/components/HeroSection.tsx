import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  currentModel: 'female' | 'male';
  selectedSize: 'S' | 'M' | 'L' | 'XL';
  onToggleModel: () => void;
  onSizeSelect: (size: 'S' | 'M' | 'L' | 'XL') => void;
}

export default function HeroSection({ 
  currentModel, 
  selectedSize, 
  onToggleModel, 
  onSizeSelect 
}: HeroSectionProps) {
  const sizes: ('S' | 'M' | 'L' | 'XL')[] = ['S', 'M', 'L', 'XL'];

  const femaleContent = {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    copy: "Diseñada para fluir con vos. La ONDA Yellow Edition celebra lo cotidiano con elegancia y carácter."
  };

  const maleContent = {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    copy: "Corte moderno, esencia clásica. La ONDA Yellow Edition combina actitud y estructura para destacar sin esfuerzo."
  };

  const content = currentModel === 'female' ? femaleContent : maleContent;

  return (
    <section className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Media Display */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] bg-smoke rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={content.image}
                alt={`${currentModel} model wearing yellow ONDA shirt`} 
                className="w-full h-full object-cover rounded-2xl transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="text-sm font-inter text-gray-500 tracking-wider">COLECCIÓN AI</div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">ONDA / Yellow Edition</h2>
              
              {/* Dynamic Copy */}
              <div className="text-lg leading-relaxed text-gray-700 animate-fade-in">
                <p>{content.copy}</p>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <h3 className="font-inter font-medium">Seleccionar Talle</h3>
              <div className="flex space-x-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => onSizeSelect(size)}
                    className={`w-12 h-12 border-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-gold bg-gold text-white'
                        : 'border-gray-300 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-charcoal text-white py-4 px-8 font-inter font-medium hover:bg-gray-800 transition-all duration-200 rounded-lg transform hover:-translate-y-0.5 hover:shadow-lg">
                Reservar Diseño
              </Button>
              
              <Button 
                variant="outline"
                onClick={onToggleModel}
                className="w-full border-2 border-charcoal text-charcoal py-4 px-8 font-inter font-medium hover:bg-charcoal hover:text-white transition-all duration-200 rounded-lg"
              >
                Ver Modelo {currentModel === 'female' ? 'Masculino' : 'Femenino'}
              </Button>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-gray-200">
              <div className="text-2xl font-playfair font-bold">$189.00</div>
              <div className="text-sm text-gray-500">Envío gratuito a todo el país</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
