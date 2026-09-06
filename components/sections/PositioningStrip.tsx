import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function PositioningStrip() {
  return (
    <section className="border-y border-stone-line/60 bg-ink-soft py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm font-medium text-stone">
            {site.positioning.heading}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
            {site.positioning.capabilities.map((capability) => (
              <li
                key={capability}
                className="text-sm text-ivory-dim"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
