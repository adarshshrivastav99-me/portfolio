import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone, BarChart3, Globe, Smartphone, Bot, Palette,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    description: 'Data-driven ad campaigns across Meta, Google & more — engineered for maximum ROI and scalable lead generation.',
    tags: ['Meta Ads', 'Google Ads', 'Retargeting'],
    color: 'from-cyan-500/20 to-transparent',
    accent: 'text-cyan-400',
    border: 'hover:border-cyan-400/30',
  },
  {
    icon: BarChart3,
    title: 'Growth Strategy',
    description: 'End-to-end growth roadmaps covering SEO, content, email, and analytics to systematically scale your brand\'s digital presence.',
    tags: ['SEO', 'Email Marketing', 'Analytics'],
    color: 'from-purple-500/20 to-transparent',
    accent: 'text-purple-400',
    border: 'hover:border-purple-400/30',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance websites and web apps built with React & Node.js — lightning fast, responsive, and conversion-optimized.',
    tags: ['React', 'Node.js', 'Vite'],
    color: 'from-emerald-500/20 to-transparent',
    accent: 'text-emerald-400',
    border: 'hover:border-emerald-400/30',
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Full-service social media strategy, content creation, scheduling, and community management for consistent brand growth.',
    tags: ['Instagram', 'Facebook', 'Content'],
    color: 'from-pink-500/20 to-transparent',
    accent: 'text-pink-400',
    border: 'hover:border-pink-400/30',
  },
  {
    icon: Bot,
    title: 'AI-Powered Campaigns',
    description: 'Leveraging cutting-edge AI tools to automate, personalize, and supercharge your marketing funnels at scale.',
    tags: ['ChatGPT', 'Automation', 'Personalization'],
    color: 'from-amber-500/20 to-transparent',
    accent: 'text-amber-400',
    border: 'hover:border-amber-400/30',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Crafting compelling brand identities — from logo and visual systems to tone of voice — that set you apart from the competition.',
    tags: ['Branding', 'UI/UX', 'Design Systems'],
    color: 'from-sky-500/20 to-transparent',
    accent: 'text-sky-400',
    border: 'hover:border-sky-400/30',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

const Services = () => {
  return (
    <section id="skills" className="bg-[#09090b] py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
            >
              What I Do <br />
              <span className="text-gradient">Exceptionally Well.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-sm leading-relaxed md:text-right"
          >
            Every service is delivered with precision, creativity, and a relentless focus on results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative glass-card rounded-[2rem] p-8 overflow-hidden border border-white/5 transition-all duration-500 ${service.border} cursor-default`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 ${service.accent}`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 group-hover:text-gray-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-gray-600 group-hover:${service.accent} group-hover:border-current opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
