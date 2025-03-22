
export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export type SkipSize = 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 40;

export interface ProgressStep {
  id: number;
  label: string;
  isActive: boolean;
  isComplete: boolean;
}
