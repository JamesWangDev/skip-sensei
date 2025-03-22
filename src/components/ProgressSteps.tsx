
import React from "react";
import { ProgressStep } from "@/types/skip";
import { cn } from "@/lib/utils";
import { MapPin, Package, Truck, Shield, Calendar, CreditCard } from "lucide-react";

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const steps: ProgressStep[] = [
    {
      id: 1,
      label: "Postcode",
      isActive: currentStep === 1,
      isComplete: currentStep > 1,
    },
    {
      id: 2,
      label: "Waste Type",
      isActive: currentStep === 2,
      isComplete: currentStep > 2,
    },
    {
      id: 3,
      label: "Select Skip",
      isActive: currentStep === 3,
      isComplete: currentStep > 3,
    },
    {
      id: 4,
      label: "Permit Check",
      isActive: currentStep === 4,
      isComplete: currentStep > 4,
    },
    {
      id: 5,
      label: "Choose Date",
      isActive: currentStep === 5,
      isComplete: currentStep > 5,
    },
    {
      id: 6,
      label: "Payment",
      isActive: currentStep === 6,
      isComplete: currentStep > 6,
    },
  ];

  const getStepIcon = (stepId: number) => {
    switch (stepId) {
      case 1:
        return <MapPin size={16} />;
      case 2:
        return <Package size={16} />;
      case 3:
        return <Truck size={16} />;
      case 4:
        return <Shield size={16} />;
      case 5:
        return <Calendar size={16} />;
      case 6:
        return <CreditCard size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 animate-fade-in">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "progress-step-circle",
                  step.isComplete
                    ? "complete"
                    : step.isActive
                    ? "active"
                    : "inactive"
                )}
              >
                {getStepIcon(step.id)}
              </div>
              <span
                className={cn(
                  "progress-step-text hidden sm:block",
                  step.isComplete
                    ? "complete"
                    : step.isActive
                    ? "active"
                    : "inactive"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "progress-step-line",
                  step.isComplete ? "active" : ""
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
