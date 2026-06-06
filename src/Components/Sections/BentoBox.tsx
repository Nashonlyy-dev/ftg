import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, Coins } from "lucide-react";

export const BentoBox: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-background px-6 md:px-16 lg:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="font-mono text-[10px] tracking-widest text-textSecondary uppercase">
              Engine Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-textPrimary tracking-tight font-display uppercase">
            Built for Elite Performance.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[22rem]">
          
          {/* Card 1: Large - AI Powered Modules */}
          <div
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`md:col-span-8 bg-surface border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-500 ${
              hoveredIndex !== null && hoveredIndex !== 0 ? "opacity-30 blur-[1px]" : "opacity-100"
            }`}
          >
            <div className="space-y-2 z-10 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textPrimary mb-4 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <Code2 className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary uppercase tracking-tight">AI-Powered Modules</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                Dynamic execution sandboxes that adapt difficulty vectors in real-time based on syntax optimization.
              </p>
            </div>

            {/* Visual Backing: Mock Code Snippet Preview */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] bg-[#09090B] border-t border-l border-white/5 rounded-tl-2xl p-4 font-mono text-[11px] text-zinc-500 select-none pointer-events-none group-hover:border-primary/20 transition-colors duration-500">
              <div className="text-primary/60">{"// Architectural Stream Sync"}</div>
              <div><span className="text-purple-400">const</span> pipeline = <span className="text-blue-400">new</span> VectorEngineStream({"{"}</div>
              <div className="pl-4">weights: <span className="text-primary">[0.35, 0.65]</span>,</div>
              <div className="pl-4 text-zinc-600">telemetry: true</div>
              <div>{"});"}</div>
              <div className="mt-2 text-purple-400">await <span className="text-blue-400">pipeline.execute()</span>;</div>
            </div>
          </div>

          {/* Card 2: Medium - IQ Games */}
          <div
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`md:col-span-4 bg-surface border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-500 ${
              hoveredIndex !== null && hoveredIndex !== 1 ? "opacity-30 blur-[1px]" : "opacity-100"
            }`}
          >
            <div className="space-y-2 z-10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textPrimary mb-4 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <Trophy className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary uppercase tracking-tight">IQ Games</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                High-speed competitive spatial logic challenges designed to benchmark pattern identification.
              </p>
            </div>

            {/* Visual Backing: Animated Leaderboard Rows */}
            <div className="space-y-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500 mt-6">
              {[88, 82, 79].map((score, i) => (
                <div key={i} className="w-full h-8 bg-[#09090B] border border-white/5 rounded-lg flex items-center justify-between px-3 text-[11px] font-mono text-textPrimary group-hover:border-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-textSecondary">0{i + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary" />
                  </div>
                  <span className="font-bold text-textSecondary group-hover:text-textPrimary">{score} XP</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Full Width - Earn Rewards with High-Pop 3D Physics Coin */}
          <div
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`md:col-span-12 bg-surface border border-white/5 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden relative group transition-all duration-500 ${
              hoveredIndex !== null && hoveredIndex !== 2 ? "opacity-30 blur-[1px]" : "opacity-100"
            }`}
          >
            <div className="space-y-2 z-10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textPrimary mb-4 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <Coins className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary uppercase tracking-tight">Earn Rewards</h3>
              <p className="text-sm text-textSecondary max-w-sm leading-relaxed">
                Convert tactical milestones into practical system assets. Complete complex modules to mine network performance rewards directly.
              </p>
            </div>

            {/* Interactive Physics Canvas Container */}
            <div className="w-full h-full min-h-[220px] flex items-center justify-center relative">
              <PhysicsCoin active={hoveredIndex === 2} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- High-Fidelity 3D Reflection Physics Coin Component ---
const PhysicsCoin: React.FC<{ active: boolean }> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const coinImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Instantiate and pre-cache the glossy 3D gold reflective dollar coin layer
    const img = new Image();
    img.src = "https://i.ibb.co/jvcyB3cf/vecteezy-dollar-coin-gold-low-poly-44788301-1.png";
    img.onload = () => {
      coinImgRef.current = img;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Rigid body scaling sizes
    const radius = 42; 
    
    // Physics Environment Properties
    let x = canvas.width / 2;
    let y = canvas.height / 3;
    let vx = (Math.random() - 0.5) * 5; // Give it initial structural spin velocity
    let vy = 2;
    
    const gravity = 0.3;
    const bounce = -0.72; // Snappy elastic bouncing feedback
    const friction = 0.985;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Distance checking vector formula
      const dx = mouseX - x;
      const dy = mouseY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Trigger structural force blast if the cursor punctures proximity thresholds
      if (distance < radius + 40) {
        const angle = Math.atan2(dy, dx);
        const force = (radius + 40 - distance) * 0.12; // Dynamic impact mapping
        
        vx -= Math.cos(angle) * force * 4;
        vy -= Math.sin(angle) * force * 4;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePhysics = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply environment calculations
      vy += gravity;
      x += vx;
      y += vy;
      vx *= friction;
      vy *= friction;

      // Floor constraints logic checks
      if (y + radius > canvas.height) {
        y = canvas.height - radius;
        vy *= bounce;
        // Anti-sink friction threshold
        if (Math.abs(vy) < 0.4) vy = 0;
      }
      // Ceiling checks
      if (y - radius < 0) {
        y = radius;
        vy *= bounce;
      }
      // Right Wall boundary checks
      if (x + radius > canvas.width) {
        x = canvas.width - radius;
        vx *= bounce;
      } 
      // Left Wall boundary checks
      else if (x - radius < 0) {
        x = radius;
        vx *= bounce;
      }

      // Render Pipeline Engine Loop
      if (coinImgRef.current) {
        ctx.save();
        
        // Add a clean high-end interactive ambient shadow behind the golden coin asset
        ctx.shadowColor = "rgba(204, 255, 0, 0.15)";
        ctx.shadowBlur = active ? 30 : 15;
        ctx.shadowOffsetX = vx * 0.5;
        ctx.shadowOffsetY = vy * 0.5 + 4;

        // Draw the cached raw PNG 3D image layer centered on the physics coordinates
        ctx.drawImage(
          coinImgRef.current,
          x - radius,
          y - radius,
          radius * 2,
          radius * 2
        );
        ctx.restore();
      } else {
        // Fallback vector container layout ring while image streams into memory
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#CCFF00";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center p-2">
      <canvas
        ref={canvasRef}
        width={380}
        height={200}
        className="bg-[#09090B] border border-white/5 rounded-2xl cursor-grab active:cursor-grabbing shadow-inner transition-colors duration-500 group-hover:border-primary/10"
      />
    </div>
  );
};