import { useMemo } from "react";

// Hook to detect user's reduced motion preference
export const useReducedMotion = () => {
  return useMemo(() => {
    // Check if user prefers reduced motion
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, []);
};

// Optimized animation variants that respect user preferences
export const createAnimationVariants = (reducedMotion: boolean) => {
  const baseVariants = {
    // Entrance animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: reducedMotion ? 0.1 : 0.6 },
    },

    slideUp: {
      initial: { opacity: 0, y: reducedMotion ? 0 : 30 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: reducedMotion ? 0.1 : 0.6,
        ease: reducedMotion ? "linear" : [0.22, 1, 0.36, 1],
      },
    },

    slideLeft: {
      initial: { opacity: 0, x: reducedMotion ? 0 : -20 },
      animate: { opacity: 1, x: 0 },
      transition: {
        duration: reducedMotion ? 0.1 : 0.5,
        ease: reducedMotion ? "linear" : "easeOut",
      },
    },

    // Stagger animations
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: reducedMotion ? 0 : 0.1,
        },
      },
    },

    staggerItem: {
      initial: { opacity: 0, y: reducedMotion ? 0 : 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: reducedMotion ? 0.1 : 0.4 },
    },

    // Hover effects
    hover: {
      scale: reducedMotion ? 1 : 1.02,
      transition: { duration: reducedMotion ? 0 : 0.2 },
    },

    tap: {
      scale: reducedMotion ? 1 : 0.98,
      transition: { duration: reducedMotion ? 0 : 0.1 },
    },

    // Loading animations
    spin: {
      animate: {
        rotate: 360,
        transition: {
          duration: reducedMotion ? 0 : 1,
          repeat: reducedMotion ? 0 : Infinity,
          ease: "linear",
        },
      },
    },

    // Floating effect
    float: {
      animate: reducedMotion
        ? {}
        : {
            y: [-5, 5, -5],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
    },
  };

  return baseVariants;
};

// Performance-optimized motion configuration
export const motionConfig = {
  // Reduce motion quality for better performance
  transition: {
    type: "tween",
    ease: "easeOut",
  },

  // Use will-change sparingly
  style: {
    willChange: "auto",
  },

  // Optimize for mobile
  whileHover: {
    transition: { duration: 0.2 },
  },

  whileTap: {
    transition: { duration: 0.1 },
  },
};

// Hook for intersection observer with reduced motion
export const useIntersectionAnimation = (reducedMotion: boolean) => {
  const baseConfig = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: reducedMotion ? 0.1 : 0.6,
      ease: reducedMotion ? "linear" : [0.22, 1, 0.36, 1],
    },
  };

  return baseConfig;
};

// Preload critical animations
export const preloadAnimations = () => {
  // Force GPU layer creation for critical animations
  const style = document.createElement("style");
  style.textContent = `
    .preload-gpu {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000;
    }
  `;
  document.head.appendChild(style);
};
