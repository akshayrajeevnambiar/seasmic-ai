import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_industry_outlook_1780200850086.png";

const IndustryOutlook2026Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="blogIndustryOutlook" 
        type="article" 
        articleMeta={{
          publishedTime: "2025-11-27T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Industry Outlook", "Canada", "Digital Transformation"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Market Analysis</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Nov 27, 2025</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              2026 Oil & Gas Industry Outlook: Digital Transformation in Canada
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
          <img src={heroImg} alt="Holographic digital map of Canada" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-8 text-xl text-gray-200">
            Deloitte’s 2026 outlook underscores the accelerating <strong className="text-white">digital transformation of the oil and gas sector</strong>, particularly within the Canadian market. Technological adoption, including AI, IoT, and advanced sensor systems, is reshaping operations, improving efficiency, and supporting sustainable growth.
          </p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Key Drivers of Digital Transformation</h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-3">1. Operational Efficiency</h3>
              <p>Automation and AI-powered analytics enable real-time monitoring of drilling, production, and pipeline operations. Predictive maintenance reduces downtime, while data-driven workflows enhance productivity across all segments.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-3">2. Sustainability and Compliance</h3>
              <p>Digital tools allow operators to track emissions, optimise energy consumption, and ensure compliance with regulatory frameworks. This focus supports both environmental responsibility and long-term operational resilience.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-3">3. Risk Management and Safety</h3>
              <p>Advanced sensors, LiDAR, and IoT systems improve situational awareness, detect potential hazards, and strengthen safety protocols, minimising operational risk.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-3">4. Investment Optimisation</h3>
              <p>Digital platforms provide actionable insights for capital allocation, project prioritisation, and resource management, ensuring that technological investments deliver measurable ROI.</p>
            </div>
          </div>

          <div className="my-12 p-8 glass-panel rounded-2xl border border-[#00E5FF]/20 bg-[#00E5FF]/[0.02]">
            <h2 className="text-2xl font-space font-bold text-[#00E5FF] mb-4">Seismic AI’s Perspective</h2>
            <p className="mb-4">
              At <strong className="text-white">Seismic AI</strong>, we partner with oil and gas enterprises to accelerate digital transformation:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Implementing <strong>AI-powered sensor networks</strong> for real-time monitoring.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Integrating <strong>IoT and LiDAR systems</strong> to optimise operations.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Providing <strong>analytics and governance frameworks</strong>.</span></li>
              <li className="flex items-center space-x-2"><span className="text-[#00E5FF]">✓</span> <span>Supporting Canadian operators in achieving sustainable outcomes.</span></li>
            </ul>
            <p>
              By combining cutting-edge technology with expert oversight, <strong className="text-white">Seismic AI</strong> empowers companies to navigate the evolving energy landscape confidently.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-16 pt-8 border-t border-white/[0.1]">
            <strong>Reference:</strong> Deloitte, 2026. <em>2026 Oil & Gas Industry Outlook</em>. Available at: <a href="https://www.deloitte.com/us/en/insights/industry/oil-and-gas/oil-and-gas-industry-outlook.html" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline">deloitte.com</a> [Accessed 21 November 2025].
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default IndustryOutlook2026Page;
