import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { animations } from "../constants/design";
import heroVideo from "../assets/drone-hero-bg.mp4";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section showcasing Seismic AI drone technology"
      role="banner"
    >
      {/* Video background */}
      <div
        className="absolute inset-0"
        role="img"
        aria-label="Seismic AI drone in action - aerial view of energy exploration technology"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{
            willChange: "auto",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
          onError={(e) => {
            console.log("Video failed to load, showing gradient fallback");
            // Hide video and show gradient fallback
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video ready to play")}
          aria-label="Background video showing Seismic AI drone technology in operation"
          title="Seismic AI - Advanced LiDAR drone technology for energy exploration"
        >
          <source src={heroVideo} type="video/mp4" />
          <track
            kind="descriptions"
            src="/video-descriptions.vtt"
            srcLang="en"
            label="English descriptions"
          />
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

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
        <motion.header {...animations.minimal}>
          {/* Main headline with proper heading hierarchy */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            itemProp="headline"
          >
            <span className="text-white">Seismic</span>
            <br />
            <span className="text-neon">Intelligence</span>
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            className="text-lg md:text-xl text-muted mb-16 max-w-2xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            itemProp="description"
            role="complementary"
            aria-label="Company value proposition"
          >
            AI-powered LiDAR drone platform revolutionizing energy exploration
            with precision, speed, and zero environmental impact.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.nav
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Primary navigation actions"
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
              aria-label="Learn how Seismic AI technology works"
            >
              See How It Works
            </motion.a>
          </motion.nav>
        </motion.header>
      </div>

      {/* Scroll indicator with accessibility */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        role="navigation"
        aria-label="Scroll down to explore more content"
      >
        <motion.a
          href="#solution"
          className="flex flex-col items-center text-white/40 hover:text-white/60 transition-colors focus:outline-none focus:ring-2 focus:ring-neon rounded-lg p-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down to view solutions section"
          tabIndex={0}
        >
          <span className="text-xs mb-2 font-medium font-inter">Scroll</span>
          <ChevronDown size={16} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
