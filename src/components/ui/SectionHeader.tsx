import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  description,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="font-mono text-[11px] text-slate-400 tracking-widest uppercase font-semibold">
          {number}
        </span>
        <span className="h-[1px] w-6 bg-white/15" />
        {subtitle && (
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-mono">
            {subtitle}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
