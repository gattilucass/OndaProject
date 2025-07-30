import { useEffect, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="brand">
          <h1 className="font-playfair text-2xl md:text-3xl font-bold">ONDA</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sm font-inter hover:text-gold transition-colors">Colección</a>
          <a href="#" className="text-sm font-inter hover:text-gold transition-colors">Diseño IA</a>
          <a href="#" className="text-sm font-inter hover:text-gold transition-colors">Contacto</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
          <ShoppingBag className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
}
