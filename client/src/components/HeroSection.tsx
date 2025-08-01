import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Reset video index when model changes
  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [currentModel]);

  const femaleContent = {
    copy: "Diseñada para fluir con vos. La ONDA Yellow Edition celebra lo cotidiano con elegancia y carácter.",
    videos: [
      {
        src: "/assets/videos/Mujervideo.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Mujervideo.mp4", // Usar el propio video como thumbnail si no hay una imagen específica
        title: "Video 1 - Mujer"
      },
      {
        src: "/assets/videos/Videomujer.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Videomujer.mp4", // Usar el propio video como thumbnail
        title: "Video 2 - Mujer"
      },
      {
        src: "/assets/videos/Mujervideo3.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Mujervideo3.mp4", // Usar el propio video como thumbnail
        title: "Video 3 - Mujer"
      }
    ]
  };

  const maleContent = {
    copy: "Corte moderno, esencia clásica. La ONDA Yellow Edition combina actitud y estructura para destacar sin esfuerzo.",
    videos: [
      {
        src: "/assets/videos/Videohombre1.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Videohombre1.mp4", // Usar el propio video como thumbnail
        title: "Video 1 - Hombre"
      },
      {
        src: "/assets/videos/Videohombre2.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Videohombre2.mp4", // Usar el propio video como thumbnail
        title: "Video 2 - Hombre"
      },
      {
        src: "/assets/videos/Videohombre3.mp4", // RUTA ACTUALIZADA
        thumbnail: "/assets/videos/Videohombre3.mp4", // Usar el propio video como thumbnail
        title: "Video 3 - Hombre"
      }
    ]
  };

  const content = currentModel === 'female' ? femaleContent : maleContent;
  const currentVideo = content.videos[currentVideoIndex];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % content.videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + content.videos.length) % content.videos.length);
  };

  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-white via-gray-50 to-smoke flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Video Slideshow Display */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main Video Display - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-md mx-auto">
                <video
                  src={currentVideo.src}
                  poster={currentVideo.thumbnail}
                  controls
                  className="w-full h-full object-contain"
                  key={currentVideoIndex}
                  autoPlay // Añadido el atributo autoplay
                  loop     // Añadido el atributo loop para que se repita
                  muted    // Añadido el atributo muted para que inicie sin sonido
                >
                  Su navegador no soporta videos HTML5.
                </video>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 text-charcoal" />
                </button>
                
                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 text-charcoal" />
                </button>

                {/* Video Indicators - Posición ajustada y z-index agregado */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {content.videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentVideoIndex
                          ? 'bg-gold shadow-lg'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Video Title Overlay */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                  <span className="font-inter text-xs font-medium">{currentVideo.title}</span>
                </div>
              </div>

              {/* Bloque de Miniaturas de Videos ELIMINADO */}
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
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-black leading-tight">
                ONDA / Yellow Edition
              </h2>
              
              {/* Dynamic Copy */}
              <div className="text-xl leading-relaxed text-black animate-fade-in font-light">
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
              <Button className="w-full bg-gradient-to-r from-charcoal to-gray-800 text-black py-4 px-8 font-inter font-medium hover:shadow-2xl transition-all duration-300 rounded-2xl transform hover:-translate-y-1 hover:scale-[1.02] shadow-lg">
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
                  <div className="text-3xl font-playfair font-bold text-black">
                    $189.00
                  </div>
                  <div className="text-sm text-black font-medium">Envío gratuito a todo el país</div>
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