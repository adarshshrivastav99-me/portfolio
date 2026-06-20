import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Brand Launch Website',
    category: 'Web Development',
    tags: ['React', 'Vite', 'Framer Motion'],
    description:
      'A high-performance marketing website with cinematic animations, custom cursor, parallax scrolling and a mobile-first responsive layout — built to convert and impress.',
    outcome: '3x increase in inbound inquiries',
    gradient: 'from-cyan-500/10 via-blue-500/10 to-transparent',
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-400',
    link: '#',
  },
  {
    number: '02',
    title: 'Social Media Dashboard',
    category: 'Full Stack Platform',
    tags: ['React', 'Node.js', 'MongoDB'],
    description:
      'A real-time analytics dashboard that unifies performance tracking across Instagram, Facebook & Google — featuring post scheduling, engagement heatmaps, and automated reports.',
    outcome: '45% reduction in reporting time',
    gradient: 'from-purple-500/10 via-pink-500/10 to-transparent',
    accentColor: 'text-purple-400',
    accentBg: 'bg-purple-400',
    link: '#',
  },
  {
    number: '03',
    title: 'Campaign Automation Suite',
    category: 'AI & Marketing',
    tags: ['Python', 'OpenAI API', 'Meta API'],
    description:
      'An AI-powered tool that auto-generates ad copy, optimizes bidding strategies in real time, and personalizes campaign messaging for different audience segments.',
    outcome: '2.2x improvement in ROAS',
    gradient: 'from-amber-500/10 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-400',
    link: '#',
  },
  {
    number: '04',
    title: 'E-Commerce Growth Sprint',
    category: 'Digital Marketing',
    tags: ['SEO', 'Google Ads', 'Email Marketing'],
    description:
      'A 90-day end-to-end growth sprint for a local e-commerce brand — combining technical SEO, aggressive ad campaigns, and lifecycle email flows.',
    outcome: '₹30L+ revenue generated',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-transparent',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-400',
    link: '#',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="bg-[#09090b] py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

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
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Selected Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Projects That <br />
              <span className="text-gradient">Made an Impact.</span>
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-all duration-300 self-start md:self-end"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative group glass-card rounded-[2rem] p-8 md:p-10 overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/15 cursor-default`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                {/* Number */}
                <span className={`text-6xl md:text-8xl font-black ${project.accentColor} opacity-10 group-hover:opacity-20 transition-all duration-500 shrink-0 leading-none font-serif italic select-none`}>
                  {project.number}
                </span>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 ${project.accentColor}`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 group-hover:text-gray-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Outcome badge */}
                    <div className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full ${project.accentColor} bg-white/5 border border-white/10`}>
                      ↑ {project.outcome}
                    </div>
                  </div>
                </div>

                {/* CTA Arrow */}
                <div className={`hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center text-gray-600 group-hover:border-white/40 group-hover:text-white transition-all duration-300 shrink-0`}>
                  <ArrowUpRight className="w-7 h-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
