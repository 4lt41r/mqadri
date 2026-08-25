import React from 'react';
import { Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';

export const ToolHierarchySection: React.FC = () => {
  const branches = [
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: <Cpu className="w-4 h-4 text-slate-300" />,
      items: ["Prompt & Output Coherence", "Safety & Policy Moderation", "RLHF Benchmark Datasets", "Synthetic Image Fidelity (PixAI)"]
    },
    {
      title: "QUALITY GOVERNANCE",
      icon: <ShieldCheck className="w-4 h-4 text-slate-300" />,
      items: ["Audit Sampling Calibration", "Root Cause Error Taxonomies", "Inter-Rater Reliability Testing", "SOP Guideline Synthesis"]
    },
    {
      title: "AUTOMATION & DATA",
      icon: <Zap className="w-4 h-4 text-slate-300" />,
      items: ["Google Apps Script Engines", "Python Automation Scripts", "Automated Discrepancy Tracking", "Real-Time Metric Reporting"]
    },
    {
      title: "DIGITAL MARKETING & WEB",
      icon: <Globe className="w-4 h-4 text-slate-300" />,
      items: ["Google Ads Quality Score", "SEO Content Auditing", "Catalog & Landing Page QA", "Ad Compliance Verification"]
    }
  ];

  return (
    <section className="py-20 bg-[#090B10] border-y border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase block mb-2 font-semibold">
            SYSTEMIC ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
            Discipline Relational Tree
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            How quality, artificial intelligence, automation, and digital marketing integrate into my operational workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#0D1017] border border-white/[0.07] hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
                  {branch.icon}
                  <h3 className="text-xs font-mono font-bold tracking-wider text-white">
                    {branch.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {branch.items.map((sub, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-300 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-slate-500">
                SYSTEM BRANCH 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
