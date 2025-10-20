import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  gradient: string;
  onClick?: () => void;
  isActive?: boolean;
}

const CategoryCard = ({ icon: Icon, title, count, gradient, onClick, isActive }: CategoryCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className={`${gradient} p-6 hover-lift cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 group relative ${isActive ? 'ring-4 ring-white scale-105' : ''}`}
    >
      {isActive && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse" />
      )}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-card/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-card" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-card mb-1">{title}</h3>
          <p className="text-sm text-card/80">{count} eventos</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
