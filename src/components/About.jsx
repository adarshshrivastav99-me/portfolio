import React from 'react';
import { FaMeta, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';
import { Bot, Rocket, Code, Swords, Brain } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-[#0b1021] via-[#161a33] to-[#281a3a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src="/about-character.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-blue-50">
            Hi, my name is <span className="text-blue-400 text-xl font-black mx-1 tracking-wide uppercase">Adarsh</span>, a passionate creator based in <span className="text-blue-400 font-black">Vijay Nagar, Indore</span>, specializing in Web &amp; App Development, Digital Marketing, and Social Media Handling.
          </p>

          <div className="flex flex-col gap-8">
            {/* Social Media Row */}
            <div>
              <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wider">Social Platforms</h3>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-black">
                  <FaMeta className="w-6 h-6" /> <span className="font-bold text-sm">Meta</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-pink-600">
                  <FaInstagram className="w-6 h-6" /> <span className="font-bold text-sm">Instagram</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-blue-800">
                  <FaFacebook className="w-6 h-6" /> <span className="font-bold text-sm">Facebook</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-red-700">
                  <FaGoogle className="w-6 h-6" /> <span className="font-bold text-sm">Google</span>
                </div>
              </div>
            </div>

            {/* AI Tools Row */}
            <div>
              <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wider">AI Tools & Stack</h3>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-emerald-500">
                  <SiOpenai className="w-6 h-6" /> <span className="font-bold text-sm">ChatGPT</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-amber-500">
                  <Brain className="w-6 h-6" /> <span className="font-bold text-sm">Claude</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-purple-700">
                  <Rocket className="w-6 h-6" /> <span className="font-bold text-sm">Antigravity</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-cyan-500">
                  <Swords className="w-6 h-6" /> <span className="font-bold text-sm">Arena</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/40 transition-colors cursor-pointer text-white hover:text-blue-500">
                  <Code className="w-6 h-6" /> <span className="font-bold text-sm">Codex</span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-white opacity-10 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-white opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
