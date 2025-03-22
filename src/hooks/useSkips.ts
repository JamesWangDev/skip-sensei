
import { useState, useEffect } from "react";
import { Skip } from "../types/skip";
import { fetchSkips } from "../services/skipService";
import { toast } from "@/components/ui/use-toast";

export const useSkips = (postcode: string = "NR32", area: string = "Lowestoft") => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkips(postcode, area);
        setSkips(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error occurred"));
        toast({
          title: "Error",
          description: "Failed to load skip options. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, [postcode, area]);

  const selectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
    toast({
      title: "Skip Selected",
      description: `You've selected a ${skip.size} yard skip.`,
      duration: 3000,
    });
  };

  return {
    skips,
    loading,
    error,
    selectedSkip,
    selectSkip
  };
};
