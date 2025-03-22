
import React from "react";
import { useSkips } from "@/hooks/useSkips";
import SkipCard from "./SkipCard";
import { Skip } from "@/types/skip";

const SkipSelection: React.FC = () => {
  const { skips, loading, error, selectedSkip, selectSkip } = useSkips();

  if (loading) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center animate-pulse">
        <div className="h-8 w-1/3 bg-gray-700 rounded-md mb-6"></div>
        <div className="h-4 w-1/2 bg-gray-700 rounded-md mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-darkcard border border-darkborder rounded-xl h-80 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">
          Error Loading Skip Options
        </h2>
        <p className="text-gray-400 mb-6">
          We encountered a problem loading the available skip options. Please try again.
        </p>
        <button 
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-up pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip: Skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={selectSkip}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipSelection;
