"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between border-b transition-colors duration-500",
            scrolled ? "border-stone-line/60 py-4" : "border-transparent py-6"
          )}
        >
          <a
            href="#top"
            className="font-display text-lg tracking-wideish text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone transition-colors duration-300 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={site.contact.mailto} variant="primary" className="text-sm">
              {site.nav.primaryCta}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:hidden"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300",
                  drawerOpen && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200",
                  drawerOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300",
                  drawerOpen && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-stone-line/60 bg-ink md:hidden"
          >
            <Container>
              <nav
                className="flex flex-col gap-1 py-6"
                aria-label="Mobile primary"
              >
                {site.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="rounded-sm px-2 py-3 text-base text-ivory-dim transition-colors hover:bg-ink-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href={site.contact.mailto}
                  variant="primary"
                  className="mt-4 w-full"
                  onClick={() => setDrawerOpen(false)}
                >
                  {site.nav.primaryCta}
                </Button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
