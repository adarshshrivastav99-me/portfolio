import React from 'react';
import { motion } from 'framer-motion';
import { FaMeta, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Services', id: 'skills' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Performance Marketing', id: 'skills' },
      { label: 'Web Development', id: 'skills' },
      { label: 'Brand Strategy', id: 'skills' },
      { label: 'Social Media', id: 'skills' },
      { label: 'AI Campaigns', id: 'skills' },
    ],
  },
];

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaFacebook, label: 'Facebook', href: '#' },
  { icon: FaMeta, label: 'Meta', href: '#' },
];

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-white/5 text-gray-400 font-sans">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#home" onClick={e => scrollToSection(e, 'home')} className="text-white text-2xl font-black tracking-tighter flex items-center gap-1 group w-fit">
              ADARSH<span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevating ambitious brands through data-driven digital marketing, premium web development, and AI-powered growth strategies.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns */}
          {footerLinks.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{col.heading}</p>
              {col.links.map((link, li) => (
                <a
                  key={li}
                  href={`#${link.id}`}
                  onClick={e => scrollToSection(e, link.id)}
                  className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Huge Brand Mark */}
      <div className="w-full overflow-hidden border-t border-white/5 py-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[20vw] font-black tracking-tighter leading-none text-center text-white select-none"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)', color: 'transparent' }}
        >
          ADARSH
        </motion.h2>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 md:px-12 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Adarsh Shrivastav. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:adarshshrivastav99@gmail.com" className="hover:text-white transition-colors">adarshshrivastav99@gmail.com</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
