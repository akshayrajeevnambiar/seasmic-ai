import { motion } from 'framer-motion';
import { Target, TrendingDown, Clock, Shield, Users } from 'lucide-react';
import { animations } from '../constants/design';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Mapping',
      description: 'LiDAR technology provides millimeter-accurate subsurface mapping',
      stats: '99.8% accuracy',
    },
    {
      icon: TrendingDown,
      title: 'Cost Reduction',
      description: 'Dramatically reduce exploration costs compared to traditional methods',
      stats: 'Save $3.5M annually',
    },
    {
      icon: Clock,
      title: 'Real-Time Analysis',
      description: 'Instant data processing and analysis for immediate decision making',
      stats: 'Results in hours',
    },
    {
      icon: Shield,
      title: 'ESG Compliance',
      description: 'Environmentally responsible exploration with zero ground disturbance',
      stats: '100% sustainable',
    },
    {
      icon: Users,
      title: 'Workforce Training',
      description: 'Empowering local communities with cutting-edge technology skills',
      stats: '50+ trained operators',
    },
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Revolutionary{' '}
          <span className="text-neon">Features</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Experience the future of seismic exploration with unparalleled accuracy, efficiency, and sustainability.
        </motion.p>
      </div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="glass-panel neon-border-t p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <feature.icon 
                size={24} 
                className="text-muted group-hover:text-neon transition-colors duration-300" 
              />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 font-space">
              {feature.title}
            </h3>
            
            <p className="text-sm text-muted mb-4 leading-relaxed font-inter">
              {feature.description}
            </p>
            
            <div className="border-t border-white/[0.08] pt-3">
              <span className="text-neon font-medium text-sm">
                {feature.stats}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#contact"
          className="btn-primary px-8 py-3 font-semibold font-inter"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Experience Our Technology
        </motion.a>

        {/* AI Disclaimer */}
        <motion.p
          className="text-gray-400 font-inter text-sm mt-6 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <strong className="text-orange-400">Note:</strong> AI-powered features provide analytical assistance. 
          All outputs require validation by qualified professionals before operational use.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Features;