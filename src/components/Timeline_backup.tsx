import { motion } from "framer-motion";
import {
  Building,
  GraduationCap,
  Cog,
  Rocket,
  TrendingUp,
  Megaphone,
} from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      quarter: "Q3 2025",
      icon: <Building className="w-8 h-8" />,
      title: "Infrastructure",
      description: "Complete drone fleet setup and testing facilities",
    },
    {
      quarter: "Q4 2025",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training",
      description: "Indigenous workforce certification and skill development",
    },
    {
      quarter: "Q1 2026",
      icon: <Cog className="w-8 h-8" />,
      title: "Operations",
      description: "Begin commercial seismic surveying operations",
    },
    {
      quarter: "Q2 2026",
      icon: <Rocket className="w-8 h-8" />,
      title: "Technology",
      description: "AI platform optimization and feature expansion",
    },
    {
      quarter: "Q3 2026",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales",
      description: "Scale operations and expand client base",
    },
    {
      quarter: "Q4 2026",
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing",
      description: "Brand expansion and market leadership",
    },
  ];

  return (
    <section id="timeline" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary-500">Roadmap</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strategic milestones from Q3 2025 to Q4 2026 outlining our path to
            becoming the leader in AI-powered seismic exploration.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 rounded-full"></div>

          <div className="grid grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? "mb-20" : "mt-20"}`}
              >
                {/* Milestone Card */}
                <motion.div
                  whileHover={{ scale: 1.05, z: 50 }}
                  className="glass-effect p-6 text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-primary-500 mb-4 flex justify-center group-hover:text-primary-400 transition-colors duration-300"
                  >
                    {milestone.icon}
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2 text-primary-500">
                    {milestone.quarter}
                  </h3>

                  <h4 className="text-md font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {milestone.title}
                  </h4>

                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                    {milestone.description}
                  </p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-950 ${
                    index % 2 === 0 ? "top-full mt-4" : "bottom-full mb-4"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-950"
                />
                {index < milestones.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-primary-500 to-primary-500/30 mt-2"></div>
                )}
              </div>

              {/* Milestone Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 flex-1 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-primary-500 group-hover:text-primary-400 transition-colors duration-300"
                  >
                    {milestone.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-primary-500">
                      {milestone.quarter}
                    </h3>

                    <h4 className="text-md font-semibold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {milestone.title}
                    </h4>

                    <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
