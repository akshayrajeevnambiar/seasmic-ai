import { motion } from "framer-motion";

// Import recognition logos
import nottinghamLogo from "../assets/nottingham-uni-logo.png";
import britishEmbassyLogo from "../assets/british-embassy-logo.png";
import mitLogo from "../assets/mit-logo.png";
import ventureFestLogo from "../assets/venture-fest-logo.jpg";
import iitBombayLogo from "../assets/iit-bombay-logo.jpg";
import oxfordLogo from "../assets/oxford-logo.jpg";

const Recognitions = () => {
  const recognitions = [
    {
      logo: nottinghamLogo,
      title: "University of Nottingham",
      description: "Endorsed by the University of Nottingham 2014",
      alt: "University of Nottingham Logo",
    },
    {
      logo: britishEmbassyLogo,
      title: "British Embassy",
      description: "Entrepreneur Endorsed in 2015 & 2016",
      alt: "British Embassy Logo",
    },
    {
      logo: mitLogo,
      title: "MIT",
      description: "MIT GSW Global Start-Up Entrepreneurship Scholar 2016",
      alt: "Massachusetts Institute of Technology Logo",
    },
    {
      logo: ventureFestLogo,
      title: "VentureFest",
      description: "Top 20 Pitch deck in Venture Fest Feb 2016",
      alt: "VentureFest Logo",
    },
    {
      logo: iitBombayLogo,
      title: "IIT Bombay",
      description: "Core- Team Members are from IIT-B",
      alt: "IIT Bombay Logo",
    },
    {
      logo: oxfordLogo,
      title: "Oxford Entrepreneurs",
      description: "Member at Oxford Entrepreneurs",
      alt: "Oxford Entrepreneurs Logo",
    },
  ];

  return (
    <section className="py-20 bg-design-black">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Current <span className="text-neon font-bold">Recognitions</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Trusted and recognized by leading institutions worldwide for our
            innovative approach to seismic exploration technology.
          </motion.p>
        </motion.div>

        {/* Recognition Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              className="glass-panel p-8 rounded-2xl group hover:border-neon/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Logo Container */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-white/15 transition-all duration-300">
                  <img
                    src={recognition.logo}
                    alt={recognition.alt}
                    loading="lazy"
                    className="max-w-16 max-h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3 font-inter group-hover:text-neon transition-colors duration-300">
                  {recognition.title}
                </h3>
                <p className="text-muted leading-relaxed font-inter text-sm">
                  {recognition.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
