import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXPERIENCES } from '../../data/experience';
import { Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="03"
          subtitle="EMPLOYMENT HISTORY"
          title="Professional Experience"
          description="Verified career history across high-volume healthcare compliance, Amazon Retail investigations, and Generative AI quality leadership."
        />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-[#0C0F17] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl transition-all hover:border-white/15"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.07]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-slate-300 font-semibold bg-white/[0.05] px-2.5 py-0.5 rounded border border-white/[0.08]">
                      {exp.organization}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400">ROLE 0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-[#121622] px-4 py-2 rounded-xl border border-white/[0.08] w-fit">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-200">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {exp.id === 'cognizant-sqa' ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-[#080B10] border border-white/[0.05]">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">TEAM LEADERSHIP</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">16 QAs Led</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">QA ACCURACY</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">98–100%</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">PRODUCTIVITY GAIN</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">+40% Gain</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">ERROR REDUCTION</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">-35% Errors</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-[#080B10] border border-white/[0.05]">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">REGULATORY COMPLIANCE</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">100% HIPAA</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">CUSTOMER ADVOCACY</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">100% NPS</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">RESOLUTION RATE</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">78% FCR</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">CSAT RATING</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">82% CSAT</span>
                  </div>
                </div>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                    Audited Workflows & Datasets:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs font-mono bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded border border-white/[0.07]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3 font-semibold">
                  Core Responsibilities & Deliverables:
                </span>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest block mb-2 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    Verified Achievements & Recognition:
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                        <span className="text-slate-400 font-mono">▸</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-mono uppercase bg-white/[0.03] text-slate-400 px-2 py-0.5 rounded border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
