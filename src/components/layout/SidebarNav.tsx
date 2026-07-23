"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "toolkit", label: "Toolkit" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "coding-profiles", label: "Competitive" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Get In Touch" },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex flex-col sticky top-0 self-start h-screen py-32 pl-8 xl:pl-16 pr-8 z-40">
      <div className="relative flex flex-col gap-6 xl:gap-8 h-full justify-center scale-90 origin-left">
        {/* Global Tracing Background Line - spans full height across the whole page area */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/5 z-0"></div>
        
        {/* Active Tracing Line - animates based on scroll progress */}
        <motion.div 
          className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent to-cyan-400 z-0 origin-top shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ scaleY }}
        />

        {SECTIONS.map((section, idx) => {
          const isActive = activeSection === section.id;
          return (
            <div 
              key={section.id} 
              className="relative z-10 flex items-center group cursor-pointer"
              onClick={() => scrollToSection(section.id)}
            >
              {/* Tracing Node */}
              <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_5px_rgba(255,255,255,1)]' : 'bg-transparent border-white/20 group-hover:border-white/50'}`}></div>
                {/* Connecting horizontal line to box */}
                <div className={`absolute left-6 w-8 h-[1px] transition-all duration-300 ${isActive ? 'bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-white/5'}`}></div>
              </div>

              {/* Label Box */}
              <motion.div 
                className={`ml-8 px-4 py-2 rounded-lg border transition-all duration-300 backdrop-blur-md font-mono text-xs xl:text-sm tracking-wider whitespace-nowrap
                  ${isActive 
                    ? 'border-white/50 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'border-white/5 bg-[#0a0a0a] text-white/40 group-hover:border-white/20 group-hover:text-white group-hover:bg-white/5'
                  }`}
              >
                {section.label}
              </motion.div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
