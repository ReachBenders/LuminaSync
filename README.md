# Lumina Workflows

A single-page marketing site for Lumina Workflows, an AI + n8n automation
studio starting with WhatsApp automation for local businesses.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires Node.js 18.17 or newer.

To build for production:

```bash
npm run build
npm run start
```

## Where to edit things

Everything editorial lives in `/data`, separate from the components that
render it. You should never need to touch JSX to change copy, prices, or
the service list.

| File | Controls |
|---|---|
| `data/site.ts` | Brand name, nav labels, hero copy, positioning strip, footer statement, and the **contact email** every "Build My Workflow" button uses |
| `data/services.ts` | The six services shown in the Services and footer sections |
| `data/pricing.ts` | Plan names, features, and prices (INR). Set `amountFrom: null` on any plan to show "Custom pricing" instead of a number |
| `data/process.ts` | The four-step process section |
| `data/languages.ts` | Languages and sample Q&A shown in the multilingual demo |
| `data/demo.ts` | The example exchanges in the "What your workflow could look like" mockup |
| `tailwind.config.ts` | Color tokens (`ink`, `gold`, `ivory`, `stone`) — change these to re-skin the whole site |

## Before this goes live

A few things are intentionally left as placeholders for you to replace:

- **Contact email** — `data/site.ts` currently points every CTA at
  `hello@luminaworkflows.com`. Swap this for a real inbox, WhatsApp link,
  or form endpoint once you have one.
- **Pricing figures** — the numbers in `data/pricing.ts` are starting
  placeholders, not researched market rates. Adjust freely.
- **Social links** — none are included in the footer, since none exist
  yet. Add them to `data/site.ts` and `components/sections/Footer.tsx`
  when the accounts exist.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/ui/  Small reusable primitives (Button, Container, Reveal, ...)
components/sections/  One file per page section
data/           All editable content and configuration
lib/            Shared types and the cn() class-name helper
```

The page is a single route today, but each section is its own component
and the nav already links by anchor — splitting `Services`, `Pricing`,
etc. out into their own routes later is a matter of moving a component
into a new file under `app/`, not a rebuild.
