"use client";

import { RESUME_DATA } from "@/data/resume";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#030303] py-8 px-6 border-t border-white/5 relative mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-brand-text-secondary text-sm">
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <p className="text-brand-text-secondary text-sm">
            Built with Next.js & Tailwind
          </p>
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-text-secondary hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
