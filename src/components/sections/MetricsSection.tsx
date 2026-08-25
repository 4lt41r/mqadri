import React from 'react';
import { METRICS } from '../../data/metrics';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#080A0F] border-y border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase block mb-2 font-semibold">
            VERIFIED BENCHMARKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
            Audited Performance Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="relative p-8 rounded-2xl bg-[#0C1017] border border-white/[0.07] hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                  {metric.category}
                </span>
                {metric.id === 'accuracy' ? (
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                ) : metric.id === 'productivity' ? (
                  <Zap className="w-4 h-4 text-slate-400" />
                ) : (
                  <Award className="w-4 h-4 text-slate-400" />
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-3xl sm:text-4xl font-bold text-slate-400 ml-1 font-['Space_Grotesk']">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-200 mt-2 font-['Space_Grotesk']">
                  {metric.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/[0.06] pt-4 mt-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
