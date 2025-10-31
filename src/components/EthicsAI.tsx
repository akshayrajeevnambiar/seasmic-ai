import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Database, Eye, CheckCircle } from 'lucide-react';

const EthicsAI: React.FC = () => {
  const principles = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Responsible AI Development",
      description: "We adhere to ethical AI principles, ensuring our models are developed with fairness, accountability, and transparency at their core."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency & Explainability",
      description: "Our AI models provide clear reasoning for predictions, enabling users to understand and validate the decision-making process."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Privacy & Security",
      description: "We implement robust data protection measures and never compromise on user privacy or confidential information security."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Human-in-the-Loop",
      description: "AI outputs are designed to augment human expertise, not replace it. Critical decisions always require human validation and oversight."
    }
  ];

  const dataUsage = [
    {
      type: "Training Data",
      description: "Anonymized seismic datasets from public repositories and partner institutions",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-accent" />
    },
    {
      type: "User Data",
      description: "Processed on-premise or in secure cloud environments with encryption",
      status: "Protected",
      icon: <Shield className="w-5 h-5 text-neon" />
    },
    {
      type: "Model Outputs",
      description: "Predictions require validation by qualified geophysicists",
      status: "Supervised",
      icon: <Eye className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="ethics-ai" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
            Ethics & AI <span className="text-neon">Transparency</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto font-inter leading-relaxed">
            Our commitment to responsible AI development and transparent practices in geophysical modeling
          </p>
        </motion.div>

        {/* AI Disclaimer Banner */}
        <motion.div
          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-2 font-space">Important AI Output Disclaimer</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                <strong>All AI outputs are for informational purposes only</strong> and must be validated by qualified geophysicists. 
                Our models provide intelligent assistance but cannot replace professional geological interpretation, field validation, 
                or expert judgment. Users are responsible for verifying all AI-generated predictions before making operational decisions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Ethics Principles */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center font-space">
            Our AI Ethics Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-neon p-3 bg-neon/10 rounded-xl flex-shrink-0">
                    {principle.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3 font-space text-lg">
                      {principle.title}
                    </h4>
                    <p className="text-muted font-inter leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data & Model Usage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center font-space">
            Data & Model Usage Transparency
          </h3>
          
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              {dataUsage.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2 font-space">
                    {item.type}
                  </h4>
                  <p className="text-muted font-inter text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-neon/20 text-neon text-xs font-medium rounded-full">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data Rights & Opt-out */}
          <motion.div
            className="bg-gradient-to-r from-neon/5 to-accent/5 border border-neon/20 rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 font-space">Your Data Rights</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-neon font-medium mb-2 font-inter">Data Control</h5>
                <p className="text-muted font-inter text-sm leading-relaxed">
                  You maintain full control over your data. We provide options to review, modify, or delete your information at any time.
                </p>
              </div>
              <div>
                <h5 className="text-neon font-medium mb-2 font-inter">Opt-out Options</h5>
                <p className="text-muted font-inter text-sm leading-relaxed">
                  Contact us at <a href="mailto:privacy@seismicai.ca" className="text-neon hover:text-white transition-colors">privacy@seismicai.ca</a> to 
                  opt-out of data processing or request data removal.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicsAI;