import React, { useState } from 'react';
import { BackgroundAtmosphere } from './components/ui/BackgroundAtmosphere';
import { AvatarStage } from './components/ui/AvatarStage';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { Navigation, NAV_ITEMS } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { RecruiterQuickView } from './components/sections/RecruiterQuickView';
import { AboutSection } from './components/sections/AboutSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AiQualitySection } from './components/sections/AiQualitySection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ToolHierarchySection } from './components/sections/ToolHierarchySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResumeModalSection } from './components/sections/ResumeModalSection';
import { ContactSection } from './components/sections/ContactSection';

import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07080A] text-[#F8FAFC] overflow-x-clip font-['Plus_Jakarta_Sans']">
      
      <ScrollProgressBar activeSection={activeSection} />
      <BackgroundAtmosphere />
      <AvatarStage />
      <CustomCursor />

      <Navigation
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main id="main-content" tabIndex={-1} className="relative z-10 outline-none">
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <RecruiterQuickView onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <MetricsSection />
        <ExperienceSection />
        <AiQualitySection />
        <SkillsSection />
        <ToolHierarchySection />
        <ProjectsSection />
        <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      <ResumeModalSection
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default App;
