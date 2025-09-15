export interface PricingPlan {
  name: string;
  badge: string;
  monthly: number;
  annual: number;
  popular?: boolean;
  description: string;
  features: string[];
  footnote: string;
}

export interface PricingPlans {
  [key: string]: PricingPlan;
}
