"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Download, FileText } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-32 px-4 w-full">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Resume" subtitle="My Professional Summary" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hoverEffect className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="flex-grow flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 bg-brand-accent/10 border border-brand-accent/30 rounded-2xl flex items-center justify-center text-brand-accent flex-shrink-0">
                <FileText size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{RESUME_DATA.name} - Resume</h3>
                <p className="text-brand-text-secondary max-w-lg leading-relaxed">
                  A comprehensive overview of my experience, skills, and education. Note: Sensitive personal information (like my mobile number) has been removed from the public version.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <MagneticButton variant="primary" onClick={() => window.open('/resume.pdf', '_blank')}>
                <Download size={18} />
                Download Resume
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
