import { motion } from "framer-motion";
import { DollarSign, TrendingUp, PieChart, Target } from "lucide-react";

const ROI = () => {
  const kpis = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Net Sales Q3 2025",
      value: "CAD $396K",
      growth: "+285%",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Year 1 Profit",
      value: "CAD $1.17M",
      growth: "+44% margin",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Investment Required",
      value: "CAD $900K",
      growth: "15% equity",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ROI Timeline",
      value: "18 months",
      growth: "Break-even",
    },
  ];

  return (
    <section id="roi" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Compelling <span className="text-primary-500">Investment</span>{" "}
            Opportunity
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strong financial projections with rapid growth potential and
            sustainable competitive advantages in the energy exploration market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
              className="glass-effect p-8 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-primary-500 mb-6 flex justify-center group-hover:text-primary-400 transition-colors duration-300"
              >
                {kpi.icon}
              </motion.div>

              <h3 className="text-lg font-semibold mb-4 text-white/80 group-hover:text-white transition-colors duration-300">
                {kpi.title}
              </h3>

              <div className="text-3xl font-bold text-primary-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {kpi.value}
              </div>

              <div className="text-green-400 font-semibold">{kpi.growth}</div>
            </motion.div>
          ))}
        </div>

        {/* EBITDA Growth Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="glass-effect p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">EBITDA Growth Projection</h3>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {["Q3 2025", "Q4 2025", "Q1 2026", "Q2 2026"].map(
                (quarter, index) => (
                  <motion.div
                    key={quarter}
                    className="relative"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(index + 1) * 80}px` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg flex items-end justify-center relative overflow-hidden"
                      style={{ height: `${(index + 1) * 80}px` }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(255, 176, 58, 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated value label */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                        viewport={{ once: true }}
                        className="absolute -top-10 text-white font-bold text-sm bg-dark-900/80 px-2 py-1 rounded"
                      >
                        ${(index + 1) * 125}K
                      </motion.div>

                      {/* Quarter label */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 1 }}
                        viewport={{ once: true }}
                        className="text-dark-950 font-bold text-xs p-2"
                      >
                        {quarter}
                      </motion.div>

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          delay: index * 0.3 + 1.5,
                          repeat: Infinity,
                          repeatDelay: 4,
                        }}
                        style={{ width: "50%" }}
                      />
                    </motion.div>
                  </motion.div>
                )
              )}
            </div>

            <p className="text-xl text-white/80">
              Projected 300% EBITDA growth over 12 months with scalable business
              model and expanding market opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROI;
