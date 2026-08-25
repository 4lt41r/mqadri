import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const BASE = import.meta.env.BASE_URL;

export const AVATAR_ASSETS = {
  portrait: "/mqadri/assets/avatar/portrait.jpg",
  standing: "/mqadri/assets/avatar/standing.jpg",
  profile: "/mqadri/assets/avatar/profile.jpg",
  working: "/mqadri/assets/avatar/working.jpg",
  silhouette: "/mqadri/assets/avatar/silhouette.jpg"
};

export const AvatarStage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const op1 = useTransform(scrollYProgress, [0, 0.2, 0.35], [0.22, 0.22, 0]);
  const op2 = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0, 0.22, 0]);
  const op3 = useTransform(scrollYProgress, [0.55, 0.75, 0.9], [0, 0.22, 0]);
  const op4 = useTransform(scrollYProgress, [0.8, 0.95, 1], [0, 0.22, 0.25]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" 
      aria-hidden="true"
    >
      <div className="absolute right-0 top-0 w-full lg:w-[55vw] h-full flex items-center justify-end mix-blend-luminosity filter contrast-125">
        
        <motion.img
          src={AVATAR_ASSETS.standing}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0.15 } : { opacity: op1 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.profile}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op2 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.working}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op3 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.silhouette}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op4 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />
      </div>
    </div>
  );
};
