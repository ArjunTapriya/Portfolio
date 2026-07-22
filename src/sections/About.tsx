"use client";

import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";

export function About() {
  return (
    <SplitLayout id="about" title="About" subtitle="My background and journey.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-12 rounded-3xl"
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
            I'm a passionate software developer currently pursuing my B.Tech at Nirma University.
            My journey into coding started with a curiosity about how things work on the internet,
            which quickly evolved into a deep-seated passion for building robust, scalable applications.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
            As a perfectionist, I obsess over the details—whether it's the underlying system architecture,
            the efficiency of an algorithm, or the pixel-perfect alignment of a user interface. I thrive in
            environments where I can tackle complex problems and deliver elegant solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">3+</span>
              <span className="text-sm text-brand-text-secondary">Years Coding</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">8+</span>
              <span className="text-sm text-brand-text-secondary">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">7.99</span>
              <span className="text-sm text-brand-text-secondary">CGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">100%</span>
              <span className="text-sm text-brand-text-secondary">Commitment</span>
            </div>
          </div>
        </div>
      </motion.div>
    </SplitLayout>
  );
}
