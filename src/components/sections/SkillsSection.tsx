import React, { useState, useMemo } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SKILL_CATEGORIES, SKILL_NODES } from '../../data/skills';
import { 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Zap, 
  Globe, 
  Palette, 
  GitCommit, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeSkillId, setActiveSkillId] = useState<string>(SKILL_NODES[0].id);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'QUALITY': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'AI': return <Cpu className="w-3.5 h-3.5" />;
      case 'CONTENT': return <FileText className="w-3.5 h-3.5" />;
      case 'AUTOMATION': return <Zap className="w-3.5 h-3.5" />;
      case 'MARKETING': return <Globe className="w-3.5 h-3.5" />;
      case 'DESIGN': return <Palette className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'ALL') return SKILL_NODES;
    return SKILL_NODES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const activeSkill = useMemo(() => {
    return SKILL_NODES.find((s) => s.id === activeSkillId) || SKILL_NODES[0];
  }, [activeSkillId]);

  const connectedSkills = useMemo(() => {
    return SKILL_NODES.filter((s) => activeSkill.connectedSkillIds.includes(s.id));
  }, [activeSkill]);

  const handleKeyDown = (e: React.KeyboardEvent, skillId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveSkillId(skillId);
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          number="05"
          subtitle="CAPABILITY MATRIX"
          title="Interactive Skills & Capability Map"
          description="A structured relational architecture across Quality Governance, Generative AI, Content Operations, Automation, Marketing, and Design."
        />

        <div 
          className="flex flex-wrap items-center gap-2 mb-10" 
          role="tablist" 
          aria-label="Filter skills by discipline"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isSelected
                    ? 'bg-white text-[#08090C] border-white font-bold shadow-md'
                    : 'bg-[#0B0E14] text-slate-400 border-white/[0.07] hover:text-slate-200 hover:border-white/15'
                }`}
              >
                {cat.id !== 'ALL' && getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between px-1 text-[11px] font-mono text-slate-400 mb-1">
              <span>ACTIVE CAPABILITY NODES ({filteredSkills.length})</span>
              <span className="hidden sm:inline">HOVER / TAP TO INSPECT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredSkills.map((skill) => {
                const isSelected = skill.id === activeSkillId;
                const isConnected = activeSkill.connectedSkillIds.includes(skill.id);

                return (
                  <button
                    key={skill.id}
                    tabIndex={0}
                    onClick={() => setActiveSkillId(skill.id)}
                    onMouseEnter={() => setActiveSkillId(skill.id)}
                    onKeyDown={(e) => handleKeyDown(e, skill.id)}
                    aria-pressed={isSelected}
                    className={`relative p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isSelected
                        ? 'bg-[#121722] border-white/30 shadow-lg'
                        : isConnected
                        ? 'bg-[#0E131C] border-slate-400/40'
                        : 'bg-[#0A0D14] border-white/[0.06] hover:border-white/15 hover:bg-[#0E121A]'
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
                          isSelected
                            ? 'bg-white text-[#0A0D14] font-bold border-white'
                            : 'bg-white/[0.04] text-slate-400 border-white/[0.06]'
                        }`}>
                          {skill.category}
                        </span>

                        <span className="text-[10px] font-mono text-slate-400">
                          {skill.proficiency}
                        </span>
                      </div>

                      <h3 className={`text-sm font-bold font-['Space_Grotesk'] tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {skill.name}
                      </h3>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono">
                      <span className={`flex items-center gap-1 ${
                        isConnected && !isSelected ? 'text-slate-200 font-semibold' : 'text-slate-400'
                      }`}>
                        {isConnected && !isSelected && <GitCommit className="w-3 h-3 text-slate-300" />}
                        {isConnected && !isSelected ? 'CONNECTED NODE' : `${skill.connectedSkillIds.length} LINKS`}
                      </span>

                      <span className={`transition-transform ${isSelected ? 'text-white translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}`}>
                        ▸
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#0C1017] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6">
              
              <div className="space-y-6">
                <div className="border-b border-white/[0.07] pb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded border border-white/[0.08] flex items-center gap-1.5">
                      {getCategoryIcon(activeSkill.category)}
                      {activeSkill.category} DISCIPLINE
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {activeSkill.proficiency}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
                    {activeSkill.name}
                  </h2>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                    OPERATIONAL APPLICATION & CONTEXT
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#080B10] p-4 rounded-xl border border-white/[0.06]">
                    {activeSkill.context}
                  </p>
                </div>

                {activeSkill.impactMetrics && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        VERIFIED BENCHMARK
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                        {activeSkill.impactMetrics}
                      </span>
                    </div>
                  </div>
                )}

                {connectedSkills.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <GitCommit className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                        CONNECTED CAPABILITIES ({connectedSkills.length})
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {connectedSkills.map((cSkill) => (
                        <button
                          key={cSkill.id}
                          onClick={() => setActiveSkillId(cSkill.id)}
                          className="text-[11px] font-mono bg-[#11151F] hover:bg-[#161C2B] text-slate-300 hover:text-white border border-white/[0.08] px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 group"
                        >
                          <span>{cSkill.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
