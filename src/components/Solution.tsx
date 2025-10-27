import { motion } from 'framer-motion';
import { Zap, Brain, Globe, Shield } from 'lucide-react';
import { animations } from '../constants/design';

const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'LiDAR UAVs',
      description: 'Advanced drone technology for precision aerial surveying with minimal environmental impact',
      benefits: ['60% cost reduction', 'Real-time data', 'Zero emissions'],
    },
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Machine learning algorithms process seismic data with unprecedented accuracy and speed',
      benefits: ['95% accuracy', 'Instant analysis', 'Predictive insights'],
    },
    {
      icon: Globe,
      title: 'Real-Time Mapping',
      description: 'Live subsurface visualization enables immediate decision-making and exploration optimization',
      benefits: ['24/7 monitoring', 'Interactive 3D', 'Cloud access'],
    },
    {
      icon: Shield,
      title: 'ESG Compliance',
      description: 'Sustainable exploration methods that exceed environmental and safety standards',
      benefits: ['Zero footprint', 'Regulatory ready', 'Community safe'],
    },
  ];

  const metrics = [
    { value: '10x', label: 'Faster Surveys' },
    { value: '95%', label: 'Data Accuracy' },
    { value: '60%', label: 'Cost Reduction' },
  ];

  return (
    <section id="solution" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Seismic{' '}
          <span className="text-neon">Intelligence</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Revolutionary AI-powered LiDAR platform transforms exploration from weeks to hours.
        </motion.p>
      </div>

      {/* Key metrics */}
      <motion.div
        className="grid grid-cols-3 gap-8 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-neon mb-2 font-space">
              {metric.value}
            </div>
            <div className="text-sm text-muted font-inter">
              {metric.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      {/* Solution cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {solutions.map((solution, index) => (
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
              <solution.icon 
                size={24} 
                className="text-muted group-hover:text-neon transition-colors duration-300" 
              />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 font-space">
              {solution.title}
            </h3>
            
            <p className="text-sm text-muted mb-4 leading-relaxed font-inter">
              {solution.description}
            </p>
            
            <div className="space-y-1">
              {solution.benefits.map((benefit, benefitIndex) => (
                <div
                  key={benefitIndex}
                  className="flex items-center text-xs text-neon/80 font-medium"
                >
                  <div className="w-1 h-1 bg-neon rounded-full mr-2" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA section */}
      <motion.div
        className="glass-panel neon-border-t p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-space">
          Ready to Transform Your Exploration?
        </h3>
        <p className="text-muted text-lg mb-6 font-inter">
          Join leading energy companies using Seismic AI to reduce costs and accelerate discovery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            className="btn-primary px-8 py-3 font-semibold font-inter"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See Demo
          </motion.a>

          <motion.a
            href="#technology"
            className="btn-ghost px-8 py-3 font-semibold font-inter"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Solution;