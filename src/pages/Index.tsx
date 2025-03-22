import React from "react";
import ProgressSteps from "@/components/ProgressSteps";
import SkipSelection from "@/components/SkipSelection";
import PageHeader from "@/components/PageHeader";
import ContinueBar from "@/components/ContinueBar";
import { useSkips } from "@/hooks/useSkips";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const { selectedSkip, skips, loading, error, selectSkip } = useSkips();

  const handleBack = () => {
    toast({
      title: "Going back",
      description: "This would take you to the previous step",
    });
  };

  const handleContinue = () => {
    toast({
      title: "Continuing",
      description: "This would take you to the next step",
    });
  };

  return (
    <div className="min-h-screen bg-darkbg pb-20">
      <div className="container py-8 md:py-12">
        <ProgressSteps currentStep={3} />
        
        <PageHeader
          title="Choose Your Skip Size"
          subtitle="Select the skip size that best suits your needs"
        />
        
        <SkipSelection 
          skips={skips}
          loading={loading}
          error={error}
          selectedSkip={selectedSkip}
          onSelect={selectSkip}
        />
      </div>
      
      <ContinueBar 
        selectedSkip={selectedSkip} 
        onBack={handleBack} 
        onContinue={handleContinue}
      />
    </div>
  );
};

export default Index;
