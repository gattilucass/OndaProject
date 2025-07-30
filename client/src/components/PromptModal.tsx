import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromptModal({ isOpen, onClose }: PromptModalProps) {
  const prompts = [
    {
      title: "Prompt para VEO 3 (Videos):",
      content: "Fashion model showcase: cinematic 4-second video of [male/female] model wearing a premium yellow designer shirt. Studio lighting, professional fashion photography style, minimal movement, focus on fabric texture and fit."
    },
    {
      title: "Prompt para ElevenLabs (Audio):",
      content: "Elegant, sophisticated female voice with slight warmth. Reading fashion product copy with confidence and subtle emotion. Natural pauses, premium brand tone."
    },
    {
      title: "Prompt para ChatGPT (Copy):",
      content: "Create elegant, aspirational copy for a premium AI-designed yellow shirt. Two versions: one for female audience focusing on flow and daily elegance, another for male audience emphasizing modern cut and classic essence."
    },
    {
      title: "Prompt para Figma (Design):",
      content: "High-fashion e-commerce product page mockup. Clean, minimalist design with premium typography (Playfair Display + Inter), sophisticated color palette (white, charcoal, gold accents), glassmorphism effects."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="font-playfair text-2xl font-bold">
              Prompts Utilizados
            </DialogTitle>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-96 space-y-4 text-sm font-inter leading-relaxed p-6">
          {prompts.map((prompt, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{prompt.title}</h4>
              <p className="text-gray-700 bg-smoke p-4 rounded-lg">{prompt.content}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
