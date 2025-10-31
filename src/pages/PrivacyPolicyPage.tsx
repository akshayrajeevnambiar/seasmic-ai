import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
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
    <div className="min-h-screen bg-dark text-white">
      {/* Header with back button */}
      <div className="bg-black/50 border-b border-white/[0.08] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-neon hover:text-white transition-colors duration-300 font-inter mb-4"
          >
            <ArrowLeft size={18} />
            <span>Back to Seismic AI</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-space">
            Privacy Policy
          </h1>
          <p className="text-muted mt-2 font-inter">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl text-muted leading-relaxed font-inter">
              Your privacy is fundamental to how we operate. This policy explains how we collect, use, and protect your information 
              when you use Seismic AI's services.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1] 
                }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Third Party Services */}
          <motion.div
            className="mt-12 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Third Party Services</h3>
            <p className="text-muted font-inter leading-relaxed mb-4">
              We may use third-party services to help us operate our business and improve our services. These services are carefully 
              selected and contractually bound to protect your data.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted font-inter text-sm">Analytics services for website usage (anonymized data only)</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted font-inter text-sm">Cloud infrastructure providers with enterprise security</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted font-inter text-sm">Email service providers for communication (encrypted)</p>
              </li>
            </ul>
          </motion.div>

          {/* Contact for Privacy */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;