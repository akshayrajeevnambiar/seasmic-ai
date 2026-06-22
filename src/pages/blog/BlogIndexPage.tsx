import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

import img1 from "../../assets/blog/blog_peak_oil_demand_1780200815263.png";
import img2 from "../../assets/blog/blog_iot_oil_gas_1780200831040.png";
import img3 from "../../assets/blog/blog_industry_outlook_1780200850086.png";
import img4 from "../../assets/blog/blog_future_oil_gas_1780200870943.png";
import img5 from "../../assets/blog/blog_spatial_computing_1780200885096.png";
import imgSeismicDataAnalysis from "../../assets/blog/blog_seismic_data_analysis.png";
import imgAiTransformingSeismic from "../../assets/blog/blog_ai_transforming_seismic.png";
import imgHiddenCostTraditional from "../../assets/blog/blog_hidden_cost_traditional.png";
import imgDeepLearningFault from "../../assets/blog/blog_deep_learning_fault.png";
import imgLidarBeamScanning from "../../assets/blog/blog_lidar_beam_scanning.png";

const blogPosts = [
  {
    id: 1,
    title: "Peak Oil Demand: A Decade Away and Opportunities for Drilling Innovation..",
    excerpt: "Goldman Sachs forecasts peak oil demand is still a decade away. Discover opportunities for drilling innovation and advanced sensor technology.",
    image: img1,
    link: "/blog/peak-oil-demand",
    date: "November 25, 2025"
  },
  {
    id: 2,
    title: "Leveraging IoT in Oil & Gas: Driving Efficiency with Intelligent Sensors",
    excerpt: "Learn how intelligent sensors and IoT are driving efficiency, operational optimization, and predictive maintenance in the energy sector.",
    image: img2,
    link: "/blog/iot-in-oil-and-gas",
    date: "November 26, 2025"
  },
  {
    id: 3,
    title: "2026 Oil & Gas Industry Outlook: Digital Transformation in Canada",
    excerpt: "Explore the accelerating digital transformation of the oil and gas sector in Canada, featuring AI, IoT, and advanced sensor systems.",
    image: img3,
    link: "/blog/industry-outlook-2026",
    date: "November 27, 2025"
  },
  {
    id: 4,
    title: "The Future of Canadian Oil & Gas: Digital Innovation and Strategic Transformation",
    excerpt: "Discover the key trends shaping the Canadian oil and gas industry: digital transformation, sustainability, and operational resilience.",
    image: img4,
    link: "/blog/future-canadian-oil-and-gas",
    date: "November 28, 2025"
  },
  {
    id: 5,
    title: "Spatial Computing & Digital Twins in Energy",
    excerpt: "Unlock new industry advantages with spatial computing, LiDAR, and digital twin simulations for precision oil and gas operations.",
    image: img5,
    link: "/blog/spatial-computing-digital-twins",
    date: "November 29, 2025"
  },
  {
    id: 6,
    title: "What Is Seismic Data Analysis? A Beginner's Guide",
    excerpt: "Discover what seismic data analysis is, how it works, and why AI is transforming subsurface mapping and energy exploration.",
    image: imgSeismicDataAnalysis,
    link: "/blog/what-is-seismic-data-analysis",
    date: "January 15, 2026"
  },
  {
    id: 7,
    title: "How AI Is Transforming Seismic Interpretation in 2026",
    excerpt: "Learn how machine learning, deep learning, and automated processing are revolutionizing geophysics, cutting interpretation cycle times by 10x.",
    image: imgAiTransformingSeismic,
    link: "/blog/how-ai-is-transforming-seismic-interpretation",
    date: "January 28, 2026"
  },
  {
    id: 8,
    title: "The Hidden Cost of Traditional Seismic Exploration — And How AI Fixes It",
    excerpt: "Uncover the massive hidden costs of legacy workflows, manual interpretations, and how AI platforms deliver real exploration ROI.",
    image: imgHiddenCostTraditional,
    link: "/blog/hidden-cost-of-traditional-seismic-exploration",
    date: "February 12, 2026"
  },
  {
    id: 9,
    title: "Deep Learning for Seismic Fault Detection: A Technical Overview",
    excerpt: "Dive deep into how convolutional neural networks (CNNs) automate 3D seismic fault mapping with over 95% accuracy.",
    image: imgDeepLearningFault,
    link: "/blog/deep-learning-for-seismic-fault-detection",
    date: "February 25, 2026"
  },
  {
    id: 10,
    title: "LiDAR Beam Scanning vs. Traditional Seismic Surveys: A Side-by-Side",
    excerpt: "A detailed comparison of LiDAR drone technology versus traditional ground seismic surveys on speed, cost, and environmental impact.",
    image: imgLidarBeamScanning,
    link: "/blog/lidar-beam-scanning-vs-traditional-seismic-surveys",
    date: "March 10, 2026"
  },
  {
    id: 11,
    title: "AI in Canadian Oil Sands Exploration: Opportunities & Challenges",
    excerpt: "Explore how AI geophysics, drone surveying, and intelligent analytics are modernizing bitumen reservoir characterization in Alberta's oil sands.",
    image: img4,
    link: "/blog/ai-in-canadian-oil-sands-exploration",
    date: "March 24, 2026"
  },
  {
    id: 12,
    title: "How SeismicAI Delivers 10x Faster Interpretation — Case Study",
    excerpt: "A case study demonstrating how automated horizon picking and AI fault detection compress exploration timelines from months to days.",
    image: imgAiTransformingSeismic,
    link: "/blog/how-seismicai-delivers-10x-faster-interpretation",
    date: "April 14, 2026"
  },
  {
    id: 13,
    title: "Seismic Intelligence for Saudi Arabia's Oil & Gas Sector",
    excerpt: "Discover how AI-powered geophysical intelligence is supporting Saudi Vision 2030 and GCC energy exploration.",
    image: img3,
    link: "/blog/seismic-intelligence-for-saudi-arabias-oil-and-gas-sector",
    date: "April 27, 2026"
  },
  {
    id: 14,
    title: "The Benefits of AI-Powered Geophysical Analytics for E&P Companies",
    excerpt: "A comprehensive business case detailing how AI analytics reduce drilling risk, accelerate timelines, and lower operating costs for E&P firms.",
    image: imgSeismicDataAnalysis,
    link: "/blog/benefits-of-ai-powered-geophysical-analytics",
    date: "May 12, 2026"
  },
  {
    id: 15,
    title: "Cloud-Based Seismic Interpretation: Why the Industry Is Shifting",
    excerpt: "Examine the technical and collaborative benefits driving the geophysics industry to cloud-native SaaS interpretation platforms.",
    image: img2,
    link: "/blog/cloud-based-seismic-interpretation",
    date: "May 26, 2026"
  },
  {
    id: 16,
    title: "SeismicAI for Small Geophysics Teams: Maximum ROI, Minimal Complexity",
    excerpt: "How boutique geoscience consultancies and lean operators leverage cloud-native AI tools to level the playing field against major oil firms.",
    image: img5,
    link: "/blog/seismicai-for-small-geophysics-teams",
    date: "June 09, 2026"
  }
];

const BlogIndexPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedBlogPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-black text-white min-h-screen font-inter" role="main">
      <SEO pageKey="blogIndex" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-y-[-50%] -translate-x-1/2"></div>

        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <BookOpen className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-sm font-medium text-gray-300">Insights & Innovations</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Seismic AI Blog</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore the latest insights, industry trends, and technological breakthroughs shaping the future of energy exploration, geophysical intelligence, and AI-driven data analytics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl border border-white/[0.08] hover:border-[#00E5FF]/50 transition-colors group bg-black/40 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-[#00E5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay duration-500"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-[#00E5FF] mb-3 font-medium">{post.date}</div>
                <h2 className="text-2xl font-space font-bold mb-3 text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={post.link}
                  className="inline-flex items-center space-x-2 text-white font-medium group-hover:text-[#00E5FF] transition-colors mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-white/[0.08] bg-white/[0.02]">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on AI, spatial computing, and digital transformation in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-black/50 border border-white/[0.1] rounded-md px-6 py-4 text-white focus:outline-none focus:border-[#00E5FF] flex-grow transition-colors"
            />
            <button className="btn-primary flex items-center justify-center gap-2 px-8 py-4 bg-[#00E5FF] text-black font-semibold rounded-md hover:bg-white transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogIndexPage;
