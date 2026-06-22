import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_seismic_data_analysis.png";

const WhatIsSeismicDataAnalysisPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="whatIsSeismicDataAnalysis" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-01-15T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Seismic Data", "Geophysics", "AI Exploration"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Beginner's Guide</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Jan 15, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              What Is Seismic Data Analysis? A Beginner's Guide
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
          <img src={heroImg} alt="What Is Seismic Data Analysis? A Beginner's Guide" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">If you have ever wondered how energy companies find oil, gas, or minerals buried kilometres underground without drilling blindly, the answer lies in <strong className="text-white">seismic data analysis</strong>. It is one of the most powerful tools in modern geoscience — and thanks to artificial intelligence, it has never been more accurate or accessible.</p>

          <p className="mb-6">In this beginner's guide, we break down exactly what <strong className="text-white">seismic data analysis</strong> is, how it works, and why it matters for the future of energy exploration.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">What Is Seismic Data Analysis?</h2>

          <p className="mb-6"><strong className="text-white">Seismic data analysis</strong> is the process of collecting, processing, and interpreting sound-wave data that has been bounced through the Earth's subsurface. It is a core component of AI subsurface exploration platforms and has been used for decades by oil and gas companies, mining firms, and environmental agencies.</p>

          <p className="mb-6">When sound waves (generated by controlled explosions, vibrating trucks, or airguns at sea) travel into the ground, they reflect off different rock layers and return to the surface. Sensors called geophones or hydrophones capture these returning waves. The resulting data — millions of individual measurements — forms the raw material that geoscientists work with.</p>

          <p className="mb-6">Think of it like an ultrasound for the Earth. Just as doctors use sound waves to image organs, geoscientists use seismic waves to image rock formations, fault lines, and potential reservoirs.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">How Does Seismic Data Analysis Work?</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The process typically follows four stages:</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Data Acquisition:</strong> Seismic waves are generated in the field and captured by arrays of sensors. Modern methods increasingly use <strong className="text-white">oil and gas exploration drones</strong> and LiDAR-equipped UAVs to reduce environmental impact and improve coverage.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Data Processing:</strong> Raw signals are cleaned of noise, corrected for geometry, and transformed into structured datasets. This stage has traditionally been slow and expensive.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Interpretation:</strong> Geophysicists study processed data to identify subsurface structures — faults, horizons, salt domes, and hydrocarbon traps. <strong className="text-white">Automated seismic data interpretation</strong> is rapidly replacing manual workflows.</span>
            </li>
          </ul>

          <p className="mb-6">Reporting & Decision-Making: Findings are compiled into reports that guide drilling, development, and investment decisions.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Why Is Seismic Data Analysis Important?</h2>

          <p className="mb-6">Drilling a single exploration well can cost anywhere from $5 million to over $100 million. Without reliable subsurface data, companies are drilling blind. <strong className="text-white">Real-time seismic data analytics</strong> help operators identify the most promising locations before a single metre of ground is broken, saving enormous time and capital.</p>

          <p className="mb-6">Beyond oil and gas, seismic data is critical for geothermal energy development, carbon capture and storage (CCS) site selection, critical minerals exploration, and even civil engineering projects such as tunnel design and earthquake hazard assessment.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Role of AI in Modern Seismic Analysis</h2>

          <p className="mb-6">Traditional seismic analysis relies heavily on expert geophysicists manually examining data — a process that can take months. <strong className="text-white">AI seismic interpretation software</strong> has changed everything.</p>

          <p className="mb-6">Modern <strong className="text-white">AI geoscience analytics solutions</strong> use deep learning and machine learning to automate horizon picking, fault detection, and facies classification at speeds and accuracy levels that no human team could match. Platforms like SeismicAI's <strong className="text-white">digital seismic intelligence platform</strong> can reduce interpretation cycle times by up to 10x while improving accuracy to 95% or higher.</p>

          <p className="mb-6">This is not about replacing geoscientists. It is about empowering them. AI handles the repetitive, data-intensive stages so that expert teams can focus on higher-level geological reasoning and business decisions.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Key Terms Every Beginner Should Know</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Horizon:</strong> A continuous reflective surface in seismic data corresponding to a geological boundary.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Fault:</strong> A fracture in rock where displacement has occurred — critical for understanding traps where hydrocarbons accumulate.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Facies:</strong> Groups of rock with similar characteristics that indicate depositional environment.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Seismic Inversion:</strong> The process of converting seismic reflection data into rock property information.</span>
            </li>
          </ul>

          <p className="mb-6">Full Waveform Inversion (FWI): An advanced technique that extracts the most detailed subsurface models from seismic data.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">What Makes Modern Seismic Platforms Different?</h2>

          <p className="mb-6">Today's <strong className="text-white">AI based geophysical surveying</strong> platforms go far beyond simple data visualisation. They integrate AI core scanning and logging tools, multi-physics modelling, and cloud-native infrastructure to deliver insights faster than ever before.</p>

          <p className="mb-6">Solutions like SeismicAI also incorporate <strong className="text-white">subsurface mapping LiDAR</strong> and <strong className="text-white">seismic exploration drone technology</strong> to acquire higher-quality field data with a significantly smaller environmental footprint than conventional survey methods.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6"><strong className="text-white">Seismic data analysis</strong> is the backbone of responsible, efficient resource exploration. Whether you are an investor evaluating an energy company, a student entering geoscience, or a professional exploring new technologies, understanding the basics of how seismic analysis works — and how AI is enhancing it — is increasingly essential.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">Discover how SeismicAI's AI-powered LiDAR drone for seismic surveying and intelligent analytics platform can transform your next exploration project.</span>
            <Link to="/services/geophysical-intelligence" className="inline-flex items-center space-x-2 text-[#00E5FF] hover:underline font-medium">
              <span>Learn More</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 border-t border-white/[0.08] bg-white/[0.01] px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-space font-bold mb-6">Explore the Future of Intelligent Energy</h2>
          <p className="text-gray-400 mb-8">
            Discover how Seismic AI is transforming drilling operations with intelligent technology.
          </p>
          <Link to="/services/geophysical-intelligence" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00E5FF] text-black font-semibold rounded-md hover:bg-white transition-colors duration-300">
            Learn More About Our Solutions
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhatIsSeismicDataAnalysisPage;
