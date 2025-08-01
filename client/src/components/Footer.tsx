import { Button } from "@/components/ui/button";
import { Sparkles, Code, MessageSquare, Video, Film, Play } from "lucide-react"; // Importamos nuevos íconos

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  // Lista de herramientas actualizada según tu indicación y original
  const tools = ['ChatGPT', 'VEO 3', 'PIKA AI', 'REVE AI', 'KLING AI', 'GEMINI'];

  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-10">
          
          {/* Main Content */}
          <div className="space-y-2">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 bg-gold/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Sparkles className="w-7 h-7 text-gold" />
                <span className="font-playfair text-lg font-semibold text-black">Diseñado con IA</span>
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
            </div>
            
            <p className="text-black max-w-2xl mx-auto leading-relaxed">
              Este proyecto fue realizado por <span className="text-gold font-semibold">Lucas Gatti</span> como ejercicio creativo para 
              <span className="text-black font-semibold"> DELFI IA</span>, combinando inteligencia artificial y diseño premium.
            </p>
            
            {/* Tools Grid - Íconos distintos para cada herramienta */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
              {tools.map((tool, index) => (
                <div 
                  key={tool} 
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:bg-gray-100 hover:border-gold/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center space-y-2">
                    {tool === 'ChatGPT' && <MessageSquare className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />}
                    {tool === 'VEO 3' && <Sparkles className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />}
                    {tool === 'PIKA AI' && <Video className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />}
                    {tool === 'REVE AI' && <Film className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />}
                    {tool === 'KLING AI' && <Play className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />}
                    {tool === 'GEMINI' && <Sparkles className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />}
                    {/* Mantengo Tailwind y Vercel en la lógica de íconos por si decides agregarlos en el futuro, aunque no estén en la lista actual de `tools`. */}
                    {tool === 'Tailwind' && <div className="w-6 h-6 bg-cyan-500 rounded group-hover:scale-110 transition-transform"></div>}
                    {tool === 'Vercel' && <div className="w-6 h-6 bg-black rounded-full group-hover:scale-110 transition-transform"></div>}
                    <span className="text-xs font-medium text-black group-hover:text-gold transition-colors">
                      {tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button with enhanced styling */}
          <div className="pt-8">
            <Button 
              onClick={onOpenModal}
              className="bg-gradient-to-r from-gold to-yellow-500 text-white px-10 py-4 rounded-2xl font-inter font-bold text-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/25 group"
            >
              <span className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Ver Prompts Utilizados</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-xs text-black">
              © 2024 ONDA Fashion. Todos los derechos reservados. Proyecto educativo con fines demostrativos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}