import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Scale, Users, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Service Description",
      content: [
        "Seismic AI provides artificial intelligence-powered analysis of seismic data for geological interpretation",
        "Our platform uses machine learning models to assist geophysicists in subsurface analysis",
        "Services include seismic interpretation, pattern recognition, and geological modeling assistance",
        "All AI outputs are provided as analytical assistance and require professional validation"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "Ensure you have proper authorization to upload and analyze seismic data",
        "Validate all AI-generated outputs with qualified geological expertise",
        "Maintain confidentiality of proprietary seismic data and results",
        "Use the service in compliance with applicable laws and industry regulations"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Limitations & Disclaimers",
      content: [
        "AI outputs are for informational purposes only and not guaranteed to be accurate",
        "Professional geological interpretation is required for all operational decisions",
        "Seismic AI is not liable for decisions made based solely on AI-generated analysis",
        "Service availability may be subject to maintenance and technical limitations"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "Users retain ownership of their uploaded seismic data and derivative results",
        "Seismic AI retains rights to improve our AI models using anonymized, aggregated data",
        "Our software, algorithms, and AI models are proprietary to Seismic AI",
        "Users may not reverse engineer, copy, or redistribute our proprietary technology"
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
            Terms of Use
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
              These terms govern your use of Seismic AI services. Please review them carefully before using our platform.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Acceptance and Agreement */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-neon/5 to-accent/5 border border-neon/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Acceptance and Agreement</h3>
            <p className="text-muted font-inter leading-relaxed">
              By accessing or using Seismic AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </motion.div>

          {/* Liability & Indemnification */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Limitation of Liability</h3>
            <p className="text-muted font-inter leading-relaxed mb-4">
              <strong>IMPORTANT:</strong> Seismic AI provides analytical tools and AI assistance but does not guarantee the accuracy 
              of geological interpretations. Users are solely responsible for validating AI outputs and making informed decisions 
              based on professional geological expertise.
            </p>
            <p className="text-muted font-inter leading-relaxed">
              In no event shall Seismic AI be liable for any indirect, incidental, special, or consequential damages arising 
              from the use of our services, including but not limited to business losses, operational decisions, or geological assessments.
            </p>
          </motion.div>

          {/* Termination & Modifications */}
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
              <h4 className="text-neon font-semibold mb-3 font-space">Service Termination</h4>
              <p className="text-muted font-inter text-sm leading-relaxed">
                Either party may terminate service with 30 days notice. Upon termination, all user data will be securely deleted 
                within 90 days unless legally required to retain longer.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
              <h4 className="text-neon font-semibold mb-3 font-space">Terms Modifications</h4>
              <p className="text-muted font-inter text-sm leading-relaxed">
                We may update these terms periodically. Users will be notified of significant changes via email or platform notification. 
                Continued use constitutes acceptance of updated terms.
              </p>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            className="mt-12 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Governing Law</h3>
            <p className="text-muted font-inter leading-relaxed">
              These Terms of Use are governed by and construed in accordance with the laws of Canada. Any disputes arising under 
              these terms shall be subject to the exclusive jurisdiction of Canadian courts.
            </p>
          </motion.div>

          {/* Contact for Legal */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Legal Questions?</h3>
            <p className="text-muted font-inter mb-6 leading-relaxed">
              For questions about these Terms of Use or legal matters, please contact our legal team.
            </p>
            <a
              href="mailto:legal@seismicai.ca"
              className="inline-flex items-center space-x-2 text-neon hover:text-white transition-colors duration-300 font-inter font-medium"
            >
              <Mail size={18} />
              <span>legal@seismicai.ca</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;