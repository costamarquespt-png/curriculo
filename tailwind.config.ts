import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",
        "ink-2": "#16273D",
        "ink-line": "rgba(255,255,255,0.10)",
        paper: "#F1F2EE",
        "paper-2": "#E7E9E2",
        blueprint: "#3E7CB1",
        "blueprint-dim": "rgba(62,124,177,0.35)",
        copper: "#C9803F",
        "copper-dark": "#9C5E28",
        ink2: "#16202B",
        muted: "#5B6B74",
        "muted-ink": "#90A2B5",
        "border-light": "rgba(22,32,43,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(var(--tw-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--tw-grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};
export default config;
