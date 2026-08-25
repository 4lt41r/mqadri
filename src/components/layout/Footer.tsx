import React from 'react';
import { PROFILE } from '../../data/profile';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#050608] border-t border-white/[0.06] text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <span className="font-bold text-slate-300 block">{PROFILE.name}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            Quality Assurance • Generative AI Content Operations • Process Optimization
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>ZERO FABRICATION POLICY // VERIFIED METRICS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
