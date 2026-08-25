import React from 'react';
import { Download, Mail, Phone, MapPin, ShieldCheck, Cpu, Users, Award } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { AvatarCanvas } from '../ui/AvatarCanvas';

interface HeroSectionProps {
  scrollProgress?: number;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-24 pb-12 sm:pt-32 sm:pb-16 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.07]">
                QUALITY ANALYST • SENIOR QA REVIEWER • AI OPERATIONS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-['Space_Grotesk'] leading-[1.08] mb-3">
              {PROFILE.name}
            </h1>

            <p className="text-base sm:text-lg font-mono text-slate-300 mb-4">
              {PROFILE.title} <span className="text-slate-500">|</span> 4+ Years Experience
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-6 border-b border-white/[0.08] w-full">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE.location}
              </span>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE.email}
              </a>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE.phone}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
              {PROFILE.summaryStatement}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8">
              <div className="bg-[#0D1017] p-3 rounded-xl border border-white/[0.07]">
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
                  <span>ACCURACY</span>
                </div>
                <span className="text-sm font-bold text-white font-['Space_Grotesk']">98–100% QA</span>
              </div>

              <div className="bg-[#0D1017] p-3 rounded-xl border border-white/[0.07]">
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono mb-1">
                  <Users className="w-3.5 h-3.5 text-slate-300" />
                  <span>LEADERSHIP</span>
                </div>
                <span className="text-sm font-bold text-white font-['Space_Grotesk']">16 QAs Led</span>
              </div>

              <div className="bg-[#0D1017] p-3 rounded-xl border border-white/[0.07]">
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono mb-1">
                  <Cpu className="w-3.5 h-3.5 text-slate-300" />
                  <span>AI DATASETS</span>
                </div>
                <span className="text-sm font-bold text-white font-['Space_Grotesk']">Google Ads AI</span>
              </div>

              <div className="bg-[#0D1017] p-3 rounded-xl border border-white/[0.07]">
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono mb-1">
                  <Award className="w-3.5 h-3.5 text-slate-300" />
                  <span>AWARDS</span>
                </div>
                <span className="text-sm font-bold text-white font-['Space_Grotesk']">2x Performance</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#08090C] hover:bg-slate-200 font-mono text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>VIEW & DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={() => scrollTo('experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121620] hover:bg-[#181E2C] text-slate-200 border border-white/[0.1] font-mono text-xs font-semibold px-5 py-3.5 rounded-xl transition-all"
              >
                <span>EXPLORE WORK HISTORY</span>
              </button>
            </div>

          </div>

          <div className="lg:col-span-4 w-full flex justify-center">
            <AvatarCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
