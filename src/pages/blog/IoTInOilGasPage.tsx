import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_iot_oil_gas_1780200831040.png";

const IoTInOilGasPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="blogIotOilGas" 
        type="article" 
        articleMeta={{
          publishedTime: "2025-11-26T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["IoT", "Oil and Gas", "Intelligent Sensors"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Technology Spotlight</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Nov 26, 2025</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              Leveraging IoT in Oil & Gas: Driving Efficiency with Intelligent Sensors
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
          <img src={heroImg} alt="High-tech futuristic sensors" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-8 text-xl text-gray-200">
            Deloitte’s insights on the <strong className="text-white">Internet of Things (IoT) in oil and gas</strong> emphasise the transformative potential of sensor technologies, LiDAR systems, and connected devices in optimising exploration, production, and maintenance operations.
          </p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Role of IoT in Modern Energy Operations</h2>
          <p className="mb-6">
            The integration of IoT devices allows operators to <strong className="text-white">collect real-time data</strong> from drilling rigs, pipelines, storage facilities, and transportation networks. This continuous data stream enables:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Operational Optimisation:</strong> Advanced sensors and analytics improve drilling accuracy, enhance reservoir management, and reduce downtime.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Predictive Maintenance:</strong> Continuous monitoring detects equipment wear and potential failures before they disrupt operations, lowering repair costs and preventing production losses.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Safety and Compliance:</strong> IoT-enabled monitoring systems support adherence to safety standards and environmental regulations, ensuring responsible operations.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">LiDAR and Sensor Technologies</h2>
          <p className="mb-8">
            LiDAR systems and high-resolution sensors provide precise spatial mapping of drilling sites, infrastructure, and surrounding environments. By integrating these technologies with AI analytics, operators can make <strong className="text-white">data-driven decisions</strong> that improve efficiency, reduce risk, and enhance sustainability.
          </p>

          <div className="my-12 p-8 glass-panel rounded-2xl border border-[#00E5FF]/20 bg-[#00E5FF]/[0.02]">
            <h2 className="text-2xl font-space font-bold text-[#00E5FF] mb-4">Seismic AI’s Perspective</h2>
            <p className="mb-4">
              At <strong className="text-white">Seismic AI</strong>, we specialise in deploying <strong className="text-white">AI-powered IoT solutions for oil and gas</strong> enterprises. Our approach combines:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Real-time sensor integration for actionable insights.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Predictive analytics to maximise equipment uptime and operational efficiency.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>LiDAR and geospatial analysis to support safe and precise drilling operations.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Governance and monitoring frameworks to ensure compliance with environmental and safety regulations.</span></li>
            </ul>
            <p>
              By leveraging intelligent sensors and IoT technologies, <strong className="text-white">Seismic AI</strong> enables companies to transform traditional oil and gas operations into <strong className="text-white">highly efficient, resilient, and sustainable enterprises</strong>.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-16 pt-8 border-t border-white/[0.1]">
            <strong>Reference:</strong> Deloitte, 2025. <em>Internet of Things in Oil & Gas</em>. Available at: <a href="https://www.deloitte.com/us/en/services/consulting/articles/iot-digital-oil-and-gas.html" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline">deloitte.com</a> [Accessed 21 November 2025].
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default IoTInOilGasPage;
