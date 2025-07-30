import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="brand">
          <h1 className="font-playfair text-2xl md:text-3xl font-bold bg-gradient-to-r from-charcoal to-gray-600 bg-clip-text text-transparent hover:from-gold hover:to-yellow-600 transition-all duration-300 cursor-pointer">
            ONDA
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sm font-inter font-medium relative group transition-all duration-300">
            <span className="hover:text-gold">Colección</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-inter font-medium relative group transition-all duration-300">
            <span className="hover:text-gold">Diseño IA</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-inter font-medium relative group transition-all duration-300">
            <span className="hover:text-gold">Contacto</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gold/10 transition-all duration-300 transform hover:scale-110 group">
            <Search className="w-5 h-5 text-gray-600 group-hover:text-gold transition-colors" />
          </button>
          <button className="p-2 rounded-full hover:bg-gold/10 transition-all duration-300 transform hover:scale-110 group">
            <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-gold transition-colors" />
          </button>
          <button className="p-2 rounded-full hover:bg-gold/10 transition-all duration-300 transform hover:scale-110 group md:hidden">
            <Menu className="w-5 h-5 text-gray-600 group-hover:text-gold transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
