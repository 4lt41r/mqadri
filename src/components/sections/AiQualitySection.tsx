import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { AI_QUALITY_PHILOSOPHY } from '../../data/aiQuality';
import { CheckCircle } from 'lucide-react';

export const AiQualitySection: React.FC = () => {
  return (
    <section id="ai-quality" className="py-24 md:py-32 bg-[#090C12] border-y border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="04"
          subtitle="SYSTEM ARCHITECTURE"
          title="Quality Assurance in Generative AI"
          description={AI_QUALITY_PHILOSOPHY.subheadline}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {AI_QUALITY_PHILOSOPHY.pillars.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/[0.07] hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-mono font-bold text-slate-400">{item.step}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                    {item.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-3">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-[10px] font-mono text-slate-400 gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>FRAMEWORK STAGE CALIBRATED</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/[0.08] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.07]">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-widest block mb-1">
                EVALUATION WORKFLOWS
              </span>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Multi-Modal Generative AI Assessment Modules
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              RLHF & RUBRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_QUALITY_PHILOSOPHY.workflowProjects.map((wf, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090C12] border border-white/[0.06] hover:border-white/15 transition-all">
                <span className="text-xs font-bold text-slate-200 block mb-1 font-mono">{wf.name}</span>
                <span className="text-[11px] text-slate-400 block">{wf.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
