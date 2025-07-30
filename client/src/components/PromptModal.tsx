import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Sparkles, Bot, Mic, MessageSquare, Palette } from "lucide-react";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromptModal({ isOpen, onClose }: PromptModalProps) {
  const prompts = [
    {
      title: "VEO 3 (Videos)",
      icon: Bot,
      color: "from-purple-500 to-purple-600",
      content: "Fashion model showcase: cinematic 4-second video of [male/female] model wearing a premium yellow designer shirt. Studio lighting, professional fashion photography style, minimal movement, focus on fabric texture and fit."
    },
    {
      title: "ElevenLabs (Audio)",
      icon: Mic,
      color: "from-orange-500 to-orange-600",
      content: "Elegant, sophisticated female voice with slight warmth. Reading fashion product copy with confidence and subtle emotion. Natural pauses, premium brand tone."
    },
    {
      title: "ChatGPT (Copy)",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      content: "Create elegant, aspirational copy for a premium AI-designed yellow shirt. Two versions: one for female audience focusing on flow and daily elegance, another for male audience emphasizing modern cut and classic essence."
    },
    {
      title: "Figma (Design)",
      icon: Palette,
      color: "from-pink-500 to-pink-600",
      content: "High-fashion e-commerce product page mockup. Clean, minimalist design with premium typography (Playfair Display + Inter), sophisticated color palette (white, charcoal, gold accents), glassmorphism effects."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl">
        <DialogHeader className="border-b border-gray-200 pb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-gold to-yellow-400 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <DialogTitle className="font-playfair text-3xl font-bold bg-gradient-to-r from-charcoal to-gray-600 bg-clip-text text-transparent">
                Prompts Utilizados
              </DialogTitle>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-96 space-y-6 p-6">
          {prompts.map((prompt, index) => {
            const IconComponent = prompt.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-3 bg-gradient-to-r ${prompt.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-charcoal">{prompt.title}</h4>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 leading-relaxed font-inter shadow-sm hover:shadow-md transition-all duration-300">
                    {prompt.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 px-6 pb-2">
          <p className="text-center text-sm text-gray-500 font-inter">
            Cada herramienta de IA contribuyó a crear esta experiencia de moda premium
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
