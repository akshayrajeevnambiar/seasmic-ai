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

const blogPosts = [
  {
    id: 1,
    title: "Peak Oil Demand: A Decade Away and Opportunities for Drilling Innovation",
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
  }
];

const BlogIndexPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {blogPosts.map((post, idx) => (
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
