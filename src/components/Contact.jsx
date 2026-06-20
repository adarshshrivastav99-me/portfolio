import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, message } = formState;
    if (!name || !email || !message) {
      alert('Please fill in name, email and message.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}${company ? ` @ ${company}` : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`);
    window.location.href = `mailto:adarshshrivastav99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#09090b] py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8"
            >
              Let's Build <br />
              Something <br />
              <span className="text-gradient">Extraordinary.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md"
            >
              Whether you have a project in mind or just want to explore possibilities — I'd love to hear from you.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              {[
                { icon: Mail, label: 'Email', value: 'adarshshrivastav99@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Vijay Nagar, Indore, India' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-400 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{item.label}</p>
                    <p className="text-white font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Company / Brand</label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Tell Me About Your Project *</label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hi Adarsh, I'd like to work on..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
