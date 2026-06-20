import React from 'react';
import { motion } from 'framer-motion';
import { FaMeta, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';
import { Bot, Rocket, Code, Swords, Brain, MapPin, Mail, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#09090b] py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-2xl"
          >
            A Passionate Creator from <span className="text-gradient">Indore.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
          
          {/* Main Intro Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group border-white/5 hover:border-white/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <h3 className="text-3xl font-bold text-white mb-6">Hi, I'm Adarsh.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              I specialize in Web & App Development, Digital Marketing, and Social Media Strategy. 
              My mission is to help brands navigate the digital landscape with robust technology and compelling marketing campaigns.
            </p>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Vijay Nagar, Indore
              </div>
              <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Profile Photo Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-[2rem] p-2 relative overflow-hidden border-white/5 group h-[350px] md:h-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-[2rem]" />
            <img 
              src="/about-character.jpg" 
              alt="Adarsh" 
              className="w-full h-full object-cover rounded-[1.8rem] filter grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold text-xl">Digital Strategist</p>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Since 2020</p>
            </div>
          </motion.div>

          {/* AI Tools & Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 glass-card rounded-[2rem] p-8 relative overflow-hidden border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Tech Stack & AI Tools</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'ChatGPT', icon: SiOpenai, color: 'hover:text-emerald-400', border: 'hover:border-emerald-400/50' },
                { name: 'Claude', icon: Brain, color: 'hover:text-amber-400', border: 'hover:border-amber-400/50' },
                { name: 'Antigravity', icon: Rocket, color: 'hover:text-purple-400', border: 'hover:border-purple-400/50' },
                { name: 'Arena', icon: Swords, color: 'hover:text-cyan-400', border: 'hover:border-cyan-400/50' },
                { name: 'Codex', icon: Code, color: 'hover:text-blue-400', border: 'hover:border-blue-400/50' },
              ].map((tool, i) => (
                <div key={i} className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 cursor-default ${tool.color} ${tool.border} group`}>
                  <tool.icon className="w-5 h-5 text-gray-400 group-hover:text-inherit transition-colors" />
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-[2rem] p-8 relative overflow-hidden border-white/5 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Meta', icon: FaMeta, hover: 'hover:bg-blue-600/20 hover:text-blue-400' },
                { name: 'Instagram', icon: FaInstagram, hover: 'hover:bg-pink-600/20 hover:text-pink-400' },
                { name: 'Facebook', icon: FaFacebook, hover: 'hover:bg-blue-800/20 hover:text-blue-500' },
                { name: 'Google', icon: FaGoogle, hover: 'hover:bg-red-600/20 hover:text-red-400' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.hover} group`}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="text-xs font-semibold uppercase">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
