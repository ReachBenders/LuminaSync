import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          heading="A smarter customer experience on WhatsApp."
          description="Six connected capabilities. One conversation your customers already know how to have."
        />

        <ul className="mt-16 divide-y divide-stone-line/60 border-y border-stone-line/60">
          {services.map((service, i) => (
            <Reveal key={service.id} as="li" delay={Math.min(i * 0.05, 0.3)}>
              <div className="group grid gap-3 py-8 transition-colors duration-300 sm:grid-cols-[80px,1fr] sm:gap-8 md:grid-cols-[100px,1fr,1fr] md:py-10">
                <span className="font-display text-2xl text-stone transition-colors duration-300 group-hover:text-gold">
                  {service.number}
                </span>
                <h3 className="font-display text-xl text-ivory sm:text-2xl">
                  {service.name}
                  <span className="mt-2 block text-base font-normal leading-relaxed text-stone md:hidden">
                    {service.summary}
                  </span>
                </h3>
                <div className="hidden md:block">
                  <p className="text-base leading-relaxed text-stone">
                    {service.summary}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
                    {service.benefit}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ivory-dim sm:col-start-2 md:hidden">
                  {service.benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
