import React, { useEffect } from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Map as MapIcon, 
  CheckCircle2, 
  Globe,
  Layers,
  Zap,
  ShieldCheck,
  Activity
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_energy_exploration.png";
import featureImg from "../assets/feature_energy_exploration.png";

const EnergyExplorationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="energyExploration" />
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
              <span className="text-sm font-medium text-gray-300">Intelligent Energy Exploration</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Resource Development</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced energy exploration solutions designed to help operators improve subsurface visibility, accelerate exploration workflows, and reduce operational uncertainty across complex energy environments. By combining seismic intelligence, LiDAR drone technology, and AI-powered geospatial analytics, our platform enables faster and more accurate exploration decision-making.
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
              alt="Intelligent Energy Exploration" 
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
          <h2 className="text-3xl font-space font-bold mb-6">Built for High-Efficiency Exploration Operations</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional exploration programs often involve fragmented datasets, extended survey timelines, and resource-intensive field operations that increase operational costs and project risk. Seismic AI modernizes exploration workflows through connected digital intelligence systems built for real-time analysis, terrain visibility, and predictive geophysical interpretation.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy exploration requires scalable technologies capable of processing seismic, terrain, and operational datasets across remote and environmentally sensitive regions. Seismic AI integrates aerial surveying, predictive analytics, and geospatial intelligence into a unified exploration platform designed for faster operational execution. Our exploration ecosystem supports seismic acquisition, terrain analysis, subsurface interpretation, and operational planning through intelligent automation and real-time visualization workflows. This enables exploration teams to reduce delays, improve exploration accuracy, and optimize resource planning across exploration projects.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Scalable technologies engineered to accelerate exploration project execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, text: "Faster exploration data acquisition and processing" },
              { icon: Activity, text: "Improved subsurface visibility and interpretation" },
              { icon: ShieldCheck, text: "Reduced operational and field deployment costs" },
              { icon: Globe, text: "Real-time geospatial intelligence and reporting" },
              { icon: MapIcon, text: "Enhanced terrain and environmental analysis" },
              { icon: Layers, text: "Scalable digital exploration workflows" },
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
                alt="AI-Powered Exploration Intelligence" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">AI-Powered Exploration Intelligence</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern exploration projects generate large volumes of seismic, terrain, and geospatial data that require rapid interpretation and operational analysis. Seismic AI uses machine learning models and predictive geophysical analytics to transform exploration datasets into actionable operational intelligence.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform identifies geological structures, terrain anomalies, and exploration patterns to support drilling strategy development and exploration planning. Automated interpretation workflows reduce manual processing delays while improving operational visibility across exploration environments.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "AI-powered seismic interpretation",
                "Predictive exploration analytics",
                "Real-time geospatial intelligence",
                "Digital subsurface mapping",
                "Terrain and environmental analysis",
                "Automated exploration workflows",
                "Cloud-based exploration visualization"
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

      {/* Traditional vs Intelligent Exploration */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional vs Intelligent Exploration Workflows</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional exploration operations often rely on disconnected systems, manual interpretation processes, and time-intensive field surveys that reduce operational efficiency and increase exploration uncertainty. These workflows can delay decision-making and create additional logistical and environmental challenges. Intelligent exploration platforms improve operational performance through automated analytics, aerial surveying, and real-time geospatial intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Exploration Methods</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual exploration analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower operational timelines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Fragmented geospatial datasets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Heavy field deployment requirements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher operational uncertainty</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Intelligent */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Intelligent Exploration Workflows</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">AI-assisted interpretation workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time exploration intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated exploration analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Drone-enabled exploration systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Predictive geophysical insights</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">Energy Exploration Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured exploration workflow designed to improve operational visibility, subsurface analysis, and exploration planning efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Exploration Site Assessment", desc: "Terrain conditions, operational requirements, and exploration objectives are evaluated using geospatial intelligence and aerial survey planning." },
            { num: "2", title: "Seismic & Geospatial Data Acquisition", desc: "LiDAR drone systems and remote sensing technologies capture terrain, elevation, and seismic datasets across exploration environments." },
            { num: "3", title: "AI-Driven Data Interpretation", desc: "Machine learning models process exploration datasets to identify geological structures, subsurface anomalies, and operational insights." },
            { num: "4", title: "Real-Time Visualization & Analysis", desc: "Processed datasets are delivered through cloud-based dashboards, geospatial visualization tools, and digital exploration systems." },
            { num: "5", title: "Planning & Decision Support", desc: "Operational intelligence supports drilling strategies, resource planning, environmental analysis, and exploration optimization workflows." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Sustainable and Environmentally Responsible Exploration</h2>
            <p className="text-gray-400 mb-6">
              Environmental performance and regulatory compliance are becoming increasingly important across modern energy exploration projects. Seismic AI supports sustainable exploration workflows through low-impact aerial surveying, automated analytics, and intelligent environmental monitoring systems. Traditional exploration methods can increase emissions, disrupt ecosystems, and create permitting challenges across sensitive operational regions. Our digital exploration platform minimizes physical footprint while supporting safer and more efficient exploration operations.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced environmental disturbance and land impact",
                "Lower emissions compared to conventional exploration methods",
                "Improved ESG and regulatory alignment",
                "Safer operations across remote and hazardous terrain",
                "Reduced dependency on large-scale ground operations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Energy and Resource Development</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports a wide range of exploration and geospatial intelligence applications across energy, infrastructure, and environmental projects. Our platform is designed for organizations requiring scalable exploration technologies with real-time operational visibility and predictive geophysical analysis.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration",
                "Subsurface mapping and analysis",
                "Geological interpretation workflows",
                "Environmental impact assessment",
                "Terrain and elevation intelligence",
                "Remote sensing operations",
                "Exploration site planning and optimization"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Energy Exploration with Digital Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and fragmented exploration workflows with intelligent surveying, predictive analytics, and real-time operational intelligence. By combining aerial surveying, machine learning analytics, and digital terrain intelligence, Seismic AI helps operators modernize energy exploration for the next generation of resource development.
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

export default EnergyExplorationPage;
