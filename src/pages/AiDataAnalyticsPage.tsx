import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Map as MapIcon, 
  CheckCircle2, 
  BarChart, 
  Activity,
  Cpu,
  Layers
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_ai_analytics.png";
import featureImg from "../assets/feature_ai_analytics.png";

const AiDataAnalyticsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">AI Data Analytics</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced AI data analytics solutions designed to help energy companies process seismic, geospatial, and exploration datasets with greater speed, accuracy, and operational intelligence. By combining machine learning models, predictive analytics, and real-time visualization, our platform transforms complex exploration data into actionable insights.
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
              alt="AI Data Analytics Neural Network" 
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
          <h2 className="text-3xl font-space font-bold mb-6">Built for Real-Time Exploration Intelligence</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional exploration workflows often rely on manual interpretation, disconnected datasets, and delayed processing cycles that slow operational decision-making. Seismic AI modernizes data interpretation through automated analytics workflows built for high-volume seismic and geophysical environments.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy operations generate massive volumes of seismic, terrain, and operational data that require rapid interpretation and scalable analytics infrastructure. Seismic AI integrates AI-driven processing, geospatial modeling, and cloud-based visualization into a connected exploration intelligence platform. Our analytics ecosystem supports subsurface interpretation, terrain analysis, operational monitoring, and predictive exploration workflows through real-time data processing and automated interpretation systems. This enables exploration teams to reduce analysis delays and improve decision-making accuracy across exploration projects.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Scalable analytics infrastructure for rapid exploration data processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, text: "Real-time seismic data analytics" },
              { icon: Zap, text: "Faster exploration data processing" },
              { icon: Cpu, text: "Automated interpretation workflows" },
              { icon: MapIcon, text: "Improved operational visibility" },
              { icon: CheckCircle2, text: "Reduced manual analysis dependency" },
              { icon: Layers, text: "Scalable cloud-based analytics infrastructure" },
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
                alt="AI Dashboard Visualization" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">AI-Powered Seismic Interpretation and Predictive Analytics</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Seismic AI uses machine learning algorithms and predictive geophysical analytics to analyze seismic and exploration datasets with greater speed and consistency than traditional manual workflows. Our platform identifies geological structures, terrain anomalies, and subsurface patterns that support faster exploration planning and drilling decisions.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              AI-powered interpretation models continuously process incoming datasets to improve exploration intelligence and reduce interpretation bottlenecks. Real-time analytics provide operational teams with actionable insights across seismic surveying, terrain analysis, and exploration monitoring workflows.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "AI seismic interpretation software",
                "Automated seismic data interpretation",
                "Predictive geophysical analytics",
                "Real-time exploration intelligence",
                "Subsurface anomaly detection",
                "Cloud-based seismic visualization",
                "Exploration data integration workflows"
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

      {/* Traditional vs AI-Driven Analytics */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional Data Processing vs AI-Driven Analytics</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional exploration analytics often involve fragmented workflows, manual interpretation processes, and delayed reporting cycles that reduce operational efficiency. Large seismic datasets can take weeks or months to process using traditional geophysical interpretation methods. AI-driven analytics improve exploration performance through automated interpretation, intelligent pattern recognition, and real-time geospatial processing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Data Processing</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual seismic interpretation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower processing cycles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Disconnected exploration datasets</span>
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
            
            {/* AI-Driven */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">AI-Driven Analytics</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Automated AI-assisted interpretation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time analytics workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated data intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Predictive exploration insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Live geospatial visualization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">AI Exploration Analytics Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured analytics workflow designed to improve seismic interpretation, operational intelligence, and exploration decision-making.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Exploration Data Acquisition", desc: "Seismic, terrain, and operational datasets are collected from LiDAR systems, remote sensing platforms, and exploration environments." },
            { num: "2", title: "Data Processing and Integration", desc: "Datasets are consolidated into a connected analytics environment for geospatial processing and interpretation." },
            { num: "3", title: "Machine Learning & Pattern Analysis", desc: "AI models analyze seismic signals, terrain structures, and exploration variables to identify patterns and subsurface anomalies." },
            { num: "4", title: "Real-Time Visualization & Reporting", desc: "Processed outputs are delivered through cloud-based dashboards, geospatial visualizations, and operational intelligence systems." },
            { num: "5", title: "Exploration Decision Support", desc: "Analytics outputs support exploration planning, drilling strategy development, and operational optimization workflows." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Intelligent Analytics for Sustainable Operations</h2>
            <p className="text-gray-400 mb-6">
              Environmental compliance and operational efficiency are becoming increasingly important across modern energy projects. Seismic AI supports sustainable exploration workflows through automated analytics, digital monitoring systems, and predictive operational intelligence. Traditional exploration processes can generate inefficiencies, increase operational waste, and delay environmental reporting. Our AI analytics platform improves monitoring accuracy while helping organizations reduce operational risk and improve ESG alignment.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced operational inefficiencies",
                "Faster environmental reporting workflows",
                "Improved monitoring and compliance visibility",
                "Lower resource dependency through automation",
                "Enhanced operational risk analysis",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Energy and Geophysical Operations</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports advanced analytics applications across seismic surveying, energy exploration, geospatial intelligence, and operational monitoring environments. Our AI-driven platform is designed for organizations requiring scalable data interpretation and predictive exploration intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration analytics",
                "Seismic interpretation workflows",
                "Geospatial intelligence systems",
                "Predictive operational monitoring",
                "Subsurface analysis and mapping",
                "Terrain and environmental analytics",
                "Exploration planning and optimization"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Exploration with AI-Powered Analytics</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to move beyond slow and fragmented interpretation workflows through intelligent automation, predictive analytics, and real-time exploration intelligence. By combining machine learning, geospatial analytics, and cloud-based visualization, Seismic AI helps operators modernize exploration workflows for the future of intelligent energy development.
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

export default AiDataAnalyticsPage;
