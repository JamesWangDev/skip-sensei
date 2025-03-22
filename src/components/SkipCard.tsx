
import React from "react";
import { Skip } from "@/types/skip";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  // Calculate total price with VAT
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  
  // Format price for display (£XXX)
  const formattedPrice = `£${totalPrice}`;
  
  // Determine if this skip has restrictions
  const isRestrictedToPrivateProperty = !skip.allowed_on_road;
  
  return (
    <div 
      className={cn(
        "skip-card rounded-xl border bg-card shadow-sm overflow-hidden flex flex-col",
        isSelected ? "skip-card-selected" : ""
      )}
      onClick={() => onSelect(skip)}
    >
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img 
          src={`https://source.unsplash.com/featured/?skip,container,waste&sig=${skip.id}`} 
          alt={`${skip.size} Yard Skip`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="skip-size-badge">
            {skip.size} Yards
          </span>
        </div>
        
        {isRestrictedToPrivateProperty && (
          <div className="absolute bottom-3 left-3">
            <span className="skip-warning-badge">
              <AlertTriangle size={12} />
              <span>Private Property Only</span>
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1">
          {skip.size} Yard Skip
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {skip.hire_period_days} day hire period
        </p>
        
        <div className="mt-auto">
          <div className="flex items-end justify-between mb-4">
            <span className="text-2xl font-bold text-primary">
              {formattedPrice}
            </span>
            <span className="text-sm text-muted-foreground">
              per week
            </span>
          </div>
          
          <button 
            className={cn(
              "w-full py-2.5 rounded-md text-center transition-all font-medium",
              isSelected 
                ? "bg-primary text-white" 
                : "bg-secondary text-foreground hover:bg-primary/10"
            )}
          >
            {isSelected ? "Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
