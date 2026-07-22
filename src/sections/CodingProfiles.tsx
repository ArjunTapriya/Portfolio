"use client";

import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink, Code2 } from "lucide-react";

export function CodingProfiles() {
  return (
    <SplitLayout id="coding-profiles" title="Competitive" subtitle="Coding profiles & stats.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.codingProfiles.map((profile, idx) => (
          <motion.a
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="block group"
          >
            <div className="glass-panel h-full relative overflow-hidden rounded-3xl p-6 group-hover:bg-white/[0.03] transition-colors">
              <div className="absolute top-6 right-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white">
                <ExternalLink size={20} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
                  <p className="text-sm text-brand-text-secondary">{profile.username}</p>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-xs text-brand-text-secondary uppercase tracking-wider mb-1">Solved</span>
                  <span className="text-2xl font-bold text-white">{profile.problemsSolved}</span>
                </div>
                {profile.rating !== "N/A" && (
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-brand-text-secondary uppercase tracking-wider mb-1">Rating</span>
                    <span className="text-xl font-semibold text-white">{profile.rating}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SplitLayout>
  );
}
