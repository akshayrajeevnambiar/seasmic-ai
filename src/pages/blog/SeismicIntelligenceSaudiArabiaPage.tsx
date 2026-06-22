import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_industry_outlook_1780200850086.png";

const SeismicIntelligenceSaudiArabiaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="seismicIntelligenceSaudiArabia" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-04-27T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Saudi Arabia", "Saudi Vision 2030", "GCC Energy"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Regional Focus</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Apr 27, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              Seismic Intelligence for Saudi Arabia's Oil & Gas Sector
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
          <img src={heroImg} alt="Seismic Intelligence for Saudi Arabia's Oil & Gas Sector" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">Saudi Arabia sits atop one of the most extraordinary concentrations of hydrocarbon wealth on Earth — and under Saudi Vision 2030, the Kingdom is simultaneously deepening its oil and gas capabilities while diversifying its energy portfolio into renewables, hydrogen, and minerals. Both ambitions demand world-class subsurface intelligence.</p>

          <p className="mb-6">For exploration and production companies operating in Saudi Arabia and across the GCC, the ability to rapidly and accurately characterise the subsurface is not a technical nicety. It is a strategic imperative.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Scale of Saudi Arabia's Exploration Challenge</h2>

          <p className="mb-6">Saudi Aramco alone manages over 100 active fields, the world's largest conventional oil reserve (Ghawar Field), and an increasingly complex portfolio of unconventional resources including tight gas and shale deposits in the Jafurah Basin. Beyond Aramco, Saudi Arabia is opening its energy sector to international operators, creating significant demand for advanced exploration technology.</p>

          <p className="mb-6">At this scale, <strong className="text-white">real-time seismic data analytics</strong> and <strong className="text-white">automated seismic data interpretation</strong> are not efficiency bonuses — they are operational necessities. The volume of seismic data generated across Saudi Arabia's exploration programme exceeds the capacity of traditional interpretation workflows by orders of magnitude.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">How AI Is Supporting Saudi Vision 2030</h2>

          <p className="mb-6">Saudi Vision 2030 has an explicit technology localisation agenda. Advanced AI and digital platforms are central to the Kingdom's ambition to be not just a resource exporter, but a global technology hub. This creates strong alignment between Saudi Arabia's national strategy and the adoption of AI-powered geophysical analytics.</p>

          <p className="mb-6"><strong className="text-white">AI geoscience analytics solutions</strong> deployed in Saudi Arabia serve multiple Vision 2030 objectives: they reduce the cost and accelerate the timeline of resource development (supporting fiscal objectives), they create local technical capability in AI and data science (supporting knowledge economy objectives), and they enable more responsible resource management (supporting sustainability objectives).</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Specific Applications in the Saudi Context</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Tight Gas Characterisation:</strong> The Jafurah Basin's unconventional resources require high-resolution facies mapping and natural fracture characterisation — exactly where AI interpretation adds the greatest value over conventional methods.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Salt Flank Imaging:</strong> Complex salt structures in Saudi Arabia's geological setting create challenges for conventional seismic imaging that AI-enhanced processing is uniquely positioned to address.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Reservoir Monitoring:</strong> AI-powered 4D seismic interpretation supports continuous monitoring of reservoir performance across Saudi Arabia's massive producing fields.</span>
            </li>
          </ul>

          <p className="mb-6">Exploration Portfolio Screening: AI enables rapid screening of large prospect databases, identifying the highest-quality targets for detailed evaluation.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Drone and LiDAR Technology in Saudi Arabia</h2>

          <p className="mb-6">Saudi Arabia's vast desert terrain presents both challenges and opportunities for <strong className="text-white">seismic exploration drone technology</strong>. <strong className="text-white">Energy exploration drone solutions</strong> can cover enormous areas of the Rub' al Khali and northern desert terrains far more cost-effectively than ground crews. <strong className="text-white">Subsurface mapping LiDAR</strong> deployed on drones provides structural mapping at resolution levels that guide both seismic survey design and geological model building.</p>

          <p className="mb-6">The Kingdom's clear skies, relatively flat terrain in key exploration areas, and existing UAV regulatory frameworks make it an ideal environment for advanced drone-based acquisition programmes.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">GCC Expansion: Beyond Saudi Arabia</h2>

          <p className="mb-6">The demand for AI subsurface exploration platforms extends across the entire GCC region. The UAE's ADNOC is investing heavily in AI-powered exploration and production optimisation. Kuwait Oil Company is modernising its reservoir characterisation workflows. Qatar is expanding its world-class gas resources with advanced subsurface analytics. Across the GCC, the convergence of vast hydrocarbon resources, ambitious national development strategies, and strong capital availability creates an ideal environment for <strong className="text-white">digital seismic intelligence platform</strong> adoption.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">Saudi Arabia and the broader GCC region represent one of the most dynamic markets in the world for advanced geophysical technology. The combination of enormous resource scale, strategic Vision 2030 alignment, and strong operator investment capacity makes it the ideal environment for deploying AI-powered seismic intelligence at scale.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">SeismicAI's AI seismic interpretation software is designed for the scale and complexity of GCC energy exploration. Connect with our team at seismicai.ca.</span>
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

export default SeismicIntelligenceSaudiArabiaPage;
