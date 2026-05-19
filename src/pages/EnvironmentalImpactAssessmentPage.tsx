import React, { useEffect } from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe,
  Layers,
  Zap,
  ShieldCheck,
  Target,
  Leaf
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_environmental_impact.png";
import featureImg from "../assets/feature_environmental_impact.png";

const EnvironmentalImpactAssessmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="environmentalImpact" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen translate-y-[30%]"></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Responsible Energy Exploration</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Environmental <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-green-400">Impact Assessment</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced environmental impact assessment solutions designed to help energy companies evaluate operational impact, improve regulatory compliance, and support sustainable exploration practices. By combining LiDAR drone technology, remote sensing systems, and AI-powered geospatial analytics, our platform enables faster and more accurate environmental assessment workflows.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact"
                className="btn-primary flex items-center justify-center gap-2 group px-8 py-4 bg-[#00E5FF] text-black font-semibold rounded-md hover:bg-white transition-colors duration-300"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-2xl"></div>
            <img 
              src={heroImg} 
              alt="Environmental Impact Assessment" 
              className="w-full h-auto rounded-2xl border border-white/[0.08] shadow-[0_0_50px_rgba(0,229,255,0.1)] object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-space font-bold mb-6">Built for Sustainable Exploration and Regulatory Compliance</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional environmental assessment methods often involve manual surveys, fragmented datasets, and time-intensive field operations that increase project delays and operational complexity. Seismic AI modernizes environmental analysis through automated monitoring, digital terrain intelligence, and real-time geospatial reporting systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy projects require environmental assessment systems capable of monitoring terrain conditions, ecological impact, and operational risk across large and environmentally sensitive regions. Seismic AI integrates aerial LiDAR mapping, predictive analytics, and remote sensing technologies into a connected environmental intelligence platform. Our environmental assessment ecosystem supports terrain monitoring, land-use analysis, environmental reporting, and operational risk evaluation through automated geospatial workflows. This enables exploration teams to improve compliance readiness while reducing delays associated with traditional environmental assessment processes.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Scalable environmental intelligence engineered for responsible project execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, text: "Faster environmental assessment workflows" },
              { icon: Globe, text: "Improved terrain and ecological visibility" },
              { icon: ShieldCheck, text: "Reduced field survey dependency" },
              { icon: Target, text: "Real-time environmental monitoring and reporting" },
              { icon: Leaf, text: "Enhanced ESG and regulatory alignment" },
              { icon: Layers, text: "Scalable digital compliance workflows" },
            ].map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/[0.08] hover:border-[#00E5FF]/50 transition-colors group bg-black/40"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00E5FF]/20 transition-colors">
                  <adv.icon className="text-[#00E5FF] w-6 h-6" />
                </div>
                <p className="font-medium text-gray-200">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...animations.fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/50 to-green-500/50 rounded-2xl blur opacity-30"></div>
              <img 
                src={featureImg} 
                alt="AI-Powered Environmental Intelligence" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">AI-Powered Environmental Intelligence and Monitoring</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Environmental monitoring generates large volumes of terrain, vegetation, and geospatial datasets that require accurate interpretation and continuous operational analysis. Seismic AI uses machine learning models and predictive geospatial analytics to automate environmental monitoring and improve impact assessment accuracy.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform identifies land disturbances, terrain changes, environmental risks, and operational impact patterns to support sustainable exploration planning. Real-time analytics and geospatial visualization tools help organizations improve environmental visibility across exploration and infrastructure projects.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Environmental impact assessment analytics",
                "Real-time environmental monitoring",
                "AI-powered terrain and land analysis",
                "Vegetation and surface change detection",
                "Geospatial compliance reporting",
                "Remote sensing and environmental mapping",
                "Cloud-based environmental visualization"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Traditional vs Intelligent */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional Assessments vs Digital Intelligence</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional environmental assessment workflows often involve manual inspections, delayed reporting cycles, and disconnected monitoring systems that slow operational approvals and increase compliance risk. These processes may also create additional operational costs across large-scale exploration projects. Digital environmental intelligence improves assessment efficiency through automated monitoring, aerial surveying, and real-time geospatial analytics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Environmental Assessments</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual field inspections</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower reporting workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Fragmented environmental datasets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Limited terrain visibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher operational overhead</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Intelligent */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Digital Environmental Intelligence</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Drone-enabled monitoring systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time environmental analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated geospatial intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">High-resolution aerial mapping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Automated digital monitoring</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">Environmental Assessment Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured environmental intelligence workflow designed to improve ecological monitoring, compliance reporting, and operational sustainability across exploration projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Environmental Site Assessment", desc: "Terrain conditions, ecological sensitivities, and operational risk areas are evaluated through aerial survey planning." },
            { num: "2", title: "Remote Sensing Data Acquisition", desc: "Drone systems capture terrain, vegetation, and environmental datasets across operational regions." },
            { num: "3", title: "AI-Powered Environmental Analysis", desc: "Machine learning models process geospatial datasets to identify terrain changes and environmental impact patterns." },
            { num: "4", title: "Real-Time Monitoring & Visualization", desc: "Environmental intelligence is delivered through cloud-based dashboards, mapping systems, and digital reporting platforms." },
            { num: "5", title: "Compliance & Sustainability Reporting", desc: "Processed datasets support ESG reporting, regulatory documentation, operational monitoring, and environmental planning." },
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-white/[0.08] relative group"
            >
              <div className="text-4xl font-bold text-white/[0.05] absolute top-4 right-4 group-hover:text-[#00E5FF]/20 transition-colors">0{step.num}</div>
              <h3 className="text-xl font-bold mb-3 text-white relative z-10 mt-6">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability & Applications */}
      <section className="py-20 bg-white/[0.02] border-t border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Low-Impact Exploration and ESG Alignment</h2>
            <p className="text-gray-400 mb-6">
              Environmental performance and sustainability are becoming critical priorities across modern energy operations. Seismic AI supports low-impact exploration through aerial monitoring systems and intelligent environmental analytics that reduce operational footprint and improve compliance readiness. Traditional ground-based assessments can disrupt ecosystems, increase fuel consumption, and create logistical challenges across remote terrain conditions. Our drone-enabled environmental monitoring platform minimizes physical disturbance while improving environmental visibility and operational safety.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced ecosystem and land disturbance",
                "Lower emissions compared to traditional field assessments",
                "Improved ESG and sustainability monitoring",
                "Safer environmental analysis across remote regions",
                "Reduced dependency on large-scale field operations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Environmental and Energy Operations</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports a broad range of environmental intelligence and monitoring applications across energy, infrastructure, and resource development projects. Our platform is designed for organizations requiring scalable environmental analytics and real-time operational visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration compliance",
                "Environmental impact assessment",
                "Terrain and land-use analysis",
                "Ecological and vegetation monitoring",
                "Infrastructure and corridor assessment",
                "Remote sensing operations",
                "ESG reporting and sustainability monitoring"
              ].map((item, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] text-sm text-gray-300 hover:border-[#00E5FF]/50 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00E5FF]/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Environmental Assessment with Digital Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and fragmented environmental assessment workflows with intelligent monitoring, predictive analytics, and real-time geospatial intelligence. Our platform supports faster compliance reporting, improved environmental visibility, and more sustainable operational strategies.
          </p>
          <a 
            href="/#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#00E5FF] text-black font-bold text-lg rounded-md hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </main>
  );
};

export default EnvironmentalImpactAssessmentPage;
