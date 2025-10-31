import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, createAnimationVariants } from "../utils/animations";

interface PerformantSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animationType?: "fadeIn" | "slideUp" | "slideLeft" | "none";
  delay?: number;
  enableIntersection?: boolean;
}

// Memoized section component for better performance
const PerformantSection: React.FC<PerformantSectionProps> = memo(
  ({
    children,
    className = "",
    id,
    animationType = "slideUp",
    delay = 0,
    enableIntersection = true,
  }) => {
    const reducedMotion = useReducedMotion();

    // Memoize animation variants to prevent recreation on every render
    const animationVariants = useMemo(
      () => createAnimationVariants(reducedMotion),
      [reducedMotion]
    );

    // Skip animations entirely if user prefers reduced motion and no animation
    if (reducedMotion && animationType === "none") {
      return (
        <section className={className} id={id}>
          {children}
        </section>
      );
    }

    // Get the appropriate animation variant
    const variant =
      animationType === "none"
        ? { initial: {}, animate: {}, transition: { duration: 0 } }
        : animationVariants[animationType];
    const animationProps = enableIntersection
      ? {
          initial: variant.initial,
          whileInView: variant.animate,
          viewport: { once: true, margin: "-10px" },
          transition: {
            ...variant.transition,
            delay: reducedMotion ? 0 : delay,
          },
        }
      : {
          initial: variant.initial,
          animate: variant.animate,
          transition: {
            ...variant.transition,
            delay: reducedMotion ? 0 : delay,
          },
        };

    return (
      <motion.section
        className={className}
        id={id}
        {...animationProps}
        style={{
          // Optimize for GPU acceleration
          willChange: reducedMotion ? "auto" : "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.section>
    );
  }
);

PerformantSection.displayName = "PerformantSection";

export default PerformantSection;
