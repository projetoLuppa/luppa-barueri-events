import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import EventDetailsModal from "./EventDetailsModal";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
  description: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const EventCard = ({ title, date, location, attendees, image, category, description, images, coordinates }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Card className="overflow-hidden hover-lift shadow-card hover:shadow-hover transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-secondary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-secondary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-secondary" />
            <span>{attendees} interessados</span>
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          Ver Detalhes
        </Button>
      </CardContent>

      <EventDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        event={{ title, date, location, attendees, category, description, images, coordinates }}
      />
    </Card>
  );
};

export default EventCard;
