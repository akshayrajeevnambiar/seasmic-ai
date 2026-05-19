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
import heroImg from "../assets/hero_lidar_drone.png";
import featureImg from "../assets/feature_lidar_dashboard.png";

const LidarDroneTechnologyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="lidarDrone" />
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
              <span className="text-sm font-medium text-gray-300">Advanced Aerial Surveying</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">LiDAR Drone Technology</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced LiDAR drone technology designed to improve geospatial intelligence, terrain visibility, and exploration efficiency across complex energy environments. By combining UAV-based aerial surveying with AI-powered analytics, our platform enables faster, safer, and more accurate exploration workflows.
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
              alt="LiDAR drone over terrain" 
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
          <h2 className="text-3xl font-space font-bold mb-6">Built for Modern Geospatial and Exploration Operations</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional surveying methods often rely on heavy equipment, extensive field operations, and manual terrain analysis that increase operational costs and environmental impact. Seismic AI modernizes this process through intelligent aerial mapping systems capable of capturing high-resolution spatial data with minimal ground disturbance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy projects require accurate terrain intelligence and scalable aerial surveying systems capable of operating across remote and environmentally sensitive regions. Seismic AI integrates aerial LiDAR scanning, predictive geospatial analytics, and real-time spatial processing into a connected exploration workflow. Our UAV-enabled surveying platform supports terrain modeling, elevation mapping, and exploration planning through high-speed geospatial data acquisition and automated processing workflows. This enables exploration teams to improve operational visibility, reduce field deployment complexity, and accelerate exploration decision-making.
          </p>
        </motion.div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.08] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Operational Advantages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Deliver precise geospatial intelligence with speed and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MapIcon, text: "High-resolution aerial terrain mapping" },
              { icon: Zap, text: "Faster geospatial data acquisition" },
              { icon: ShieldCheck, text: "Reduced field crew and equipment dependency" },
              { icon: Globe, text: "Improved operational visibility across exploration sites" },
              { icon: Target, text: "Lower environmental and logistical impact" },
              { icon: BarChart, text: "Real-time access to mapping and survey datasets" },
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
                alt="LiDAR Mapping UI" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">LiDAR Mapping and Geospatial Intelligence</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              LiDAR (Light Detection and Ranging) technology uses laser pulse reflection and geospatial positioning systems to generate highly accurate 3D point cloud datasets for terrain analysis and exploration planning. Seismic AI combines airborne laser scanning with AI-powered geospatial interpretation to improve mapping precision and operational intelligence.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform captures high-density spatial datasets using integrated GPS and INS navigation systems that support accurate terrain classification and surface analysis. Processed outputs include digital elevation models (DEM), digital surface models (DSM), and geospatial intelligence layers designed for exploration and infrastructure planning.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Aerial LiDAR scanning and mapping",
                "3D point cloud generation",
                "Digital elevation model (DEM) processing",
                "Digital surface model (DSM) analysis",
                "AI-powered terrain interpretation",
                "High-accuracy geospatial visualization",
                "Real-time aerial survey analytics"
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

      {/* Traditional vs Aerial LiDAR */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Aerial LiDAR vs Traditional Surveying Methods</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional terrain and exploration surveys often require large field teams, ground vehicles, and time-intensive mapping processes that can delay exploration timelines. These operations may also increase environmental disturbance and operational risk across remote or inaccessible terrain. Aerial LiDAR systems improve surveying efficiency through automated geospatial scanning, high-speed spatial data capture, and real-time terrain intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Surveying Methods</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Ground-based mapping crews</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower terrain analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual mapping workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Limited terrain accessibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher environmental impact</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Aerial LiDAR */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Aerial LiDAR Surveying</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">UAV-enabled aerial surveying</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time spatial intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Automated geospatial processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Efficient remote-area coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Low-impact aerial surveys</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">LiDAR Drone Exploration Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured aerial surveying workflow designed to improve terrain intelligence, operational efficiency, and geospatial analysis accuracy across energy and exploration projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "UAV Flight Planning and Deployment", desc: "Drone systems are configured for optimized aerial coverage based on terrain conditions, survey objectives, and operational requirements." },
            { num: "2", title: "LiDAR Scanning & Data Acquisition", desc: "LiDAR sensors emit laser pulses to capture high-density elevation and surface datasets across exploration environments." },
            { num: "3", title: "Processing & Point Cloud Analysis", desc: "Captured datasets are processed into structured 3D point cloud models, terrain classifications, and elevation maps." },
            { num: "4", title: "Visualization & Intelligence", desc: "Processed outputs are converted into digital terrain models, spatial intelligence layers, and operational mapping systems." },
            { num: "5", title: "Integration with GIS Platforms", desc: "Survey outputs integrate seamlessly with existing GIS systems, geospatial workflows, and operational planning environments." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Environmentally Responsible Aerial Surveying</h2>
            <p className="text-gray-400 mb-6">
              Environmental performance is becoming increasingly important across energy and exploration operations. Seismic AI supports sustainable surveying practices through drone-enabled remote sensing and low-impact aerial mapping technologies. Traditional ground surveys can disturb ecosystems, increase fuel usage, and create operational challenges. Our aerial LiDAR platform minimizes land disruption while improving environmental monitoring.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced land and ecosystem disturbance",
                "Lower emissions compared to traditional field surveys",
                "Minimal operational footprint in remote locations",
                "Improved environmental monitoring capabilities",
                "Safer surveying across hazardous terrain conditions",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...animations.fadeInUp}>
            <h2 className="text-3xl font-space font-bold mb-6">Applications Across Energy and Geospatial Operations</h2>
            <p className="text-gray-400 mb-6">
              Seismic AI supports a wide range of aerial mapping and geospatial intelligence applications across energy, environmental, and infrastructure projects. Our aerial LiDAR systems are designed for organizations requiring scalable terrain intelligence and real-time operational visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration",
                "Digital terrain mapping",
                "Exploration site analysis",
                "Environmental impact assessment",
                "Remote sensing operations",
                "Infrastructure and corridor mapping",
                "Geospatial intelligence workflows"
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Exploration with LiDAR Drone Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and resource-intensive surveying methods with intelligent aerial mapping and real-time geospatial analytics. By combining UAV technology, airborne laser scanning, and predictive geospatial analytics, Seismic AI helps operators modernize exploration workflows for the next generation of energy development.
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

export default LidarDroneTechnologyPage;
