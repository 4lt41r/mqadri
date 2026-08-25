import React, { useState } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const NAV_ITEMS = [
  { id: 'hero', label: '01 INTRO' },
  { id: 'about', label: '02 ABOUT' },
  { id: 'experience', label: '03 EXPERIENCE' },
  { id: 'ai-quality', label: '04 AI + QUALITY' },
  { id: 'skills', label: '05 SKILLS' },
  { id: 'projects', label: '06 PROJECTS' },
  { id: 'contact', label: '07 CONTACT' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 py-3.5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <button
          onClick={() => scrollToSection('hero')}
          className="pointer-events-auto flex items-center gap-2.5 bg-[#07080A]/90 backdrop-blur-md border border-white/[0.08] px-3.5 py-2 rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white group shadow-lg"
          aria-label="Mujeeb Qadri Home"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
            M. QADRI <span className="text-slate-500 font-normal hidden sm:inline">// QA & AI OPS</span>
          </span>
        </button>

        <nav 
          className="hidden md:flex pointer-events-auto items-center gap-1 bg-[#07080A]/90 backdrop-blur-md border border-white/[0.08] p-1.5 rounded-xl shadow-xl"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-[11px] font-mono tracking-wider rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                  isActive
                    ? 'bg-white text-[#07080A] font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex pointer-events-auto items-center">
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#07080A]/90 hover:bg-white hover:text-[#07080A] text-slate-200 text-[11px] font-mono font-semibold border border-white/[0.1] backdrop-blur-md transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME PDF</span>
          </button>
        </div>

        <div className="md:hidden pointer-events-auto flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="bg-[#07080A]/90 backdrop-blur-md border border-white/[0.08] p-2 rounded-xl text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Open Resume Viewer"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#07080A]/90 backdrop-blur-md border border-white/[0.08] p-2 rounded-xl text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 bg-[#0C1017] border border-white/[0.1] rounded-2xl p-4 shadow-2xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 text-xs font-mono rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-white text-[#07080A] font-bold'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 bg-white text-[#07080A] rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
