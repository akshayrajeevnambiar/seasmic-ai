import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { animations } from "../../constants/design";

import heroImg from "../../assets/blog/blog_spatial_computing_1780200885096.png";

const SeismicAiSmallGeophysicsTeamsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO 
        pageKey="seismicAiSmallGeophysicsTeams" 
        type="article" 
        articleMeta={{
          publishedTime: "2026-06-09T00:00:00Z",
          author: "Seismic AI Insights Team",
          tags: ["Small Teams", "Geophysics SaaS", "ROI Optimization"]
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
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00E5FF]">Team Focus</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Jun 09, 2026</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight mb-8">
              SeismicAI for Small Geophysics Teams: Maximum ROI, Minimal Complexity
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
          <img src={heroImg} alt="SeismicAI for Small Geophysics Teams: Maximum ROI, Minimal Complexity" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6 max-w-screen-md mx-auto">
        <motion.div 
          {...animations.fadeInUp}
          className="article-content text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Introduction</h2>

          <p className="mb-8 text-xl text-gray-200">Enterprise-scale AI geophysics platforms have historically been just that — enterprise-scale. The price tags, implementation complexity, and support requirements of the industry's dominant software platforms have made them accessible only to major oil companies and well-funded E&P firms. Smaller exploration companies, independent operators, and boutique geoscience consultancies were left working with tools that simply could not compete.</p>

          <p className="mb-6">That landscape is changing. SeismicAI's cloud-native platform delivers enterprise-grade AI interpretation capability in a format designed for teams that prioritise agility, value, and ease of use over complexity.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">The Small Team Challenge</h2>

          <p className="mb-6">Small geophysics teams face a distinctive set of challenges. They typically operate with fewer than 10 geoscientists, often fewer than five. Every team member carries multiple roles. Budget cycles are tight. There is little tolerance for technology that requires months of implementation, expensive training programmes, or dedicated IT support.</p>

          <p className="mb-6">At the same time, small teams are often working on the most interesting and commercially sensitive projects — frontier exploration, small-field development, specialist consulting assignments. They need <strong className="text-white">AI seismic interpretation software</strong> that delivers world-class results without world-class complexity.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">What Makes SeismicAI Right for Small Teams</h2>

          <p className="mb-6">SeismicAI was designed from the ground up as a geophysics SaaS platform — not an enterprise product retrofitted for smaller customers. This architectural choice has important practical implications:</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Fast Onboarding:</strong> A new user can be productive on the platform within days, not months.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">No Hardware Investment:</strong> Cloud-native deployment means teams access enterprise GPU computing without buying a single server.</span>
            </li>
          </ul>

          <p className="mb-6">Pay-As-You-Use Pricing: Costs scale with usage, not with headcount. A team that processes one survey per quarter pays for one survey's worth of computing — not a year-round enterprise licence.</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">Automatic Updates:</strong> AI models improve continuously, and every improvement is immediately available to every user.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0"></div>
              <span><strong className="text-white">No IT Overhead:</strong> The platform is fully managed; teams focus on geoscience, not system administration.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">AI Capabilities That Level the Playing Field</h2>

          <p className="mb-6">Small teams using SeismicAI access exactly the same <strong className="text-white">automated seismic data interpretation</strong> capabilities as major operators. AI core scanning and logging tools, deep learning fault detection, automated horizon picking, and facies classification — all of the capabilities that previously required large interpretation teams and expensive software suites are available through a single, intuitive platform interface.</p>

          <p className="mb-6">This levels the playing field in fundamental ways. A three-person geoscience consultancy using SeismicAI's <strong className="text-white">AI geoscience analytics solutions</strong> can deliver interpretation quality and turnaround times that compete directly with the geoscience departments of much larger operators.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Drone Integration for Field-Ready Teams</h2>

          <p className="mb-6">Many smaller exploration teams conduct their own field data acquisition or work closely with acquisition contractors. SeismicAI's seamless integration with <strong className="text-white">seismic exploration drone technology</strong> and LiDAR seismic survey platforms means that field data flows directly into the AI interpretation pipeline — eliminating the processing bottlenecks that consume time and budget between acquisition and interpretation.</p>

          <p className="mb-6">For smaller operators in Canada, Australia, and East Africa who are exploring areas where conventional seismic acquisition is prohibitively expensive, <strong className="text-white">energy exploration drone solutions</strong> combined with SeismicAI's cloud analytics represent a genuinely transformative capability that opens up exploration opportunities previously beyond reach.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Real ROI for Lean Budgets</h2>

          <p className="mb-6">The ROI calculation for small teams adopting AI subsurface exploration platforms is compelling. Consider a three-person geophysical consultancy that previously spent 12 weeks manually interpreting a 3D dataset:</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">With SeismicAI: automated stages complete in 2 days; geoscientist QC and refinement takes 2 weeks</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Time saved: 10 weeks of senior geophysicist time per project</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Value of recovered time at market rates: $50,000–$100,000 per project</h2>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Additional projects evaluable per year: 2–3 additional assignments</h2>

          <p className="mb-6">The platform pays for itself many times over on the first project. And as the team's familiarity with AI-assisted workflows deepens, the productivity advantage compounds.</p>

          <h2 className="text-3xl font-space font-bold text-white mt-12 mb-6">Conclusion</h2>

          <p className="mb-6">The democratisation of AI-powered geophysical analytics is one of the most significant shifts in the exploration industry in a generation. Small teams no longer need to accept a technology disadvantage relative to larger operators. SeismicAI delivers the full power of enterprise AI geophysics in a platform designed for teams that value simplicity, flexibility, and genuine value for money.</p>

          <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-300">Ready to see what SeismicAI's digital seismic intelligence platform can do for your team?  and start your free exploration today.</span>
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

export default SeismicAiSmallGeophysicsTeamsPage;
