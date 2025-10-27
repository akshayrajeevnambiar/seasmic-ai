import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

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
    { name: "LinkedIn", href: "#", icon: <Linkedin size={24} /> },
    { name: "Twitter", href: "#", icon: <Twitter size={24} /> },
    { name: "YouTube", href: "#", icon: <Youtube size={24} /> },
    {
      name: "Email",
      href: "mailto:contact@seismic-ai.com",
      icon: <Mail size={24} />,
    },
  ];

  return (
    <footer className="bg-dark-950 relative">
      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-dark-950 font-bold text-lg">S</span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    Seismic AI
                  </span>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  Revolutionizing energy exploration with AI-powered LiDAR drone
                  technology. Delivering faster, safer, and more sustainable
                  seismic intelligence.
                </p>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        boxShadow: "0 0 25px rgba(255, 176, 58, 0.6)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-xl flex items-center justify-center text-white/70 hover:text-dark-950 transition-all duration-300 relative group"
                    >
                      {/* Glow effect background */}
                      <motion.div
                        className="absolute inset-0 bg-primary-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="relative z-10">{social.icon}</span>
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
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary-500 transition-colors duration-300"
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
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary-500 transition-colors duration-300"
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
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary-500 transition-colors duration-300"
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
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary-500 transition-colors duration-300"
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

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2025 Seismic AI. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Made with ❤️ in Calgary, Canada</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
