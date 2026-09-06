import type { PricingPlan } from "@/lib/types";

/**
 * PLACEHOLDER PRICING.
 * These figures are illustrative starting points, not researched
 * "industry standard" numbers. Change amountFrom, features, or
 * ctaLabel here — no UI code needs to change.
 *
 * Set amountFrom to null to show "Custom pricing" instead of a figure.
 */
export const pricingConfig = {
  currencySymbol: "₹",
  note: "Every workflow is tailored to the business. These figures are a starting point for the conversation, not a fixed menu.",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    audience: "For businesses beginning their automation journey.",
    price: { amountFrom: 4999, currency: "INR", period: "one-time setup" },
    features: [
      { label: "WhatsApp chatbot for your most common questions" },
      { label: "Open / closed status" },
      { label: "Google Maps location" },
    ],
    ctaLabel: "Start Here",
  },
  {
    id: "growth",
    name: "Growth",
    audience: "For businesses wanting multiple customer workflows.",
    price: { amountFrom: 9999, currency: "INR", period: "one-time setup" },
    features: [
      { label: "Everything in Essential" },
      { label: "Digital menu and instant pricing" },
      { label: "Multilingual FAQs (English, Hindi, Kannada)" },
    ],
    ctaLabel: "Build My Workflow",
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom",
    audience: "For more advanced requirements and larger operations.",
    price: { amountFrom: null, currency: "INR" },
    features: [
      { label: "Everything in Growth" },
      { label: "Custom workflow design" },
      { label: "Ongoing optimization" },
    ],
    ctaLabel: "Talk to Us",
  },
];
