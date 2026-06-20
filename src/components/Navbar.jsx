import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'skills' },
    { label: 'Projects', id: 'projects' },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center w-full">
        <div className={`flex justify-between items-center w-full rounded-full transition-all duration-500 ${
          isScrolled ? 'glass px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent px-0 py-0'
        }`}>
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white text-xl font-black tracking-tighter flex items-center gap-1 group">
              ADARSH<span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ label, id }) => (
              <a 
                key={id} 
                href={`#${id}`}
                onClick={e => scrollToSection(e, id)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={e => scrollToSection(e, 'contact')}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 relative z-[60]"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full px-6 mt-2 md:hidden"
          >
            <div className="glass-card rounded-3xl p-6 flex flex-col space-y-4 shadow-2xl">
              {navLinks.map(({ label, id }) => (
                <a 
                  key={id} 
                  href={`#${id}`}
                  onClick={e => scrollToSection(e, id)}
                  className="text-gray-300 hover:text-white font-medium text-lg border-b border-white/10 pb-4 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={e => scrollToSection(e, 'contact')}
                className="w-full py-4 mt-2 rounded-2xl bg-white text-black text-center font-bold shadow-lg"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
