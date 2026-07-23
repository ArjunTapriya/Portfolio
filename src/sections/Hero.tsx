"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ArrowRight, Terminal, MapPin, Code2, Link as LinkIcon, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TerminalAnimation } from "@/components/ui/TerminalAnimation";
import { WordRevealAnimation } from "@/components/ui/WordRevealAnimation";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">

        {/* Left Bio Section (Spans 5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between glass-panel glass-panel-hover rounded-3xl p-8 md:p-12"
        >
          <div>
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-8 overflow-hidden flex items-center justify-center">
              <span className="text-xl font-bold tracking-tighter">{RESUME_DATA.initials}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Hi, I'm <br />
              <span className="text-brand-text-secondary">{RESUME_DATA.name.split(' ')[0]}.</span>
            </h1>
            <WordRevealAnimation 
              text={RESUME_DATA.about}
              className="text-brand-text-secondary text-lg leading-relaxed max-w-md"
            />
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
            className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px] relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/40 transition-colors">
              <Terminal size={48} />
            </div>
            <TerminalAnimation />
          </motion.div>

          {/* Map / Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden group min-h-[200px] flex flex-col justify-between"
          >
            <iframe
              src="https://maps.google.com/maps?q=Ahmedabad,%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity grayscale"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />

              {/* Social Media Theme Watermarks */}
              <div className="absolute -right-4 -bottom-8 text-[12rem] font-bold text-white/5 leading-none select-none group-hover:text-white/10 transition-all duration-700 group-hover:scale-110 origin-bottom-right">
                @
              </div>
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                <FaGithub className="absolute top-6 right-16 w-12 h-12 -rotate-12" />
                <FaLinkedin className="absolute bottom-16 right-32 w-8 h-8 rotate-12" />
              </div>
            </div>
            <div className="relative z-10 w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <LinkIcon size={18} />
            </div>
            <div className="relative z-10">
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
