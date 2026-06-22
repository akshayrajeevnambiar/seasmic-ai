import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_ai_transforming_seismic.png";

const HowSeismicAiDelivers10xFasterPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="howSeismicAiDelivers10xFaster" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-04-14T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Case Study", "Efficiency", "AI Interpretation"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Case Study</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Apr 14, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              How SeismicAI Delivers 10x Faster Interpretation — Case Study
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
          <img src={heroImg} alt="How SeismicAI Delivers 10x Faster Interpretation — Case Study" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">Speed matters in exploration. Every week that a prospect sits uninterpreted is a week of delayed decisions, extended capital exposure, and potential competitive disadvantage. When SeismicAI's team first presented a benchmark showing 10x faster interpretation cycle times, the number drew scepticism from experienced geophysicists. The data proved the claim — and then some.</p>

          <p className="mb-6">This case study explores how SeismicAI's platform achieves this performance, what it means for real exploration programmes, and why accuracy has not been sacrificed for speed.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Baseline: Traditional Interpretation</h2>

          <p className="mb-6">A typical 3D seismic interpretation project for a medium-complexity offshore prospect involves: initial data QC and conditioning (2–4 weeks), regional structural interpretation (4–8 weeks), detailed fault mapping (4–6 weeks), horizon picking and depth conversion (3–5 weeks), volumetric interpretation and reserve estimation (2–4 weeks). Total: 15–27 weeks for a single prospect.</p>

          <p className="mb-6">For exploration programmes evaluating multiple prospects simultaneously, this creates serious bottlenecks. Senior interpreters — already in short supply — become the limiting factor in portfolio evaluation throughput.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">SeismicAI's Approach</h2>

          <p className="mb-6">SeismicAI's <strong className="text-white">digital seismic intelligence platform</strong> automates the most time-consuming stages of the interpretation workflow using a combination of deep learning, physics-informed AI, and cloud-native computing infrastructure.</p>

          <p className="mb-6">The platform's <strong className="text-white">automated seismic data interpretation</strong> engine handles horizon picking across entire 3D volumes in hours, not weeks. Fault detection runs in parallel, delivering complete fault probability volumes without manual seed-picking. Facies classification and amplitude extraction workflows execute automatically, delivering interpretation-ready products that geoscientists can review and refine rather than building from scratch.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Numbers: What 10x Faster Actually Looks Like</h2>

          <p className="mb-6">On a representative offshore 3D dataset (2,000 km² survey, 4ms sample rate, moderate structural complexity):</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Initial QC and data ingestion: 2 hours (versus 2 weeks with traditional workflows)</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Automated horizon picking (5 major horizons): 4 hours (versus 3 weeks)</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">AI fault detection and probability volume: 6 hours (versus 4 weeks)</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Facies and amplitude extraction: 3 hours (versus 2 weeks)</h2>

          <p className="mb-6">Geoscientist review, QC, and refinement: 2 weeks (unchanged — this is where human expertise adds greatest value)</p>

          <p className="mb-6">Total platform-assisted timeline: 3–4 weeks versus 15–27 weeks for traditional methods. That is the 10x improvement — delivered consistently across diverse data types and geological settings.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Accuracy: No Trade-Off Required</h2>

          <p className="mb-6">Speed gains are worthless if accuracy suffers. SeismicAI's <strong className="text-white">AI seismic interpretation software</strong> achieves 95%+ accuracy on standard interpretation tasks versus expert human benchmarks. On fault detection specifically, the platform's deep learning models demonstrate superior performance to manual interpretation on complex fault networks, where human consistency degrades with structural complexity.</p>

          <p className="mb-6">The platform also quantifies interpretation uncertainty — delivering probability volumes rather than binary yes/no outputs. This allows geoscientists to understand which parts of an interpretation are robust and which warrant additional scrutiny.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Integration with Drone and LiDAR Acquisition</h2>

          <p className="mb-6">The 10x speed advantage compounds when SeismicAI's interpretation platform is paired with <strong className="text-white">energy exploration drone solutions</strong> for field data acquisition. <strong className="text-white">AI powered LiDAR drone for seismic surveying</strong> systems deliver cleaned, pre-processed data directly into SeismicAI's analytics pipeline, eliminating the data conditioning bottleneck that consumes 2–4 weeks at the start of traditional interpretation projects.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Business Impact</h2>

          <p className="mb-6">For a mid-sized E&P company evaluating a 10-prospect exploration portfolio, the difference between 20-week and 3-week interpretation cycles is transformative. With AI-assisted workflows, the same geoscience team can evaluate the entire portfolio in the time it would previously have taken to interpret two or three prospects. The result is better-informed drilling decisions, more competitive participation in licensing rounds, and a dramatic improvement in exploration capital efficiency.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">The 10x faster interpretation claim is not marketing language — it is a measurable, reproducible capability that SeismicAI delivers consistently across diverse datasets and geological settings. Combined with best-in-class accuracy, it represents a genuine step-change in exploration geoscience productivity.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">Ready to see what 10x faster looks like for your data? Contact SeismicAI at seismicai.ca and request a platform demonstration.</span>
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

export default HowSeismicAiDelivers10xFasterPage;
