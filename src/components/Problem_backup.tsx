import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, ShieldAlert } from "lucide-react";
import { animations } from "../constants/design";

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Environmental Hazards",
      description:
        "Traditional seismic surveys pose significant risks to ecosystems and require extensive permits.",
      impact: "80% longer approval times",
    },
    {
      icon: DollarSign,
      title: "High Operational Costs",
      description:
        "Ground crews, heavy machinery, and infrastructure deployment create massive expense overhead.",
      impact: "$2M+ per survey",
    },
    {
      icon: Clock,
      title: "Slow Data Processing",
      description:
        "Manual interpretation and legacy systems delay critical decision-making by months.",
      impact: "6-12 month delays",
    },
    {
      icon: ShieldAlert,
      title: "Safety Concerns",
      description:
        "Personnel exposure to harsh environments and dangerous terrains increases liability.",
      impact: "15x higher risk",
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep to-navy/40" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <motion.div {...animations.sectionEntry} className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Traditional Exploration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-soft">
              Faces Critical Challenges
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/64 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            The oil & gas industry struggles with outdated surveying methods
            that are expensive, slow, and environmentally disruptive.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="glass-panel p-8 lg:p-10 relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(255, 176, 58, 0.1)",
              }}
            >
              {/* Ambient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber to-amber-soft rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-amber/20">
                    <problem.icon size={28} className="text-deep" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {problem.title}
                    </h3>
                    <span className="text-amber font-semibold text-lg">
                      {problem.impact}
                    </span>
                  </div>
                </motion.div>

                <p className="text-white/72 text-lg leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Subtle border effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, rgba(255, 176, 58, 0.3), transparent 50%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-white/64 mb-8 max-w-3xl mx-auto">
            These challenges demand a revolutionary approach to seismic data
            collection and analysis.
          </p>

          <motion.div
            className="w-2 h-16 bg-gradient-to-b from-amber to-transparent mx-auto rounded-full"
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
