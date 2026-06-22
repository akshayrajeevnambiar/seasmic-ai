import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_lidar_beam_scanning.png";

const LidarBeamVsTraditionalSeismicPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="lidarBeamVsTraditionalSeismic" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-03-10T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["LiDAR", "Seismic Survey", "Drone Tech"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Tech Comparison</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Mar 10, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              LiDAR Beam Scanning vs. Traditional Seismic Surveys: A Side-by-Side Comparison
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
          <img src={heroImg} alt="LiDAR Beam Scanning vs. Traditional Seismic Surveys: A Side-by-Side Comparison" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">The way energy companies acquire subsurface data is undergoing a fundamental transformation. <strong className="text-white">Seismic exploration drone technology</strong> equipped with <strong className="text-white">subsurface mapping LiDAR</strong> is challenging — and in many applications, outperforming — the conventional seismic survey methods that have dominated the industry for decades.</p>

          <p className="mb-6">This comparison breaks down both approaches across the factors that matter most to exploration teams: data quality, cost, speed, environmental impact, and integration with AI analytics.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">What Is Traditional Seismic Surveying?</h2>

          <p className="mb-6">Traditional land seismic surveys deploy large crews with vibroseis trucks (or explosive sources) and thousands of geophones across a survey area. Marine surveys use airguns and hydrophone streamers towed behind vessels. These methods generate acoustic waves that penetrate the Earth and reflect off subsurface boundaries, producing data used to image geological structures at depth.</p>

          <p className="mb-6">These methods are proven, mature, and capable of imaging structures several kilometres below surface. However, they are also expensive, slow, logistically complex, and environmentally disruptive.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">What Is LiDAR Beam Scanning for Exploration?</h2>

          <p className="mb-6">LiDAR seismic survey platforms use light detection and ranging (LiDAR) technology mounted on drones or aircraft to acquire high-resolution topographic and structural data. Modern <strong className="text-white">AI powered LiDAR drone for seismic surveying</strong> systems can also carry additional sensors — magnetic, gravimetric, electromagnetic — creating multi-physics datasets from a single deployment.</p>

          <p className="mb-6">In exploration contexts, LiDAR provides exceptional surface and near-surface characterisation, identifies structural lineaments and geological features visible at surface, and generates high-resolution digital elevation models that guide both survey design and subsequent drilling operations.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Side-by-Side Comparison</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Cost:</strong> Traditional surveys — $500K to $10M+ depending on crew size, terrain, and duration. LiDAR drone surveys — typically 40–60% lower total acquisition cost.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Speed:</strong> Traditional surveys — weeks to months for acquisition alone. LiDAR drone surveys — days to weeks, with near-real-time data streaming possible.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Environmental Impact:</strong> Traditional surveys — significant ground disturbance, vegetation clearance, heavy equipment access roads. LiDAR drone surveys — minimal ground disturbance; genuinely an environmentally friendly seismic survey alternative.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Depth Penetration:</strong> Traditional surveys — kilometres of depth penetration. LiDAR — primarily surface and shallow near-surface imaging. (Note: used in combination with other methods for full-depth characterisation.)</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Data Resolution:</strong> Traditional surveys — resolution typically in the 5–30 metre range. LiDAR — centimetre-scale surface resolution, capturing structural details invisible to conventional surveys.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Access to Difficult Terrain:</strong> Traditional surveys — limited by terrain; helicopter or foot access required in remote areas. LiDAR drones — can survey virtually any terrain, including Arctic, equatorial forest, and steep mountain environments.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Integration with AI:</strong> Traditional surveys — data formats may require conversion for AI workflows. LiDAR drone data — natively optimised for ingestion into AI analytics pipelines.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Where LiDAR Drone Technology Excels</h2>

          <p className="mb-6"><strong className="text-white">Oil and gas exploration drones</strong> with LiDAR capability deliver decisive advantages in several specific scenarios:</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Remote or environmentally sensitive exploration areas where traditional crews cannot operate</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Early-stage reconnaissance surveys to prioritise areas for full seismic acquisition</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Structural mapping in tectonically complex areas where surface geology guides subsurface prediction</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Integration with satellite data and AI to create multi-scale exploration models</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Rapid re-survey of previously explored areas to integrate with legacy seismic data</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Integrated Approach</h2>

          <p className="mb-6">The most effective exploration programmes use <strong className="text-white">energy exploration drone solutions</strong> and traditional seismic methods as complements, not competitors. LiDAR drone surveys provide the high-resolution surface framework; conventional seismic provides the deep subsurface image. Together, integrated and interpreted by a <strong className="text-white">digital seismic intelligence platform</strong>, they deliver a richer, more complete picture of exploration potential than either method alone.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">LiDAR beam scanning and AI-enabled drone technology represent the leading edge of a revolution in exploration data acquisition. For many applications, they are already more cost-effective, faster, and less environmentally disruptive than conventional methods. As integration with AI analytics deepens, their role in the exploration toolkit will only grow.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">SeismicAI combines AI based geophysical surveying with next-generation LiDAR drone technology. Discover the full platform at seismicai.ca.</span>
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

export default LidarBeamVsTraditionalSeismicPage;
