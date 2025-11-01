import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { animations } from "../constants/design";
import seismicaLogo from "../assets/seismica-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    "Seismic Surveying",
    "LiDAR Drone Technology",
    "AI Data Analytics",
    "Digital Terrain Mapping",
    "Energy Exploration",
    "Environmental Impact Assessment",
    "Remote Sensing Solutions",
    "Geophysical Intelligence",
  ];

  const company = [
    { name: "Our Team", link: "#team" },
    { name: "Advanced Technology", link: "#technology" },
    { name: "Current Recognitions", link: "#recognitions" },
    { name: "Seismic Intelligence", link: "#solution" },
  ];

  const handleNavigation = (link: string) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on homepage, just scroll to section
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div className="lg:col-span-2" {...animations.minimal}>
              <div className="flex items-center mb-6">
                <img
                  src={seismicaLogo}
                  alt="Seismic AI Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <p className="text-muted mb-8 leading-relaxed font-inter text-lg">
                We design and deploy intelligent LiDAR systems for energy
                companies navigating exploration complexity.
              </p>
            </motion.div>

            {/* Services Column */}
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
              <h3 className="text-white font-semibold mb-6 font-space text-lg">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted hover:text-neon transition-colors duration-300 font-inter"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
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
              <h3 className="text-white font-semibold mb-6 font-space text-lg">
                Company
              </h3>
              <ul className="space-y-3 mb-6">
                {company.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(item.link)}
                      className="text-muted hover:text-neon transition-colors duration-300 font-inter text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Legal & Compliance Links */}
              <div className="space-y-3 mb-8">
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon transition-colors duration-300 font-inter font-medium block"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon transition-colors duration-300 font-inter font-medium block"
                >
                  Terms of Use
                </a>
                <a
                  href="/ethics-ai-transparency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon hover:text-white transition-colors duration-300 font-inter font-medium block"
                >
                  Ethics & AI Transparency
                </a>
              </div>

              {/* Connect Section */}
              <h3 className="text-white font-semibold mb-6 font-space text-lg">
                Connect
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-muted font-inter">Contact</span>
                </div>
                <a
                  href="mailto:hello@seismicai.ca"
                  className="text-neon hover:text-white transition-colors duration-300 font-inter flex items-center space-x-2"
                >
                  <Mail size={16} />
                  <span>hello@seismicai.ca</span>
                </a>
                <a
                  href="#contact"
                  className="text-muted hover:text-neon transition-colors duration-300 font-inter block"
                >
                  Start a Conversation
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/[0.08] py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted text-sm font-inter">
              © 2025 Seismic AI. All rights reserved.
            </p>

            {/* Developer Credit */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-muted font-inter">
                Developed by{" "}
                <span className="text-neon hover:text-white transition-colors duration-300">
                  Akshay Rajeev Nambiar
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
