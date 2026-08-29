import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        bg: "#05050f",
        surface: "#0a0a1f",
        "surface-2": "#10102a",
        "surface-3": "#16163a",
        border: "rgba(120, 100, 255, 0.10)",
        accent: "#7c6fff",
        "accent-glow": "#a48fff",
        "violet-accent": "#7c6fff",
        cyan: "#00e5ff",
        "cyan-bright": "#00e5ff",
        emerald: "#00ff94",
        "emerald-bright": "#00ff94",
        amber: "#ffb800",
        rose: "#ff4d6d",
        purple: "#a855f7",
        "text-primary": "#f0f0ff",
        "text-muted": "#8888bb",
        "text-soft": "#8888bb",
      },
      fontFamily: {
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 35s linear infinite",
        float: "orb-float 10s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        draw: "draw 1.5s ease forwards",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -32px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 22px) scale(0.94)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        draw: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-shift": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 111, 255, 0.20)",
        "glow-lg": "0 0 60px rgba(124, 111, 255, 0.30)",
        "glow-cyan": "0 0 30px rgba(0, 229, 255, 0.20)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
