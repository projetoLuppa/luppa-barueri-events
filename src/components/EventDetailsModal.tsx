import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface EventDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    title: string;
    date: string;
    location: string;
    attendees: number;
    category: string;
    description: string;
    images: string[];
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const EventDetailsModal = ({ open, onOpenChange, event }: EventDetailsModalProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{event.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2 text-secondary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 text-secondary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2 text-secondary" />
              <span>{event.attendees} interessados</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Sobre o Evento</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>

          {/* Image Carousel */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Galeria de Fotos</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {event.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${event.title} - Foto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Localização</h3>
            <div className="rounded-lg overflow-hidden border">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${event.coordinates.lng-0.01},${event.coordinates.lat-0.01},${event.coordinates.lng+0.01},${event.coordinates.lat+0.01}&layer=mapnik&marker=${event.coordinates.lat},${event.coordinates.lng}`}
              />
              <div className="bg-card p-2 text-sm text-center border-t">
                <a 
                  href={`https://www.openstreetmap.org/?mlat=${event.coordinates.lat}&mlon=${event.coordinates.lng}#map=15/${event.coordinates.lat}/${event.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ver mapa completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
