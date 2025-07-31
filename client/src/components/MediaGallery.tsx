interface MediaGalleryProps {
  currentModel: 'female' | 'male';
}

export default function MediaGallery({ currentModel }: MediaGalleryProps) {
  // Photo gallery data structure - 3 key visual images per gender (9:16 vertical format)
  const femaleImages = [
    {
      src: "path/to/female-image-1.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 1 - Mujer"
    },
    {
      src: "path/to/female-image-2.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 2 - Mujer"
    },
    {
      src: "path/to/female-image-3.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 3 - Mujer"
    }
  ];

  const maleImages = [
    {
      src: "path/to/male-image-1.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 1 - Hombre"
    },
    {
      src: "path/to/male-image-2.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 2 - Hombre"
    },
    {
      src: "path/to/male-image-3.jpg", // Replace with actual image path
      placeholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=711",
      title: "Key Visual 3 - Hombre"
    }
  ];

  const currentImages = currentModel === 'female' ? femaleImages : maleImages;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-smoke">
      <div className="container mx-auto px-6">
        <h3 className="font-playfair text-4xl font-bold text-center mb-16 animate-fade-in text-black">
          Galería de Fotos
        </h3>
        
        {/* Photo Gallery - 3 vertical images in a row */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {currentImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-[9/16] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <img 
                  src={image.placeholder} // Use placeholder until replaced with actual image
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-inter text-sm font-medium">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions for image placement */}
          <div className="mt-12 p-6 bg-gold/10 border border-gold/20 rounded-2xl">
            <h4 className="font-playfair text-lg font-semibold text-black mb-2">
              Instrucciones para Imágenes:
            </h4>
            <div className="text-sm text-black space-y-1">
              <p>• Reemplaza los paths en el código: <code className="bg-white px-2 py-1 rounded text-xs">path/to/female-image-1.jpg</code></p>
              <p>• 3 key visuals por género (mujer/hombre)</p>
              <p>• Formato vertical 9:16 (vertical como los videos)</p>
              <p>• Formatos recomendados: JPG, PNG, WebP</p>
              <p>• Resolución recomendada: 1080x1920 o superior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
