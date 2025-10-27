import { motion } from "framer-motion";
import { Target, TrendingDown, Clock, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "High Precision & Accuracy",
      description:
        "LiDAR technology provides millimeter-accurate subsurface mapping",
      stats: "99.8% accuracy",
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "70% Cost Reduction",
      description:
        "Dramatically reduce exploration costs compared to traditional methods",
      stats: "Save $3.5M annually",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Real-Time Insights",
      description:
        "Instant data processing and analysis for immediate decision making",
      stats: "Results in hours",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ESG & Safety Integration",
      description:
        "Environmentally responsible exploration with zero ground disturbance",
      stats: "100% sustainable",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Indigenous Workforce Training",
      description:
        "Empowering local communities with cutting-edge technology skills",
      stats: "50+ trained operators",
    },
  ];

  return (
    <section id="features" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary <span className="text-primary-500">Features</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of seismic exploration with our cutting-edge
            technology that delivers unparalleled accuracy, efficiency, and
            sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="glass-effect p-8 group cursor-pointer h-full"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-primary-500 mb-6 group-hover:text-primary-400 transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>

              <div className="border-t border-white/10 pt-4">
                <span className="text-primary-500 font-bold text-lg">
                  {feature.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5"
          >
            Experience Our Technology
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
