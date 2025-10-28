import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import seismicLogo from '../assets/seismica-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const startTime = Date.now();
    const duration = 3000; // 3 seconds total loading time

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Add slight randomness to make it feel more realistic
      const jitter = Math.random() * 2 - 1; // -1 to 1
      const adjustedProgress = Math.max(0, Math.min(100, newProgress + jitter));
      
      setProgress(adjustedProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Wait a moment at 100% before completing
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500); // Fade out duration
        }, 300);
      }
    };

    // Start progress after initial mount
    setTimeout(() => {
      updateProgress();
    }, 500);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-design-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px",
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={seismicLogo}
                alt="Seismic AI"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </motion.div>

            {/* Loading bar container */}
            <motion.div
              className="w-80 md:w-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Progress bar background */}
              <div className="relative h-1 bg-white/[0.08] rounded-full overflow-hidden">
                {/* Progress bar fill */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-neon to-accent rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-neon/50 to-accent/50 rounded-full blur-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Moving highlight */}
                <motion.div
                  className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: progress < 100 ? [-32, 320] : 320,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: progress < 100 ? Infinity : 0,
                    repeatType: "loop",
                  }}
                />
              </div>

              {/* Progress percentage */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted font-inter">Loading</span>
                <motion.span
                  className="text-xs text-neon font-mono"
                  key={Math.floor(progress)}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              className="flex space-x-1 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-neon rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;