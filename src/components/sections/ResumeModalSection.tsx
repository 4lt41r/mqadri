import React from 'react';
import { Modal } from '../ui/Modal';
import { PROFILE } from '../../data/profile';
import { EXPERIENCES } from '../../data/experience';
import { Download, Printer, Award, BookOpen, Globe } from 'lucide-react';

interface ResumeModalSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModalSection: React.FC<ResumeModalSectionProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Conventional Resume Dossier">
      <div className="space-y-6 text-left">
        
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0A0D14] p-4 rounded-xl border border-white/10">
          <div>
            <h4 className="text-base font-bold text-white font-['Space_Grotesk']">{PROFILE.name}</h4>
            <p className="text-xs font-mono text-slate-400">{PROFILE.title} • {PROFILE.location}</p>
            <p className="text-[11px] font-mono text-slate-500 mt-0.5">{PROFILE.email} | {PROFILE.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>
            <a
              href={`mailto:${PROFILE.email}?subject=Resume%20Inquiry%20-%20Mujeeb%20Qadri`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#0A0D14] hover:bg-slate-200 text-xs font-mono rounded-lg transition-colors font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>REQUEST PDF</span>
            </a>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
          
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Professional Summary</h5>
            <p className="text-xs leading-relaxed text-slate-300">{PROFILE.summaryStatement}</p>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Professional Experience</h5>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-white/15 pl-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">{exp.organization}</span>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Education</span>
            </h5>
            <div className="space-y-1 text-xs font-mono text-slate-300">
              {PROFILE.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{edu.degree}</span>
                  <span className="text-slate-500">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
            <div>
              <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-slate-300" />
                <span>Performance Awards</span>
              </h5>
              <div className="space-y-1 text-[11px] font-mono text-slate-300">
                {PROFILE.awards.map((aw, idx) => (
                  <div key={idx}>• {aw.title} ({aw.date})</div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-300" />
                <span>Certifications & Languages</span>
              </h5>
              <div className="space-y-1 text-[11px] font-mono text-slate-300">
                <div>• Languages: {PROFILE.languages.join(", ")}</div>
                <div>• Certifications: {PROFILE.certifications.join(", ")}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
};
