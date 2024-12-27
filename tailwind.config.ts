import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#30B8B2",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#1F2937",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F5EFE6",
          foreground: "#4A5568",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      backgroundImage: {
        'hero-pattern': "url('/lovable-uploads/5d7089a6-942d-4e24-b32b-8becd19ee4f4.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;