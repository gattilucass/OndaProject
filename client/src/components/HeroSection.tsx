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
    <section className="pt-20 min-h-screen bg-gradient-to-br from-white via-gray-50 to-smoke flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Media Display */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src={content.image}
                  alt={`${currentModel} model wearing yellow ONDA shirt`} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block">
                <div className="text-sm font-inter text-gold font-semibold tracking-wider bg-gold/10 px-4 py-2 rounded-full">
                  COLECCIÓN AI
                </div>
              </div>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-charcoal via-black to-charcoal bg-clip-text text-transparent leading-tight">
                ONDA / Yellow Edition
              </h2>
              
              {/* Dynamic Copy */}
              <div className="text-xl leading-relaxed text-gray-800 animate-fade-in font-light">
                <p className="italic">{content.copy}</p>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-6">
              <h3 className="font-playfair text-xl font-semibold">Seleccionar Talle</h3>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => onSizeSelect(size)}
                    className={`w-14 h-14 border-2 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-110 ${
                      selectedSize === size
                        ? 'border-gold bg-gold text-white shadow-lg shadow-gold/25'
                        : 'border-gray-300 hover:border-gold hover:text-gold hover:shadow-md bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Toggle */}
            <div className="space-y-6">
              <h3 className="font-playfair text-xl font-semibold">Seleccionar Modelo</h3>
              <div className="flex space-x-6">
                <button
                  onClick={() => currentModel !== 'female' && onToggleModel()}
                  className={`flex-1 p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    currentModel === 'female'
                      ? 'border-gold bg-gradient-to-br from-gold/20 to-gold/5 text-charcoal shadow-xl shadow-gold/20'
                      : 'border-gray-300 hover:border-gold hover:shadow-lg bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl transform transition-transform hover:rotate-12">
                      ♀
                    </div>
                    <span className="font-inter font-semibold text-lg">Mujer</span>
                  </div>
                </button>
                
                <button
                  onClick={() => currentModel !== 'male' && onToggleModel()}
                  className={`flex-1 p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    currentModel === 'male'
                      ? 'border-gold bg-gradient-to-br from-gold/20 to-gold/5 text-charcoal shadow-xl shadow-gold/20'
                      : 'border-gray-300 hover:border-gold hover:shadow-lg bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-xl transform transition-transform hover:-rotate-12">
                      ♂
                    </div>
                    <span className="font-inter font-semibold text-lg">Hombre</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Button className="w-full bg-gradient-to-r from-charcoal to-gray-800 text-white py-4 px-8 font-inter font-medium hover:shadow-2xl transition-all duration-300 rounded-2xl transform hover:-translate-y-1 hover:scale-[1.02] shadow-lg">
                <span className="flex items-center justify-center space-x-2">
                  <span>Reservar Diseño</span>
                  <span className="text-gold">✨</span>
                </span>
              </Button>
            </div>

            {/* Price */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-black to-charcoal bg-clip-text text-transparent">
                    $189.00
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Envío gratuito a todo el país</div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>En stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
