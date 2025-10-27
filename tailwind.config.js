/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Minimal black + neon palette
        bg: "#0B0B0C",
        panel: "rgba(255,255,255,0.03)",
        neon: "#00E5FF",
        "neon-2": "#C8FF35",

        // Extended cyan variants for neon
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#00E5FF",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },

        // Legacy support
        deep: "#0B0B0C",
        navy: "#0B0B0C",
        ink: "#0B0B0C",
        amber: {
          DEFAULT: "#00E5FF",
          soft: "#00E5FF",
        },
        primary: {
          50: "#fefbf3",
          100: "#fef6e7",
          200: "#fdeac2",
          300: "#fbd594",
          400: "#f9b766",
          500: "#FFB03A",
          600: "#f59e0b",
          700: "#d97706",
          800: "#b45309",
          900: "#92400e",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#061419",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        display: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        wide: "0.02em",
        wider: "0.05em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 176, 58, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 176, 58, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
