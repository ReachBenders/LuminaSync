"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr,0.95fr] lg:gap-12">
          <motion.div
            variants={shouldReduceMotion ? undefined : container}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
          >
            <motion.p
              variants={shouldReduceMotion ? undefined : item}
              className="mb-6 text-sm font-medium text-gold"
            >
              {site.tagline}
            </motion.p>

            <motion.h1
              variants={shouldReduceMotion ? undefined : item}
              className="font-display text-[2.5rem] leading-[1.12] text-ivory sm:text-5xl md:text-[3.4rem]"
            >
              {site.hero.headline}
            </motion.h1>

            <motion.p
              variants={shouldReduceMotion ? undefined : item}
              className="mt-7 max-w-prose text-base leading-relaxed text-stone sm:text-lg"
            >
              {site.hero.subhead}
            </motion.p>

            <motion.div
              variants={shouldReduceMotion ? undefined : item}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href={site.contact.mailto} variant="primary">
                {site.hero.primaryCta}
              </Button>
              <Button href="#services" variant="secondary">
                {site.hero.secondaryCta}
              </Button>
            </motion.div>
          </motion.div>

          <WorkflowVisual />
        </div>
      </Container>
    </section>
  );
}

/**
 * An abstract, luxury visualization of a business workflow: one
 * conversation resolving into connected outcomes. Deliberately not
 * a developer dashboard — no code, no logs, no charts.
 */
function WorkflowVisual() {
  const shouldReduceMotion = useReducedMotion();
  const nodes = [
    { x: 300, y: 40, label: "Customer message" },
    { x: 300, y: 150, label: "Workflow" },
    { x: 110, y: 260, label: "Location" },
    { x: 240, y: 300, label: "Pricing" },
    { x: 360, y: 300, label: "Menu" },
    { x: 490, y: 260, label: "Hours" },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ];

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none"
      role="img"
      aria-label="Diagram of a customer message flowing through a workflow to location, pricing, menu, and hours"
    >
      <svg viewBox="0 0 600 360" className="h-full w-full">
        <g stroke="#3A362F" strokeWidth="1">
          {edges.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            if (!a || !b) return null;
            return (
              <motion.line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                initial={shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
        </g>

        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={i === 1 ? 7 : 5}
              fill={i === 1 ? "#C6A15C" : "#0C0A07"}
              stroke={i === 1 ? "#C6A15C" : "#9C9284"}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y - 16}
              textAnchor="middle"
              fill="#CFC8B8"
              fontSize="12"
              fontFamily="var(--font-sans)"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
