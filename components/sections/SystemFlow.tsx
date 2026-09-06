import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const trunk = ["Customer", "WhatsApp", "Workflow"];
const branches = [
  "Location",
  "Menu",
  "Pricing",
  "Open / Closed",
  "FAQs",
  "Languages",
];

export function SystemFlow() {
  return (
    <section id="system" className="border-t border-stone-line/60 bg-ink-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={site.system.eyebrow}
          heading={site.system.heading}
          description={site.system.description}
        />

        <div className="mt-20">
          {/* Trunk: one conversation, routed once */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {trunk.map((step, i) => (
                <div key={step} className="flex items-center gap-4 sm:gap-6">
                  <div className="rounded-sm border border-stone-line px-5 py-3 text-sm text-ivory sm:text-base">
                    {step}
                  </div>
                  {i < trunk.length - 1 && (
                    <span className="h-px w-8 bg-stone-line sm:w-12" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Connector from trunk down into the branch row */}
          <div className="mx-auto mt-2 h-10 w-px bg-stone-line" aria-hidden="true" />

          {/* Horizontal rule the branches hang from */}
          <div className="h-px w-full bg-stone-line" aria-hidden="true" />

          <ul className="mt-0 grid grid-cols-2 gap-x-6 gap-y-10 pt-10 sm:grid-cols-3 lg:grid-cols-6">
            {branches.map((branch, i) => (
              <Reveal as="li" key={branch} delay={i * 0.05}>
                <div className="relative flex flex-col items-center text-center">
                  <span
                    className="absolute -top-10 h-10 w-px bg-stone-line"
                    aria-hidden="true"
                  />
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                  <p className="mt-3 text-sm text-ivory-dim">{branch}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
