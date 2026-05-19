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
  Target
} from "lucide-react";
import { animations } from "../constants/design";
import heroImg from "../assets/hero_digital_terrain.png";
import featureImg from "../assets/feature_digital_terrain.png";

const DigitalTerrainMappingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="digitalTerrainMapping" />
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
              <span className="text-sm font-medium text-gray-300">Accurate Geospatial Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Terrain Mapping</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Seismic AI provides advanced digital terrain mapping solutions designed to help energy companies improve terrain visibility, exploration planning, and geospatial decision-making across complex operational environments. By combining LiDAR scanning, aerial surveying, and AI-powered geospatial analytics, our platform delivers high-accuracy terrain intelligence for modern exploration workflows.
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
              alt="Digital Terrain Mapping" 
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
          <h2 className="text-3xl font-space font-bold mb-6">Built for Modern Terrain and Geospatial Analysis</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Traditional terrain mapping methods often rely on manual surveys, fragmented spatial datasets, and time-intensive field operations that limit operational efficiency and mapping accuracy. Seismic AI modernizes terrain analysis through automated geospatial workflows capable of generating detailed elevation and surface models in real time.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Modern energy and exploration projects require accurate terrain intelligence to support infrastructure planning, subsurface analysis, and operational safety. Seismic AI integrates aerial LiDAR mapping, geospatial processing, and predictive analytics into a connected terrain intelligence platform. Our digital terrain mapping ecosystem supports topographic analysis, surface modeling, and exploration site evaluation through high-resolution spatial data acquisition and automated processing systems. This enables exploration teams to improve planning accuracy while reducing operational delays across remote and environmentally sensitive regions.
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
              { icon: Globe, text: "High-resolution terrain visualization" },
              { icon: Zap, text: "Faster geospatial data processing" },
              { icon: Layers, text: "Accurate elevation and surface modeling" },
              { icon: ShieldCheck, text: "Reduced field survey dependency" },
              { icon: Target, text: "Improved operational and site planning visibility" },
              { icon: MapIcon, text: "Real-time access to terrain intelligence datasets" },
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
                alt="Terrain Modeling Dashboard" 
                className="relative w-full h-auto rounded-2xl border border-white/[0.1] shadow-2xl object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-space font-bold mb-6">LiDAR Terrain Modeling and Geospatial Intelligence</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              LiDAR (Light Detection and Ranging) technology uses laser pulse measurements and geospatial positioning systems to generate highly accurate terrain datasets for exploration and infrastructure analysis. Seismic AI combines airborne LiDAR scanning with AI-powered terrain interpretation to improve mapping precision and geospatial visibility.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our platform processes spatial datasets into digital elevation models (DEM), digital surface models (DSM), and 3D terrain visualizations that support exploration planning and operational analysis. Integrated GPS and INS navigation systems improve geolocation accuracy across large-scale mapping environments.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#00E5FF]">Platform Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Digital elevation model (DEM) generation",
                "Digital surface model (DSM) analysis",
                "3D terrain and surface visualization",
                "AI-powered terrain interpretation",
                "High-density point cloud processing",
                "Geospatial data integration workflows",
                "Real-time terrain analytics and mapping"
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

      {/* Traditional vs Digital Terrain Mapping */}
      <section className="py-20 bg-[#00E5FF]/[0.02] border-y border-[#00E5FF]/10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-space font-bold mb-4">Traditional Terrain Surveys vs Digital Terrain Mapping</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
            Conventional terrain surveys often involve ground crews, manual measurements, and time-intensive mapping processes that can delay operational planning and increase project costs. These workflows may also create limitations across inaccessible or environmentally sensitive regions. Digital terrain mapping improves operational efficiency through aerial LiDAR scanning, automated geospatial processing, and real-time terrain intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Traditional */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02]"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">Traditional Terrain Surveys</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Manual ground measurements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Slower terrain analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Limited terrain accessibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Fragmented mapping workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                  <span>Higher operational overhead</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Digital Terrain Mapping */}
            <motion.div 
              {...animations.fadeInUp}
              className="glass-panel p-8 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.05] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-6 border-b border-[#00E5FF]/20 pb-4 relative z-10">Digital Terrain Mapping</h3>
              <ul className="space-y-4 text-gray-200 relative z-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Automated aerial mapping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Real-time geospatial intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Efficient remote-area coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Integrated digital processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                  <span className="font-medium">Scalable terrain analytics</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exploration Workflow */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-space font-bold mb-4 text-center">Digital Terrain Mapping Workflow</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16 text-center">
          Seismic AI follows a structured geospatial workflow designed to improve terrain analysis, mapping accuracy, and operational visibility across exploration and infrastructure projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: "1", title: "Aerial Survey Planning", desc: "UAV flight paths and spatial acquisition parameters are configured based on terrain conditions and project requirements." },
            { num: "2", title: "LiDAR Data Acquisition", desc: "LiDAR sensors capture high-density terrain, elevation, and surface datasets across exploration environments." },
            { num: "3", title: "Geospatial Processing", desc: "Captured datasets are processed into structured terrain models, classified point clouds, and geospatial intelligence layers." },
            { num: "4", title: "Visualization & Analysis", desc: "Processed outputs are converted into DEMs, DSMs, contour models, and digital terrain visualizations for operational planning." },
            { num: "5", title: "Integration with GIS", desc: "Terrain datasets integrate seamlessly into GIS platforms, exploration workflows, and infrastructure planning systems." },
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
            <h2 className="text-3xl font-space font-bold mb-6">Environmentally Responsible Terrain Intelligence</h2>
            <p className="text-gray-400 mb-6">
              Environmental monitoring and sustainable operational planning are becoming increasingly important across modern exploration projects. Seismic AI supports low-impact terrain analysis through drone-enabled remote sensing and digital geospatial intelligence. Traditional terrain surveys can increase fuel usage, disrupt ecosystems, and create operational challenges in difficult terrain conditions. Our aerial mapping platform minimizes physical footprint while improving environmental monitoring and exploration safety.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced land disturbance and field disruption",
                "Lower emissions compared to traditional surveying methods",
                "Minimal operational footprint in remote regions",
                "Improved environmental monitoring capabilities",
                "Safer terrain analysis across hazardous environments",
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
              Seismic AI supports a broad range of terrain intelligence and geospatial mapping applications across energy, environmental, and infrastructure projects. Our digital terrain mapping platform is designed for organizations requiring scalable geospatial analysis and operational visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Oil and gas exploration",
                "Exploration site planning",
                "Infrastructure and corridor mapping",
                "Environmental impact assessment",
                "Remote sensing operations",
                "Terrain and elevation analysis",
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
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Transform Exploration with Digital Terrain Intelligence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Seismic AI enables energy companies to replace slow and fragmented terrain surveys with intelligent geospatial mapping and real-time terrain analytics. Our platform supports faster operational planning, improved terrain visibility, and more efficient exploration strategies. By combining aerial LiDAR scanning, geospatial processing, and predictive terrain analytics, Seismic AI helps operators modernize exploration workflows for the next generation of energy and infrastructure development.
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

export default DigitalTerrainMappingPage;
