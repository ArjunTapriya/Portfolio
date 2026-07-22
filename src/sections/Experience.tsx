"use client";

import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <SplitLayout id="experience" title="Experience" subtitle="Where I've worked.">
      <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 pb-8">
        {RESUME_DATA.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#030303] border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            
            <div className="glass-panel p-6 md:p-8 rounded-3xl group">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-300 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-brand-text-secondary font-medium">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-brand-text-secondary border border-white/10 w-fit shrink-0">
                  {exp.start} - {exp.end}
                </div>
              </div>
              
              <ul className="mt-6 space-y-3">
                <li className="text-brand-text-secondary leading-relaxed flex gap-3 text-sm md:text-base">
                  <span className="text-white/40 mt-1.5 shrink-0">▹</span>
                  <span>{exp.description}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SplitLayout>
  );
}
