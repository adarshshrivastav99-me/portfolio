import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-mesh flex items-center justify-center overflow-hidden">
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-float pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 pt-20">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Available for new projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-6"
          >
            Elevating <br className="hidden lg:block" />
            <span className="text-gradient">Digital</span> Experiences.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed"
          >
            I craft data-driven digital strategies and premium web applications that help ambitious brands scale, engage, and dominate their market.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto justify-center flex text-center"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div 
            initial={{ opacity: 0, borderTopColor: 'transparent' }}
            animate={{ opacity: 1, borderTopColor: 'rgba(255,255,255,0.1)' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 w-full flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16"
          >
            {[
              { label: 'Successful Projects', value: '50+', icon: Target, color: 'text-cyan-400' },
              { label: 'Leads Generated', value: '100K+', icon: TrendingUp, color: 'text-purple-400' },
              { label: 'Client Satisfaction', value: '99%', icon: Users, color: 'text-emerald-400' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl glass flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Content / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full relative hidden lg:flex justify-end"
        >
          {/* Abstract 3D/Visual Container */}
          <div className="relative w-[500px] h-[600px] glass-card rounded-[2.5rem] overflow-hidden p-2 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="/hero-character-new.jpg" 
              alt="Digital Marketer Hero" 
              className="w-full h-full object-cover rounded-[2rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent rounded-[2rem]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
