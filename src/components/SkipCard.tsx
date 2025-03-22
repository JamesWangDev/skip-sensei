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
  const isRestrictedToHeavyWaste = !skip.allows_heavy_waste;
  const isDisabled = skip.forbidden;
  
  const handleClick = () => {
    if (!isDisabled) {
      onSelect(skip);
    }
  };
  
  return (
    <div 
      className={cn(
        "skip-card rounded-xl border overflow-hidden flex flex-col",
        isSelected ? "skip-card-selected" : "",
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      onClick={handleClick}
    >
      <div className="relative aspect-video bg-gray-800 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800`} 
          alt={`${skip.size} Yard Skip`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 opacity-80"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="skip-size-badge">
            {skip.size} Yards
          </span>
        </div>

        <div className="absolute w-52 bottom-3 right-3 left-3 flex flex-col gap-2">
          {isRestrictedToPrivateProperty && (
            <div>
              <span className="skip-warning-badge">
                <AlertTriangle size={12} />
                <span>Private Property Only</span>
              </span>
            </div>
          )}

          {isRestrictedToHeavyWaste && (
            <div>
              <span className="skip-error-badge">
                <AlertTriangle size={12} />
                <span>Not suitable for Heavy Waste</span>
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1 text-white">
          {skip.size} Yard Skip
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {skip.hire_period_days} day hire period
        </p>
        
        <div className="mt-auto">
          <div className="flex items-end justify-between mb-4">
            <span className="text-2xl font-bold text-primary">
              {formattedPrice}
            </span>
            <span className="text-sm text-gray-400">
              per week
            </span>
          </div>
          
          <button 
            className={cn(
              "w-full py-2.5 rounded-md text-center transition-all font-medium",
              isSelected 
                ? "bg-darkselected text-white" 
                : isDisabled
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-darkselected/20"
            )}
            disabled={isDisabled}
          >
            {isDisabled ? "Not Available" : isSelected ? "Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
