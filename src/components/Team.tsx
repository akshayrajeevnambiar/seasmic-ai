import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { animations } from '../constants/design';
import judeImg from '../assets/jude.jpg';
import raviImg from '../assets/ravi.jpg';
import jibyImg from '../assets/jiby.jpg';
import ashokImg from '../assets/ashok.jpg';
import puneethImg from '../assets/puneeth.jpg';

const Team = () => {
  const leadership = [
    {
      name: 'Jude Tharakan',
      role: 'CEO & Founder',
      bio: 'MBA Graduate from the University of Nottingham. Over 11 years of experience with Goldman Sachs, BNP Paribas, and Turbo AI. Completed executive education in Technology & Entrepreneurship from Oxford and IIT Bombay.',
      image: judeImg,
      social: {
        linkedin: '#',
        email: 'jude@seismic-ai.com',
      },
    },
    {
      name: 'Ravindra Khare',
      role: 'Co-Founder & Chief Technology Innovation Officer',
      bio: 'B.Tech in Aerospace Engineering from IIT Bombay. Formerly with ISRO and Eliphaz; serial entrepreneur with multiple start-ups.',
      image: raviImg,
      social: {
        linkedin: '#',
        email: 'ravindra@seismic-ai.com',
      },
    },
  ];

  const partners = [
    {
      name: 'Jiby Thomas',
      role: 'Founder Intbrains',
      bio: 'Graduate from IIM Calcutta. Co-Founder & Director of Intbrains; Co-Founder & VP Marketing at Quikr; Head of India Business & Operations at Kijiji (an eBay Company).',
      company: 'Intbrains',
      image: jibyImg,
    },
    {
      name: 'Ashok Gopinathan',
      role: 'Co-Founder & Director',
      bio: 'Graduate from the University of Kerala. CTO at Codea Technologies, Director of Technology at Intbrains, and Consultant at SBL Knowledge Services.',
      company: 'Intbrains',
      image: ashokImg,
    },
    {
      name: 'Puneet S',
      role: 'Chief Advisor in Technology & Strategy',
      bio: 'Graduate from Symbiosis Institute of Management Studies. Senior Agile Project Manager of Data Center Product Development at Intbrains.',
      company: 'Intbrains',
      image: puneethImg,
    },
  ];

  return (
    <section id="team" className="section-container">
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white font-space tracking-tighter"
          {...animations.minimal}
        >
          Our Team &{' '}
          <span className="text-neon">Partners</span>
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          World-class experts in AI, geophysics, and energy innovation leading the future of exploration.
        </motion.p>
      </div>

      {/* Leadership Team */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center font-space">
          Leadership Team
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              className="glass-panel neon-border-t p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
            >
              {/* Profile photo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white/[0.08] group-hover:border-neon/30 transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-neon/0 group-hover:bg-neon/10 transition-colors duration-300"></div>
              </div>
              
              <h4 className="text-xl font-bold text-neon mb-2 font-space">
                {member.name}
              </h4>
              
              <div className="text-white text-sm font-medium mb-4 font-inter">
                {member.role}
              </div>
              
              <p className="text-sm text-muted leading-relaxed mb-6 font-inter">
                {member.bio}
              </p>
              
              {/* Social links */}
              <div className="flex justify-center space-x-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 border border-white/[0.08] rounded-lg flex items-center justify-center text-muted hover:text-neon hover:border-neon/30 hover:bg-neon/5 transition-all duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 border border-white/[0.08] rounded-lg flex items-center justify-center text-muted hover:text-neon hover:border-neon/30 hover:bg-neon/5 transition-all duration-300"
                  >
                    <Mail size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Thin neon line divider */}
      <div className="neon-line mb-16" />

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center font-space">
          Partnered with <span className="text-neon">Intbrains</span>
        </h3>
        
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto font-inter">
          Strategic partnership bringing together cutting-edge technology and industry expertise.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6 text-center group hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.6 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
            >
              {/* Profile photo */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white/[0.08] group-hover:border-neon/30 transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-neon/0 group-hover:bg-neon/10 transition-colors duration-300"></div>
              </div>
              
              <h4 className="text-lg font-bold text-neon mb-2 font-space">
                {partner.name}
              </h4>
              
              <div className="text-white text-sm font-medium mb-3 font-inter">
                {partner.role}
              </div>
              
              <p className="text-xs text-muted leading-relaxed font-inter">
                {partner.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;