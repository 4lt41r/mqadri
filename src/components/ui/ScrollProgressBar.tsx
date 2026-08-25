import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ScrollProgressBarProps {
  activeSection: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (reducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" aria-hidden="true">
      <div className="h-[1.5px] w-full bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-slate-400 via-white to-slate-300 origin-left"
          style={{ scaleX }}
        />
      </div>

      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[9px] font-mono text-slate-400">
        <div className="writing-vertical tracking-[0.25em] uppercase text-slate-400 select-none">
          {activeSection.toUpperCase()}
        </div>
        <div className="h-16 w-[1px] bg-white/[0.08] relative overflow-hidden">
          <motion.div
            className="w-full bg-white origin-top"
            style={{ scaleY: scaleX, height: '100%' }}
          />
        </div>
        <span className="font-semibold text-slate-300">2026</span>
      </div>
    </div>
  );
};
