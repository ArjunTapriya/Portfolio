"use client";

import { useEffect, useState } from 'react';

export function SplineBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-black w-full h-screen overflow-hidden">
      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[120px] pointer-events-none"></div>

      {/* Note for the User */}
      {/* 
        To use your Spline 3D background:
        1. Open https://app.spline.design/community/file/a1f156f7-ef01-42d1-bf7b-5be1b7967b0a
        2. Click "Remix" to copy it to your own Spline account.
        3. Click "Export" -> "Viewer" -> Copy the "Public URL" (looks like: https://my.spline.design/...)
        4. Paste it into an iframe here!
      */}
    </div>
  );
}
