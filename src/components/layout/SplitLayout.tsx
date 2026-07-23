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
    <section id={id} className="w-full py-10 md:py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6 md:gap-10 relative">
        {/* Section Header */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-brand-text-secondary text-lg font-medium">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
