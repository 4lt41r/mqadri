export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  projects?: string[];
  responsibilities: string[];
  skills: string[];
  achievements?: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  description: string;
  category: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'QUALITY' | 'AI' | 'CONTENT' | 'AUTOMATION' | 'MARKETING' | 'DESIGN';
  proficiency: 'Core Expertise' | 'Advanced' | 'Applied';
  context: string;
  impactMetrics?: string;
  connectedSkillIds: string[];
}

export interface CaseStudyProject {
  id: string;
  title: string;
  category: 'AI & Operations' | 'Quality Governance' | 'Automation & Systems';
  tagline: string;
  role: string;
  problem: string;
  approach: string;
  tools: string[];
  result: string;
}
