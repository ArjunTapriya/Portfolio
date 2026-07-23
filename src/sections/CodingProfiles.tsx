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
            <div className="glass-panel glass-panel-hover h-full relative overflow-hidden rounded-3xl p-6 transition-all duration-500">
              {/* Inner Grid Texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute top-6 right-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-cyan-400">
                <ExternalLink size={20} />
              </div>
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-colors">
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
