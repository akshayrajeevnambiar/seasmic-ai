import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { animations } from "../constants/design";

const Hero = () => {
  // Use public path - video will be copied to public folder for Vercel deployment
  const videoSrc = "/drone-hero-bg.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log("Video failed to load, showing gradient fallback");
            // Hide video and show gradient fallback
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback gradient background */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-design-black via-gray-900 to-design-black"
          style={{ display: "none" }}
          animate={{
            background: [
              "linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 50%, #0B0B0C 100%)",
              "linear-gradient(135deg, #0B0B0C 0%, #2a2a2a 50%, #0B0B0C 100%)",
              "linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 50%, #0B0B0C 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Subtle neon grid overlay on video */}
      <div className="absolute inset-0 opacity-[0.08] z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 229, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 229, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "120px 120px", "0px 0px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Neon scan lines over video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {/* Slow moving neon lines */}
        <motion.div
          className="absolute top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/10 to-transparent"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-screen-xl mx-auto px-6 text-center">
        <motion.div {...animations.minimal}>
          {/* Centered headline (two lines) */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white">Seismic</span>
            <br />
            <span className="text-neon">Intelligence</span>
          </motion.h1>

          {/* Small subcopy */}
          <motion.p
            className="text-lg md:text-xl text-muted mb-16 max-w-2xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            AI-powered LiDAR drone platform revolutionizing energy exploration
            with precision, speed, and zero environmental impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#contact"
              className="btn-primary text-base px-8 py-4 font-medium"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 32px rgba(0, 229, 255, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
            </motion.a>

            <motion.a
              href="#solution"
              className="btn-ghost text-base px-8 py-4 font-medium"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/40"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs mb-2 font-medium font-inter">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
