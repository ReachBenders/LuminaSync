import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { demoExchanges } from "@/data/demo";

export function DemoConcepts() {
  return (
    <section className="border-t border-stone-line/60 bg-ink-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          heading="What your workflow could look like."
          description="A concept demonstration built to show the pattern — not a real client conversation or result."
        />

        <Reveal>
          <div className="mx-auto mt-14 max-w-xl rounded-sm border border-stone-line bg-ink p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-stone-line/60 pb-4">
              <p className="text-sm text-ivory">Local Business Assistant</p>
              <p className="text-xs text-stone">Concept demo</p>
            </div>

            <ul className="mt-6 flex flex-col gap-6">
              {demoExchanges.map((exchange) => (
                <li key={exchange.question}>
                  <div className="ml-auto max-w-[85%] rounded-sm rounded-tr-none bg-ink-raised px-4 py-3">
                    <p className="text-sm text-ivory">{exchange.question}</p>
                  </div>
                  <div className="mt-2 flex items-start gap-2 text-xs text-stone">
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {exchange.systemAction}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-stone">
          Illustrative only. Lumina Workflows is currently onboarding its first
          clients — this demonstrates the pattern a real workflow follows.
        </p>
      </Container>
    </section>
  );
}
