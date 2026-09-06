import type { DemoExchange } from "@/lib/types";

/**
 * Clearly-labeled concept examples — not real client conversations.
 * See the disclosure text rendered alongside this data in
 * components/sections/DemoConcepts.tsx.
 */
export const demoExchanges: DemoExchange[] = [
  {
    question: "Are you open today?",
    questionLanguage: "en",
    systemAction: "Checks configured business hours and replies instantly.",
  },
  {
    question: "Where are you located?",
    questionLanguage: "en",
    systemAction: "Returns your Google Maps location as a tappable link.",
  },
  {
    question: "What's the price for this?",
    questionLanguage: "en",
    systemAction: "Returns the price you've configured for that item.",
  },
  {
    question: "ನಿಮ್ಮ ಬೆಲೆ ಏನು?",
    questionLanguage: "kn",
    systemAction: "Responds in Kannada, using the same configured pricing.",
  },
];
