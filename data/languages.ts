import type { Language } from "@/lib/types";

export const languages: Language[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ" },
];

/**
 * The same sample answer, shown in each supported language, to
 * demonstrate the capability without relying on cultural imagery.
 */
export const sampleAnswer: Record<Language["code"], { question: string; answer: string }> = {
  en: {
    question: "Are you open right now?",
    answer: "Yes — open until 9:00 PM today.",
  },
  hi: {
    question: "क्या आप अभी खुले हैं?",
    answer: "हाँ — आज रात 9:00 बजे तक खुला है।",
  },
  kn: {
    question: "ನೀವು ಈಗ ತೆರೆದಿದ್ದೀರಾ?",
    answer: "ಹೌದು — ಇಂದು ರಾತ್ರಿ 9:00 ರವರೆಗೆ ತೆರೆದಿದೆ.",
  },
};
