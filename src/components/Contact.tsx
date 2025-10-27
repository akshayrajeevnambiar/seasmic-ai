import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { animations } from "../constants/design";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      detail: "Calgary, Alberta, Canada",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (403) 555-0123",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "contact@seismic-ai.com",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Partner with <span className="text-neon">Seismic AI</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Ready to revolutionize your seismic operations? Let's discuss how we
          can transform your exploration capabilities.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="glass-panel neon-border-t p-8">
            <h3 className="text-2xl font-bold mb-6 text-white font-space">
              Request a Demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-2 font-inter"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-lg text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors duration-300 font-inter"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-muted mb-2 font-inter"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-lg text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors duration-300 font-inter"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted mb-2 font-inter"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-lg text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors duration-300 font-inter"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted mb-2 font-inter"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-lg text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors duration-300 resize-none font-inter"
                  placeholder="Tell us about your exploration needs..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-3 flex items-center justify-center gap-3 font-semibold font-inter"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-panel neon-border-t p-8">
            <h3 className="text-2xl font-bold mb-6 text-white font-space">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 border border-neon/30 rounded-lg flex items-center justify-center">
                    <info.icon size={18} className="text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-space">
                      {info.title}
                    </h4>
                    <p className="text-muted text-sm font-inter">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
