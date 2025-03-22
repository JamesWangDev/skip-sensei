
import { Skip } from "../types/skip";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkips = async (postcode: string, area: string): Promise<Skip[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data: Skip[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching skip data:", error);
    throw error;
  }
};
