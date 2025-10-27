import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Clock, Shield } from 'lucide-react';
import { animations } from '../constants/design';

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Environmental Impact',
      description: 'Traditional surveys harm ecosystems and require extensive permits.',
      impact: '80% slower approval',
    },
    {
      icon: DollarSign,
      title: 'High Costs',
      description: 'Ground crews and heavy machinery create massive overhead.',
      impact: '$2M+ per survey',
    },
    {
      icon: Clock,
      title: 'Slow Processing',
      description: 'Manual interpretation delays critical decision-making.',
      impact: '6-12 month delays',
    },
    {
      icon: Shield,
      title: 'Safety Risks',
      description: 'Personnel exposure to harsh environments increases liability.',
      impact: '15x higher risk',
    },
  ];

  return (
    <section id="problem" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Critical{' '}
          <span className="text-neon">Challenges</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Traditional exploration faces systemic inefficiencies that cost the industry billions.
        </motion.p>
      </div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
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
              <problem.icon 
                size={24} 
                className="text-muted group-hover:text-neon transition-colors duration-300" 
              />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 font-space">
              {problem.title}
            </h3>
            
            <p className="text-sm text-muted mb-3 leading-relaxed font-inter">
              {problem.description}
            </p>
            
            <div className="text-xs text-neon font-medium">
              {problem.impact}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom impact stat */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="text-3xl md:text-4xl font-bold text-neon mb-2 font-space">
          $144M
        </div>
        <div className="text-sm text-muted font-inter">
          Annual industry losses from inefficient exploration
        </div>
      </motion.div>
    </section>
  );
};

export default Problem;