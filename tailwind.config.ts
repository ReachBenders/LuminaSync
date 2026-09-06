import type { Config } from "tailwindcss";

// Design tokens for Lumina Workflows.
// Change these values to re-skin the entire site — nothing below
// this file should ever hardcode a raw hex color.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C0A07", // primary near-black background
          soft: "#141210", // secondary/graphite surface
          raised: "#1B1815", // raised surface (cards, inputs)
        },
        gold: {
          DEFAULT: "#C6A15C", // champagne gold accent
          soft: "#E3CE9C", // lighter gold for hover / highlight
          dim: "#8A6F3F", // deeper gold for pressed states
        },
        ivory: {
          DEFAULT: "#F3EEE3", // primary text on dark
          dim: "#CFC8B8", // secondary text
        },
        stone: {
          DEFAULT: "#9C9284", // muted warm gray, tertiary text
          line: "#3A362F", // hairline borders / dividers
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        prose: "62ch",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      letterSpacing: {
        wideish: "0.04em",
      },
      transitionTimingFunction: {
        expensive: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
