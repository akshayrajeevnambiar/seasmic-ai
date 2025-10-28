import { motion } from "framer-motion";
import { Monitor, Database, Cloud } from "lucide-react";
import { animations } from "../constants/design";
import { useRef, useEffect } from "react";
// Import available media files - now including compressed videos
import dsmGif from "../assets/digital-surface-model.gif";
import aiDashboardGif from "../assets/ai-dashboard.gif";
import demVideo from "../assets/digital-elevation-model.mp4";
import lidarVideo from "../assets/lidar-beam-scanning.mp4";

const Technology = () => {
  const MediaPlayer = ({
    src,
    isGif = false,
    title = "Media Content",
  }: {
    src: string | null;
    isGif?: boolean;
    title?: string;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (isGif || !src) return; // GIFs don't need video setup, and null sources are placeholders

      const video = videoRef.current;
      if (!video) return;

      console.log("Setting up video with source:", src);

      // Auto-play when video can play
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      };

      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }, [src, isGif]);

    // Fallback for missing media
    if (!src) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-design-black to-gray-900 flex items-center justify-center border border-design-neon/20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-2 border-design-neon rounded-full flex items-center justify-center">
              <Monitor className="w-8 h-8 text-design-neon" />
            </div>
            <div className="text-design-neon text-sm font-medium">
              {title} Demo
            </div>
            <div className="text-gray-400 text-xs">
              Optimized for web deployment
            </div>
          </div>
        </div>
      );
    }

    if (isGif) {
      return (
        <img
          src={src}
          alt="Animation"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error("GIF error:", e);
            console.error("Source:", src);
          }}
          onLoad={() => console.log("GIF loaded:", src)}
        />
      );
    }

    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error("Video error:", e);
          console.error("Source:", src);
        }}
        onLoadStart={() => console.log("Video load started for:", src)}
        onCanPlay={() => console.log("Video can play:", src)}
        onLoadedData={() => console.log("Video data loaded:", src)}
      >
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  const technologies = [
    {
      icon: Monitor,
      title: "Digital Elevation Model",
      description: "High-resolution terrain mapping with sub-meter accuracy",
      media: demVideo,
      isGif: false,
    },
    {
      icon: Database,
      title: "Digital Surface Model",
      description: "Complete surface feature detection and analysis",
      media: dsmGif,
      isGif: true,
    },
    {
      icon: Cloud,
      title: "AI Analytics Dashboard",
      description: "Machine learning insights and predictive analytics",
      media: aiDashboardGif,
      isGif: true,
    },
  ];

  return (
    <section id="technology" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Advanced <span className="text-neon">Technology</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Our integrated platform combines LiDAR scanning, AI analytics, and
          cloud computing.
        </motion.p>
      </div>

      {/* Technology stack grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="glass-panel neon-border-t p-6 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <tech.icon
                size={32}
                className="text-muted group-hover:text-neon transition-colors duration-300 mx-auto"
              />
            </div>

            <h3 className="text-lg font-semibold text-white mb-3 font-space">
              {tech.title}
            </h3>

            {/* Tech visualization */}
            <div className="aspect-video bg-black/40 border border-white/[0.05] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <MediaPlayer
                src={tech.media}
                isGif={tech.isGif}
                title={tech.title}
              />
            </div>

            <p className="text-sm text-muted leading-relaxed font-inter">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      {/* LiDAR scanning visualization */}
      <motion.div
        className="glass-panel neon-border-t p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-space">
          LiDAR Beam Scanning
        </h3>

        <div className="relative max-w-4xl mx-auto mb-6">
          <div className="aspect-video bg-black/40 border border-white/[0.05] rounded-lg flex items-center justify-center relative overflow-hidden">
            <MediaPlayer
              src={lidarVideo}
              isGif={false}
              title="LiDAR Beam Scanning"
            />
          </div>
        </div>

        <p className="text-muted font-inter leading-relaxed max-w-2xl mx-auto">
          Our proprietary SaaS platform API seamlessly integrates with existing
          workflows, providing instant access to processed seismic data and
          insights.
        </p>
      </motion.div>
    </section>
  );
};

export default Technology;
