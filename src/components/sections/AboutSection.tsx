import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROFILE } from '../../data/profile';
import { Cpu, ShieldAlert, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="02"
          subtitle="POSITIONING & MANDATE"
          title="I work where quality, AI, and operations meet."
          description="Synthesizing rigorous audit standards, machine learning model validation, and high-scale operational precision."
        />

        <div className="relative mb-16 p-8 md:p-12 rounded-2xl bg-[#0C1017] border border-white/[0.07] shadow-xl">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-200 leading-relaxed">
            "In an era where generative models produce infinite content, <span className="text-white font-semibold">accuracy is the ultimate competitive advantage</span>. I specialize in auditing synthetic outputs, designing error-proof workflows, and calibrating high-velocity teams to eliminate discrepancy."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-[#0B0E14] border border-white/[0.07] hover:border-white/15 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 mb-4 group-hover:scale-105 transition-transform">
                {idx === 0 ? <Cpu className="w-5 h-5" /> : idx === 1 ? <ShieldAlert className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
