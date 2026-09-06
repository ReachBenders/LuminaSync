import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GoldRule } from "@/components/ui/GoldRule";
import { site } from "@/data/site";

export function FinalCTA() {
  return (
    <section id="contact" className="border-t border-stone-line/60 py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <GoldRule className="mx-auto" />
            <h2 className="mt-8 font-display text-3xl leading-[1.15] text-ivory sm:text-4xl md:text-[2.75rem]">
              {site.finalCta.heading}
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={site.contact.mailto} variant="primary">
                {site.finalCta.primaryCta}
              </Button>
              <Button href="#services" variant="secondary">
                {site.finalCta.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
