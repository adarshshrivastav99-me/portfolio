import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import { LayoutGrid, TrendingUp, ThumbsUp, MessageCircle, LineChart, Bot } from 'lucide-react';



const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1021] via-[#161a33] to-[#281a3a] flex items-center">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Character Image (positioned to the right) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex justify-end items-center">
        <div className="relative w-full md:w-[60%] lg:w-[50%] h-[90%] flex justify-center items-center mr-0 lg:mr-10">
          <img 
            src="/hero-character-new.jpg" 
            alt="Digital Marketer Hero" 
            className="w-full h-full object-cover"
            style={{ 
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)'
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pt-20 md:pt-0 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start text-left w-full h-full pointer-events-none">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-[600px] w-full">
          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight font-sans uppercase"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          >
            Digital Marketer & <br /> Growth Strategist
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-blue-100/80 text-lg md:text-xl font-medium mb-10 max-w-[500px] leading-relaxed"
          >
            I Help Brands Generate Leads, Increase Revenue &amp; Scale Through Data-Driven Digital Marketing.
          </p>

          {/* Buttons — re-enable pointer events for clicks */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full pointer-events-auto mb-16"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 text-sm md:text-base rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              View Portfolio
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 text-sm md:text-base rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-white/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Stats Row */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-row flex-wrap items-center gap-8 md:gap-12 w-full border-t border-white/10 pt-8"
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <LayoutGrid className="text-blue-400 w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">50+</span>
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">Projects</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <TrendingUp className="text-cyan-400 w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">100K+</span>
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">Leads Generated</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <ThumbsUp className="text-purple-400 w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">95%</span>
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">Client Satisfaction</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
