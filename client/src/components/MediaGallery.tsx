import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaGalleryProps {
  currentModel: 'female' | 'male';
}

export default function MediaGallery({ currentModel }: MediaGalleryProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Reset video index when model changes
  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [currentModel]);

  const femaleMedia = {
    videos: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ]
  };

  const maleMedia = {
    videos: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ]
  };

  const currentMedia = currentModel === 'female' ? femaleMedia : maleMedia;

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % currentMedia.videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + currentMedia.videos.length) % currentMedia.videos.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-smoke">
      <div className="container mx-auto px-6">
        <h3 className="font-playfair text-4xl font-bold text-center mb-16 animate-fade-in">
          Galería de Producto
        </h3>
        
        {/* Video Carousel - Main Section */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Main Video Display */}
            <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={currentMedia.videos[currentVideoIndex]}
                alt={`${currentModel} model video ${currentVideoIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevVideo}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal" />
              </button>
              
              <button 
                onClick={nextVideo}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-charcoal" />
              </button>

              {/* Video Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {currentMedia.videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'bg-gold shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Video Thumbnails */}
            <div className="flex justify-center space-x-4">
              {currentMedia.videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'ring-4 ring-gold shadow-lg scale-105' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img 
                    src={video}
                    alt={`Video thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div>
          <h4 className="font-playfair text-2xl font-semibold text-center mb-8">
            Detalles del Producto
          </h4>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {currentMedia.images.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <img 
                  src={image}
                  alt={`${currentModel} model detail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
