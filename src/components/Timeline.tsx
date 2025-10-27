import { motion } from 'framer-motion';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { animations } from '../constants/design';

const Timeline = () => {
  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Product Launch',
      description: 'Commercial deployment of LiDAR AI platform',
      status: 'completed',
    },
    {
      quarter: 'Q2 2024',
      title: 'Enterprise Partnerships',
      description: 'Strategic partnerships with major energy companies',
      status: 'completed',
    },
    {
      quarter: 'Q3 2024',
      title: 'Scale Operations',
      description: 'Expand to 50+ active projects across North America',
      status: 'in-progress',
    },
    {
      quarter: 'Q4 2024',
      title: 'Global Expansion',
      description: 'International market entry and technology licensing',
      status: 'upcoming',
    },
    {
      quarter: 'Q1 2025',
      title: 'AI Enhancement',
      description: 'Next-gen predictive analytics and automated insights',
      status: 'upcoming',
    },
  ];

  return (
    <section id="timeline" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Growth{' '}
          <span className="text-neon">Timeline</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Our roadmap to transforming the energy exploration industry.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6 pb-12 last:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-6 top-12 w-[1px] h-12 bg-white/[0.08]" />
            )}
            
            {/* Status icon */}
            <div className="flex-shrink-0 mt-1">
              {milestone.status === 'completed' ? (
                <CheckCircle size={24} className="text-neon" />
              ) : milestone.status === 'in-progress' ? (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Circle size={24} className="text-neon" />
                </motion.div>
              ) : (
                <Circle size={24} className="text-muted" />
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 glass-panel neon-border-t p-6 group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-neon text-sm font-medium mb-1 font-inter">
                    {milestone.quarter}
                  </div>
                  <h3 className="text-xl font-semibold text-white font-space">
                    {milestone.title}
                  </h3>
                </div>
                
                {milestone.status === 'in-progress' && (
                  <ArrowRight size={20} className="text-neon animate-pulse" />
                )}
              </div>
              
              <p className="text-muted leading-relaxed font-inter">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#contact"
          className="btn-ghost px-8 py-3 font-semibold font-inter"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join Our Journey
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Timeline;