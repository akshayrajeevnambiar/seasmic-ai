// Design Tokens for Seismic AI Minimal Black + Neon Theme
export const colors = {
  // Minimal black + neon palette
  bg: "#0B0B0C",
  panel: "rgba(255,255,255,0.03)",
  text: "#FFFFFF",
  "text-muted": "rgba(255,255,255,0.68)",
  neon: "#00E5FF",
  "neon-2": "#C8FF35",

  // Legacy support for existing components
  deep: "#0B0B0C",
  navy: "#0B0B0C",
  ink: "#0B0B0C",
  amber: "#00E5FF",
  amberSoft: "#00E5FF",
  textPrimary: "#FFFFFF",
  textMuted: "rgba(255,255,255,0.68)",
} as const;

export const easing = {
  minimal: [0.22, 1, 0.36, 1], // Surgical, calm easing
  smooth: [0.25, 0.46, 0.45, 0.94],
} as const;

export const durations = {
  fast: 0.3,
  reveal: 0.7, // Section reveal duration
  sweep: 2.5, // Neon line sweep duration
} as const;

export const animations = {
  sectionEntry: {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: durations.reveal, ease: easing.minimal },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: durations.reveal, ease: easing.smooth },
  },
  minimal: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: durations.reveal, ease: easing.minimal },
  },
  neonGlow: {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 0 24px rgba(0, 229, 255, 0.15)",
    },
    transition: { duration: durations.fast },
  },
} as const;

export const spacing = {
  sectionY: "py-28 md:py-36",
  container: "max-w-screen-xl mx-auto px-6",
} as const;

export const glass = {
  panel:
    "bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(255,176,58,0.08)]",
  button:
    "bg-white/10 backdrop-blur-md border border-white/20 hover:border-amber/40",
} as const;
