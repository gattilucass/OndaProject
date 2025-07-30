import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MediaGallery from "@/components/MediaGallery";
import TechnicalDetails from "@/components/TechnicalDetails";
import Footer from "@/components/Footer";
import PromptModal from "@/components/PromptModal";

export default function Home() {
  const [currentModel, setCurrentModel] = useState<'female' | 'male'>('female');
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('L');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModel = () => {
    setCurrentModel(prev => prev === 'female' ? 'male' : 'female');
  };

  return (
    <div className="bg-white text-charcoal font-inter">
      <Header />
      <HeroSection 
        currentModel={currentModel}
        selectedSize={selectedSize}
        onToggleModel={toggleModel}
        onSizeSelect={setSelectedSize}
      />
      <MediaGallery currentModel={currentModel} />
      <TechnicalDetails />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <PromptModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
