import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = from;
    const endValue = to;
    const totalDuration = duration * 1000; // Convert to milliseconds

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Simplified flickering effect - just during counting
      const flickerIntensity = Math.max(0, 1 - progress) * 0.3; // Reduced intensity
      const flicker = (Math.random() - 0.5) * flickerIntensity * 0.1;

      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const adjustedProgress = Math.max(0, Math.min(1, easeOutExpo + flicker));

      const currentValue =
        startValue + (endValue - startValue) * adjustedProgress;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure we end with exact value
      }
    };

    // Start animation after a short delay
    const timeout = setTimeout(() => {
      animate();
    }, 200);

    return () => clearTimeout(timeout);
  }, [isInView, from, to, duration]);

  const formatValue = (value: number) => {
    return value.toFixed(decimals);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.5,
      }}
    >
      {prefix}
      {formatValue(count)}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
