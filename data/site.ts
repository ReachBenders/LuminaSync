import type { NavLink } from "@/lib/types";

/**
 * Central place for brand copy, navigation, and metadata.
 * Edit this file to change wording anywhere on the site without
 * touching component code.
 */
export const site = {
  name: "Lumina Workflows",
  tagline: "AI and WhatsApp automation for businesses",
  metaDescription:
    "Lumina Workflows designs automated customer experiences on WhatsApp — from instant answers to menus, pricing, and multilingual support — built for businesses that want to work smarter.",

  // Single source of truth for where "Build My Workflow" style CTAs go.
  // Swap this for a real contact-form route once one exists.
  contact: {
    email: "hello@luminaworkflows.com",
    mailto: "mailto:hello@luminaworkflows.com",
  },

  nav: {
    primaryCta: "Build My Workflow",
    links: [
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#system" },
      { label: "Process", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ] satisfies NavLink[],
  },

  hero: {
    headline: "Turn repetitive customer interactions into intelligent workflows.",
    subhead:
      "Lumina Workflows connects the conversations your customers are already having on WhatsApp to the information your business already has — so questions get answered instantly, even when you're busy.",
    primaryCta: "Build My Workflow",
    secondaryCta: "Explore Services",
  },

  positioning: {
    heading: "Built for businesses that want to work smarter",
    capabilities: [
      "WhatsApp",
      "Automation",
      "AI",
      "Multilingual",
      "n8n",
      "Custom Workflows",
    ],
  },

  system: {
    eyebrow: "The system",
    heading: "Isolated features aren't the point. Connected workflows are.",
    description:
      "Every service works from the same source: one conversation, routed intelligently to the right information, in the customer's own language.",
  },

  finalCta: {
    heading: "Your business already has repetitive work. Let's turn it into a workflow.",
    primaryCta: "Build My Workflow",
    secondaryCta: "See What We Automate",
  },

  footer: {
    statement:
      "Lumina Workflows designs automated customer experiences for businesses that are ready to stop repeating themselves.",
  },
} as const;
