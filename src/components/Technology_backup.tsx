import { motion } from "framer-motion";
import { Monitor, Database, Cloud } from "lucide-react";

const Technology = () => {
  return (
    <section id="technology" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced <span className="text-primary-500">Technology Stack</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our integrated platform combines LiDAR scanning, AI analytics, and
            cloud computing to deliver unprecedented seismic intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* DEM Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect p-8 text-center"
          >
            <Monitor className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Digital Elevation Model</h3>
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-xl mb-4 flex items-center justify-center">
              <img
                src="/assets/dem-visualization.jpg"
                alt="Digital Elevation Model"
                className="w-full h-full object-cover rounded-xl opacity-80"
              />
            </div>
            <p className="text-white/70">
              High-resolution terrain mapping with sub-meter accuracy
            </p>
          </motion.div>

          {/* DSM Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-8 text-center"
          >
            <Database className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Digital Surface Model</h3>
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-xl mb-4 flex items-center justify-center">
              <img
                src="/assets/dsm-visualization.jpg"
                alt="Digital Surface Model"
                className="w-full h-full object-cover rounded-xl opacity-80"
              />
            </div>
            <p className="text-white/70">
              Complete surface feature detection and analysis
            </p>
          </motion.div>

          {/* AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect p-8 text-center"
          >
            <Cloud className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">AI Analytics Dashboard</h3>
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-xl mb-4 flex items-center justify-center">
              <img
                src="/assets/ai-dashboard.jpg"
                alt="AI Analytics Dashboard"
                className="w-full h-full object-cover rounded-xl opacity-80"
              />
            </div>
            <p className="text-white/70">
              Machine learning insights and predictive analytics
            </p>
          </motion.div>
        </div>

        {/* LiDAR Animation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            LiDAR Beam Scanning Technology
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Animated LiDAR beams */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scaleY: [0.8, 1.5, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                    className="absolute w-1 bg-primary-500 h-32 rounded-full"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: "bottom center",
                    }}
                  />
                ))}
              </motion.div>

              <div className="z-10 text-center">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-dark-950 font-bold text-lg">AI</span>
                </div>
                <p className="text-white/80">Real-time LiDAR data processing</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-white/80 mt-8 max-w-3xl mx-auto">
            Our proprietary SaaS platform API seamlessly integrates with
            existing workflows, providing instant access to processed seismic
            data and insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
