interface MediaGalleryProps {
  currentModel: 'female' | 'male';
}

export default function MediaGallery({ currentModel }: MediaGalleryProps) {
  const femaleMedia = {
    videos: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280"
    ],
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ]
  };

  const maleMedia = {
    videos: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=280"
    ],
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ]
  };

  const currentMedia = currentModel === 'female' ? femaleMedia : maleMedia;

  return (
    <section className="py-20 bg-smoke">
      <div className="container mx-auto px-6">
        <h3 className="font-playfair text-3xl font-bold text-center mb-12">Galería de Producto</h3>
        
        {/* Videos Section */}
        <div className="mb-12">
          <h4 className="font-inter font-medium mb-6">Videos</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {currentMedia.videos.map((video, index) => (
              <div key={index} className="aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={video}
                  alt={`${currentModel} model video ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div>
          <h4 className="font-inter font-medium mb-6">Imágenes</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {currentMedia.images.map((image, index) => (
              <div key={index} className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={image}
                  alt={`${currentModel} model image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
