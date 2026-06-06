import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  metric: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    metric: "72%",
    label: "Passive Engagement",
    description: "Traditional modern learning platforms still rely on static video consumption, leading to instant cognitive drop-off.",
  },
  {
    metric: "0x",
    label: "Retention Rate Boost",
    description: "Without live application or competitive tension, theoretical knowledge fades from memory within 48 hours of completion.",
  },
  {
    metric: "100%",
    label: "The FTG Paradigm",
    description: "We merge active logic engineering, cognitive game loops, and real reward mechanics to build actual muscle memory.",
  },
];

export const TheWhy: React.FC = () => {
  return (
    <section className="relative w-full bg-background px-6 md:px-16 lg:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Column: The Sticky Headline */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-textPrimary opacity-80 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-textSecondary uppercase">
                The Problem / The Shift
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-textPrimary tracking-tight leading-[1.05] font-display uppercase">
              Learning <br />
              shouldn't be <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-textSecondary to-white/80 animate-gradient-x">
                passive.
              </span>
            </h2>
            
            <p className="text-textSecondary max-w-sm text-sm md:text-base tracking-tight leading-relaxed">
              Most educational models are broken, built on outdated structural paradigms that treat progress as a checkbox rather than an active state of growth.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Scrolling Statistics Reveal */}
        <div className="lg:col-span-7 space-y-24 lg:space-y-32 lg:pt-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-b border-white/5 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                {/* Numeric Metric */}
                <span className="text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-textPrimary font-display leading-none block md:w-48 shrink-0 transition-colors duration-300 group-hover:text-primary">
                  {stat.metric}
                </span>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight text-textPrimary uppercase">
                    {stat.label}
                  </h3>
                  <p className="text-textSecondary text-sm md:text-base leading-relaxed tracking-tight max-w-md group-hover:text-textPrimary transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};