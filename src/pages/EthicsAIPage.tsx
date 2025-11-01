import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowUp,
  Shield,
  Database,
  Scale,
  Eye,
  AlertTriangle,
  Lock,
  Leaf,
  CheckCircle,
  Users,
  Settings,
  FileText,
  Map,
  Mail,
  ExternalLink,
} from "lucide-react";

interface EthicsAIPageProps {
  brandName?: string;
  contactEmail?: string;
  companyName?: string;
}

const EthicsAIPage: React.FC<EthicsAIPageProps> = ({
  brandName = "Seismic AI",
  contactEmail = "support@seismicai.ca", 
  companyName = "Seismic AI Technologies Inc., Toronto, Ontario, Canada"
}) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Navigation sections
  const sections = [
    { id: "principles", title: "Ethics Principles", icon: <Shield className="w-4 h-4" /> },
    { id: "data-governance", title: "Data Governance", icon: <Database className="w-4 h-4" /> },
    { id: "fairness-bias", title: "Fairness & Bias", icon: <Scale className="w-4 h-4" /> },
    { id: "explainability", title: "Explainability", icon: <Eye className="w-4 h-4" /> },
    { id: "safety", title: "Safety & Abuse Prevention", icon: <AlertTriangle className="w-4 h-4" /> },
    { id: "security", title: "Security Controls", icon: <Lock className="w-4 h-4" /> },
    { id: "environment", title: "Environmental Impact", icon: <Leaf className="w-4 h-4" /> },
    { id: "evaluations", title: "Evaluation Frameworks", icon: <CheckCircle className="w-4 h-4" /> },
    { id: "customer-controls", title: "Customer Controls", icon: <Users className="w-4 h-4" /> },
    { id: "incidents", title: "Incident Response", icon: <AlertTriangle className="w-4 h-4" /> },
    { id: "compliance", title: "Compliance", icon: <FileText className="w-4 h-4" /> },
    { id: "artifacts", title: "Transparency Artifacts", icon: <ExternalLink className="w-4 h-4" /> },
    { id: "roadmap", title: "Roadmap", icon: <Map className="w-4 h-4" /> },
    { id: "contact", title: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  // Scroll tracking
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 500);

          // Find the active section with better threshold and debouncing
          const sectionElements = sections.map(section => 
            document.getElementById(section.id)
          ).filter(Boolean);

          let newActiveSection = activeSection;
          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const element = sectionElements[i];
            if (element && element.getBoundingClientRect().top <= 150) {
              newActiveSection = sections[i].id;
              break;
            }
          }
          
          // Only update if the section actually changed
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Section component
  const Section: React.FC<{
    id: string;
    title: string;
    children: React.ReactNode;
  }> = ({ id, title, children }) => (
    <section
      id={id}
      className="mb-16"
    >
      <div className="border-b border-[#00E5FF]/20 pb-6 mb-8">
        <h2 className="text-3xl font-bold text-white font-space mb-2">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] to-blue-500 rounded-full" />
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Ethics & AI Transparency | ${brandName}`,
    "description": `Comprehensive ethics and AI transparency documentation for ${brandName}, covering principles, governance, fairness, safety, and compliance.`,
    "url": `https://${brandName.toLowerCase().replace(' ', '')}.ca/ethics-ai-transparency`,
    "mainEntity": {
      "@type": "Organization",
      "name": companyName,
      "ethicsPolicy": `https://${brandName.toLowerCase().replace(' ', '')}.ca/ethics-ai-transparency`,
      "hasPolicy": [
        {
          "@type": "DigitalDocument",
          "name": "AI Ethics Policy",
          "description": "Comprehensive AI ethics and transparency policy"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Ethics & AI Transparency | {brandName}</title>
        <meta
          name="description"
          content={`Comprehensive ethics and AI transparency documentation for ${brandName}, covering principles, governance, fairness, safety, and compliance.`}
        />
        <meta name="keywords" content="AI ethics, transparency, governance, fairness, bias, safety, compliance, responsible AI" />
        <link rel="canonical" href={`https://${brandName.toLowerCase().replace(' ', '')}.ca/ethics-ai-transparency`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Ethics & AI Transparency | ${brandName}`} />
        <meta property="og:description" content={`Comprehensive ethics and AI transparency documentation for ${brandName}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://${brandName.toLowerCase().replace(' ', '')}.ca/ethics-ai-transparency`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Ethics & AI Transparency | ${brandName}`} />
        <meta name="twitter:description" content={`Comprehensive ethics and AI transparency documentation for ${brandName}`} />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0B0C] text-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-black to-[#0B0B0C] border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
                Ethics & AI{" "}
                <span className="bg-gradient-to-r from-[#00E5FF] to-blue-400 bg-clip-text text-transparent">
                  Transparency
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our commitment to responsible AI development, ethical principles, and transparent practices
                that prioritize human benefit, fairness, and accountability.
              </p>
              <div className="mt-8 text-sm text-gray-400">
                Last Updated: October 30, 2025
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:w-80 lg:flex-shrink-0"
            >
              <div className="lg:sticky lg:top-8">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#00E5FF] mb-4 font-space">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center space-x-3 ${
                          activeSection === section.id
                            ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20"
                            : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        {section.icon}
                        <span>{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 lg:pl-8">
              <div>
                {/* Section 1: Ethics Principles */}
                <Section id="principles" title="Our Ethics Principles">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    We build AI systems that are useful, safe, and fair by design. Our principles guide every decision
                    in the development, deployment, and maintenance of our AI technologies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Human Benefit First",
                        description: "Products must enhance human decision-making and public good; purely exploitative use is rejected."
                      },
                      {
                        title: "Accountability & Oversight", 
                        description: "Humans remain responsible for outcomes. Product teams retain decision logs and escalation paths."
                      },
                      {
                        title: "Privacy & Data Dignity",
                        description: "Respect for personal and operational data, with minimal collection and maximized protection."
                      },
                      {
                        title: "Fairness & Non-Discrimination",
                        description: "We test for disparate impact and mitigate harmful bias before release."
                      },
                      {
                        title: "Security by Default",
                        description: "Encryption, access control, and least-privilege design are non-negotiable."
                      },
                      {
                        title: "Transparency",
                        description: "Clear documentation of model scope, limitations, and safe-use guidance."
                      },
                      {
                        title: "Sustainability",
                        description: "We track and reduce environmental impact across training, inference, and infrastructure."
                      }
                    ].map((principle, index) => (
                      <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                        <h4 className="text-[#00E5FF] font-semibold mb-3 font-space">
                          {principle.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 2: Data Governance */}
                <Section id="data-governance" title="Data Governance & Provenance">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Source Vetting",
                        content: "We use licensed, customer-provided, or publicly permissive datasets. Training sources undergo legal and ethical review."
                      },
                      {
                        title: "Purpose Limitation", 
                        content: "Data is collected only for specific, disclosed purposes. Secondary use requires fresh assessment/consent."
                      },
                      {
                        title: "Retention & Deletion",
                        content: "Time-boxed retention tied to contractual or regulatory needs. Customer deletion requests honored consistent with law."
                      },
                      {
                        title: "Anonymization & Pseudonymization",
                        content: "We transform data before model training wherever feasible to reduce identifiability."
                      },
                      {
                        title: "Access Controls",
                        content: "Role-based access (RBAC), MFA, audit logs. Access is revoked upon role change."
                      },
                      {
                        title: "Provenance Tracking",
                        content: "Datasets and derived artifacts carry lineage metadata (who/when/why/transformations)."
                      },
                      {
                        title: "Customer Data Isolation",
                        content: "Customer data is logically isolated. No cross-tenant training without explicit, revocable consent."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-[#00E5FF]/30 pl-6">
                        <h4 className="text-white font-semibold mb-2 font-space">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 3: Fairness & Bias */}
                <Section id="fairness-bias" title="Fairness, Bias & Representativeness">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                      <h4 className="text-yellow-400 font-semibold mb-3 font-space">
                        Our Approach to Bias Mitigation
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We implement comprehensive bias detection and mitigation strategies throughout the AI development lifecycle,
                        from data collection to model deployment and ongoing monitoring.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Pre-deployment Audits",
                          description: "We evaluate datasets for coverage gaps and potential proxies for protected attributes."
                        },
                        {
                          title: "Bias Metrics",
                          description: "Calibrate across groups (false positive/negative rates, calibration curves, subgroup AUROC/MAE, uplift parity)."
                        },
                        {
                          title: "Mitigations",
                          description: "Re-sampling, adversarial debiasing, counterfactual data augmentation, threshold adjustments, and human review gates."
                        },
                        {
                          title: "Continuous Monitoring",
                          description: "Post-deployment drift and disparity checks trigger alerts and retraining tickets."
                        },
                        {
                          title: "Documented Limitations",
                          description: "Each model card lists known failure modes, sensitive contexts, and 'do-not-use' scenarios."
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                          <h4 className="text-[#00E5FF] font-semibold mb-3 font-space">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* Section 4: Explainability */}
                <Section id="explainability" title="Explainability & Model Transparency">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Model Cards",
                        description: "For each production model we document purpose, inputs, outputs, training data types, metrics, and caveats.",
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: "Explainable Interfaces",
                        description: "Where meaningful, we expose saliency/feature importance, decision traces, or exemplar retrievals.",
                        icon: <Eye className="w-5 h-5" />
                      },
                      {
                        title: "Human-Readable Rationale",
                        description: "User-facing summaries clarify what the model considered and its confidence where appropriate.",
                        icon: <Users className="w-5 h-5" />
                      },
                      {
                        title: "Reproducibility",
                        description: "Versioned datasets, code, and weights; deterministic seeds for eval runs; signed artifacts.",
                        icon: <CheckCircle className="w-5 h-5" />
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                        <div className="text-[#00E5FF] mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2 font-space">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 5: Safety */}
                <Section id="safety" title="Safety, Red-Team & Abuse Prevention">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
                    <h4 className="text-red-400 font-semibold mb-3 font-space">
                      Safety-First Design
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We implement multiple layers of safety controls to prevent misuse and ensure responsible deployment
                      of our AI systems in real-world applications.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      "Safety Policies: Disallow surveillance misuse, discrimination, and unlawful activities; enforced by policy filters.",
                      "Red-Team Exercises: Internal and external adversarial testing (prompt injection, data exfiltration, geospatial misuse).",
                      "Guardrails: Prompt/response filtering, rate limits, anomaly detection, geo-fencing (where applicable), and tiered access.",
                      "Human-in-the-Loop: Mandatory human review in high-risk operations; override and rollback mechanisms are standard."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 6: Security */}
                <Section id="security" title="Security & Infrastructure Controls">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Encryption",
                        description: "TLS 1.3 in transit; AES-256 at rest.",
                        icon: <Lock className="w-5 h-5" />
                      },
                      {
                        title: "Hardening",
                        description: "CIS benchmarks, container isolation, signed images, and secrets management with rotation.",
                        icon: <Shield className="w-5 h-5" />
                      },
                      {
                        title: "Monitoring",
                        description: "SIEM, IDS/IPS, WAF, DDoS protection, and continuous vulnerability scans.",
                        icon: <Eye className="w-5 h-5" />
                      },
                      {
                        title: "Zero-Trust Posture",
                        description: "Device posture checks, short-lived credentials, and just-in-time access.",
                        icon: <AlertTriangle className="w-5 h-5" />
                      },
                      {
                        title: "Third-Party Assessments",
                        description: "Annual pentests; SOC 2/ISO-aligned controls where applicable.",
                        icon: <CheckCircle className="w-5 h-5" />
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-[#00E5FF]">
                            {item.icon}
                          </div>
                          <h4 className="text-white font-semibold font-space">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 7: Environmental Impact */}
                <Section id="environment" title="Environmental Stewardship">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                    <h4 className="text-green-400 font-semibold mb-3 font-space flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      Carbon-Conscious AI Development
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We actively measure and minimize the environmental impact of our AI systems throughout their lifecycle,
                      from training to deployment and inference.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Carbon Accounting",
                        description: "Track training/inference energy and estimated CO₂e."
                      },
                      {
                        title: "Optimization",
                        description: "Mixed precision, quantization, efficient architectures, batch scheduling, and renewable-powered regions where possible."
                      },
                      {
                        title: "Lifecycle Management",
                        description: "Archive/retire models that do not justify their footprint; publish efficiency improvements in release notes."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-green-500/30 pl-6">
                        <h4 className="text-green-400 font-semibold mb-2 font-space">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 8: Evaluation Frameworks */}
                <Section id="evaluations" title="Evaluation Frameworks & Benchmarks">
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      We employ comprehensive evaluation frameworks to ensure our AI systems meet high standards 
                      for accuracy, fairness, robustness, and usability before deployment.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          category: "Task Metrics",
                          items: ["Accuracy", "AUROC/MAE/RMSE", "Latency", "Cost per inference", "Robustness under noise"]
                        },
                        {
                          category: "Domain Tests", 
                          items: ["Scenario-based validation", "Representative geospatial tasks", "Industrial use cases"]
                        },
                        {
                          category: "Stress & Robustness",
                          items: ["OOD data", "Occlusions", "Synthetic perturbations", "Adversarial prompts"]
                        },
                        {
                          category: "Human Factors",
                          items: ["Usability tests", "Escalation efficacy", "Time-to-decision savings"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                          <h4 className="text-[#00E5FF] font-semibold mb-4 font-space">
                            {category.category}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                      <h4 className="text-blue-400 font-semibold mb-3 font-space">
                        Release Gates
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Models must meet or exceed baseline metrics, bias thresholds, safety tests, and latency SLOs
                        before being approved for production deployment.
                      </p>
                    </div>
                  </div>
                </Section>

                {/* Section 9: Customer Controls */}
                <Section id="customer-controls" title="Customer Controls & Transparency Tools">
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      We provide customers with comprehensive tools and controls to manage their data, 
                      understand AI decisions, and maintain compliance with their organizational policies.
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          title: "Usage Policies",
                          description: "Per-tenant policy configuration (allowed actions, export controls, redaction defaults).",
                          icon: <Settings className="w-5 h-5" />
                        },
                        {
                          title: "Explainability Toggle",
                          description: "Customers can enable richer explanations and decision traces (where supported).",
                          icon: <Eye className="w-5 h-5" />
                        },
                        {
                          title: "Data Controls",
                          description: "APIs/UI for data export, retention windows, and deletion requests.",
                          icon: <Database className="w-5 h-5" />
                        },
                        {
                          title: "Audit Trails",
                          description: "Per-tenant logs for inputs, outputs (hashed/redacted where required), and admin actions.",
                          icon: <FileText className="w-5 h-5" />
                        },
                        {
                          title: "Opt-Out of Training",
                          description: "Clear, contract-level controls to exclude customer data from any cross-tenant training.",
                          icon: <Shield className="w-5 h-5" />
                        }
                      ].map((control, index) => (
                        <div key={index} className="flex items-start space-x-4 bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                          <div className="text-[#00E5FF] mt-1">
                            {control.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2 font-space">
                              {control.title}
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                              {control.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* Section 10: Incident Response */}
                <Section id="incidents" title="Incident Response & Reporting">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
                    <h4 className="text-orange-400 font-semibold mb-3 font-space">
                      24/7 Incident Response
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We maintain comprehensive incident response capabilities with defined escalation procedures
                      and transparent communication protocols.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Playbooks",
                        description: "Defined severities, roles, and escalation timelines; 24/7 on-call rotation."
                      },
                      {
                        title: "Notification",
                        description: "We notify affected customers and regulators within legally required timeframes."
                      },
                      {
                        title: "Post-Incident Reviews",
                        description: "Blameless RCAs, corrective actions, and customer summaries for material events."
                      },
                      {
                        title: "Bug Bounty",
                        description: "Responsible disclosure program; safe harbor for good-faith researchers."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-orange-500/30 pl-6">
                        <h4 className="text-orange-400 font-semibold mb-2 font-space">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 11: Compliance */}
                <Section id="compliance" title="Compliance & Regulatory Alignment">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Privacy",
                        description: "PIPEDA (Canada), GDPR (EU), and applicable US state laws.",
                        icon: <Shield className="w-5 h-5" />
                      },
                      {
                        title: "Security",
                        description: "ISO 27001/SOC 2-aligned controls; PCI DSS for payment processors.",
                        icon: <Lock className="w-5 h-5" />
                      },
                      {
                        title: "AI Governance",
                        description: "Monitoring evolving frameworks (EU AI Act, NIST AI RMF), updating controls accordingly.",
                        icon: <Scale className="w-5 h-5" />
                      },
                      {
                        title: "Data Residency",
                        description: "Regional hosting options and SCCs for cross-border transfers where required.",
                        icon: <Database className="w-5 h-5" />
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-[#00E5FF]">
                            {item.icon}
                          </div>
                          <h4 className="text-white font-semibold font-space">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 12: Transparency Artifacts */}
                <Section id="artifacts" title="Transparency Artifacts">
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      Public artifacts to help users evaluate our systems:
                    </p>

                    <div className="grid gap-4">
                      {[
                        "Model Cards & System Cards for major deployments",
                        "Safety Disclosures (guardrails, known limitations)",
                        "Release Notes (metrics, performance, energy improvements)",
                        "API Change Logs (backwards-compatibility windows)",
                        "Security Whitepapers (upon request under NDA, where sensitive)"
                      ].map((artifact, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
                          <ExternalLink className="w-5 h-5 text-[#00E5FF] flex-shrink-0" />
                          <span className="text-gray-300">{artifact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* Section 13: Roadmap */}
                <Section id="roadmap" title="Roadmap & Continuous Improvement">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Short Term (0–6 mo)",
                        items: [
                          "Expand model cards coverage",
                          "Add subgroup fairness dashboards", 
                          "Ship tenant-level explainability toggles"
                        ],
                        color: "green"
                      },
                      {
                        title: "Mid Term (6–12 mo)",
                        items: [
                          "Third-party audit of bias & robustness",
                          "Energy reporting in dashboards",
                          "Red-team exercises published in summary"
                        ],
                        color: "blue"
                      },
                      {
                        title: "Long Term (12+ mo)",
                        items: [
                          "Formal assurance reports (SOC 2/ISO milestone)",
                          "Automated bias mitigation pipelines",
                          "External advisory council"
                        ],
                        color: "purple"
                      }
                    ].map((phase, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className={`text-xl font-semibold font-space ${
                          phase.color === 'green' ? 'text-green-400' :
                          phase.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                        }`}>
                          {phase.title}
                        </h4>
                        <div className="grid gap-3">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className={`flex items-start space-x-3 bg-${phase.color}-500/10 border border-${phase.color}-500/20 rounded-lg p-4`}>
                              <div className={`w-2 h-2 bg-${phase.color}-400 rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Section 14: Contact */}
                <Section id="contact" title="Contact & Feedback">
                  <div className="bg-gradient-to-r from-[#00E5FF]/10 to-blue-500/10 border border-[#00E5FF]/20 rounded-xl p-8">
                    <div className="text-center space-y-6">
                      <h4 className="text-2xl font-semibold text-[#00E5FF] font-space">
                        Questions, concerns, or ethical use feedback?
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-3">
                          <Mail className="w-5 h-5 text-[#00E5FF]" />
                          <a 
                            href={`mailto:${contactEmail}`}
                            className="text-[#00E5FF] hover:text-blue-400 transition-colors font-medium"
                          >
                            {contactEmail}
                          </a>
                        </div>
                        
                        <p className="text-gray-300 text-sm">
                          {companyName}
                        </p>

                        {brandName === "Seismic AI" && (
                          <p className="text-gray-400 text-sm">
                            For Turbo AI deployments, contact support@turbo-ai.ca<br />
                            Brand-specific artifacts (model cards, disclosures) are available per customer contract.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-[#00E5FF] hover:bg-blue-400 text-black p-3 rounded-full shadow-lg transition-colors z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default EthicsAIPage;