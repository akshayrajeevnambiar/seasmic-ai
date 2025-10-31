import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Shield,
  CreditCard,
  Lock,
  AlertTriangle,
  Scale,
  Clock,
  Globe,
  UserCheck,
  Eye,
  Gavel,
  Mail,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const TermsOfUsePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // Table of Contents sections
  const tocSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      id: "services",
      title: "Description of Services",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "account",
      title: "Account Registration & Security",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "conduct",
      title: "User Conduct & Acceptable Use",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      id: "license",
      title: "License & Permitted Use",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: "payment",
      title: "Fees, Billing & Payment",
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      id: "data-ownership",
      title: "Data Ownership & Confidentiality",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      id: "availability",
      title: "Service Availability & Modifications",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "warranties",
      title: "Warranties & Disclaimers",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Scale className="w-4 h-4" />,
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "termination",
      title: "Term & Termination",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "export-control",
      title: "Export Control & Compliance",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "governing-law",
      title: "Governing Law & Dispute Resolution",
      icon: <Gavel className="w-4 h-4" />,
    },
    {
      id: "changes",
      title: "Changes to the Terms",
      icon: <FileText className="w-4 h-4" />,
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
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);

      // Find active section
      const sections = tocSections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
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
        <title>Terms of Use | Seismic AI</title>
        <meta
          name="description"
          content="Legal terms governing the use of Seismic AI's data analytics, drone integrations, and SaaS platform for geophysical analysis."
        />
        <meta
          name="keywords"
          content="terms of use, legal agreement, seismic AI, SaaS platform, geophysical analysis, terms of service"
        />
        <link rel="canonical" href="https://seismicai.ca/terms-of-use" />

        {/* OpenGraph */}
        <meta property="og:title" content="Terms of Use | Seismic AI" />
        <meta
          property="og:description"
          content="Legal terms governing the use of Seismic AI's data analytics, drone integrations, and SaaS platform."
        />
        <meta property="og:url" content="https://seismicai.ca/terms-of-use" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seismic AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Use | Seismic AI" />
        <meta
          name="twitter:description"
          content="Legal terms for Seismic AI's enterprise geophysical analysis platform."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "Seismic AI Terms of Use",
            url: "https://seismicai.ca/terms-of-use",
            dateModified: "2025-10-30",
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
            Terms of <span className="text-[#00E5FF]">Use</span>
          </h1>
          <p className="text-gray-400 font-inter text-lg">
            Last updated: October 30, 2025
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
              {/* Introduction */}
              <div className="mb-12 p-6 bg-gradient-to-r from-[#00E5FF]/5 to-transparent border border-[#00E5FF]/20 rounded-lg">
                <p className="text-gray-300 font-inter text-lg leading-relaxed mb-4">
                  Welcome to <strong className="text-[#00E5FF]">Seismic AI</strong>, a data analytics and LiDAR intelligence platform operated by{" "}
                  <strong className="text-white">Turbo AI Technologies Inc.</strong>, in partnership with{" "}
                  <strong className="text-white">IntBrains Technologies Pvt Ltd</strong> ("we," "us," "our").
                </p>
                <p className="text-gray-300 font-inter text-lg leading-relaxed mb-4">
                  These Terms of Use ("Terms") govern your access to and use of all Seismic AI websites, applications, dashboards, APIs, products, and related services (collectively, the "Services").
                </p>
                <p className="text-gray-400 font-inter">
                  By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not use Seismic AI.
                </p>
              </div>

              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <UserCheck className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    By accessing Seismic AI or using any feature of the
                    Services, you confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                    <li>
                      You are of legal age and capacity to form a binding
                      contract.
                    </li>
                    <li>
                      You have authority to act on behalf of your organization
                      (if applicable).
                    </li>
                    <li>
                      You agree to comply with these Terms and any applicable
                      laws and regulations.
                    </li>
                  </ul>
                  <p className="text-gray-300 font-inter mt-4">
                    Seismic AI reserves the right to update or modify these
                    Terms at any time. Continued use of the Services after
                    changes constitutes acceptance of the revised Terms.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 2: Description of Services */}
              <section id="services" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    2. Description of Services
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Seismic AI provides AI-powered analytics and LiDAR data
                    processing tools to assist the oil and gas, mining, and
                    environmental sectors. Our Services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4 mb-4">
                    <li>
                      A SaaS dashboard and API for LiDAR and seismic data
                      analysis.
                    </li>
                    <li>Data visualization and reporting.</li>
                    <li>
                      Integration with partner drone systems and remote sensing
                      technologies.
                    </li>
                  </ul>
                  <p className="text-gray-300 font-inter">
                    We continuously evolve and may modify, suspend, or
                    discontinue certain features or modules without prior
                    notice.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 3: User Responsibilities */}
              <section id="responsibilities" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Users className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    3. User Responsibilities
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">
                      You agree to:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>
                        Provide accurate registration and billing information.
                      </li>
                      <li>
                        Maintain confidentiality of your account credentials.
                      </li>
                      <li>
                        Use the Services only for lawful and authorized
                        purposes.
                      </li>
                      <li>
                        Respect intellectual property and data-security
                        obligations.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">
                      You must not:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>
                        Copy, modify, reverse engineer, or redistribute the
                        platform's source code.
                      </li>
                      <li>
                        Upload malware, unauthorized datasets, or harmful
                        content.
                      </li>
                      <li>
                        Interfere with servers, APIs, or network performance.
                      </li>
                      <li>
                        Misrepresent your affiliation or resell access to the
                        Services without authorization.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 4: Account Registration and Security */}
              <section id="account" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Shield className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    4. Account Registration and Security
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    To use Seismic AI's secure dashboards or APIs, you must
                    create an account. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4 mb-4">
                    <li>Keeping your credentials confidential.</li>
                    <li>
                      Notifying us immediately at{" "}
                      <a
                        href="mailto:support@seismicai.ca"
                        className="text-[#00E5FF] hover:underline"
                      >
                        support@seismicai.ca
                      </a>{" "}
                      if you suspect unauthorized access.
                    </li>
                  </ul>
                  <p className="text-gray-300 font-inter">
                    We reserve the right to suspend or terminate accounts that
                    breach these Terms.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 5: Intellectual Property Rights */}
              <section id="intellectual-property" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Lock className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    5. Intellectual Property Rights
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    All Seismic AI content—including software, algorithms,
                    visual designs, datasets, documentation, and
                    trademarks—remains the property of{" "}
                    <strong className="text-white">
                      Turbo AI Technologies Inc.
                    </strong>{" "}
                    and its licensors. Your use of the Services does not grant
                    ownership or IP rights beyond the limited license described
                    below.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 6: License and Permitted Use */}
              <section id="license" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Eye className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    6. License and Permitted Use
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Subject to compliance with these Terms, Seismic AI grants
                    you a{" "}
                    <strong className="text-[#00E5FF]">
                      non-exclusive, non-transferable, revocable license
                    </strong>{" "}
                    to access and use the Services solely for your
                    organization's internal business purposes.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">
                      You may not:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>Sub-license or resell any aspect of the Services.</li>
                      <li>
                        Use Seismic AI outputs to build competing products.
                      </li>
                      <li>Circumvent security or usage restrictions.</li>
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 7: Payment, Billing, and Renewals */}
              <section id="payment" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <CreditCard className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    7. Payment, Billing, and Renewals
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Paid subscriptions or project engagements are billed as per
                    the terms of individual agreements or invoices. You agree to
                    pay all applicable fees, taxes, and surcharges.
                  </p>
                  <p className="text-gray-300 font-inter mb-4">
                    Failure to pay may result in suspension or termination of
                    access.
                  </p>
                  <p className="text-gray-300 font-inter">
                    All charges are non-refundable except as required by law.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 8: Confidentiality and Data Ownership */}
              <section id="confidentiality" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Lock className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    8. Confidentiality and Data Ownership
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Each party shall maintain confidentiality of proprietary
                    information. Seismic AI may process operational or
                    geospatial data for analytics purposes only as defined in
                    the Privacy Policy.
                  </p>
                  <p className="text-gray-300 font-inter">
                    Clients retain ownership of their raw data; Seismic AI
                    retains ownership of derived or anonymized analytical
                    outputs, models, and aggregated insights used for system
                    improvement.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 9: Disclaimers */}
              <section id="disclaimers" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    9. Disclaimers
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    Seismic AI is provided{" "}
                    <strong className="text-[#00E5FF]">"as is"</strong> and{" "}
                    <strong className="text-[#00E5FF]">"as available"</strong>{" "}
                    without warranty of any kind, express or implied.
                  </p>
                  <p className="text-gray-300 font-inter mb-4">
                    We do not guarantee uninterrupted service, error-free
                    operation, or accuracy of AI-generated results.
                  </p>
                  <p className="text-gray-300 font-inter">
                    Users are responsible for verifying outcomes before making
                    business or safety decisions.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 10: Limitation of Liability */}
              <section id="liability" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Scale className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    10. Limitation of Liability
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    To the fullest extent permitted by law, Seismic AI, Turbo AI
                    Technologies, and affiliates shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4 mb-4">
                    <li>Indirect, incidental, or consequential damages.</li>
                    <li>Loss of profits, data, or business interruption.</li>
                    <li>
                      Errors or delays resulting from user misuse, external
                      systems, or third-party dependencies.
                    </li>
                  </ul>
                  <p className="text-gray-300 font-inter">
                    Our total liability shall not exceed the amount paid by you
                    to Seismic AI in the preceding twelve (12) months.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 11: Indemnification */}
              <section id="indemnification" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Shield className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    11. Indemnification
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter">
                    You agree to indemnify and hold harmless Seismic AI, its
                    directors, officers, employees, and partners from any claim,
                    damage, loss, or expense (including legal fees) arising from
                    your use of the Services, violation of these Terms, or
                    infringement of any rights of a third party.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 12: Termination */}
              <section id="termination" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Clock className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    12. Termination
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">
                      We may suspend or terminate access to your account without
                      notice if:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>You breach these Terms or misuse the Services.</li>
                      <li>Required by law or security necessity.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00E5FF] mb-3 font-space">
                      Upon termination:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-inter ml-4">
                      <li>All licenses granted herein shall cease.</li>
                      <li>
                        You must delete all downloaded data, reports, or
                        derivative materials.
                      </li>
                      <li>Outstanding payments remain due.</li>
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 13: Governing Law and Jurisdiction */}
              <section id="governing-law" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Gavel className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    13. Governing Law and Jurisdiction
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    These Terms are governed by and construed under the laws of{" "}
                    <strong className="text-[#00E5FF]">Alberta, Canada</strong>,
                    without regard to conflicts of law principles.
                  </p>
                  <p className="text-gray-300 font-inter">
                    Any disputes shall be subject to the exclusive jurisdiction
                    of the courts in Calgary, Alberta.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 14: Changes to the Terms */}
              <section id="changes" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    14. Changes to the Terms
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-4">
                    We may update these Terms periodically to reflect new
                    features, policies, or regulatory changes. Revisions will be
                    posted on this page with a new "Last Updated" date.
                  </p>
                  <p className="text-gray-300 font-inter">
                    Your continued use constitutes acceptance of the updated
                    Terms.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent mt-8"></div>
              </section>

              {/* Section 15: Contact Us */}
              <section id="contact" className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-space">
                    15. Contact Us
                  </h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                  <p className="text-gray-300 font-inter mb-6">
                    For questions regarding these Terms or business inquiries:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                        <Globe className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold font-space">
                          Seismic AI (Turbo AI Technologies Inc.)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                        <Mail className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div>
                        <a
                          href="mailto:support@seismicai.ca"
                          className="text-[#00E5FF] hover:underline font-inter"
                        >
                          support@seismicai.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div>
                        <p className="text-gray-300 font-inter">
                          Calgary, Alberta, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-16 pt-8 border-t border-white/[0.08]">
                <div className="text-center space-y-4">
                  <p className="text-gray-400 font-inter">
                    © 2025 Seismic AI — All rights reserved.
                  </p>
                  <p className="text-gray-500 font-inter text-sm">
                    Designed & built by Akshay Rajeev Nambiar
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Table of Contents - Accordion */}
        <div className="lg:hidden mt-12">
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg overflow-hidden">
            <motion.button
              onClick={() => toggleSection("mobile-toc")}
              className="w-full flex items-center justify-between p-4 bg-[#00E5FF]/5 hover:bg-[#00E5FF]/10 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#00E5FF]" />
                <span className="text-white font-semibold font-space">
                  Table of Contents
                </span>
              </div>
              {expandedSections.has("mobile-toc") ? (
                <ChevronUp className="w-5 h-5 text-[#00E5FF]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00E5FF]" />
              )}
            </motion.button>
            <AnimatePresence>
              {expandedSections.has("mobile-toc") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-2 bg-black/20">
                    {tocSections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onClick={() => {
                          scrollToSection(section.id);
                          setExpandedSections(new Set());
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 font-inter text-sm ${
                          activeSection === section.id
                            ? "bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]"
                            : "hover:bg-white/[0.02] text-gray-400 hover:text-white"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {section.icon}
                        <span>{section.title}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
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
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
