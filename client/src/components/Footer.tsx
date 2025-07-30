import { Button } from "@/components/ui/button";
import { Sparkles, Code, Palette } from "lucide-react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const tools = ['ChatGPT', 'VEO 3', 'ElevenLabs', 'Figma', 'Tailwind', 'Vercel'];

  return (
    <footer className="bg-gradient-to-br from-charcoal via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-10">
          
          {/* Main Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="font-playfair text-lg font-semibold">Diseñado con IA</span>
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
            </div>
            
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Este proyecto fue realizado por <span className="text-gold font-semibold">Lucas Gatti</span> como ejercicio creativo para 
              <span className="text-white font-semibold"> DELFI IA</span>, combinando inteligencia artificial y diseño premium.
            </p>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
              {tools.map((tool, index) => (
                <div 
                  key={tool} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center space-y-2">
                    {tool === 'ChatGPT' && <Code className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />}
                    {tool === 'VEO 3' && <Sparkles className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />}
                    {tool === 'ElevenLabs' && <div className="w-6 h-6 bg-orange-400 rounded-full group-hover:scale-110 transition-transform"></div>}
                    {tool === 'Figma' && <Palette className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />}
                    {tool === 'Tailwind' && <div className="w-6 h-6 bg-cyan-400 rounded group-hover:scale-110 transition-transform"></div>}
                    {tool === 'Vercel' && <div className="w-6 h-6 bg-white rounded-full group-hover:scale-110 transition-transform"></div>}
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
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
              className="bg-gradient-to-r from-gold to-yellow-500 text-charcoal px-10 py-4 rounded-2xl font-inter font-bold text-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/25 group"
            >
              <span className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Ver Prompts Utilizados</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500">
              © 2024 ONDA Fashion. Todos los derechos reservados. Proyecto educativo con fines demostrativos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
