import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Jude Tharakan",
      role: "CEO & Co-founder",
      background: "Former Energy Innovation Lead at Shell",
      image: "/assets/team/jude-tharakan.jpg",
      bio: "15+ years in energy tech with expertise in digital transformation and AI implementation.",
      social: {
        linkedin: "#",
        email: "jude@seismic-ai.com",
      },
    },
    {
      name: "Ravindra Khare",
      role: "CTO & Co-founder",
      background: "AI Research Director at IIT Bombay",
      image: "/assets/team/ravindra-khare.jpg",
      bio: "PhD in Machine Learning, specialized in geophysical data analysis and drone technology.",
      social: {
        linkedin: "#",
        github: "#",
        email: "ravindra@seismic-ai.com",
      },
    },
    {
      name: "Dr. Sarah Chen",
      role: "Head of Operations",
      background: "Former Oxford Geophysics Professor",
      image: "/assets/team/sarah-chen.jpg",
      bio: "Leading expert in seismic analysis with 20+ published papers on sustainable exploration.",
      social: {
        linkedin: "#",
        email: "sarah@seismic-ai.com",
      },
    },
  ];

  const partners = [
    {
      name: "IntBrains",
      logo: "/assets/partners/intbrains-logo.png",
      description: "AI Technology Partner",
    },
    {
      name: "IIT Bombay",
      logo: "/assets/partners/iit-bombay-logo.png",
      description: "Research & Development",
    },
    {
      name: "Oxford",
      logo: "/assets/partners/oxford-logo.png",
      description: "Academic Collaboration",
    },
    {
      name: "Shell Ventures",
      logo: "/assets/partners/shell-logo.png",
      description: "Strategic Investor",
    },
  ];

  return (
    <section id="team" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            World-Class <span className="text-primary-500">Team</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Industry veterans and leading researchers united by a shared vision
            to revolutionize energy exploration through AI and sustainable
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5, z: 50 }}
              className="glass-effect p-8 text-center group cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500/30 via-primary-400/20 to-dark-800 border-2 border-primary-500/30">
                  {/* Professional placeholder with initials */}
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary-500 bg-gradient-to-br from-dark-700 to-dark-800">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  {/* Hidden real image (ready for replacement) */}
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-0"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                      const placeholder = e.currentTarget
                        .previousElementSibling as HTMLElement;
                      if (placeholder) {
                        placeholder.style.display = "none";
                      }
                    }}
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-dark-950 rounded-full"></div>
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {founder.name}
              </h3>

              <h4 className="text-primary-500 font-semibold mb-2">
                {founder.role}
              </h4>

              <p className="text-white/60 text-sm mb-4">{founder.background}</p>

              <p className="text-white/80 text-sm mb-6 group-hover:text-white transition-colors duration-300">
                {founder.bio}
              </p>

              <div className="flex justify-center space-x-4">
                {founder.social.linkedin && (
                  <motion.a
                    href={founder.social.linkedin}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-white/60 hover:text-primary-500 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                )}
                {founder.social.github && (
                  <motion.a
                    href={founder.social.github}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-white/60 hover:text-primary-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {founder.social.email && (
                  <motion.a
                    href={`mailto:${founder.social.email}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-white/60 hover:text-primary-500 transition-colors duration-300"
                  >
                    <Mail size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted <span className="text-primary-500">Partners</span>
          </h3>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Collaborating with world-class institutions and industry leaders to
            accelerate innovation and market adoption.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-6 text-center group cursor-pointer"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {partner.name}
              </h4>
              <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
