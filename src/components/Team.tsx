import { motion } from "framer-motion";
import { animations } from "../constants/design";

const Team = () => {
  return (
    <section id="team" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Our <span className="text-neon">Team</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          World-class experts in AI, geophysics, and energy innovation leading
          the future of exploration.
        </motion.p>
      </div>

      {/* Simple team message */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="glass-panel p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-space">
            Dedicated Innovation Team
          </h3>
          <p className="text-lg text-muted leading-relaxed font-inter">
            Our multidisciplinary team combines decades of experience in artificial intelligence, 
            geophysical surveying, and energy exploration. We are committed to revolutionizing 
            the industry through cutting-edge LiDAR drone technology and advanced data analytics.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;