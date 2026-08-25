import React from 'react';
import { AVATAR_ASSETS } from './AvatarStage';

interface AvatarCanvasProps {
  scrollProgress?: number;
}

export const AvatarCanvas: React.FC<AvatarCanvasProps> = () => {
  return (
    <div 
      className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0C1017] shadow-2xl"
    >
      <img
        src={AVATAR_ASSETS.portrait}
        alt="Mujeeb Qadri - Quality Analyst"
        width={360}
        height={450}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-black/20 pointer-events-none" />

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-[#07080A]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[9px] text-slate-300 tracking-wider uppercase font-semibold">
            VERIFIED CANDIDATE
          </span>
        </div>
        <span className="font-mono text-[9px] text-slate-400 bg-[#07080A]/85 backdrop-blur-md px-2 py-1 rounded-md border border-white/[0.08]">
          2026 DOSSIER
        </span>
      </div>

      <div className="absolute bottom-3 left-3 right-3 bg-[#07080A]/90 backdrop-blur-md p-3 rounded-xl border border-white/[0.08] pointer-events-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">CURRENT MANDATE</p>
            <p className="text-xs font-semibold text-white font-mono mt-0.5">QA & AI OPERATIONS</p>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};
