"use client";

import { useState, useEffect } from "react";

export function TerminalAnimation() {
  const [step, setStep] = useState(0);
  const [cmd1, setCmd1] = useState("");
  const [cmd2, setCmd2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);

  const fullCmd1 = "whoami";
  const fullCmd2 = "cat skills.txt";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (step === 0) {
      // Type first command
      if (cmd1.length < fullCmd1.length) {
        timeout = setTimeout(() => {
          setCmd1(fullCmd1.slice(0, cmd1.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setShowCursor1(false);
          setStep(1);
        }, 500);
      }
    } else if (step === 1) {
      // Show output of whoami, move to cmd2
      timeout = setTimeout(() => {
        setStep(2);
        setShowCursor2(true);
      }, 600);
    } else if (step === 2) {
      // Type second command
      if (cmd2.length < fullCmd2.length) {
        timeout = setTimeout(() => {
          setCmd2(fullCmd2.slice(0, cmd2.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setShowCursor2(false);
          setStep(3);
        }, 500);
      }
    } else if (step === 3) {
      // Show output of cat skills.txt and final blinking cursor
      timeout = setTimeout(() => {
        setStep(4);
        setShowBlinkingCursor(true);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [step, cmd1, cmd2]);

  return (
    <div className="font-mono text-sm sm:text-base text-brand-text-secondary h-full flex flex-col justify-center">
      <div className="flex gap-2 items-center mb-2">
        <span className="text-green-500 shrink-0">➜</span>
        <span className="text-blue-400 shrink-0">~</span>
        <span className="text-white min-h-[1.5rem]">
          {cmd1}
          {showCursor1 && <span className="animate-pulse bg-white/70 w-2 h-4 inline-block align-middle ml-1"></span>}
        </span>
      </div>

      {step >= 1 && (
        <p className="text-white mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          Software Developer & Perfectionist
        </p>
      )}

      {step >= 2 && (
        <div className="flex gap-2 items-center mb-2 animate-in fade-in duration-300">
          <span className="text-green-500 shrink-0">➜</span>
          <span className="text-blue-400 shrink-0">~</span>
          <span className="text-white min-h-[1.5rem]">
            {cmd2}
            {showCursor2 && <span className="animate-pulse bg-white/70 w-2 h-4 inline-block align-middle ml-1"></span>}
          </span>
        </div>
      )}

      {step >= 3 && (
        <div className="relative">
          <p className="text-brand-text-secondary leading-relaxed max-w-[80%] animate-in fade-in slide-in-from-bottom-2 duration-500">
            Building scalable architectures, crafting pixel-perfect interfaces, and solving complex algorithmic challenges.
          </p>
        </div>
      )}

      {step >= 4 && (
        <div className="flex gap-2 items-center mt-4">
          <span className="text-green-500 shrink-0">➜</span>
          <span className="text-blue-400 shrink-0">~</span>
          {showBlinkingCursor && <span className="animate-pulse bg-white/70 w-2 h-4 inline-block align-middle"></span>}
        </div>
      )}
    </div>
  );
}
