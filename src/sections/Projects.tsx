"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ITEMS_PER_PAGE = 3;

// Premium Hover Spotlight & Floating Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Intense Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Floating Content Container */}
      <div className="relative p-6 md:p-8 flex flex-col h-full z-10 transition-all duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed max-w-2xl group-hover:text-neutral-400 transition-colors">
              {project.description}
            </p>
          </div>
          
          <div className="flex gap-3 shrink-0">
            {project.link && (
              <a 
                href={project.link.href} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-white/5 rounded-full hover:bg-white hover:text-black text-brand-text-secondary transition-all shadow-lg hover:scale-110 active:scale-95 border border-white/5 hover:border-transparent"
              >
                <FaGithub size={18} />
              </a>
            )}
            <a 
              href={project.link?.href || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 bg-white/5 rounded-full hover:bg-white hover:text-black text-brand-text-secondary transition-all shadow-lg hover:scale-110 active:scale-95 border border-white/5 hover:border-transparent"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
          {project.techStack.map((tech: string, tIdx: number) => (
            <span 
              key={tIdx} 
              className="text-xs font-semibold px-3 py-1.5 bg-white/5 rounded-lg text-brand-text-secondary border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all duration-300 shadow-sm"
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
