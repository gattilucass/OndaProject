import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Sparkles, Bot, MessageSquare, Video } from "lucide-react"; // Importamos Video para usarlo en el modal

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
      title: "KLING AI (Video Hombre)", // Nuevo título
      icon: Video, // Usando Video para AI de video
      color: "from-blue-500 to-blue-600", // Nuevo color
      content: "A male model (25–35) walks slowly along the shoreline of a calm, bright beach during golden hour. He is wearing the exact same pastel yellow shirt from the reference photo — sleeves folded, chest pocket visible, shirt untucked. The camera pans smoothly from left to right following his walk for 5 seconds. The shirt remains clearly visible and untouched — full frontal and side view. The model has a calm expression and natural posture. Background is soft sand and ocean waves. Editorial lighting, 9:16 vertical."
    },
    {
      title: "PIKA AI (Video Mujer)", // Nuevo título
      icon: Video, // Usando Video para AI de video
      color: "from-red-500 to-red-600", // Nuevo color, diferente al anterior de Pika AI en footer para variar.
      content: "A woman model stands on a tropical beach at sunset, looking toward the ocean. He slowly adjusts the sleeves or collar of his pastel yellow shirt, worn exactly as shown in the reference photo — no distortion, full shirt visible. The model’s gesture is slow and elegant, as if preparing for a photoshoot. Wind lightly moves the fabric, adding texture. Background shows soft sand, sky gradients and ocean waves. Camera is still. 5 seconds max. Vertical 9:16."
    },
    {
      title: "ChatGPT (Copy)",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      content: "Create elegant, aspirational copy for a premium AI-designed yellow shirt. Two versions: one for female audience focusing on flow and daily elegance, another for male audience emphasizing modern cut and classic essence."
    },
    {
      title: "GEMINI (Asistencia General)", // Título para GEMINI
      icon: Sparkles, // Usando Sparkles para AI
      color: "from-teal-500 to-teal-600", // Color para Gemini
      content: "Actúa como un desarrollador full-stack experto para una startup de moda premium. Asiste con arquitectura, desarrollo frontend (React, Tailwind), backend (Node.js, Express, PostgreSQL) y estrategias de despliegue en Vercel. Proporciona soluciones eficientes, escalables y con código limpio."
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
            {/* Se eliminó el botón duplicado. DialogPrimitive.Close maneja el cierre. */}
            {/* El botón X ya está gestionado por el componente DialogContent de shadcn/ui */}
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