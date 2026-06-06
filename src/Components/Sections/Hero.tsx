import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // --- 1. Dynamic Mouse-Tracking Glow Layer ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springGlowX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springGlowY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // --- 2. Perspective Text Effect (Mouse Tracking) ---
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 75, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 75, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize position relative to center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-y * 12); 
    rotateY.set(x * 12);

    // Track absolute mouse positions for background radial target illumination
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // --- 3. Magnetic CTA Button Effect ---
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { stiffness: 120, damping: 15 });
  const springBtnY = useSpring(btnY, { stiffness: 120, damping: 15 });

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distanceX = e.clientX - btnCenterX;
    const distanceY = e.clientY - btnCenterY;

    btnX.set(distanceX * 0.35);
    btnY.set(distanceY * 0.35);
  };

  const handleButtonMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  // Map radial tracking positions to string variables for CSS usage
  const gradientBg = useTransform(
    [springGlowX, springGlowY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(204, 255, 0, 0.04), transparent 80%)`
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen bg-background flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Kinetic Radial Grid Illuminator (Behind Text) */}
      <motion.div 
        style={{ backgroundImage: gradientBg }}
        className="absolute inset-0 pointer-events-none z-0" 
      />

      {/* Background Architectural Grid Sub-Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Typographic Statement Layer */}
      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        className="text-center z-10 max-w-[90vw] md:max-w-[80vw] pointer-events-none mt-[-10vh]"
      >
        <h1 className="text-[11vw] sm:text-[9vw] font-black tracking-tighter text-textPrimary leading-[0.82] font-display uppercase">
          <motion.span 
            whileHover={{ scale: 1.02, x: 10 }}
            className="block opacity-20 hover:opacity-100 transition-all duration-300 origin-center cursor-pointer pointer-events-auto"
          >
            Learn.
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.02, x: -10 }}
            className="block opacity-40 hover:opacity-100 transition-all duration-300 origin-center cursor-pointer pointer-events-auto"
          >
            Play.
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.02, x: 10 }}
            className="block opacity-70 hover:opacity-100 transition-all duration-300 origin-center cursor-pointer pointer-events-auto"
          >
            Compete.
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.04 }}
            className="block text-transparent bg-clip-text bg-gradient-to-b from-textPrimary via-textPrimary to-zinc-700 cursor-pointer pointer-events-auto transition-all duration-300"
          >
            Grow.
          </motion.span>
        </h1>
      </motion.div>

      {/* Repositioned Pop Chartreuse Magnetic CTA Button */}
      <div className="absolute bottom-[12vh] z-20 h-16 flex items-center justify-center">
        <motion.button
          ref={buttonRef}
          onMouseMove={handleButtonMouseMove}
          onMouseLeave={handleButtonMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          onMouseUp={() => setIsHovered(false)}
          style={{ x: springBtnX, y: springBtnY }}
          whileTap={{ scale: 0.96 }}
          className="relative px-10 py-5 bg-primary text-background rounded-full font-bold tracking-wider text-xs uppercase flex items-center gap-3 transition-shadow duration-300 shadow-[0_0_0_0_rgba(204,255,0,0)] hover:shadow-[0_0_40px_8px_rgba(204,255,0,0.25)] border border-white/10"
        >
          <span>Join FTG Space</span>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </motion.div>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 0.4, 0], y: [0, 8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-6 font-mono text-[9px] tracking-[0.25em] text-textSecondary uppercase pointer-events-none"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;