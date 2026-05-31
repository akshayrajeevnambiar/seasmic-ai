import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_spatial_computing_1780200885096.png";

const SpatialComputingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="blogSpatialComputing" 
        type="article" 
        articleMeta={{
          publishedTime: "2025-11-29T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Spatial Computing", "Digital Twins", "LiDAR"]
        }}
      />
      
      {/* Article Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-12 border-b border-white/[0.08]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-y-[-50%]"></div>
        
        <div className="max-w-screen-md mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-[#00E5FF] hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Innovation & Tech</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Nov 29, 2025</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              Spatial Computing & Digital Twins in Energy
            </h1>
            
            <div className="flex items-center justify-between py-6 border-y border-white/[0.08] mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5FF] to-blue-600 p-0.5">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold font-space text-sm">SAI</div>
                </div>
                <div>
                  <div className="font-bold text-white">Seismic AI Insights Team</div>
                  <div className="text-sm text-gray-400">Research & Intelligence</div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.05] hover:border-[#00E5FF] transition-colors group">
                <Share2 className="w-4 h-4 text-gray-400 group-hover:text-[#00E5FF] transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-12 -mt-8 relative z-20 max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-video w-full rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img src={heroImg} alt="Glowing digital twin hologram" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-8 text-xl text-gray-200">
            Deloitte’s analysis of emerging technology trends identifies <strong className="text-white">spatial computing</strong>—including LiDAR, 3-D mapping, and immersive data analytics—as a transformative force across industries, with particularly profound implications for oil and gas operations.
          </p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Understanding Spatial Computing</h2>
          <p className="mb-8">
            Spatial computing integrates physical and digital environments, capturing <strong className="text-white">three-dimensional data</strong> through LiDAR sensors, drones, and advanced imaging technologies. This data can be processed in real time to provide highly accurate models of operational environments, enabling superior decision-making in exploration, drilling, and asset management.
          </p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Digital Twins: Transforming Operations</h2>
          <p className="mb-8">
            Deloitte highlights the transformative potential of <strong className="text-white">digital twins</strong>—virtual replicas of physical assets, processes, or systems that integrate sensor data, AI analytics, and real-time simulations—to enhance operational efficiency, safety, and strategic decision-making. Digital twins synthesise sensor inputs, historical performance data, and predictive models to create a comprehensive digital representation of physical operations.
          </p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Applications in Oil & Gas</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-2">1. Enhanced Site Analysis & Operational Optimisation</h3>
              <p>High-resolution 3-D models allow engineers to visualise geological formations and infrastructure layouts. By continuously modelling drilling sites, pipelines, and production facilities, digital twins enable real-time adjustments to improve efficiency.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-2">2. Predictive Maintenance</h3>
              <p>Digital twins provide foresight into equipment wear and potential failures, allowing timely interventions and reducing maintenance costs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-2">3. Risk Management and Safety</h3>
              <p>Virtual simulations and real-time spatial data identify potential hazards and environmental risks, enhancing safety protocols and compliance with regulatory standards.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-2">4. Training and Strategic Decision-Making</h3>
              <p>Immersive 3-D visualisation supports workforce training, while operators can model investment and production strategies in a risk-free virtual environment.</p>
            </div>
          </div>

          <div className="my-12 p-8 glass-panel rounded-2xl border border-[#00E5FF]/20 bg-[#00E5FF]/[0.02]">
            <h2 className="text-2xl font-space font-bold text-[#00E5FF] mb-4">Seismic AI’s Perspective</h2>
            <p className="mb-4">
              At <strong className="text-white">Seismic AI</strong>, we leverage spatial computing and digital twin technology to deliver <strong className="text-white">AI-powered simulations and sensor integration</strong>:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Developing <strong>real-time digital replicas</strong> of drilling and production assets.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Integrating <strong>sensor networks and predictive analytics</strong> for proactive management.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Enabling <strong>scenario-based decision-making</strong> and operational optimisation.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Empowering companies to adopt <strong>data-driven strategies</strong>.</span></li>
            </ul>
            <p>
              By harnessing the potential of spatial computing, <strong className="text-white">Seismic AI</strong> empowers companies to transform traditional oil and gas operations into highly efficient, safe, and resilient enterprises.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-16 pt-8 border-t border-white/[0.1]">
            <strong>References:</strong> Deloitte, 2025. <em>Future of Spatial Computing</em> & <em>How Digital Twins Can Unlock New Industry Advantages</em>. Available at: <a href="https://www.deloitte.com/us/en/insights/focus/tech-trends/2025/tech-trends-future-of-spatial-computing.html" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline">deloitte.com</a> [Accessed 21 November 2025].
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default SpatialComputingPage;
