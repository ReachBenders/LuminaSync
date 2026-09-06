"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages, sampleAnswer } from "@/data/languages";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/types";

export function Multilingual() {
  const [active, setActive] = useState<Language["code"]>("en");
  const shouldReduceMotion = useReducedMotion();
  const current = sampleAnswer[active];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr,1.1fr] lg:items-center lg:gap-20">
          <SectionHeading
            heading="One customer experience. Every language your customers use."
            description="The same automated answer, available in English, Hindi, and Kannada — so no customer is left guessing."
          />

          <div>
            <div
              role="tablist"
              aria-label="Choose a language"
              className="flex gap-2"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  role="tab"
                  aria-selected={active === lang.code}
                  onClick={() => setActive(lang.code)}
                  className={cn(
                    "rounded-sm border px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                    active === lang.code
                      ? "border-gold text-gold"
                      : "border-stone-line text-stone hover:text-ivory"
                  )}
                >
                  {lang.nativeLabel}
                </button>
              ))}
            </div>

            <div className="relative mt-6 min-h-[168px] overflow-hidden rounded-sm border border-stone-line bg-ink-raised p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm text-stone">Customer</p>
                  <p className="mt-2 text-lg text-ivory">{current.question}</p>
                  <div className="mt-5 h-px w-full bg-stone-line/60" />
                  <p className="mt-5 text-sm text-gold">Lumina Workflows</p>
                  <p className="mt-2 text-lg text-ivory">{current.answer}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
