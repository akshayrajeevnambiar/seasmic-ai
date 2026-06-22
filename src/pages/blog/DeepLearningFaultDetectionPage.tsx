import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_deep_learning_fault.png";

const DeepLearningFaultDetectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="deepLearningFaultDetection" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-02-25T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Fault Detection", "Deep Learning", "CNN"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Technical Analysis</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Feb 25, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              Deep Learning for Seismic Fault Detection: A Technical Overview
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
          <img src={heroImg} alt="Deep Learning for Seismic Fault Detection: A Technical Overview" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">Fault detection is one of the most critical — and most challenging — tasks in seismic interpretation. Faults define the structural traps where hydrocarbons accumulate. They also represent geohazards that can compromise well integrity and production infrastructure. Getting fault interpretation right is not optional.</p>

          <p className="mb-6">Traditionally, identifying fault networks in 3D seismic volumes required weeks of expert manual work. Deep learning has changed the game entirely.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Why Fault Detection Is Hard</h2>

          <p className="mb-6">Seismic faults can range from kilometre-scale structures clearly visible in data to subtle sub-seismic features that exist below the resolution of conventional surveys. Noise, multiples, and processing artefacts all complicate interpretation. And in structurally complex areas — fold-thrust belts, salt-dominated basins, deep-water fans — the challenge escalates significantly.</p>

          <p className="mb-6">Human experts can interpret major faults reliably, but consistency degrades as fault complexity increases and data quality decreases. This is exactly where AI excels.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">How Convolutional Neural Networks Detect Faults</h2>

          <p className="mb-6"><strong className="text-white">AI seismic interpretation software</strong> built on convolutional neural networks (CNNs) approaches fault detection as an image segmentation problem. The network is trained on labelled seismic volumes — data where expert geophysicists have already marked fault locations — and learns to recognise the subtle amplitude and waveform patterns associated with fault surfaces.</p>

          <p className="mb-6">Once trained, these networks can scan entire 3D seismic volumes in hours, producing probability volumes that highlight fault locations with spatial precision that matches or exceeds human performance — and does so consistently across the entire dataset.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">From 2D to 3D: The Dimensionality Advantage</h2>

          <p className="mb-6">One of the most powerful capabilities of modern deep learning fault detection is its ability to work in true 3D space. Human interpreters typically work slice-by-slice through a seismic volume — a 2D view of a 3D reality. AI systems process the full 3D context simultaneously, allowing them to track fault surfaces through complex geometries that would be difficult or impossible to follow manually.</p>

          <p className="mb-6">This 3D spatial reasoning capability is a core feature of SeismicAI's <strong className="text-white">AI subsurface exploration platform</strong>, which delivers complete fault network models rather than isolated 2D picks.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Training Data: The Foundation of Performance</h2>

          <p className="mb-6">The quality of a deep learning fault detection system depends critically on the quality and diversity of its training data. Systems trained only on high-quality data from a specific basin can fail when applied to different geological settings or noisier datasets.</p>

          <p className="mb-6">The most robust <strong className="text-white">AI geoscience analytics solutions</strong> are trained on diverse, global datasets spanning multiple geological settings, survey vintages, and data qualities. This breadth of training creates models that generalise reliably to new datasets rather than overfitting to familiar patterns.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Physics-Informed AI: Bridging Data and Geology</h2>

          <p className="mb-6">Pure data-driven approaches have important limitations — they can find statistically consistent patterns without geological meaning. The next generation of fault detection AI incorporates geological and physical constraints directly into network architectures, ensuring that detected faults are geologically plausible, not just mathematically consistent.</p>

          <p className="mb-6">This physics-informed approach is central to <strong className="text-white">automated seismic data interpretation</strong> systems that geoscientists can trust — not just as black-box outputs, but as geologically validated interpretations that integrate with existing workflows.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Integration with Acquisition Technology</h2>

          <p className="mb-6">Deep learning fault detection is only as good as the data it receives. <strong className="text-white">AI powered LiDAR drone for seismic surveying</strong> technology is improving data quality at the acquisition stage — reducing noise, improving spatial sampling, and enabling surveys in areas previously inaccessible to conventional methods.</p>

          <p className="mb-6">When high-quality drone-acquired data feeds directly into <strong className="text-white">real-time seismic data analytics</strong> and deep learning interpretation pipelines, the result is a step-change in the completeness and accuracy of fault models delivered to interpretation teams.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Practical Benefits for Exploration Teams</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Fault interpretation time reduced from weeks to hours</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Consistent fault picking across entire 3D volumes</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Detection of subtle faults previously missed by manual interpretation</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Automated probability volumes that quantify interpretation uncertainty</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Seamless integration into geological modelling workflows</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">Deep learning has transformed seismic fault detection from one of the most time-consuming stages of subsurface interpretation into a near-automated process that delivers better results faster. For exploration teams facing competitive pressure to evaluate prospects quickly and accurately, AI-powered fault detection is no longer a future technology — it is a present-day operational advantage.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">SeismicAI's AI based geophysical surveying platform includes state-of-the-art deep learning fault detection. See it in action at seismicai.ca.</span>
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

export default DeepLearningFaultDetectionPage;
