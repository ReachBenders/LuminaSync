import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-line/60 py-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg text-ivory">{site.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
              {site.footer.statement}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ivory">Navigate</p>
            <ul className="mt-4 flex flex-col gap-3">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ivory">Services</p>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id} className="text-sm text-stone">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-stone-line/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href={site.contact.mailto}
            className="text-xs text-stone transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {site.contact.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
