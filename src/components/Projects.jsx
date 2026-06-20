import React from 'react';

const projects = [
  {
    number: '01',
    title: 'Brand Website',
    tags: ['React', 'Vite', 'CSS'],
    description: 'A high-performance marketing website with smooth animations, responsive layout and modern design for a local brand.',
    link: '#',
  },
  {
    number: '02',
    title: 'Social Media Dashboard',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack dashboard to track and manage social media analytics, post scheduling and engagement metrics.',
    link: '#',
  },
  {
    number: '03',
    title: 'Mobile App UI',
    tags: ['React Native', 'Figma'],
    description: 'A sleek mobile application for digital marketing campaigns with real-time performance insights and push notifications.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0d0d0d] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/50 font-bold mb-6 bg-white/5">
            My Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Selected <span className="text-[#ff2a2a]">Projects</span>
          </h2>
          <p className="text-white/40 mt-4 text-base max-w-lg font-medium">
            A collection of things I've built — from brand websites to full-stack platforms.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.number}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative border border-white/10 rounded-3xl p-8 md:p-10 bg-white/5 hover:bg-[#ff2a2a]/10 hover:border-[#ff2a2a]/40 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-pointer"
            >
              {/* Number */}
              <span className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-[#ff2a2a]/30 transition-colors duration-500 shrink-0 font-serif italic">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 text-white/40 group-hover:border-[#ff2a2a]/40 group-hover:text-[#ff2a2a]/80 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-white/10 group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a] transition-all duration-500 shrink-0">
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 flex items-center gap-3 group"
          >
            Start a Project
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
