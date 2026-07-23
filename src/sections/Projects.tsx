"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ITEMS_PER_PAGE = 3;

// Premium Floating Card Component matching global theme
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group glass-panel rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Visual Header / Placeholder */}
      <div className="relative w-full h-48 md:h-56 bg-black/40 border-b border-white/5 overflow-hidden">
        {/* Subtle Inner Grid / Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute top-4 left-4 flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500/80 transition-colors"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500/80 transition-colors"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500/80 transition-colors"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
           <span className="text-6xl md:text-8xl font-black uppercase font-serif tracking-widest">{project.title.substring(0,2)}</span>
        </div>
      </div>

      {/* Floating Content Container */}
      <div className="relative p-6 flex flex-col flex-grow z-10">
        <div className="flex flex-col mb-4">
          <div className="flex justify-between items-start mb-3 gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2 shrink-0">
              {project.link && (
                <a 
                  href={project.link.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white hover:text-black text-brand-text-secondary transition-all"
                >
                  <FaGithub size={16} />
                </a>
              )}
              <a 
                href={project.link?.href || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white hover:text-black text-brand-text-secondary transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <p className="text-brand-text-secondary text-sm leading-relaxed font-medium line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
          {project.techStack.map((tech: string, tIdx: number) => (
            <span 
              key={tIdx} 
              className="text-[10px] font-semibold px-2 py-1 bg-white/5 rounded-md text-brand-text-secondary border border-white/10 group-hover:border-white/20 group-hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(RESUME_DATA.projects.length / ITEMS_PER_PAGE);

  const currentProjects = RESUME_DATA.projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <SplitLayout id="projects" title="Selected Works" subtitle="Featured projects.">
      <div className="flex flex-col min-h-[600px]">
        
        {/* Animated Projects List */}
        <div className="flex flex-col gap-6 flex-grow">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage} 
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentProjects.map((project, idx) => (
                <ProjectCard key={`${currentPage}-${idx}`} project={project} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* High-End Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    currentPage === idx 
                      ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                      : "bg-white/20 w-2.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:scale-105 active:scale-95 transition-all shadow-lg"
                aria-label="Previous Projects"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:scale-105 active:scale-95 transition-all shadow-lg"
                aria-label="Next Projects"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </SplitLayout>
  );
}
