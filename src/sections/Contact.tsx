"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SplitLayout } from "@/components/layout/SplitLayout";
import { RESUME_DATA } from "@/data/resume";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Error from Web3Forms:", result);
        setStatus("idle");
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("idle");
      alert("Failed to send message. Please check your network connection.");
    }
  };

  return (
    <SplitLayout id="contact" title="Get In Touch" subtitle="Let's build together.">
      <div className="flex flex-col gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
            >
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 border border-white/20">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-brand-text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Alternate Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex-1 flex items-center gap-4 p-4 glass-panel glass-panel-hover rounded-2xl group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors text-white">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">Email</div>
              <div className="text-white font-medium text-sm">{RESUME_DATA.contact.email}</div>
            </div>
          </a>

          {RESUME_DATA.contact.social.map((social, idx) => (
            <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-4 p-4 glass-panel glass-panel-hover rounded-2xl group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors text-white">
                {social.name.toLowerCase() === "github" ? <FaGithub size={18} /> : <FaLinkedin size={18} />}
              </div>
              <div className="flex items-center">
                <div className="text-white font-bold tracking-widest uppercase">{social.name}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </SplitLayout>
  );
}
