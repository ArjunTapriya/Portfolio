"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface WordRevealAnimationProps {
  text: string;
  className?: string;
}

export function WordRevealAnimation({ text, className = "" }: WordRevealAnimationProps) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [animationComplete, setAnimationComplete] = useState(false);

  const duration = 0.4;
  const stagger = 0.05;
  const delay = 0.1;
  
  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      // Calculate total time until the last word finishes animating
      const totalTime = (delay + words.length * stagger + duration) * 1000;
      const timeout = setTimeout(() => {
        setAnimationComplete(true);
      }, totalTime);
      return () => clearTimeout(timeout);
    }
  }, [isInView, words.length, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <p className={`${className} opacity-90`}>{text}</p>;
  }

  return (
    <p
      ref={containerRef}
      className={`relative transition-all duration-200 ${className} ${
        isHovered ? "opacity-100 brightness-110" : "opacity-90"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em] overflow-hidden py-1">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: duration,
              delay: delay + i * stagger,
              ease: [0.25, 1, 0.5, 1], // easeOut cubic-bezier
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? animationComplete
              ? { opacity: 0 }
              : { opacity: [1, 0, 1] }
            : { opacity: 0 }
        }
        transition={
          animationComplete
            ? { duration: 0.5 }
            : { repeat: Infinity, duration: 0.8, ease: "linear", delay }
        }
        className="inline-block w-[0.4em] h-[1em] bg-current align-middle ml-1"
        style={{ marginBottom: "0.1em" }}
      />
    </p>
  );
}
