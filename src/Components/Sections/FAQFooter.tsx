// Change this line at the top:
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How does the performance optimization sandbox run code?",
    answer: "All execution happens within highly isolated, client-side web assembly runtimes. Your environments process tracking metrics locally before passing absolute structural hashes to our analytics platform.",
  },
  {
    question: "What system assets are mined through the rewards engine?",
    answer: "Completing milestones generates cryptographic performance proofs. These network assets can be used to unlock customized environment parameters, exclusive competitive sectors, and verified credentials.",
  },
  {
    question: "Can academic institutions integrate custom logical sandboxes?",
    answer: "Yes. The Institutional Control Hub lets you deploy dedicated curriculum layers, provision group-level sandboxes, and export clean diagnostic telemetry via custom webhooks.",
  },
];

export const FAQFooter: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // --- Magnetic CTA Button Effect ---
// Update lines 31-34 inside the component to this:
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

  return (
    <section className="w-full bg-[#000000] px-6 md:px-16 lg:px-24 pt-32 pb-16 border-t border-white/5 flex flex-col justify-between overflow-hidden">
      <div className="max-w-4xl mx-auto w-full space-y-32">
        
        {/* Accordion FAQ Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase font-satoshi">
              System Specifications
            </h2>
          </div>

          <div className="border-t border-white/5 divide-y divide-white/5">
            {FAQ_DATA.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-base font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-neutral-300">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="text-[#888888] group-hover:text-white transition-colors duration-300 shrink-0 ml-4"
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[#888888] leading-relaxed max-w-2xl tracking-tight">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Element */}
        <div className="text-center space-y-8 py-16 border-t border-white/5 relative">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter font-satoshi uppercase">
            Ready to grow?
          </h2>

          <div className="h-16 flex items-center justify-center">
            <motion.button
              ref={buttonRef}
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              onMouseEnter={() => setIsHovered(true)}
              onMouseUp={() => setIsHovered(false)}
              style={{ x: springBtnX, y: springBtnY }}
              className="px-8 py-4 bg-[#FFFFFF] text-[#000000] rounded-full font-medium tracking-tight text-sm flex items-center gap-2 transition-shadow duration-300 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_0_rgba(255,255,255,0.15)]"
            >
              <span>Join FTG</span>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Technical Footer Row */}
        <div className="pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#888888] uppercase tracking-widest">
          <div>&copy; 2026 FTG Ecosystem. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Protocol</a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Kernel</a>
          </div>
        </div>

      </div>
    </section>
  );
};