import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_future_oil_gas_1780200870943.png";

const AiCanadianOilSandsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="aiCanadianOilSands" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-03-24T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Oil Sands", "Alberta", "Canada Geophysics"]
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
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Mar 24, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              AI in Canadian Oil Sands Exploration: Opportunities and Challenges
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
          <img src={heroImg} alt="AI in Canadian Oil Sands Exploration: Opportunities and Challenges" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">Canada's oil sands — centred in Alberta's Athabasca, Cold Lake, and Peace River deposits — represent the third-largest proven oil reserve in the world, holding an estimated 165 billion barrels of recoverable bitumen. Yet extracting this resource efficiently and responsibly has always demanded sophisticated geoscience and engineering.</p>

          <p className="mb-6">In 2026, artificial intelligence is reshaping how operators explore, characterise, and develop these deposits — and how Canada maintains its position as a leading global energy supplier.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Unique Challenges of Oil Sands Geophysics</h2>

          <p className="mb-6">Oil sands exploration presents geological challenges that differ significantly from conventional hydrocarbon exploration. Bitumen-saturated sands occupy relatively shallow formations (typically 200–700 metres depth), but their heterogeneity, fluid sensitivity, and relationship to overburden geology demand high-resolution, multi-component seismic characterisation.</p>

          <p className="mb-6">Traditional seismic surveys in northern Alberta also face significant logistical challenges — remote access, muskeg terrain, seasonal operating windows, and growing Indigenous rights considerations. This is where <strong className="text-white">seismic exploration drone technology</strong> and environmentally friendly seismic survey approaches are finding strong adoption.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">How AI Is Changing the Game</h2>

          <p className="mb-6"><strong className="text-white">AI seismic interpretation software</strong> is delivering measurable advantages across multiple stages of oil sands geoscience:</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Reservoir Mapping:</strong> AI-powered facies classification identifies bitumen-saturated zones with higher accuracy than conventional amplitude analysis, reducing the risk of drilling into poor-quality reservoir.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Steam Chamber Monitoring:</strong> 4D seismic monitoring of SAGD (Steam Assisted Gravity Drainage) operations benefits enormously from AI-automated time-lapse interpretation, enabling real-time production optimisation.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Overburden Characterisation:</strong> AI analysis of near-surface seismic data identifies geohazards and weak zones in the overburden — critical for safe operations in areas with shallow gas.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Environmental Monitoring:</strong> AI-powered seismic monitoring detects induced seismicity and ground deformation, supporting regulatory compliance and community trust.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Drone and LiDAR Applications in the Oil Sands</h2>

          <p className="mb-6">Northern Alberta's terrain has historically made high-quality seismic acquisition expensive and environmentally damaging. <strong className="text-white">Oil and gas exploration drones</strong> equipped with <strong className="text-white">subsurface mapping LiDAR</strong> are now enabling survey programmes that would have been impractical or uneconomic with conventional crews.</p>

          <p className="mb-6">LiDAR drone surveys can operate year-round in conditions that ground crews cannot, including during spring breakup when heavy equipment access is impossible. They produce centimetre-resolution digital terrain models that improve survey design, reduce ground disturbance, and support reclamation planning.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Economic Impact</h2>

          <p className="mb-6">For oil sands operators, the economics of AI adoption are compelling. <strong className="text-white">Real-time seismic data analytics</strong> and automated interpretation reduce the cost and time of reservoir characterisation studies from months to weeks. Better reservoir definition translates directly to optimised well placement, improved steam injection efficiency, and higher recovery factors — each percentage point of improved recovery representing billions of dollars of additional value across a major oil sands project.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Challenges to Adoption</h2>

          <p className="mb-6">Despite the clear benefits, AI adoption in Canadian oil sands geoscience faces real challenges. Data quality variability — particularly in older vintage seismic datasets acquired before modern processing standards — can limit AI model performance. Integration with existing operator workflows and legacy data management systems requires careful change management.</p>

          <p className="mb-6">There is also the question of model explainability. Experienced geophysicists need to understand why an AI system reached a particular interpretation, not just accept its outputs. The most effective AI platforms provide transparent workflows and uncertainty quantification alongside their results.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Path Forward</h2>

          <p className="mb-6">The convergence of AI core scanning and logging tools, cloud-native AI subsurface exploration platforms, and next-generation drone acquisition technology is creating a step-change in oil sands geoscience capability. Companies that invest in this technology stack now will have a significant competitive advantage as the industry pushes further into challenging reserve areas and demands ever-higher operational efficiency.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">Canada's oil sands are entering a new era of intelligent development. AI-powered seismic analytics, combined with drone acquisition technology and environmentally responsible survey practices, are enabling operators to do more with less — extracting more value from existing assets while reducing environmental impact and cost.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">SeismicAI's AI based geophysical surveying platform is built for the demands of complex Canadian energy exploration. Learn more at seismicai.ca.</span>
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

export default AiCanadianOilSandsPage;
