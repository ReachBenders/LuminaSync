import type { Service } from "@/lib/types";

/**
 * The current service lineup. Add, remove, or reorder entries here —
 * the Services and System sections both read from this file.
 */
export const services: Service[] = [
  {
    id: "chatbot",
    number: "01",
    name: "WhatsApp Chatbot",
    summary: "Automated conversations that handle the questions customers ask most.",
    benefit: "Fewer repeated calls and messages for your team to answer manually.",
  },
  {
    id: "menu",
    number: "02",
    name: "Digital Menu",
    summary: "Customers open your full menu directly inside a WhatsApp chat.",
    benefit: "No printing, no outdated PDFs — one place to update, everywhere it's shown.",
  },
  {
    id: "pricing",
    number: "03",
    name: "Instant Pricing",
    summary: "Customers ask for a price and get a clear answer immediately.",
    benefit: "Fewer back-and-forth messages before someone decides to buy.",
  },
  {
    id: "status",
    number: "04",
    name: "Open / Closed Status",
    summary: "Customers check whether you're open right now, without calling.",
    benefit: "Cuts down on 'are you open?' messages during busy hours.",
  },
  {
    id: "location",
    number: "05",
    name: "Google Maps Location",
    summary: "One tap sends customers straight to your location on the map.",
    benefit: "Fewer missed visits from unclear directions.",
  },
  {
    id: "multilingual",
    number: "06",
    name: "Multilingual FAQs",
    summary: "The same answers, available in English, Hindi, and Kannada.",
    benefit: "Every customer gets served in the language they're comfortable with.",
  },
];
