import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import CreateEventModal from "@/components/CreateEventModal";
import { Music, Utensils, Palette, Trophy } from "lucide-react";
import eventMusic from "@/assets/event-music.jpg";
import eventGastronomy from "@/assets/event-gastronomy.jpg";
import eventCulture from "@/assets/event-culture.jpg";
import eventSports from "@/assets/event-sports.jpg";

const Index = () => {
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const upcomingEvents = [
    {
      title: "Festival de Jazz ao Ar Livre",
      date: "15 de Maio, 2025 • 19h",
      location: "Parque Municipal Dom José",
      attendees: 324,
      image: eventMusic,
      category: "Música",
      description: "Um festival imperdível com os melhores artistas de jazz da região. Traga sua família e amigos para curtir uma noite mágica ao ar livre com música ao vivo, food trucks e muito mais. O evento conta com artistas locais e nacionais.",
      images: [eventMusic, eventMusic, eventMusic],
      coordinates: { lat: -23.5106, lng: -46.8767 }
    },
    {
      title: "Festival Gastronômico de Barueri",
      date: "22 de Maio, 2025 • 12h",
      location: "Praça das Bandeiras",
      attendees: 567,
      image: eventGastronomy,
      category: "Gastronomia",
      description: "Descubra os sabores de Barueri! Festival com os melhores restaurantes e chefs da cidade. Workshops de culinária, demonstrações ao vivo e degustações de pratos incríveis. Uma experiência gastronômica única para toda a família.",
      images: [eventGastronomy, eventGastronomy, eventGastronomy],
      coordinates: { lat: -23.5120, lng: -46.8750 }
    },
    {
      title: "Exposição de Arte Contemporânea",
      date: "29 de Maio, 2025 • 14h",
      location: "Centro Cultural",
      attendees: 189,
      image: eventCulture,
      category: "Cultura",
      description: "Exposição com obras de artistas contemporâneos locais e nacionais. Uma jornada pela arte moderna com pinturas, esculturas e instalações interativas. Entrada gratuita com visitas guiadas disponíveis.",
      images: [eventCulture, eventCulture, eventCulture],
      coordinates: { lat: -23.5090, lng: -46.8780 }
    },
    {
      title: "Corrida Solidária 5K",
      date: "05 de Junho, 2025 • 7h",
      location: "Parque Ecológico",
      attendees: 421,
      image: eventSports,
      category: "Esportes",
      description: "Corrida solidária em prol de instituições de caridade locais. Percurso de 5km pelo belo Parque Ecológico. Inscrições abertas para todas as idades. Kit participante inclui camiseta, medalha e muito mais!",
      images: [eventSports, eventSports, eventSports],
      coordinates: { lat: -23.5080, lng: -46.8800 }
    },
  ];

  const categories = [
    {
      icon: Music,
      title: "Música",
      count: 45,
      gradient: "bg-gradient-to-br from-secondary to-primary",
    },
    {
      icon: Utensils,
      title: "Gastronomia",
      count: 32,
      gradient: "bg-gradient-to-br from-accent to-secondary",
    },
    {
      icon: Palette,
      title: "Arte & Cultura",
      count: 28,
      gradient: "bg-gradient-to-br from-muted to-accent",
    },
    {
      icon: Trophy,
      title: "Esportes",
      count: 41,
      gradient: "bg-gradient-to-br from-primary to-muted",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Upcoming Events Section */}
      <section id="eventos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra experiências incríveis acontecendo agora em Barueri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore por Categoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre eventos do seu interesse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-card mb-6">
            Organize seu próprio evento
          </h2>
          <p className="text-xl text-card/90 mb-8 max-w-2xl mx-auto">
            Alcance milhares de pessoas em Barueri e região. 
            Cadastre seu evento de forma rápida e gratuita.
          </p>
          <button 
            onClick={() => setIsCreateEventModalOpen(true)}
            className="bg-card text-primary hover:bg-card/90 px-8 py-4 rounded-full text-lg font-semibold shadow-hover hover-lift transition-all"
          >
            Cadastrar Meu Evento
          </button>
        </div>
      </section>

      <CreateEventModal open={isCreateEventModalOpen} onOpenChange={setIsCreateEventModalOpen} />
      <Footer />
    </div>
  );
};

export default Index;
