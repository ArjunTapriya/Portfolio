"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitLayoutProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SplitLayout({ id, title, subtitle, children }: SplitLayoutProps) {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
        {/* Sticky Left Sidebar for Section Title */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-brand-text-secondary text-lg font-medium">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Scrollable Right Content */}
        <div className="w-full md:w-2/3">
          {children}
        </div>
      </div>
    </section>
  );
}
