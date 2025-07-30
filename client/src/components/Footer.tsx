import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const tools = ['ChatGPT', 'VEO 3', 'ElevenLabs', 'Figma', 'Tailwind', 'Vercel'];

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-400">
              Este proyecto fue realizado por Lucas Gatti como ejercicio creativo para DELFI IA.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              {tools.map((tool, index) => (
                <span key={tool} className="flex items-center">
                  {tool}
                  {index < tools.length - 1 && <span className="ml-4">•</span>}
                </span>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={onOpenModal}
            className="bg-gold text-charcoal px-6 py-2 rounded-lg font-inter font-medium hover:bg-yellow-600 transition-colors"
          >
            Ver Prompts
          </Button>
        </div>
      </div>
    </footer>
  );
}
