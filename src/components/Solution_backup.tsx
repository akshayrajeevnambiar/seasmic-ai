import { motion } from "framer-motion";
import { Zap, Brain, Globe, Shield } from "lucide-react";
import { animations } from "../constants/design";

const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "LiDAR UAVs",
      description:
        "Advanced drone technology for precision aerial surveying with minimal environmental impact",
      benefits: ["60% cost reduction", "Real-time data", "Zero emissions"],
    },
    {
      icon: Brain,
      title: "AI Analytics",
      description:
        "Machine learning algorithms process seismic data with unprecedented accuracy and speed",
      benefits: ["95% accuracy", "Instant analysis", "Predictive insights"],
    },
    {
      icon: Globe,
      title: "Real-Time Mapping",
      description:
        "Live subsurface visualization enables immediate decision-making and exploration optimization",
      benefits: ["24/7 monitoring", "Interactive 3D", "Cloud access"],
    },
    {
      icon: Shield,
      title: "ESG Compliance",
      description:
        "Sustainable exploration methods that exceed environmental and safety standards",
      benefits: ["Zero footprint", "Regulatory ready", "Community safe"],
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-ink to-deep">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-amber/10 rounded-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 border border-amber/5 rounded-full"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 border border-amber/8 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div {...animations.sectionEntry} className="space-y-8">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              Introducing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-soft">
                Seismic AI
              </span>
              <br />
              The Future of Exploration
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/72 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              Our revolutionary AI-powered LiDAR drone platform transforms
              seismic data collection from weeks to hours, reducing costs by 60%
              while eliminating environmental impact.
            </motion.p>

            {/* Key metrics */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              {[
                { value: "10x", label: "Faster Surveys" },
                { value: "95%", label: "Data Accuracy" },
                { value: "60%", label: "Cost Reduction" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/64 text-sm font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="btn-primary px-8 py-4 font-semibold"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 32px rgba(255, 176, 58, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                See Demo
              </motion.a>

              <motion.a
                href="#technology"
                className="btn-secondary px-8 py-4 font-semibold"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(255, 176, 58, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Solution Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(255, 176, 58, 0.15)",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-amber to-amber-soft rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <solution.icon size={24} className="text-deep" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber transition-colors duration-300">
                    {solution.title}
                  </h3>

                  <p className="text-white/68 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        className="flex items-center text-xs text-amber/80 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + benefitIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1 h-1 bg-amber rounded-full mr-2" />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TODO: Add interactive drone visualization */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Exploration Process?
            </h3>
            <p className="text-white/68 text-lg mb-6">
              Join leading energy companies already using Seismic AI to reduce
              costs, accelerate discovery, and minimize environmental impact.
            </p>

            {/* TODO: Replace with actual interactive 3D drone model */}
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-amber/20 to-amber-soft/20 rounded-full flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Zap size={48} className="text-amber" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
