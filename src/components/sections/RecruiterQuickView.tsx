import React from 'react';
import { UserCheck, Download } from 'lucide-react';

interface RecruiterQuickViewProps {
  onOpenResumeModal: () => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-6 bg-[#0B0E14] border-y border-white/[0.07]" aria-label="Recruiter 10-Second Summary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">RECRUITER FAST-TRACK</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-tight font-mono">10-Second Executive Summary</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto flex-1 lg:mx-8">
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">CURRENT SENIORITY</span>
              <span className="text-xs font-semibold text-slate-200">Senior Quality Analyst</span>
            </div>
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">CORE DOMAIN</span>
              <span className="text-xs font-semibold text-slate-200">AI Evaluation & Content Moderation</span>
            </div>
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">OPERATIONAL TOOLING</span>
              <span className="text-xs font-semibold text-slate-200">QA Automation (Python / AppScript)</span>
            </div>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#0A0D14] text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-colors hover:bg-slate-200 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD DOSSIER</span>
          </button>
        </div>
      </div>
    </section>
  );
};
