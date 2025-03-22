
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Skip } from "@/types/skip";

interface ContinueBarProps {
  selectedSkip: Skip | null;
  onBack: () => void;
  onContinue: () => void;
}

const ContinueBar: React.FC<ContinueBarProps> = ({
  selectedSkip,
  onBack,
  onContinue,
}) => {
  
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-darkborder py-3 backdrop-blur-md z-50 animate-slide-up">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="text-white border-gray-700 hover:bg-white/10 hover:text-white"
          >
            Back
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white hidden md:inline">
            {selectedSkip.size} Yard Skip - £{Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}
          </span>
          <Button 
            onClick={onContinue}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContinueBar;
