import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">L</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Luppa</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="#categorias" className="text-foreground hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#organizadores" className="text-foreground hover:text-primary transition-colors">
              Organizadores
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Cadastrar Evento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 animate-fade-in">
            <a
              href="#eventos"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Eventos
            </a>
            <a
              href="#categorias"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Categorias
            </a>
            <a
              href="#organizadores"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Organizadores
            </a>
            <a
              href="#contato"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
              Cadastrar Evento
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
