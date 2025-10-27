import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { animations } from "../constants/design";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    solutions: [
      { name: "Technology", href: "#technology" },
      { name: "Features", href: "#features" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "API Documentation", href: "/docs" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/resources" },
      { name: "Webinars", href: "/webinars" },
      { name: "Support", href: "/support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Sustainability Policy", href: "/sustainability" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
    { name: "Twitter", href: "#", icon: <Twitter size={20} /> },
    { name: "YouTube", href: "#", icon: <Youtube size={20} /> },
    {
      name: "Email",
      href: "mailto:contact@seismic-ai.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div {...animations.minimal}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 border border-neon/30 rounded-lg flex items-center justify-center">
                    <span className="text-neon font-bold text-sm font-space">
                      S
                    </span>
                  </div>
                  <span className="text-xl font-bold text-white font-space tracking-wide">
                    Seismic AI
                  </span>
                </div>

                <p className="text-muted mb-6 leading-relaxed font-inter">
                  Revolutionizing energy exploration with AI-powered LiDAR drone
                  technology. Delivering faster, safer, and more sustainable
                  seismic intelligence.
                </p>

                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass-panel border border-white/[0.08] hover:border-neon/30 rounded-lg flex items-center justify-center text-muted hover:text-neon transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 font-space">
                  Company
                </h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-neon transition-colors duration-300 text-sm font-inter"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 font-space">
                  Solutions
                </h3>
                <ul className="space-y-2">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-neon transition-colors duration-300 text-sm font-inter"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 font-space">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-neon transition-colors duration-300 text-sm font-inter"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 font-space">
                  Legal
                </h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-neon transition-colors duration-300 text-sm font-inter"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Thin neon line divider */}
        <div className="neon-line" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted text-sm font-inter">
              © 2025 Seismic AI. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted font-inter">
              <span>Made with ❤️ in Calgary, Canada</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                <span>Operational</span>
              </div>
            </div>
          </div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="pt-4 border-t border-white/[0.05] mt-4"
          >
            <div className="text-center">
              <p className="text-xs text-muted/70 font-inter">
                Developed by{" "}
                <span className="text-neon font-medium hover:text-[#C8FF35] transition-colors duration-300 cursor-default">
                  Akshay Rajeev Nambiar
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
