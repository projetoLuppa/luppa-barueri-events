import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Eventos vibrantes em Barueri"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsla(197,67%,47%,0.95)] via-[hsla(197,67%,47%,0.8)] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="max-w-[42rem] animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[hsla(204,100%,48%,0.2)] backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm font-medium text-white">Barueri, SP</span>
          </div>

          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white mb-6 leading-[1.2]">
            Descubra o que acontece em{" "}
            <span className="text-[hsl(204,100%,48%)]">Barueri</span> com o Luppa
          </h1>

          <p className="text-2xl text-[hsla(0,0%,100%,0.9)] mb-8 leading-relaxed">
            Música, arte, gastronomia, esportes e cultura. Tudo em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-full font-medium cursor-pointer border-none bg-[hsl(204,100%,48%)] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all hover:bg-[hsla(204,100%,48%,0.9)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Explorar Eventos
            </button>
            <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-full font-medium cursor-pointer border-2 border-white text-white bg-transparent backdrop-blur-sm transition-all hover:bg-[hsla(0,0%,100%,0.1)]">
              Cadastrar Evento
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[hsla(0,0%,100%,0.2)]">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-[2.5rem] font-bold text-white">150+</div>
              <div className="text-sm text-[hsla(0,0%,100%,0.8)] mt-1">Eventos/mês</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-[2.5rem] font-bold text-white">50+</div>
              <div className="text-sm text-[hsla(0,0%,100%,0.8)] mt-1">Organizadores</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-[2.5rem] font-bold text-white">10k+</div>
              <div className="text-sm text-[hsla(0,0%,100%,0.8)] mt-1">Participantes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
