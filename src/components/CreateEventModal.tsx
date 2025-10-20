import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Calendar } from "lucide-react";

interface CreateEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateEventModal = ({ open, onOpenChange }: CreateEventModalProps) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Evento criado:", {
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventCategory,
      eventDescription
    });
    // Simulação de criação de evento
    onOpenChange(false);
    // Limpar campos
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventCategory("");
    setEventDescription("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cadastrar Novo Evento</DialogTitle>
          <DialogDescription>
            Preencha as informações do seu evento para publicá-lo na plataforma
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event-name">Nome do Evento *</Label>
            <Input
              id="event-name"
              type="text"
              placeholder="Ex: Festival de Jazz ao Ar Livre"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-date">Data *</Label>
              <div className="relative">
                <Input
                  id="event-date"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
                <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-time">Horário *</Label>
              <Input
                id="event-time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="event-location">Local *</Label>
            <Input
              id="event-location"
              type="text"
              placeholder="Ex: Parque Municipal Dom José"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="event-category">Categoria *</Label>
            <Select value={eventCategory} onValueChange={setEventCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="musica">Música</SelectItem>
                <SelectItem value="gastronomia">Gastronomia</SelectItem>
                <SelectItem value="cultura">Arte & Cultura</SelectItem>
                <SelectItem value="esportes">Esportes</SelectItem>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="educacao">Educação</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="event-description">Descrição *</Label>
            <Textarea
              id="event-description"
              placeholder="Descreva seu evento com detalhes..."
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              rows={5}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Publicar Evento
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;