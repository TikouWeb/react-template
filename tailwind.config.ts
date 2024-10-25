/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import tailwindAnimationPlugin from "tailwindcss-animate";
import tailwindContainerQueries from "@tailwindcss/container-queries";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.32,0.72,0,1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "progress-grow": {
          "0%": {
            transform: "scaleX(0.01)",
          },
          "20%": {
            transform: "scaleX(0.1)",
          },
          "30%": {
            transform: "scaleX(0.6)",
          },
          "40%,50%": {
            transform: "scaleX(0.9)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        "progress-pulse": {
          "0%": {
            "mask-position": "200% center",
          },
          "100%": {
            "mask-position": "0% center",
          },
        },
      },
      animation: {
        "progress-indeterminate":
          "progress-grow var(--progress-duration) 1 both normal, progress-pulse 1s ease var(--progress-duration) infinite normal none running",
        "clip-path": "clippath 3s linear infinite",
        "clip-path-delayed": "clippath 3s linear -1.5s infinite",
      },
    },
  },
  plugins: [tailwindAnimationPlugin, tailwindContainerQueries],
} satisfies Config;
