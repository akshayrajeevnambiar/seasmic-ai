import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';
import { animations } from '../constants/design';

const ROI = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: '$2.4M',
      label: 'Cost Savings',
      description: 'Average annual savings per project',
    },
    {
      icon: Clock,
      value: '85%',
      label: 'Time Reduction',
      description: 'Faster survey completion',
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'ROI Increase',
      description: 'Return on investment',
    },
    {
      icon: Zap,
      value: '95%',
      label: 'Accuracy',
      description: 'Data precision guarantee',
    },
  ];

  const benefits = [
    'Eliminate heavy machinery costs',
    'Reduce environmental permits',
    'Accelerate decision-making',
    'Minimize operational risks',
    'Improve data quality',
    'Enable real-time monitoring',
  ];

  return (
    <section id="roi" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Proven{' '}
          <span className="text-neon">ROI</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Seismic AI delivers measurable results with significant cost savings and operational improvements.
        </motion.p>
      </div>

      {/* ROI metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="glass-panel neon-border-t p-6 text-center group"
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
              <metric.icon 
                size={32} 
                className="text-muted group-hover:text-neon transition-colors duration-300 mx-auto" 
              />
            </div>
            
            <div className="text-3xl font-bold text-neon mb-2 font-space">
              {metric.value}
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 font-space">
              {metric.label}
            </h3>
            
            <p className="text-sm text-muted leading-relaxed font-inter">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      {/* Benefits grid */}
      <motion.div
        className="glass-panel neon-border-t p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center font-space">
          Key Benefits
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-neon rounded-full flex-shrink-0" />
              <span className="text-sm text-muted font-inter">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ROI;