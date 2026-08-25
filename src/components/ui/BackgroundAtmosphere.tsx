import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const BackgroundAtmosphere: React.FC = () => {
  const { scrollY } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const yOrb1 = useTransform(scrollY, [0, 4000], [0, -180]);
  const yOrb2 = useTransform(scrollY, [0, 4000], [0, -280]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#07080A]" />
      
      <motion.div 
        style={reducedMotion ? {} : { y: yOrb1 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-slate-800/10 blur-[180px] gpu-layer"
      />
      <motion.div 
        style={reducedMotion ? {} : { y: yOrb2 }}
        className="absolute top-[40%] -left-[10%] w-[650px] h-[650px] rounded-full bg-blue-950/15 blur-[160px] gpu-layer"
      />
      
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80" 
      />
    </div>
  );
};
