import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Contact information (name, email, company) when you reach out to us",
        "Technical data (IP address, browser type) for analytics and security",
        "Seismic data files you upload for analysis (processed securely)",
        "Usage patterns to improve our AI models and user experience"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our AI-powered seismic analysis services",
        "Communicate with you about our services and support",
        "Ensure platform security and prevent unauthorized access",
        "Develop and train our machine learning models (anonymized data only)"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection & Security",
      content: [
        "All data transmission is encrypted using industry-standard TLS protocols",
        "Seismic data is processed in secure, isolated environments",
        "We implement multi-factor authentication and access controls",
        "Regular security audits and penetration testing are conducted"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access and review your personal data we have on file",
        "Request correction of inaccurate or incomplete information",
        "Delete your account and associated data at any time",
        "Opt-out of non-essential communications and data processing"
      ]
    }
  ];

  return (
    <section id="privacy-policy" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
            Privacy <span className="text-neon">Policy</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto font-inter leading-relaxed">
            Your privacy is fundamental to how we operate. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted mt-4 font-inter">
            Last updated: January 2025
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1] 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-neon p-3 bg-neon/10 rounded-xl flex-shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-space">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted font-inter leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Data Retention */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-neon/5 to-accent/5 border border-neon/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4 font-space">Data Retention</h3>
          <p className="text-muted font-inter leading-relaxed mb-4">
            We retain your personal information only as long as necessary to provide our services and comply with legal obligations. 
            Seismic data uploaded for analysis is automatically deleted after 90 days unless you request longer retention.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-neon font-medium mb-2 font-inter">Contact Information</h4>
              <p className="text-muted font-inter text-sm">Retained until you request deletion or opt-out</p>
            </div>
            <div>
              <h4 className="text-neon font-medium mb-2 font-inter">Seismic Data</h4>
              <p className="text-muted font-inter text-sm">Automatically deleted after 90 days</p>
            </div>
          </div>
        </motion.div>

        {/* Contact for Privacy */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4 font-space">Questions About Privacy?</h3>
          <p className="text-muted font-inter mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, please contact our privacy team.
          </p>
          <a
            href="mailto:privacy@seismicai.ca"
            className="inline-flex items-center space-x-2 text-neon hover:text-white transition-colors duration-300 font-inter font-medium"
          >
            <Mail size={18} />
            <span>privacy@seismicai.ca</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;