export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  summary: string;
  benefit: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingFeature {
  label: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  audience: string;
  price: {
    /** Set to null to show "Custom pricing" instead of a number. */
    amountFrom: number | null;
    currency: string;
    period?: string;
  };
  features: PricingFeature[];
  ctaLabel: string;
  highlighted?: boolean;
}

export interface Language {
  code: "en" | "hi" | "kn";
  label: string;
  nativeLabel: string;
}

export interface DemoExchange {
  question: string;
  questionLanguage: Language["code"];
  systemAction: string;
}
