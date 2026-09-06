import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricingConfig, pricingPlans } from "@/data/pricing";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function formatPrice(amountFrom: number | null) {
  if (amountFrom === null) return "Custom pricing";
  return `${pricingConfig.currencySymbol}${amountFrom.toLocaleString("en-IN")}`;
}

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-stone-line/60 py-24 md:py-32">
      <Container>
        <SectionHeading
          heading="Pricing built to grow with the workflow, not against it."
          description={pricingConfig.note}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-sm border p-8",
                  plan.highlighted
                    ? "border-gold bg-ink-raised"
                    : "border-stone-line"
                )}
              >
                <h3 className="font-display text-2xl text-ivory">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-stone">{plan.audience}</p>

                <div className="mt-8">
                  <span className="font-display text-3xl text-ivory">
                    {plan.price.amountFrom !== null && "Starting from "}
                    {formatPrice(plan.price.amountFrom)}
                  </span>
                  {plan.price.period && (
                    <span className="ml-2 text-sm text-stone">
                      {plan.price.period}
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-start gap-3 text-sm text-ivory-dim"
                    >
                      <span
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <Button
                  href={site.contact.mailto}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-10"
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
