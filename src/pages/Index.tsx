
import React from "react";
import ProgressSteps from "@/components/ProgressSteps";
import SkipSelection from "@/components/SkipSelection";
import PageHeader from "@/components/PageHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container py-8 md:py-12">
        {/* Progress Steps */}
        <ProgressSteps currentStep={3} />
        
        {/* Page Header */}
        <PageHeader
          title="Choose Your Skip Size"
          subtitle="Select the skip size that best suits your needs"
        />
        
        {/* Skip Selection Grid */}
        <SkipSelection />
      </div>
    </div>
  );
};

export default Index;
