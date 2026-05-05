import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Cabinet Grotesk", "Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "SF Mono", "Consolas", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      animation: {
        "marquee-left": "marquee-left 28s linear infinite",
        "ping-slow": "ping-slow 2.4s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
