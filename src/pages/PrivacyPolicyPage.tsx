import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Shield,
  Database,
  Lock,
  Eye,
  Users,
  Globe,
  Clock,
  Scale,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // Table of Contents sections
  const tocSections = [
    { id: "overview", title: "Overview", icon: <Eye className="w-4 h-4" /> },
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "data-sharing",
      title: "Data Sharing & Disclosure",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: <Scale className="w-4 h-4" />,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);

      // Update active section based on scroll position
      const sections = tocSections.map((section) => ({
        ...section,
        element: document.getElementById(section.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div
      className="min-h-screen bg-[#0B0B0C] text-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <Helmet>
        <title>Privacy Policy | Seismic AI</title>
        <meta
          name="description"
          content="Seismic AI's enterprise-grade Privacy Policy outlining our data collection, use, storage, and protection standards for AI-powered geophysical analysis."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, GDPR, seismic AI, geophysical data, privacy rights"
        />
        <link rel="canonical" href="https://seismicai.ca/privacy-policy" />

        {/* OpenGraph */}
        <meta property="og:title" content="Privacy Policy | Seismic AI" />
        <meta
          property="og:description"
          content="Seismic AI's enterprise-grade Privacy Policy outlining our data collection, use, storage, and protection standards."
        />
        <meta property="og:url" content="https://seismicai.ca/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seismic AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Seismic AI" />
        <meta
          name="twitter:description"
          content="Enterprise-grade privacy standards for AI-powered geophysical analysis."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Seismic AI Privacy Policy",
            url: "https://seismicai.ca/privacy-policy",
            dateModified: "2025-01-01",
            publisher: {
              "@type": "Organization",
              name: "Seismic AI",
              url: "https://seismicai.ca",
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title - Inline with content */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-space mb-4">
            Privacy <span className="text-[#00E5FF]">Policy</span>
          </h1>
          <p className="text-gray-400 font-inter text-lg">
            Last updated: January 1, 2025 • Effective: January 1, 2025
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
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 font-inter text-sm ${
                      activeSection === section.id
                        ? "bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]"
                        : "hover:bg-white/[0.02] text-gray-400 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
            {/* Overview Section */}
            <Section
              id="overview"
              title="Overview"
              isExpanded={expandedSections.has("overview")}
              onToggle={() => toggleSection("overview")}
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong>Seismic AI</strong> ("we," "our," or "us") is committed
                to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our artificial intelligence-powered geophysical analysis
                platform and services.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                This policy applies to all users of our services, including our
                website, software applications, APIs, and any related services
                (collectively, the "Services"). By using our Services, you
                consent to the data practices described in this policy.
              </p>
              <div className="bg-gradient-to-r from-[#00E5FF]/10 to-blue-500/10 border border-[#00E5FF]/20 rounded-xl p-6">
                <h4 className="text-[#00E5FF] font-semibold mb-3 font-space">
                  Key Principles
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Transparency:</strong> We clearly explain what
                      data we collect and how we use it
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Control:</strong> You have rights over your
                      personal data and can exercise them at any time
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Security:</strong> We implement enterprise-grade
                      security measures to protect your information
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Minimization:</strong> We only collect data
                      necessary for providing and improving our services
                    </span>
                  </li>
                </ul>
              </div>
            </Section>

            {/* Information Collection Section */}
            <Section
              id="information-collection"
              title="Information We Collect"
              isExpanded={expandedSections.has("information-collection")}
              onToggle={() => toggleSection("information-collection")}
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 font-space">
                    1.1 Personal Information
                  </h4>
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Contact Information:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Name, email address, phone number, company name, job
                            title, and business address when you create an
                            account or contact us
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Account Credentials:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Username, encrypted passwords, and authentication
                            tokens for secure access
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Payment Information:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Billing address and payment method details
                            (processed securely by third-party payment
                            processors)
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 font-space">
                    1.2 Technical and Usage Data
                  </h4>
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Device Information:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            IP address, browser type and version, operating
                            system, device identifiers, and hardware
                            specifications
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Usage Analytics:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Pages visited, features used, time spent, click
                            patterns, and interaction data to improve our
                            services
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Performance Data:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Application performance metrics, error logs, and
                            diagnostic information for service optimization
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 font-space">
                    1.3 Seismic and Geophysical Data
                  </h4>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Database className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold mb-2">
                          Sensitive Data Handling
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We understand that seismic data often contains
                          proprietary and commercially sensitive information.
                          All geophysical data uploaded to our platform is
                          treated with the highest level of security and
                          confidentiality.
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Raw Seismic Data:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            Time-series seismic recordings, velocity models, and
                            subsurface imaging data
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">
                            Processed Results:
                          </strong>
                          <span className="text-gray-300 ml-2">
                            AI-generated interpretations, geological models, and
                            analysis outputs
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">Metadata:</strong>
                          <span className="text-gray-300 ml-2">
                            Geographic coordinates, acquisition parameters, and
                            processing settings (anonymized when possible)
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>

            {/* Data Usage Section */}
            <Section
              id="data-usage"
              title="How We Use Your Data"
              isExpanded={expandedSections.has("data-usage")}
              onToggle={() => toggleSection("data-usage")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We use the collected information for legitimate business
                  purposes, including:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Service Provision</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Process and analyze your seismic data using our AI
                        models
                      </li>
                      <li>• Provide technical support and customer service</li>
                      <li>• Manage your account and authenticate access</li>
                      <li>• Process payments and manage billing</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Platform Improvement</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Enhance our AI algorithms and models (using anonymized
                        data)
                      </li>
                      <li>• Develop new features and capabilities</li>
                      <li>• Conduct research and development activities</li>
                      <li>• Optimize platform performance and reliability</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Lock className="w-5 h-5" />
                      <span>Security & Compliance</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Monitor for security threats and unauthorized access
                      </li>
                      <li>
                        • Comply with legal obligations and industry regulations
                      </li>
                      <li>• Investigate and prevent fraud or abuse</li>
                      <li>• Maintain audit trails and compliance records</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Communication</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Send service updates and important notices</li>
                      <li>• Respond to your inquiries and support requests</li>
                      <li>
                        • Provide product updates and feature announcements
                      </li>
                      <li>
                        • Send marketing communications (with your consent)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>

            {/* Data Sharing Section */}
            <Section
              id="data-sharing"
              title="Data Sharing & Disclosure"
              isExpanded={expandedSections.has("data-sharing")}
              onToggle={() => toggleSection("data-sharing")}
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-red-400 font-semibold mb-3 font-space">
                    Important: We Never Sell Your Data
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Seismic AI does not sell, rent, or trade your personal
                    information or seismic data to third parties for commercial
                    purposes. Your data sharing preferences are always under
                    your control.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4 font-space">
                  Limited Data Sharing Scenarios
                </h4>
                <div className="space-y-4">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h5 className="text-[#00E5FF] font-medium mb-3">
                      Service Providers & Partners
                    </h5>
                    <p className="text-gray-300 text-sm mb-3">
                      We may share limited data with trusted third-party service
                      providers who assist in delivering our services:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Cloud infrastructure providers (AWS, Google Cloud) for
                        secure data processing
                      </li>
                      <li>
                        • Payment processors for billing and subscription
                        management
                      </li>
                      <li>
                        • Analytics services for platform optimization
                        (anonymized data only)
                      </li>
                      <li>
                        • Security services for threat detection and prevention
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h5 className="text-[#00E5FF] font-medium mb-3">
                      Legal Requirements
                    </h5>
                    <p className="text-gray-300 text-sm">
                      We may disclose information when required by law,
                      regulation, legal process, or governmental request, or
                      when we believe disclosure is necessary to protect our
                      rights, your safety, or the safety of others.
                    </p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h5 className="text-[#00E5FF] font-medium mb-3">
                      Business Transfers
                    </h5>
                    <p className="text-gray-300 text-sm">
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred to the acquiring
                      entity, subject to the same privacy protections outlined
                      in this policy.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Data Security Section */}
            <Section
              id="data-security"
              title="Data Security"
              isExpanded={expandedSections.has("data-security")}
              onToggle={() => toggleSection("data-security")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Seismic AI maintains a defense-in-depth security model to
                  protect your sensitive geophysical data and personal
                  information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Lock className="w-5 h-5" />
                      <span>Encryption & Transport</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• TLS 1.3 encryption for all data in transit</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>
                        • End-to-end encryption for sensitive communications
                      </li>
                      <li>• Encrypted backup and disaster recovery systems</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Access Controls</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Multi-factor authentication (MFA) for all accounts
                      </li>
                      <li>• Role-based access control (RBAC) systems</li>
                      <li>• Regular access reviews and privilege audits</li>
                      <li>• Zero-trust network architecture</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Monitoring & Detection</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• 24/7 security monitoring and incident response</li>
                      <li>• Automated threat detection and alerting</li>
                      <li>
                        • Regular penetration testing and vulnerability
                        assessments
                      </li>
                      <li>• Comprehensive audit logging and monitoring</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Database className="w-5 h-5" />
                      <span>Infrastructure Security</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Secure, isolated processing environments</li>
                      <li>• Regular security patches and system updates</li>
                      <li>• Physical security controls at data centers</li>
                      <li>
                        • Redundant systems and disaster recovery planning
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00E5FF]/10 to-blue-500/10 border border-[#00E5FF]/20 rounded-xl p-6">
                  <h4 className="text-[#00E5FF] font-semibold mb-3 font-space">
                    Compliance Certifications
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Our security practices are aligned with industry standards
                    and regulatory requirements:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/[0.02] rounded-lg p-4">
                      <span className="text-[#00E5FF] font-medium text-sm">
                        SOC 2 Type II
                      </span>
                    </div>
                    <div className="bg-white/[0.02] rounded-lg p-4">
                      <span className="text-[#00E5FF] font-medium text-sm">
                        ISO 27001
                      </span>
                    </div>
                    <div className="bg-white/[0.02] rounded-lg p-4">
                      <span className="text-[#00E5FF] font-medium text-sm">
                        GDPR Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Data Retention Section */}
            <Section
              id="data-retention"
              title="Data Retention"
              isExpanded={expandedSections.has("data-retention")}
              onToggle={() => toggleSection("data-retention")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We retain your information only as long as necessary to
                  provide our services, comply with legal obligations, resolve
                  disputes, and enforce our agreements. Retention periods vary
                  based on data type and purpose:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[#00E5FF] font-semibold font-space">
                        Seismic Data Files
                      </h4>
                      <span className="text-orange-400 text-sm font-medium bg-orange-400/10 px-3 py-1 rounded-full">
                        90 Days Default
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Raw seismic data and processed results are automatically
                      deleted 90 days after upload unless you request extended
                      retention. You can download your data at any time before
                      deletion.
                    </p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>
                        • Extended retention available upon request (up to 7
                        years)
                      </li>
                      <li>
                        • Immediate deletion available through your account
                        settings
                      </li>
                      <li>• Secure deletion using NIST 800-88 standards</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[#00E5FF] font-semibold font-space">
                        Account Information
                      </h4>
                      <span className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full">
                        Until Deletion Request
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Personal account information is retained until you request
                      account deletion or opt-out of our services.
                    </p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>
                        • Account deletion processed within 30 days of request
                      </li>
                      <li>
                        • Some information may be retained for legal compliance
                        (up to 7 years)
                      </li>
                      <li>
                        • Anonymized analytics data may be retained indefinitely
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[#00E5FF] font-semibold font-space">
                        Usage & Analytics Data
                      </h4>
                      <span className="text-blue-400 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                        24 Months
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Technical logs, usage patterns, and performance data are
                      retained for up to 24 months for service improvement.
                    </p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>
                        • Aggregated and anonymized data may be retained longer
                      </li>
                      <li>• Security logs retained for 12 months minimum</li>
                      <li>
                        • Crash reports and error logs retained for 18 months
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>

            {/* User Rights Section */}
            <Section
              id="user-rights"
              title="Your Rights"
              isExpanded={expandedSections.has("user-rights")}
              onToggle={() => toggleSection("user-rights")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  You have significant rights regarding your personal data.
                  These rights may vary based on your location and applicable
                  privacy laws (GDPR, CCPA, etc.):
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Access & Portability</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Request a copy of all personal data we hold about you
                      </li>
                      <li>• Export your data in a machine-readable format</li>
                      <li>
                        • Access your data processing history and audit logs
                      </li>
                      <li>
                        • View all third parties who have accessed your data
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Lock className="w-5 h-5" />
                      <span>Correction & Updates</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Correct inaccurate or incomplete personal information
                      </li>
                      <li>• Update your account details and preferences</li>
                      <li>• Modify data sharing and communication settings</li>
                      <li>• Request verification of data accuracy</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Deletion & Erasure</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Request complete deletion of your account and data
                      </li>
                      <li>• Delete specific data files or categories</li>
                      <li>• Exercise "right to be forgotten" under GDPR</li>
                      <li>• Secure deletion with confirmation provided</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Control & Consent</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>
                        • Withdraw consent for data processing at any time
                      </li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• Object to automated decision-making</li>
                      <li>• Restrict processing for specific purposes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00E5FF]/10 to-green-500/10 border border-[#00E5FF]/20 rounded-xl p-6">
                  <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                    How to Exercise Your Rights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-medium mb-2">
                        Self-Service Options
                      </h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Account Settings Dashboard</li>
                        <li>• Data Export Tools</li>
                        <li>• Privacy Controls Panel</li>
                        <li>• Communication Preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-2">
                        Contact Our Privacy Team
                      </h5>
                      <div className="space-y-2">
                        <a
                          href="mailto:privacy@seismicai.ca"
                          className="text-[#00E5FF] hover:text-white transition-colors text-sm block"
                        >
                          privacy@seismicai.ca
                        </a>
                        <p className="text-gray-400 text-sm">
                          Response time: 30 days maximum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Cookies & Tracking Section */}
            <Section
              id="cookies"
              title="Cookies & Tracking Technologies"
              isExpanded={expandedSections.has("cookies")}
              onToggle={() => toggleSection("cookies")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance
                  your experience, analyze usage patterns, and improve our
                  services. You have control over these technologies:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                      Essential Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Required for basic website functionality and security.
                      These cannot be disabled without affecting core features:
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Authentication and session management</li>
                      <li>• Security tokens and CSRF protection</li>
                      <li>• Load balancing and performance optimization</li>
                      <li>• User interface preferences and settings</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                      Analytics Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Help us understand how users interact with our platform
                      (anonymized data):
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Page views and navigation patterns</li>
                      <li>• Feature usage and adoption metrics</li>
                      <li>• Performance monitoring and error tracking</li>
                      <li>• A/B testing and optimization experiments</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                      Functional Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Enhance your user experience with personalized features:
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Language and region preferences</li>
                      <li>• Dashboard layout and customizations</li>
                      <li>• Recently accessed files and projects</li>
                      <li>• Notification preferences and settings</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <h4 className="text-yellow-400 font-semibold mb-3 font-space">
                    Cookie Management
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    You can control cookie settings through your browser
                    preferences or our privacy controls panel. Note that
                    disabling certain cookies may limit platform functionality.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-[#00E5FF]/10 text-[#00E5FF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00E5FF]/20 transition-colors">
                      Manage Cookie Preferences
                    </button>
                    <button className="bg-white/[0.05] text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/[0.10] transition-colors">
                      View Cookie Policy
                    </button>
                  </div>
                </div>
              </div>
            </Section>

            {/* Contact Section */}
            <Section
              id="contact"
              title="Contact Information"
              isExpanded={expandedSections.has("contact")}
              onToggle={() => toggleSection("contact")}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  using the information below:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                      Privacy Team
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#00E5FF]" />
                        <a
                          href="mailto:privacy@seismicai.ca"
                          className="text-gray-300 hover:text-[#00E5FF] transition-colors"
                        >
                          privacy@seismicai.ca
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#00E5FF]" />
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                      Mailing Address
                    </h4>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      <p>Seismic AI Inc.</p>
                      <p>Attn: Privacy Team</p>
                      <p>123 Innovation Drive</p>
                      <p>Calgary, AB T2P 2Y5</p>
                      <p>Canada</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00E5FF]/10 to-blue-500/10 border border-[#00E5FF]/20 rounded-xl p-6">
                  <h4 className="text-[#00E5FF] font-semibold mb-3 font-space">
                    Response Times
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        24 hours
                      </div>
                      <div className="text-gray-300 text-sm">
                        General inquiries
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        72 hours
                      </div>
                      <div className="text-gray-300 text-sm">Data requests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        30 days
                      </div>
                      <div className="text-gray-300 text-sm">
                        Complex investigations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2025 Seismic AI — All rights reserved. |
            <Link
              to="/terms-of-use"
              className="text-[#00E5FF] hover:text-white transition-colors ml-2"
            >
              Terms of Use
            </Link>
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#00E5FF] text-black p-3 rounded-full shadow-lg hover:bg-white transition-colors z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// Section Component with Mobile Accordion
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  isExpanded,
  onToggle,
}) => {
  return (
    <motion.section
      id={id}
      className="mb-12 scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Mobile Accordion Header */}
      <div className="lg:hidden">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 mb-4"
        >
          <h2 className="text-xl font-bold text-white font-space">{title}</h2>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-[#00E5FF]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#00E5FF]" />
          )}
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <h2 className="text-3xl font-bold text-white mb-8 font-space">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </motion.section>
  );
};

export default PrivacyPolicyPage;
