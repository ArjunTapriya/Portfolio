"use client";

import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";

export function Skills() {
  return (
    <SplitLayout id="toolkit" title="Toolkit" subtitle="Languages & Technologies I use.">
      <div className="flex flex-col gap-8">
        {Object.entries(RESUME_DATA.skills).map(([category, items], catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden group"
          >
            {/* Inner Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <h3 className="relative z-10 text-xl font-semibold text-white mb-6 flex items-center gap-3 capitalize group-hover:text-cyan-400 transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_10px_#06b6d4] transition-shadow"></span>
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            <div className="relative z-10 flex flex-wrap gap-3">
              {(items as readonly string[]).map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-brand-text-secondary hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SplitLayout>
  );
}
