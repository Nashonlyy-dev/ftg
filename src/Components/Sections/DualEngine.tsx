
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Building2, User } from "lucide-react";

type EngineMode = "students" | "institutions";

interface FeatureList {
  students: string[];
  institutions: string[];
}

const ENGINE_DATA: FeatureList = {
  students: [
    "Earn system assets and performance achievements.",
    "Access real-time logic sandboxes and IQ games.",
    "Compete in community peer-to-peer programming sprints.",
    "Build a permanent cryptographically verified skill profile."
  ],
  institutions: [
    "Track student participation metrics and mastery trends.",
    "Deploy custom internal sandboxes and curriculum layers.",
    "Automate performance benchmarking and credentialing.",
    "Isolate logic diagnostic telemetry across student groups."
  ]
};

export const DualEngine: React.FC = () => {
  const [mode, setMode] = useState<EngineMode>("students");

  return (
    <section className="relative w-full min-h-[90vh] bg-[#000000] px-6 md:px-16 lg:px-24 py-32 border-t border-white/5 flex flex-col justify-center overflow-hidden">
      
      {/* Dynamic Structural Background Morph Patterns */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out">
        {mode === "students" ? (
          // Energetic radial aura pattern for students
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        ) : (
          // Structured analytical grid pattern for institutions
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
        )}
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 space-y-16 text-center">
        
        {/* Section Header Text */}
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
              Target Infrastructure
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] tracking-tight font-satoshi uppercase">
            One Engine. <br />Two Operating Directions.
          </h2>
        </div>

        {/* Massive Pill-Shaped Control Toggle Switch */}
        <div className="inline-flex items-center p-1.5 bg-[#0A0A0A] border border-white/5 rounded-full relative shadow-inner">
          {/* Active Sliding Background Pill Layer */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-[#FFFFFF]"
            style={{
              width: "calc(50% - 12px)",
              x: mode === "students" ? "0%" : "100%",
              left: mode === "students" ? "6px" : "18px"
            }}
          />

          {/* Toggle Button: Students */}
          <button
            onClick={() => setMode("students")}
            className={`relative z-10 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-colors duration-300 ${
              mode === "students" ? "text-[#000000]" : "text-[#888888] hover:text-white"
            }`}
          >
            <User className="w-3.5 h-3.5 stroke-[2.5]" />
            For Students
          </button>

          {/* Toggle Button: Institutions */}
          <button
            onClick={() => setMode("institutions")}
            className={`relative z-10 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-colors duration-300 ${
              mode === "institutions" ? "text-[#000000]" : "text-[#888888] hover:text-white"
            }`}
          >
            <Building2 className="w-3.5 h-3.5 stroke-[2.5]" />
            For Institutions
          </button>
        </div>

        {/* Features Content Morph Container Layout */}
        <div className="max-w-md mx-auto w-full pt-6 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-left space-y-4"
            >
              {ENGINE_DATA[mode].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-[#0A0A0A]/40 border border-white/5 rounded-2xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-sm text-[#888888] tracking-tight leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
