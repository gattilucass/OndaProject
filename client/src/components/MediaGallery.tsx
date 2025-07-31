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

  // Video data structure - ready for manual video placement
  const femaleMedia = {
    videos: [
      {
        src: "path/to/female-video-1.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 1 - Mujer"
      },
      {
        src: "path/to/female-video-2.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 2 - Mujer"
      },
      {
        src: "path/to/female-video-3.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 3 - Mujer"
      }
    ]
  };

  const maleMedia = {
    videos: [
      {
        src: "path/to/male-video-1.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 1 - Hombre"
      },
      {
        src: "path/to/male-video-2.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 2 - Hombre"
      },
      {
        src: "path/to/male-video-3.mp4", // Replace with actual video path
        thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        title: "Video 3 - Hombre"
      }
    ]
  };

  const currentMedia = currentModel === 'female' ? femaleMedia : maleMedia;

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % currentMedia.videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + currentMedia.videos.length) % currentMedia.videos.length);
  };

  const currentVideo = currentMedia.videos[currentVideoIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-smoke">
      <div className="container mx-auto px-6">
        <h3 className="font-playfair text-4xl font-bold text-center mb-16 animate-fade-in text-black">
          Galería de Videos
        </h3>
        
        {/* Video Slideshow - Main Section */}
        <div className="max-w-4xl mx-auto">
          {/* Main Video Display */}
          <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl mb-8">
            {/* Video Element - Replace src with actual video paths */}
            <video 
              src={currentVideo.src}
              poster={currentVideo.thumbnail}
              controls
              className="w-full h-full object-cover"
              key={currentVideoIndex} // Force re-render when video changes
            >
              Su navegador no soporta videos HTML5.
            </video>
            
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

            {/* Video Title Overlay */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <span className="font-inter text-sm font-medium">{currentVideo.title}</span>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="flex justify-center space-x-4">
            {currentMedia.videos.map((video, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`relative w-32 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? 'ring-4 ring-gold shadow-lg scale-105' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-1 left-1 right-1">
                  <span className="text-white text-xs font-medium bg-black/50 rounded px-1">
                    Video {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Instructions for video placement */}
          <div className="mt-8 p-6 bg-gold/10 border border-gold/20 rounded-2xl">
            <h4 className="font-playfair text-lg font-semibold text-black mb-2">
              Instrucciones para Videos:
            </h4>
            <div className="text-sm text-black space-y-1">
              <p>• Reemplaza los paths en el código: <code className="bg-white px-2 py-1 rounded text-xs">path/to/female-video-1.mp4</code></p>
              <p>• 3 videos por género (mujer/hombre)</p>
              <p>• Formatos recomendados: MP4, WebM</p>
              <p>• Resolución recomendada: 1920x1080 o superior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
