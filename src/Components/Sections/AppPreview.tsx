import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AppPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Hook into the scroll progression of this specific container in the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Triggers when the top of the element enters the bottom of the viewport until it leaves the top
  });

  // Map the scroll progression to your design thresholds
  // As the user scrolls into the section, scale scales from 0.85 up to 1, and the borders smoothly round out or flatten
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.85, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.45], ["32px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.5, 0.9, 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[140vh] bg-background flex items-start justify-center pt-24"
    >
      {/* Sticky wrapper to hold the device frame steady as the viewport scrolls through the scaling transition */}
      <div className="sticky top-24 w-full max-w-7xl h-[80vh] px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden">
        
        <motion.div
          style={{ 
            scale, 
            borderRadius,
            opacity 
          }}
          className="relative w-full h-full bg-surface border border-white/5 shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden group"
        >
          {/* Top Notch/Dynamic Island CSS Simulation Layer */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-background rounded-full border border-white/5 z-30 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-white/5" />
          </div>

          {/* Premium Editorial Grid Overlay Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

          {/* Core Content: Product Interface Footage */}
          <div className="absolute inset-0 w-full h-full bg-[#09090B]">
            
            {/* Animated placeholder state visible before the video asset mounts completely */}
            {!videoLoaded && (
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center text-xs font-mono text-textSecondary"
              >
                Connecting Core Interface Stream...
              </motion.div>
            )}

            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-1000 select-none pointer-events-none ${
                videoLoaded ? "opacity-70 group-hover:opacity-100 scale-100 group-hover:scale-[1.02]" : "opacity-0"
              }`}
            >
              {/* Drop your mock video path directly into the src parameters below */}
              <source src="src/assets/ftg-preview.mp4" type="video/mp4" />
              <source src="src/assets/ftg-preview.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Subtle Outer-Edge Glare/Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.015] to-white/0 pointer-events-none z-20" />
          
          {/* Decorative Corner Asset Labels */}
          <div className="absolute bottom-6 left-6 z-20 hidden md:block">
            <p className="font-mono text-[9px] tracking-[0.2em] text-textSecondary uppercase">
              FTG // Core Portal v1.0.0
            </p>
          </div>
          <div className="absolute bottom-6 right-6 z-20 hidden md:block">
            <p className="font-mono text-[9px] tracking-[0.2em] text-primary uppercase flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              System Active
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};