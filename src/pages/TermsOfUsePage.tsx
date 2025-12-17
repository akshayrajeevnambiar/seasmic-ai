import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Gavel,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const TermsOfUsePage: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Table of Contents sections
  const tocSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "license",
      title: "Use License",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "partner-logos",
      title: "Partner Client Logos",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      id: "service-terms",
      title: "Service Terms",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "limitations",
      title: "Limitations",
      icon: <Scale className="w-4 h-4" />,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <Gavel className="w-4 h-4" />,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="min-h-screen bg-[#0B0B0C] text-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <Helmet>
        <title>Terms & Conditions | Seismic AI</title>
        <meta name="description" content="Terms and Conditions for Seismic AI's website and services." />
        <meta name="keywords" content="terms and conditions, seismic AI, terms of service" />
        <link rel="canonical" href="https://seismicai.ca/terms-of-use" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Terms & Conditions | Seismic AI" />
        <meta property="og:description" content="Legal terms governing the use of Seismic AI's website and services." />
        <meta property="og:url" content="https://seismicai.ca/terms-of-use" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seismic AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | Seismic AI" />
        <meta name="twitter:description" content="Legal terms for Seismic AI's website." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TermsOfService",
          "name": "Seismic AI Terms & Conditions",
          "url": "https://seismicai.ca/terms-of-use",
          "dateModified": "2025-12-17",
          "publisher": {
            "@type": "Organization",
            "name": "Seismic AI",
            "url": "https://seismicai.ca"
          }
        })}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-space mb-4">
            Terms & <span className="text-[#00E5FF]">Conditions</span>
          </h1>
          <p className="text-gray-400 font-inter text-lg">
            Last Updated: December 17, 2025
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold text-white mb-6 font-space">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tocSections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 font-inter text-sm hover:bg-white/[0.02] text-gray-400 hover:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of this website immediately.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 2: Use License */}
              <section id="license" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    2. Use License
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Permission is granted to temporarily access the materials on Seismic AI's website for personal, non-commercial, transitory viewing only. This is the grant of a license, not a transfer of title. Under this license, you may NOT:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4 mb-4">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose or any public display;</li>
                    <li>Attempt to reverse engineer any software contained on the website;</li>
                    <li>Remove any copyright or proprietary notices from the materials.</li>
                  </ul>
                  <p className="text-gray-300 font-inter">
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Seismic AI at any time.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 3: Partner Client Logos and Third-Party Trademarks */}
              <section id="partner-logos" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Shield className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    3. Partner Client Logos and Third-Party Trademarks
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">Authorized Use</h3>
                    <p className="text-gray-300 font-inter">
                      Seismic AI may display certain client names, trademarks, and logos ("Partner Client Logos") belonging to clients of our authorized technology partner. Such use is permitted only under a valid Non-Disclosure Agreement (NDA) or written authorization.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">Scope of Permission</h3>
                    <p className="text-gray-300 font-inter mb-3">
                      Partner Client Logos may be used in:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>Website pages;</li>
                      <li>Marketing brochures;</li>
                      <li>Presentations and capability materials;</li>
                      <li>Other factual representations of capabilities or collaboration.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">Ownership</h3>
                    <p className="text-gray-300 font-inter">
                      All Partner Client Logos remain the exclusive property of their respective owners.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">Compliance</h3>
                    <p className="text-gray-300 font-inter mb-3">
                      Seismic AI will use Partner Client Logos in compliance with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>The Trademarks Act (Canada);</li>
                      <li>Alberta and Canadian commercial and IP laws;</li>
                      <li>NDA confidentiality terms.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">Right to Withdraw</h3>
                    <p className="text-gray-300 font-inter">
                      A logo owner or technology partner may request removal at any time. Seismic AI will comply within a reasonable timeframe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">No Endorsement</h3>
                    <p className="text-gray-300 font-inter">
                      Displaying a logo does not imply endorsement or partnership.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 4: Disclaimer */}
              <section id="disclaimer" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    4. Disclaimer
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    The materials on Seismic AI's website are provided on an "as is" basis. Seismic AI makes no warranties, expressed or implied.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 5: Service Terms */}
              <section id="service-terms" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    5. Service Terms
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    All professional services are governed by separate written agreements. Nothing on this website constitutes a service commitment.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 6: Limitations */}
              <section id="limitations" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Scale className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    6. Limitations
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    Seismic AI shall not be liable for any damages arising out of the use or inability to use this website, even if advised of potential damages.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 7: Governing Law */}
              <section id="governing-law" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Gavel className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    7. Governing Law
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    These Terms and Conditions are governed by the laws of Alberta and the applicable federal laws of Canada.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 8: Contact Information */}
              <section id="contact" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    8. Contact Information
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    For questions, contact:{" "}
                    <a href="mailto:legal@seismicai.ca" className="text-[#00E5FF] hover:underline">
                      legal@seismicai.ca
                    </a>
                  </p>
                </div>
              </section>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black rounded-full shadow-lg transition-colors duration-300 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default TermsOfUsePage;
