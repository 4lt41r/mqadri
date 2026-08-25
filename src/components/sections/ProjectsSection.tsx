import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CASE_STUDIES } from '../../data/projects';
import { CaseStudyProject } from '../../types';
import { Modal } from '../ui/Modal';
import { ArrowUpRight, AlertCircle, Wrench, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<CaseStudyProject | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="06"
          subtitle="APPLIED CASE STUDIES"
          title="Featured Projects & Systems"
          description="Direct application of QA automation, AI prompt calibration, and workflow optimization to solve real operational bottlenecks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedModalProject(project)}
              className="p-6 rounded-2xl bg-[#0C0F17] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                    {project.category}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-slate-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="space-y-2 mb-4 bg-[#080B10] p-3 rounded-xl border border-white/[0.04]">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">PROBLEM</span>
                    <p className="text-xs text-slate-300 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[9px] font-mono text-slate-300 uppercase tracking-wider block font-semibold">RESULT</span>
                    <p className="text-xs text-slate-200 line-clamp-2">{project.result}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tools.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-white/[0.03] text-slate-400 px-2 py-0.5 rounded border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[10px] font-mono bg-white/[0.03] text-slate-500 px-1.5 py-0.5 rounded">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] group-hover:text-white transition-colors">READ FULL DOSSIER</span>
                  <span>▸</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {selectedModalProject && (
        <Modal
          isOpen={Boolean(selectedModalProject)}
          onClose={() => setSelectedModalProject(null)}
          title={selectedModalProject.title}
        >
          <div className="space-y-5 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded border border-white/[0.08]">
                {selectedModalProject.category}
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium mt-2">
                {selectedModalProject.tagline}
              </p>
            </div>

            <div className="space-y-3.5 bg-[#080B10] p-4 sm:p-5 rounded-xl border border-white/[0.06]">
              <div>
                <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Problem Statement</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedModalProject.problem}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  <span>Implementation & Approach</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedModalProject.approach}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <h5 className="text-[10px] font-mono text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>Verified Outcome & Impact</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">{selectedModalProject.result}</p>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                Tools & Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedModalProject.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs font-mono bg-white/[0.04] text-slate-200 px-2.5 py-1 rounded border border-white/[0.08]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedModalProject(null)}
              className="w-full py-3 bg-white text-[#08090C] hover:bg-slate-200 font-mono text-xs font-bold rounded-xl transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};
