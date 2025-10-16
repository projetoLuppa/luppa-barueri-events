import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

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
  const [apiKey, setApiKey] = useState('');
  const [showMap, setShowMap] = useState(false);

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '12px'
  };

  const handleShowMap = () => {
    if (apiKey.trim()) {
      setShowMap(true);
    }
  };

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
            {!showMap ? (
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Para visualizar o mapa, insira sua chave da API do Google Maps.
                  <a 
                    href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary ml-1 underline"
                  >
                    Obter chave da API
                  </a>
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Cole sua chave da API do Google Maps"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleShowMap}>Mostrar Mapa</Button>
                </div>
              </div>
            ) : (
              <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={event.coordinates}
                  zoom={15}
                  options={{
                    styles: [
                      {
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }]
                      },
                      {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#04B0f5" }]
                      }
                    ]
                  }}
                >
                  <Marker position={event.coordinates} />
                </GoogleMap>
              </LoadScript>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
