"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ArrowRight, Terminal, MapPin, Code2, Link as LinkIcon, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* Left Bio Section (Spans 5 cols on lg) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-8 md:p-12"
        >
          <div>
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-8 overflow-hidden flex items-center justify-center">
              <span className="text-xl font-bold tracking-tighter">{RESUME_DATA.initials}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Hi, I'm <br />
              <span className="text-brand-text-secondary">{RESUME_DATA.name.split(' ')[0]}.</span>
            </h1>
            <p className="text-brand-text-secondary text-lg leading-relaxed max-w-md">
              {RESUME_DATA.about}
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto"
            >
              Resume <Download size={18} />
            </button>
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Contact <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Bento Grid Section (Spans 7 cols on lg) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Terminal Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px] relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/40 transition-colors">
              <Terminal size={48} />
            </div>
            <div className="font-mono text-sm sm:text-base text-brand-text-secondary">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">whoami</span>
              </div>
              <p className="text-white mb-4">Software Developer & Perfectionist</p>
              
              <div className="flex gap-2 items-center mb-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">cat skills.txt</span>
              </div>
              <p className="text-brand-text-secondary leading-relaxed max-w-[80%]">
                Building scalable architectures, crafting pixel-perfect interfaces, and solving complex algorithmic challenges.
              </p>
            </div>
          </motion.div>

          {/* Map / Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-3xl p-6 relative overflow-hidden group min-h-[200px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Ahmedabad,India&zoom=11&size=600x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x888888&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:administrative|element:geometry.stroke|color:0x000000&style=feature:landscape|element:geometry|color:0x000000&style=feature:poi|element:geometry|color:0x222222&style=feature:road|element:geometry|color:0x111111&style=feature:water|element:geometry|color:0x0a0a0a')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity grayscale" />
            <div className="relative z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center mb-4">
              <MapPin size={20} />
            </div>
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-lg">Ahmedabad, India</h3>
              <p className="text-brand-text-secondary text-sm">Based in</p>
            </div>
          </motion.div>

          {/* Connect & Socials Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel rounded-3xl p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 border border-white/20">
              <LinkIcon size={18} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                {RESUME_DATA.contact.social.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black text-brand-text-secondary transition-all"
                    title={social.name}
                  >
                    {social.name.toLowerCase() === "github" ? <FaGithub size={20} /> : <FaLinkedin size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
