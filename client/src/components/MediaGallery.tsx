import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface MediaGalleryProps {
currentModel: 'female' | 'male';
}

interface ImageData {
src: string;
alt: string;
}

const FullScreenImageModal = ({ open, onClose, src, alt }: { open: boolean; onClose: () => void; src: string; alt: string }) => {
return (
<Dialog open={open} onOpenChange={onClose}>
<DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
<DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[95vw] max-h-[95vh] w-full h-full bg-transparent shadow-none p-0 z-50 flex items-center justify-center">
<img src={src} alt={alt} className="object-contain max-h-full max-w-full" />
<button
onClick={onClose}
className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/50 transition-colors duration-200"
>
<X className="w-5 h-5" />
</button>
</DialogContent>
</Dialog>
);
};

export default function MediaGallery({ currentModel }: MediaGalleryProps) {
const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

const femaleImages: ImageData[] = [
{ src: "/assets/images/Mujerfoto1.jpg", alt: "Key Visual 1 - Mujer" },
{ src: "/assets/images/Mujerfoto2.jpg", alt: "Key Visual 2 - Mujer" },
{ src: "/assets/images/Mujerfoto3.jpg", alt: "Key Visual 3 - Mujer" },
];

const maleImages: ImageData[] = [
{ src: "/assets/images/Hombrefoto1.png", alt: "Key Visual 1 - Hombre" },
{ src: "/assets/images/Hombrefoto2.png", alt: "Key Visual 2 - Hombre" },
{ src: "/assets/images/Hombrefoto3.png", alt: "Key Visual 3 - Hombre" },
];

const currentImages = currentModel === 'female' ? femaleImages : maleImages;

const openFullScreen = (image: ImageData) => {
setSelectedImage(image);
};

const closeFullScreen = () => {
setSelectedImage(null);
};

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
            className="group relative aspect-[9/16] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => openFullScreen(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-inter text-sm font-medium">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <FullScreenImageModal
          open={!!selectedImage}
          onClose={closeFullScreen}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </div>
  </div>
</section>
);
}