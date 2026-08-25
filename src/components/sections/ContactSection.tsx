import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROFILE } from '../../data/profile';
import { Mail, Phone, MapPin, Copy, Check, Download, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#06080C] border-t border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="07"
          subtitle="DIRECT CONTACT"
          title="Recruiter Gateway"
          description="Available for Senior Quality Reviewer, AI Content Operations, and Quality Training roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0A0D14] border border-white/[0.08] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>INTERVIEW INQUIRIES OPEN</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                Let's discuss how I can lead quality on your team.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Direct phone and email contact for hiring managers, recruiters, and talent acquisition teams.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0E121A] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">PRIMARY EMAIL</span>
                      <a href={`mailto:${PROFILE.email}`} className="text-xs sm:text-sm font-mono text-white hover:underline">
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PROFILE.email, 'email')}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span className="hidden sm:inline">{copiedEmail ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0E121A] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">DIRECT PHONE</span>
                      <a href={`tel:${PROFILE.phone}`} className="text-xs sm:text-sm font-mono text-white hover:underline">
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PROFILE.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span className="hidden sm:inline">{copiedPhone ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                <div className="flex items-center p-3.5 rounded-xl bg-[#0E121A] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">CURRENT LOCATION</span>
                      <span className="text-xs sm:text-sm font-mono text-white">{PROFILE.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${PROFILE.email}?subject=Senior%20QA%20%2F%20AI%20Quality%20Role%20Inquiry%20-%20Mujeeb%20Qadri`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-[#07080A] font-mono text-xs font-bold py-3.5 px-6 rounded-xl transition-all shadow-md uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              <span>SEND EMAIL INQUIRY</span>
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="p-6 rounded-2xl bg-[#0A0D14] border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-widest block mb-2">
                VERIFIED CREDENTIALS
              </span>
              <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">
                Standard PDF Resume
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Formatted for Applicant Tracking Systems (ATS) and hiring committee review.
              </p>
              <button
                onClick={onOpenResumeModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-mono text-xs rounded-xl transition-colors font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>OPEN RESUME VIEWER</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0D14] border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-widest block mb-2">
                EXTERNAL VERIFICATION
              </span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] transition-colors text-xs font-mono text-slate-200"
              >
                <span className="font-semibold">LINKEDIN PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
