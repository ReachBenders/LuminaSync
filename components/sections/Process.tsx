import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="border-t border-stone-line/60 py-24 md:py-32">
      <Container>
        <SectionHeading
          heading="A clear path from first question to finished workflow."
          description="Four stages. No jargon in between."
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.08}>
              <div className="flex flex-col gap-4">
                <span className="font-display text-3xl text-gold">
                  {step.number}
                </span>
                <div className="h-px w-10 bg-stone-line" aria-hidden="true" />
                <h3 className="font-display text-xl text-ivory">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
