import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Map as MapIcon, 
  CheckCircle2, 
  Globe,
  Layers,
  Zap,
  ShieldCheck,
  Target,
  Wifi
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_remote_sensing.png";
import featureImg from "../assets/feature_remote_sensing.png";

const RemoteSensingSolutionsPage: React.FC = () => {
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
              <span className="text-sm font-medium text-gray-300">Intelligent Energy Operations</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Sensing Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced remote sensing solutions designed to help energy companies improve operational visibility, terrain intelligence, and exploration decision-making across large and complex environments. By combining LiDAR drone technology, AI-powered geospatial analytics, and aerial sensing systems, our platform delivers real-time environmental and exploration intelligence.
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
              alt="Remote Sensing Technology" 
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
          <h2 className="text-3xl font-space font-bold mb-6">Built for Modern Geospatial and Exploration Intelligence</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional monitoring and surveying methods often rely on manual inspections, fragmented spatial datasets, and time-intensive field operations that reduce operational efficiency and delay decision-making. Seismic AI modernizes remote sensing workflows through automated aerial data acquisition, predictive analytics, and cloud-based geospatial intelligence systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy operations require remote sensing systems capable of collecting, processing, and analyzing large geospatial datasets across remote and environmentally sensitive regions. Seismic AI integrates aerial LiDAR scanning, geospatial analytics, and real-time visualization into a connected remote sensing platform. Our ecosystem supports terrain monitoring, environmental analysis, infrastructure visibility, and exploration intelligence through high-resolution spatial data acquisition and automated analytics workflows. This enables operational teams to improve planning accuracy while reducing field deployment complexity and operational risk.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Scalable and high-efficiency sensing systems designed for modern exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, text: "High-resolution aerial data acquisition" },
              { icon: Target, text: "Faster geospatial analysis and reporting" },
              { icon: Globe, text: "Improved terrain and environmental visibility" },
              { icon: ShieldCheck, text: "Reduced field inspection dependency" },
              { icon: Wifi, text: "Real-time operational intelligence" },
              { icon: Layers, text: "Scalable cloud-based sensing workflows" },
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
                alt="LiDAR Remote Sensing Analytics" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">LiDAR Remote Sensing and Geospatial Analytics</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Remote sensing technologies use aerial sensors, laser scanning systems, and geospatial positioning technologies to capture detailed terrain and environmental datasets across operational environments. Seismic AI combines airborne LiDAR systems with AI-powered geospatial interpretation to improve operational intelligence and exploration visibility.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform processes spatial datasets into digital terrain models, 3D point cloud visualizations, and geospatial intelligence layers designed for exploration planning, environmental monitoring, and infrastructure analysis. Integrated GPS and INS systems improve positioning accuracy across large-scale sensing operations.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Aerial LiDAR remote sensing",
                "Geospatial intelligence and mapping",
                "3D point cloud analysis",
                "Digital terrain and surface modeling",
                "AI-powered spatial interpretation",
                "Real-time environmental monitoring",
                "Cloud-based geospatial visualization"
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

      {/* Traditional vs Remote Sensing */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional Monitoring vs Remote Sensing Intelligence</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional monitoring methods often require large field crews, manual inspections, and disconnected reporting systems that increase operational overhead and delay situational awareness. These workflows may also create safety challenges across remote or hazardous operational environments. Remote sensing intelligence improves operational efficiency through automated aerial monitoring, real-time geospatial analytics, and integrated digital workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Monitoring Methods</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual field inspections</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower reporting cycles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Fragmented operational datasets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Limited remote-area accessibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher operational risk</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Remote Sensing */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Remote Sensing Intelligence</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">UAV-enabled aerial monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time geospatial analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated sensing intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Efficient large-area coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Reduced field exposure</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sensing Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">Remote Sensing Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured remote sensing workflow designed to improve operational intelligence, environmental visibility, and geospatial analysis accuracy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Survey Planning & Sensor Deployment", desc: "Aerial survey parameters and sensing systems are configured based on operational requirements." },
            { num: "2", title: "Geospatial Data Acquisition", desc: "LiDAR systems and remote sensors capture terrain and operational datasets across environments." },
            { num: "3", title: "AI-Powered Spatial Processing", desc: "Captured datasets are processed into structured geospatial intelligence layers using machine learning." },
            { num: "4", title: "Visualization & Monitoring", desc: "Processed outputs are delivered through cloud dashboards, 3D terrain visualizations, and digital monitoring systems." },
            { num: "5", title: "Integration with GIS Platforms", desc: "Remote sensing outputs integrate seamlessly into GIS systems and operational planning environments." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Sustainable Monitoring and Environmental Visibility</h2>
            <p className="text-gray-400 mb-6">
              Environmental monitoring and sustainable operational planning are becoming increasingly important across modern energy projects. Seismic AI supports low-impact monitoring through drone-enabled remote sensing and automated geospatial intelligence systems. Traditional ground-based monitoring can disrupt ecosystems, increase fuel usage, and create operational limitations. Our aerial sensing platform minimizes physical disturbance while improving environmental visibility and operational safety.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced land disturbance and field impact",
                "Lower emissions compared to traditional monitoring methods",
                "Improved environmental and operational visibility",
                "Safer monitoring across hazardous terrain conditions",
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
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Energy and Infrastructure Operations</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports a broad range of remote sensing and geospatial intelligence applications across energy, environmental, and infrastructure projects. Our platform is designed for organizations requiring scalable aerial monitoring systems with real-time operational visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration",
                "Environmental monitoring and analysis",
                "Terrain and elevation mapping",
                "Infrastructure and corridor monitoring",
                "Exploration site visibility",
                "Geospatial intelligence workflows",
                "Remote operational monitoring"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Operations with Remote Sensing Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and fragmented monitoring workflows with intelligent aerial sensing, predictive analytics, and real-time geospatial intelligence. By combining aerial sensing technologies, machine learning analytics, and digital mapping systems, Seismic AI helps operators modernize remote sensing workflows for the future of intelligent energy and infrastructure operations.
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

export default RemoteSensingSolutionsPage;
