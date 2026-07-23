"use client";

import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { Users } from "lucide-react";

export function Leadership() {
  return (
    <SplitLayout id="leadership" title="Leadership" subtitle="Community contribution.">
      <div className="flex flex-col gap-6">
        {RESUME_DATA.leadership.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel glass-panel-hover p-6 md:p-8 rounded-3xl relative overflow-hidden group cursor-default"
          >
            <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-white/10 group-hover:scale-110 transition-all duration-500">
              <Users size={160} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.role}</h3>
                <p className="text-brand-text-secondary font-medium">{item.organization}</p>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-brand-text-secondary border border-white/10 w-fit">
                {item.start} - {item.end}
              </div>
            </div>
            
            <p className="relative z-10 text-brand-text-secondary leading-relaxed text-sm md:text-base max-w-xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SplitLayout>
  );
}
