import { useState } from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[1000]">
      <div className="max-w-[1100px] mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-semibold text-lg">
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#04B0F5] to-[#3883A0] text-white font-bold flex items-center justify-center">
            L
          </div>
          <span className="text-[#2C3133]">Luppa</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 list-none">
          <li>
            <a href="#home" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Início
            </a>
          </li>
          <li>
            <a href="#eventos" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Eventos
            </a>
          </li>
          <li>
            <a href="#categorias" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Categorias
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <button 
          onClick={() => setIsLoginModalOpen(true)}
          className="hidden md:block bg-[#04B0F5] text-white border-none rounded-[30px] px-[18px] py-2 cursor-pointer text-sm transition-colors hover:bg-[#269CCA]"
        >
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <div 
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-[25px] h-[3px] bg-[#2C3133] rounded-[5px] transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-[#2C3133] rounded-[5px] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-[#2C3133] rounded-[5px] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-[60px] left-0 right-0 flex-col bg-white text-center flex p-[15px_0] border-t border-[#eee]">
          <li className="py-2">
            <a href="#home" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Início
            </a>
          </li>
          <li className="py-2">
            <a href="#eventos" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Eventos
            </a>
          </li>
          <li className="py-2">
            <a href="#categorias" className="no-underline text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]">
              Categorias
            </a>
          </li>
          <li className="py-2">
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="text-[#2C3133] text-sm font-medium transition-colors hover:text-[#04B0F5]"
            >
              Login
            </button>
          </li>
        </ul>
      )}

      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </header>
  );
};

export default Navbar;
