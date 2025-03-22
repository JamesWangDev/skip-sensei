
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
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-darkborder p-4 backdrop-blur-md z-50 animate-slide-up">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        
        <div className="flex items-center">
          <span className="text-white mr-4">
            {selectedSkip.size} Yard Skip Selected - £{Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}
          </span>
          <Button 
            onClick={onContinue}
            className="bg-darkselected hover:bg-darkselected/90 text-white"
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
