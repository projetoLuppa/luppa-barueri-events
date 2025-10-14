import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">L</span>
              </div>
              <span className="text-2xl font-bold">Luppa</span>
            </div>
            <p className="text-accent-foreground/80 max-w-md">
              Conectando a comunidade de Barueri aos melhores eventos de música, arte, 
              gastronomia, esportes e cultura.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-scale">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-scale">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-scale">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-scale">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#eventos" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#organizadores" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Para Organizadores
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contato" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacidade" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60 text-sm">
          <p>&copy; 2025 Luppa. Todos os direitos reservados. Feito com ❤️ em Barueri.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
