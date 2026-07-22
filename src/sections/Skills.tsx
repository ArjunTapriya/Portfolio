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
            className="glass-panel p-6 md:p-8 rounded-3xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3 capitalize">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {(items as readonly string[]).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#111111] border border-white/10 rounded-full text-sm font-medium text-brand-text-secondary hover:text-white hover:border-white/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SplitLayout>
  );
}
