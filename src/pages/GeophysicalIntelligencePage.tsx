import React, { useEffect } from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Map as MapIcon, 
  CheckCircle2, 
  Layers,
  Zap,
  Activity,
  Target
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_geophysical_intelligence.png";
import featureImg from "../assets/feature_geophysical_intelligence.png";

const GeophysicalIntelligencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="geophysicalIntelligence" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen translate-y-[30%]"></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Advanced Subsurface Exploration</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Geophysical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced geophysical intelligence solutions designed to help energy companies improve subsurface visibility, accelerate geological interpretation, and optimize exploration decision-making. By combining seismic analytics, LiDAR mapping, and AI-powered geospatial intelligence, our platform delivers real-time operational insights for modern energy exploration environments.
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
              alt="Geophysical Intelligence" 
              className="w-full h-auto rounded-2xl border border-white/[0.08] shadow-[0_0_50px_rgba(0,229,255,0.1)] object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="max-w-4xl mx-auto text-left"
        >
          <h2 className="text-3xl font-space font-bold mb-6">Built for Modern Geophysical and Exploration Operations</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional geophysical workflows often rely on fragmented datasets, manual interpretation, and delayed processing cycles that reduce operational efficiency and increase exploration uncertainty. Seismic AI modernizes geophysical analysis through intelligent data integration, predictive analytics, and automated interpretation systems built for complex exploration operations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern exploration programs generate massive volumes of seismic, spatial, and operational data that require accurate interpretation and scalable processing infrastructure. Seismic AI integrates geospatial analytics, subsurface modeling, and predictive geophysical intelligence into a connected exploration ecosystem designed for real-time operational analysis. Our platform supports seismic interpretation, terrain intelligence, geological mapping, and exploration planning through automated analytics and cloud-based visualization workflows. This enables exploration teams to improve decision-making accuracy while reducing interpretation delays and operational inefficiencies.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Scalable analytics infrastructure engineered for rapid and precise interpretation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, text: "Faster geophysical data interpretation" },
              { icon: Activity, text: "Improved subsurface visibility and analysis" },
              { icon: Target, text: "Real-time exploration intelligence" },
              { icon: CheckCircle2, text: "Reduced manual interpretation dependency" },
              { icon: MapIcon, text: "Integrated seismic and geospatial analytics" },
              { icon: Layers, text: "Scalable cloud-based operational workflows" },
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/50 to-blue-500/50 rounded-2xl blur opacity-30"></div>
              <img 
                src={featureImg} 
                alt="AI-Powered Geophysical Analysis" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">AI-Powered Geophysical Analysis and Interpretation</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Geophysical intelligence combines seismic interpretation, terrain analysis, and geospatial modeling to improve understanding of subsurface conditions and exploration environments. Seismic AI uses machine learning algorithms and predictive analytics to process geophysical datasets with greater speed, consistency, and operational accuracy.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform identifies geological structures, subsurface anomalies, terrain variations, and exploration patterns that support drilling strategy development and resource planning. Real-time analytics and automated interpretation workflows improve operational visibility across seismic surveying and exploration projects.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "AI-powered seismic interpretation",
                "Geospatial intelligence and modeling",
                "Predictive geophysical analytics",
                "Subsurface anomaly detection",
                "Digital geological mapping",
                "Real-time operational visualization",
                "Integrated exploration data workflows"
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

      {/* Traditional vs Digital Geophysical Intelligence */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional Workflows vs Digital Geophysical Intelligence</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional geophysical analysis often involves disconnected systems, manual interpretation processes, and delayed reporting workflows that reduce operational agility and increase project uncertainty. These workflows can slow exploration timelines and limit real-time operational visibility. Digital geophysical intelligence improves exploration performance through automated interpretation, integrated analytics, and real-time geospatial processing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Geophysical Workflows</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual seismic interpretation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Fragmented operational datasets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower processing cycles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Limited predictive capabilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Delayed operational reporting</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Intelligent */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Digital Geophysical Intelligence</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">AI-assisted interpretation workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated geospatial intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time analytics and visualization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Predictive exploration insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Cloud-based operational intelligence</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">Geophysical Intelligence Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured geophysical intelligence workflow designed to improve subsurface interpretation, exploration visibility, and operational decision-making.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Seismic & Geospatial Acquisition", desc: "Exploration datasets are collected through seismic surveying, LiDAR mapping, and remote sensing systems." },
            { num: "2", title: "Data Integration & Processing", desc: "Captured datasets are consolidated into a connected geophysical intelligence environment for spatial analysis." },
            { num: "3", title: "AI-Powered Interpretation", desc: "Machine learning models analyze seismic signals and geospatial patterns to identify subsurface features." },
            { num: "4", title: "Real-Time Visualization", desc: "Processed outputs are delivered through cloud-based dashboards, geological mapping systems, and digital platforms." },
            { num: "5", title: "Exploration Planning Support", desc: "Geophysical intelligence outputs support drilling strategies, exploration planning, and environmental analysis." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Sustainable and Data-Driven Exploration Intelligence</h2>
            <p className="text-gray-400 mb-6">
              Environmental performance and operational efficiency are becoming increasingly important across modern exploration operations. Seismic AI supports sustainable exploration workflows through predictive analytics, digital monitoring systems, and low-impact geospatial intelligence technologies. Traditional exploration analysis methods can increase operational inefficiencies, delay environmental reporting, and reduce real-time visibility across exploration projects. Our digital geophysical intelligence platform improves operational transparency while supporting ESG alignment and sustainable exploration practices.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced operational inefficiencies and delays",
                "Improved environmental and terrain visibility",
                "Lower dependency on resource-intensive field operations",
                "Enhanced ESG and compliance monitoring",
                "Safer exploration analysis across remote environments",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Energy and Exploration Operations</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports a wide range of geophysical intelligence applications across energy, infrastructure, and resource development projects. Our platform is designed for organizations requiring scalable exploration intelligence systems with real-time geospatial visibility and predictive operational analytics.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration",
                "Geological interpretation workflows",
                "Subsurface imaging and analysis",
                "Terrain and geospatial intelligence",
                "Exploration site planning",
                "Remote sensing operations",
                "Environmental and operational monitoring"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Exploration with Geophysical Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and fragmented interpretation workflows with intelligent analytics, predictive modeling, and real-time geospatial intelligence. By combining seismic interpretation, machine learning analytics, and digital terrain intelligence, Seismic AI helps operators modernize exploration workflows for the future of intelligent energy development.
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

export default GeophysicalIntelligencePage;
