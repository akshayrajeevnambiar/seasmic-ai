import React, { useEffect } from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  Zap, 
  Map as MapIcon, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart, 
  Globe 
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_seismic_surveying.png";
import dashboardImg from "../assets/ai_geophysical_dashboard.png";

const SeismicSurveyingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="seismicSurveying" />
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
              <span className="text-sm font-medium text-gray-300">Modern Energy Exploration</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Seismic Surveying</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI delivers intelligent seismic surveying solutions that help energy companies improve subsurface visibility, accelerate exploration workflows, and reduce operational complexity.
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
              alt="LiDAR drone surveying geological terrain" 
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
          <p className="text-lg text-gray-300 leading-relaxed">
            By combining LiDAR drone systems, automated seismic interpretation, and real-time geophysical analytics, our platform modernizes traditional exploration methods for faster and more accurate decision-making. Traditional seismic acquisition workflows often involve heavy equipment, extended field operations, and lengthy interpretation cycles that increase project costs and operational risk. Seismic AI replaces these limitations with digital exploration technologies designed to improve survey efficiency, terrain intelligence, and geospatial accuracy across complex energy environments.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Built for High-Efficiency</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Modern exploration projects require seismic surveying systems capable of processing large exploration datasets quickly while maintaining operational accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, text: "Accelerated seismic data acquisition and processing" },
              { icon: Target, text: "Reduced dependency on heavy field equipment" },
              { icon: MapIcon, text: "Faster subsurface interpretation workflows" },
              { icon: Globe, text: "Improved terrain visibility and geological analysis" },
              { icon: ShieldCheck, text: "Lower field logistics and operational overhead" },
              { icon: BarChart, text: "Real-time access to seismic and geospatial datasets" },
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

      {/* Intelligent Seismic Interpretation */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...animations.fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/50 to-blue-500/50 rounded-2xl blur opacity-30"></div>
              <img 
                src={dashboardImg} 
                alt="AI Geophysical Dashboard" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">Intelligent Seismic Interpretation</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern exploration programs generate large volumes of seismic and terrain data that require rapid interpretation and analysis. Seismic AI uses machine learning models and automated interpretation workflows to process seismic datasets with greater speed and consistency.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our analytics platform identifies geological structures, subsurface anomalies, and terrain variations to support faster exploration decisions and improved drilling strategy development.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Automated seismic data interpretation",
                "Real-time seismic data analytics",
                "Predictive geophysical intelligence",
                "Digital subsurface mapping",
                "Cloud-based exploration visualization",
                "Integrated geospatial analysis workflows"
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

      {/* Traditional vs AI-Driven */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional vs AI-Driven Surveying</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Traditional workflows often rely on large field crews, manual interpretation, and extensive ground operations. AI-driven surveying accelerates execution while improving accuracy and reducing environmental impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Surveys</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Heavy ground equipment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Long processing cycles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual interpretation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher operational risk</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Greater environmental impact</span>
                </li>
              </ul>
            </motion.div>
            
            {/* AI-Driven */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">AI-Driven Surveying</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Drone-enabled surveying</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Automated interpretation workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Reduced field exposure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Low-impact exploration methods</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-16 text-center">Exploration Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "01", title: "Aerial Terrain Acquisition", desc: "LiDAR-enabled UAVs capture high-resolution terrain and geospatial data." },
            { num: "02", title: "Data Processing", desc: "Datasets are processed through AI-powered analytics and automated models." },
            { num: "03", title: "Subsurface Analysis", desc: "Real-time geophysical visualization tools support geological interpretation." },
            { num: "04", title: "Operational Intelligence", desc: "Cloud dashboards provide teams with actionable insights and mapping outputs." },
            { num: "05", title: "Seamless Integration", desc: "Processed data integrates with existing exploration and geospatial systems." },
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-white/[0.08] relative group"
            >
              <div className="text-4xl font-bold text-white/[0.05] absolute top-4 right-4 group-hover:text-[#00E5FF]/20 transition-colors">{step.num}</div>
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
            <h2 className="text-3xl font-space font-bold mb-6">Environmentally Responsible</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports low-impact seismic surveying through drone-based remote sensing and digital terrain intelligence that reduce disruption to surrounding ecosystems.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced land disturbance and environmental impact",
                "Lower emissions compared to traditional survey methods",
                "Improved ESG and regulatory alignment",
                "Safer operations across remote terrain conditions",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Industry Applications</h2>
            <p className="text-gray-400 mb-6">
              Our platform is designed for operators requiring scalable seismic surveying technologies with real-time operational visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil & Gas Exploration",
                "Geological Interpretation",
                "Subsurface Imaging",
                "Terrain Analysis",
                "Remote Sensing",
                "Exploration Site Planning"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Seismic Exploration</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Discover how Seismic AI is advancing seismic surveying through intelligent geospatial technologies, automated interpretation workflows, and real-time exploration intelligence.
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

export default SeismicSurveyingPage;
