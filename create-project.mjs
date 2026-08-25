import fs from 'fs';
import path from 'path';

const files = {
  // -------------------------------------------------------------
  // CONFIGURATION & ROOT FILES
  // -------------------------------------------------------------
  'package.json': JSON.stringify({
    "name": "mujeeb-qadri-portfolio",
    "private": true,
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "framer-motion": "^11.2.10",
      "lucide-react": "^0.395.0",
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
    },
    "devDependencies": {
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react": "^4.3.0",
      "autoprefixer": "^10.4.19",
      "postcss": "^8.4.38",
      "tailwindcss": "^3.4.4",
      "typescript": "^5.4.5",
      "vite": "^5.2.11"
    }
  }, null, 2),

  'tsconfig.json': JSON.stringify({
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": false,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true
    },
    "include": ["src"]
  }, null, 2),

  'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgPrimary: '#07080A',
        bgSurface: '#0C1017',
        bgElevated: '#11151F',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

  'index.html': `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Mujeeb Qadri | Quality Analyst & AI Operations Specialist</title>
    <meta name="title" content="Mujeeb Qadri | Quality Analyst & AI Operations Specialist" />
    <meta name="description" content="Results-driven Quality Analyst with 4+ years experience in quality audits, AI dataset evaluation, RCA, compliance monitoring, and automation across Cognizant and Concentrix." />
    <meta name="author" content="Mujeeb Qadri" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://mujeebqadri.com" />
    <meta name="theme-color" content="#07080A" />

    <!-- Open Graph -->
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Mujeeb Qadri | Quality Analyst & AI Operations Specialist" />
    <meta property="og:description" content="Quality Analyst with 4+ years experience in AI evaluation, QA auditing, and process optimization. Led 16 QAs, sustained 98–100% QA accuracy." />
    <meta property="og:image" content="/assets/avatar/portrait.jpg" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-[#07080A] text-[#F8FAFC] antialiased selection:bg-white/20 selection:text-white overflow-x-hidden min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

  // -------------------------------------------------------------
  // SOURCE CODE & STYLES
  // -------------------------------------------------------------
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  --bg-primary: #07080A;
  --bg-surface: #0C1017;
  --bg-surface-elevated: #11151F;
}

html {
  scrollbar-gutter: stable;
}

body {
  margin: 0;
  background-color: var(--bg-primary);
  color: #F8FAFC;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
  border-radius: 4px;
}

#root {
  overflow-x: clip;
  width: 100%;
}

.gpu-layer {
  transform: translateZ(0);
  backface-visibility: hidden;
}

@media print {
  body {
    background: #FFFFFF !important;
    color: #000000 !important;
  }
  header, footer, nav, button, [aria-hidden="true"] {
    display: none !important;
  }
}
`,

  'src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,

  'src/types/index.ts': `export interface ExperienceItem {
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
`,

  // -------------------------------------------------------------
  // DATA FILES
  // -------------------------------------------------------------
  'src/data/profile.ts': `export const PROFILE = {
  name: "MUJEEB QADRI",
  fullName: "MUJEEB UL HAQ QADRI",
  title: "QUALITY ANALYST",
  subtitle: "AI Content Operations & Process Optimization Specialist",
  location: "Gurugram, India",
  phone: "+91 9596517957",
  email: "syedmujeeb.qadri@gmail.com",
  linkedin: "https://linkedin.com/in/syedmujeeb-qadri",
  summaryStatement: "Results-driven Quality Analyst with 4+ years of experience in quality audits, operational evaluations, RCA, performance reporting, compliance monitoring, and coaching across high-volume customer-service and AI operations. Proven record of maintaining 98–100% quality accuracy, leading 16 QAs, building automated performance dashboards, and translating audit findings into targeted improvement actions.",
  languages: ["English", "Urdu", "Hindi"],
  certifications: [
    "Prompt Engineering",
    "Generative AI",
    "MS Excel",
    "Data Analysis",
    "Google Ads",
    "Six Sigma"
  ],
  awards: [
    { title: "PERFORMANCE AWARD: The Helping Hand", date: "August 2025" },
    { title: "PERFORMANCE AWARD: Working as One", date: "March 2025" }
  ],
  education: [
    { degree: "Bachelor of Engineering", period: "2017 – 2021" },
    { degree: "Diploma in Engineering", period: "2012 – 2016" }
  ],
  pillars: [
    {
      title: "AI Quality & Dataset Governance",
      description: "Led 16 QAs on high-impact Google Ads AI projects, reducing error rates by 35% through targeted coaching and structured evaluation rubrics."
    },
    {
      title: "Dynamic Automation & Live Trackers",
      description: "Engineered automated reporting workflows using advanced Google Sheets and Google Apps Script, boosting productivity by 40% and cutting manual errors by 35%."
    },
    {
      title: "Root Cause Analysis & MBR/WBR Reporting",
      description: "Delivered executive stakeholder reporting, trend analysis, and continuous calibration while maintaining 98–100% quality accuracy."
    }
  ]
};
`,

  'src/data/experience.ts': `import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "concentrix-sr",
    role: "Senior Representative Operation",
    organization: "Concentrix",
    period: "August 2025 – April 2026",
    summary: "Led high-stakes customer operations across United Healthcare and Amazon Retail NA workflows, enforcing strict HIPAA compliance, fraud prevention, and SLA adherence.",
    responsibilities: [
      "Supported customers in the United Healthcare insurance process, verifying member eligibility, evaluating claims, and handling Prior Authorizations.",
      "Identified potential healthcare fraud and compliance anomalies, ensuring 100% adherence to HIPAA regulations while maintaining a 100% NPS score.",
      "Handled Amazon Retail North America escalated customer cases involving accounts, orders, payment disputes, and chargebacks.",
      "Verified transaction telemetry and escalated potential fraud cases according to payment-security protocols, achieving 78% First Contact Resolution (FCR) and 82% CSAT."
    ],
    skills: ["HIPAA Compliance", "United Healthcare", "Amazon Retail NA", "Fraud Prevention", "NPS 100%", "FCR & CSAT"],
    achievements: [
      "Maintained 100% HIPAA regulatory compliance and a 100% NPS score across healthcare queues.",
      "Achieved 78% FCR and 82% CSAT on high-volume Amazon Retail North America dispute investigations."
    ]
  },
  {
    id: "cognizant-sqa",
    role: "Senior Quality Analyst",
    organization: "Cognizant",
    period: "January 2022 – August 2025",
    summary: "Led quality assurance for Google Ads AI initiatives, managed calibration across 16 QAs, and built automated operational reporting pipelines.",
    projects: [
      "Google Ads AI Datasets",
      "PixAI",
      "Getty Attribution",
      "APD APR",
      "APD First Turn",
      "APD Freeform",
      "GIO",
      "VF",
      "Dyie"
    ],
    responsibilities: [
      "Led a team of 16 Quality Analysts on high-impact Google Ads AI projects, reducing error rates by 35% through structured calibration and targeted coaching.",
      "Developed dynamic dashboards, live trackers, and automated reporting workflows using advanced Google Sheets formulas and Google Apps Script.",
      "Conducted Root Cause Analysis (RCA), performance coaching, and peer training across multi-modal generative datasets.",
      "Authored executive stakeholder updates through Weekly Business Reviews (WBR) and Monthly Business Reviews (MBR) while sustaining 98–100% quality accuracy."
    ],
    skills: [
      "AI Dataset Auditing",
      "Google Apps Script Automation",
      "Team Leadership (16 QAs)",
      "Root Cause Analysis",
      "WBR / MBR Reporting",
      "Google Ads AI"
    ],
    achievements: [
      "Improved operational productivity by 40%, process efficiency by 30%, and reduced manual errors by 35%.",
      "Sustained 98–100% quality accuracy while exceeding operational productivity targets by 120%.",
      "Honored with Performance Award 'Working as One' (Mar 2025) and Performance Award 'The Helping Hand' (Aug 2025)."
    ]
  }
];
`,

  'src/data/metrics.ts': `import { MetricItem } from '../types';

export const METRICS: MetricItem[] = [
  {
    id: "accuracy",
    value: "98–100",
    suffix: "%",
    label: "Quality & Audit Accuracy",
    description: "Maintained consistently across AI dataset validation, content moderation, and review queues.",
    category: "Precision"
  },
  {
    id: "productivity",
    value: "40",
    suffix: "%",
    label: "Productivity Improvement",
    description: "Achieved via workflow optimization, macro implementation, and structured audit protocols.",
    category: "Efficiency"
  },
  {
    id: "errors",
    value: "35",
    suffix: "%",
    label: "Manual Error Reduction",
    description: "Eliminated repetitive human oversights by engineering automated checks and validation scripts.",
    category: "Automation"
  }
];
`,

  'src/data/skills.ts': `import { SkillNode } from '../types';

export const SKILL_CATEGORIES = [
  { id: 'ALL', label: 'ALL CAPABILITIES' },
  { id: 'QUALITY', label: 'QUALITY' },
  { id: 'AI', label: 'AI' },
  { id: 'CONTENT', label: 'CONTENT' },
  { id: 'AUTOMATION', label: 'AUTOMATION' },
  { id: 'MARKETING', label: 'MARKETING' },
  { id: 'DESIGN', label: 'DESIGN' },
] as const;

export const SKILL_NODES: SkillNode[] = [
  {
    id: 'qa-assurance',
    name: 'Quality Assurance',
    category: 'QUALITY',
    proficiency: 'Core Expertise',
    context: 'Designing sampling rubrics, governance calibration frameworks, and cross-reviewer standardization across enterprise workflows.',
    impactMetrics: '98–100% QA precision sustained',
    connectedSkillIds: ['ai-evaluation', 'rca-analysis', 'content-moderation']
  },
  {
    id: 'quality-auditing',
    name: 'Quality Auditing & Monitoring',
    category: 'QUALITY',
    proficiency: 'Core Expertise',
    context: 'Conducting multi-tier inspections, inter-rater reliability calibration, and defect identification across live queues.',
    impactMetrics: 'Led 16 QAs on Google Ads AI queues',
    connectedSkillIds: ['qa-assurance', 'compliance-monitoring']
  },
  {
    id: 'rca-analysis',
    name: 'Root Cause Analysis (RCA)',
    category: 'QUALITY',
    proficiency: 'Core Expertise',
    context: 'Isolating systemic failure vectors, classifying error taxonomies, and authoring remediation protocols for operational lines.',
    impactMetrics: '-35% error rates achieved',
    connectedSkillIds: ['qa-assurance', 'apps-script']
  },
  {
    id: 'compliance-monitoring',
    name: 'Compliance Monitoring',
    category: 'QUALITY',
    proficiency: 'Core Expertise',
    context: 'Enforcing HIPAA regulations, fraud-prevention matrices, and strict security compliance mandates across sensitive workflows.',
    impactMetrics: '100% HIPAA compliance verified',
    connectedSkillIds: ['quality-auditing', 'content-moderation']
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    category: 'AI',
    proficiency: 'Core Expertise',
    context: 'Assessing multi-modal synthetic outputs, text-to-image prompt adherence (PixAI), and synthetic content fidelity.',
    impactMetrics: 'Multi-modal model review',
    connectedSkillIds: ['ai-evaluation', 'prompt-engineering']
  },
  {
    id: 'ai-evaluation',
    name: 'AI Evaluation',
    category: 'AI',
    proficiency: 'Core Expertise',
    context: 'Evaluating conversational prompt-response coherence, hallucination rates, contextual relevance, and truthfulness.',
    impactMetrics: 'Google Ads AI & RLHF workflows',
    connectedSkillIds: ['generative-ai', 'qa-assurance', 'google-ads']
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'AI',
    proficiency: 'Advanced',
    context: 'Crafting structured few-shot prompts, edge-case elicitation, and rubric-driven benchmark testing for LLMs.',
    impactMetrics: 'Certified AI prompt specialist',
    connectedSkillIds: ['generative-ai', 'python']
  },
  {
    id: 'content-moderation',
    name: 'Content Moderation',
    category: 'CONTENT',
    proficiency: 'Core Expertise',
    context: 'Enforcing safety guidelines, brand safety standards, hate speech/harassment policies, and sensitive content categorization.',
    impactMetrics: 'High-velocity queue governance',
    connectedSkillIds: ['qa-assurance', 'generative-ai']
  },
  {
    id: 'sop-improvement',
    name: 'SOP and Process Improvement',
    category: 'CONTENT',
    proficiency: 'Core Expertise',
    context: 'Synthesizing complex rating policies into clear standard operating procedures (SOPs) and visual workflow decision trees.',
    impactMetrics: '+30% operational efficiency',
    connectedSkillIds: ['compliance-monitoring', 'rca-analysis']
  },
  {
    id: 'automation',
    name: 'Automation',
    category: 'AUTOMATION',
    proficiency: 'Core Expertise',
    context: 'Eliminating repetitive human data transfers, building automated validation pipelines, and auto-flagging audit discrepancies.',
    impactMetrics: '35% reduction in manual errors',
    connectedSkillIds: ['apps-script', 'python', 'sheets-dashboards']
  },
  {
    id: 'apps-script',
    name: 'Google Apps Script',
    category: 'AUTOMATION',
    proficiency: 'Core Expertise',
    context: 'Engineering custom backend automations, automated form routing, scheduled triggers, and live tracker reconciliation engines.',
    impactMetrics: 'Saved ~6 hours of manual calculations/week',
    connectedSkillIds: ['automation', 'sheets-dashboards']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AUTOMATION',
    proficiency: 'Applied',
    context: 'Writing scripts for data extraction, CSV audit processing, regex parsing, and batch text transformations.',
    impactMetrics: 'Automated defect log parsing',
    connectedSkillIds: ['automation', 'apps-script']
  },
  {
    id: 'sheets-dashboards',
    name: 'Google Sheets & Performance Dashboards',
    category: 'AUTOMATION',
    proficiency: 'Core Expertise',
    context: 'Designing complex dynamic models, QUERY/FILTER models, nested logic, and real-time operational executive dashboards.',
    impactMetrics: '40% productivity acceleration',
    connectedSkillIds: ['apps-script', 'automation']
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'MARKETING',
    proficiency: 'Core Expertise',
    context: 'Evaluating automated ad variations, relevance metrics, ad quality scores, and policy adherence for commercial campaigns.',
    impactMetrics: 'Google Ads AI quality leader',
    connectedSkillIds: ['digital-marketing', 'ai-evaluation']
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'MARKETING',
    proficiency: 'Advanced',
    context: 'Analyzing ad copy quality, conversion funnels, audience intent, and multi-channel asset compliance.',
    impactMetrics: 'Commercial workflow calibration',
    connectedSkillIds: ['google-ads', 'seo']
  },
  {
    id: 'seo',
    name: 'SEO (Search Engine Optimization)',
    category: 'MARKETING',
    proficiency: 'Advanced',
    context: 'Assessing search intent alignment, technical on-page health, meta taxonomy, and content discoverability rubrics.',
    impactMetrics: 'Search intent evaluation',
    connectedSkillIds: ['digital-marketing', 'html-css']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'DESIGN',
    proficiency: 'Applied',
    context: 'Creating operational flowcharts, process wireframes, rating interface mockups, and UI inspection guidelines.',
    impactMetrics: 'Visual SOP decision trees',
    connectedSkillIds: ['sop-improvement', 'canva']
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'DESIGN',
    proficiency: 'Advanced',
    context: 'Designing executive review summaries, training collaterals, visual badges, and stakeholder presentations.',
    impactMetrics: 'Training & enablement decks',
    connectedSkillIds: ['figma']
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'DESIGN',
    proficiency: 'Applied',
    context: 'DOM tree inspection, semantic hierarchy verification, and front-end QA testing for digital content.',
    impactMetrics: 'Front-end QA & structural testing',
    connectedSkillIds: ['seo', 'figma']
  }
];
`,

  'src/data/projects.ts': `import { CaseStudyProject } from '../types';

export const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: "qa-discrepancy-tracker",
    title: "QA Discrepancy & Live Calibration Engine",
    category: "Quality Governance",
    role: "Quality Systems Architect",
    tagline: "Automated audit reconciliation and variance monitoring engine for high-velocity review queues.",
    problem: "Manual cross-referencing between frontline reviewer evaluations and senior auditor calibrations required hours of repetitive data logging, introducing latency in feedback loops.",
    approach: "Engineered automated Google Apps Script triggers and dynamic Google Sheets reconciliation formulas to auto-calculate sample variance, detect rating discrepancies in real time, and auto-populate remediation queues.",
    tools: ["Google Apps Script", "Advanced Google Sheets", "Root Cause Analysis (RCA)", "Quality Scorecards"],
    result: "Eliminated manual tracking overhead, directly contributing to a 40% productivity acceleration and 35% reduction in manual logging errors across QA workflows."
  },
  {
    id: "google-ads-ai-pipeline",
    title: "Google Ads AI Content Evaluation Matrix",
    category: "AI & Operations",
    role: "Senior Quality Analyst & Lead",
    tagline: "Standardized evaluation calibration framework for machine-generated commercial advertising assets.",
    problem: "High-volume generative ad copy variations presented nuanced policy edge cases, semantic ambiguities, and hallucination risks that static legacy rulebooks could not resolve.",
    approach: "Designed a multi-dimensional rating taxonomy assessing prompt adherence, factual truthfulness, brand safety, and regional ad policy compliance; coached 16 Quality Analysts on calibrated scoring.",
    tools: ["Google Ads AI Datasets", "RLHF Evaluation Consoles", "Calibration Frameworks", "Taxonomy Design"],
    result: "Maintained 99%+ audit precision across complex multi-modal queues and lowered cross-reviewer rating variance by 35%."
  },
  {
    id: "salon-crm-platform",
    title: "Salon CRM & Client Retention Platform",
    category: "Automation & Systems",
    role: "Workflow Automation Engineer",
    tagline: "Centralized client lifecycle, scheduling automation, and appointment verification ecosystem.",
    problem: "Appointment-based service businesses suffered high client no-show rates and fragmented customer records spread across disparate paper and spreadsheet formats.",
    approach: "Architected a unified client relationship management system featuring automated notification webhooks, customer service history tracking, and calendar synchronization.",
    tools: ["Google Apps Script", "Workflow Automation", "Google Workspace Engine", "Custom UI Interfaces"],
    result: "Reduced appointment no-shows by an estimated 32% and consolidated client history into a single zero-latency portal."
  },
  {
    id: "salon-ai-assistant",
    title: "Salon AI Conversational Intake Engine",
    category: "AI & Operations",
    role: "AI Prompt & Workflow Designer",
    tagline: "Conversational intake system providing tailored service breakdowns and appointment triage.",
    problem: "Prospective customers frequently required consultation regarding custom service packages and pricing during non-business hours when support staff were unavailable.",
    approach: "Engineered structured prompt decision trees and conversational logic that parse client hair/beauty needs, recommend matching service packages, and pre-fill intake profiles.",
    tools: ["Generative AI Prompts", "Prompt Engineering", "Conversational Triage", "Intake Logic"],
    result: "Delivered 24/7 intelligent inquiry handling with structured qualification data captured before in-person appointments."
  },
  {
    id: "local-ai-knowledge-engine",
    title: "Local AI SOP & Policy Knowledge Engine",
    category: "AI & Operations",
    role: "Developer & Process Specialist",
    tagline: "Private, local-first intelligence engine for structured audit documentation and policy lookup.",
    problem: "Operational SOPs, compliance handbooks, and policy guidelines spanned hundreds of PDF pages, resulting in substantial search latency during live quality audits.",
    approach: "Built a local document querying pipeline using Python and offline language model embeddings to index standard operating procedures and retrieve precise rating clauses instantly without sending sensitive data to external clouds.",
    tools: ["Python", "Local LLM Indexing", "Vector Search", "Document Parsers"],
    result: "Cut policy verification lookup latency from several minutes to under 5 seconds per complex review scenario."
  }
];
`,

  'src/data/aiQuality.ts': `export const AI_QUALITY_PHILOSOPHY = {
  headline: "Human Judgment + AI Assistance + Quality Control",
  subheadline: "Superior outcomes occur when rigorous human evaluation calibrates generative AI models to guarantee zero-defect operational pipelines.",
  pillars: [
    {
      step: "01",
      name: "AI Assistance & Scale",
      role: "High-Throughput Processing",
      desc: "Generative models produce vast multi-modal content and synthetic data points rapidly."
    },
    {
      step: "02",
      name: "Human Judgment",
      role: "Contextual & Ethical Reason",
      desc: "Human discernment identifies subtle hallucinations, cultural nuances, policy edge cases, and truthfulness."
    },
    {
      step: "03",
      name: "Quality Control & Feedback",
      role: "Systemic Optimization",
      desc: "Structured audit taxonomies transform human insights into actionable training loops, driving systemic model refinement."
    }
  ],
  workflowProjects: [
    { name: "PixAI Generative Review", tag: "Multi-Modal Generative Quality" },
    { name: "Getty Visual Attribution", tag: "Asset Provenance & Fidelity" },
    { name: "Google Ads AI Quality", tag: "Commercial Synthetic Copy & Policy" },
    { name: "APD APR / Freeform", tag: "Prompt Coherence & Safety Rubrics" }
  ]
};
`,

  // -------------------------------------------------------------
  // HOOKS
  // -------------------------------------------------------------
  'src/hooks/useActiveSection.ts': `import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};
`,

  'src/hooks/usePrefersReducedMotion.ts': `import { useState, useEffect } from 'react';

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
};
`,

  // -------------------------------------------------------------
  // UI COMPONENTS
  // -------------------------------------------------------------
  'src/components/ui/BackgroundAtmosphere.tsx': `import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const BackgroundAtmosphere: React.FC = () => {
  const { scrollY } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const yOrb1 = useTransform(scrollY, [0, 4000], [0, -180]);
  const yOrb2 = useTransform(scrollY, [0, 4000], [0, -280]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#07080A]" />
      
      <motion.div 
        style={reducedMotion ? {} : { y: yOrb1 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-slate-800/10 blur-[180px] gpu-layer"
      />
      <motion.div 
        style={reducedMotion ? {} : { y: yOrb2 }}
        className="absolute top-[40%] -left-[10%] w-[650px] h-[650px] rounded-full bg-blue-950/15 blur-[160px] gpu-layer"
      />
      
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80" 
      />
    </div>
  );
};
`,

  'src/components/ui/CustomCursor.tsx': `import React, { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (target) {
          const interactive = Boolean(
            target.closest('button') ||
            target.closest('a') ||
            target.closest('[role="button"]')
          );
          setIsInteractive(interactive);
        }
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, reducedMotion]);

  if (reducedMotion || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 transition-opacity duration-300" aria-hidden="true">
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 gpu-layer"
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`
        }}
      />
      <div
        className={\`fixed top-0 left-0 rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-150 ease-out gpu-layer \${
          isInteractive ? 'w-8 h-8 border-white/80 bg-white/[0.05]' : 'w-5 h-5'
        }\`}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0) translate(-50%, -50%)\`
        }}
      />
    </div>
  );
};
`,

  'src/components/ui/ScrollProgressBar.tsx': `import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ScrollProgressBarProps {
  activeSection: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (reducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" aria-hidden="true">
      <div className="h-[1.5px] w-full bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-slate-400 via-white to-slate-300 origin-left"
          style={{ scaleX }}
        />
      </div>

      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[9px] font-mono text-slate-400">
        <div className="writing-vertical tracking-[0.25em] uppercase text-slate-400 select-none">
          {activeSection.toUpperCase()}
        </div>
        <div className="h-16 w-[1px] bg-white/[0.08] relative overflow-hidden">
          <motion.div
            className="w-full bg-white origin-top"
            style={{ scaleY: scaleX, height: '100%' }}
          />
        </div>
        <span className="font-semibold text-slate-300">2026</span>
      </div>
    </div>
  );
};
`,

  'src/components/ui/SectionHeader.tsx': `import React from 'react';

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
    <div className={\`mb-12 md:mb-16 \${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}\`}>
      <div className={\`flex items-center gap-3 mb-4 \${align === 'center' ? 'justify-center' : ''}\`}>
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
`,

  'src/components/ui/AvatarStage.tsx': `import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const AVATAR_ASSETS = {
  portrait: "/assets/avatar/portrait.jpg",
  standing: "/assets/avatar/standing.jpg",
  profile: "/assets/avatar/profile.jpg",
  working: "/assets/avatar/working.jpg",
  silhouette: "/assets/avatar/silhouette.jpg"
};

export const AvatarStage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  const op1 = useTransform(scrollYProgress, [0, 0.2, 0.35], [0.22, 0.22, 0]);
  const op2 = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0, 0.22, 0]);
  const op3 = useTransform(scrollYProgress, [0.55, 0.75, 0.9], [0, 0.22, 0]);
  const op4 = useTransform(scrollYProgress, [0.8, 0.95, 1], [0, 0.22, 0.25]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" 
      aria-hidden="true"
    >
      <div className="absolute right-0 top-0 w-full lg:w-[55vw] h-full flex items-center justify-end mix-blend-luminosity filter contrast-125">
        
        <motion.img
          src={AVATAR_ASSETS.standing}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0.15 } : { opacity: op1 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.profile}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op2 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.working}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op3 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />

        <motion.img
          src={AVATAR_ASSETS.silhouette}
          alt=""
          loading="lazy"
          decoding="async"
          style={reducedMotion ? { opacity: 0 } : { opacity: op4 }}
          className="absolute w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_75%_75%_at_65%_45%,#000_30%,transparent_85%)] gpu-layer"
        />
      </div>
    </div>
  );
};
`,

  'src/components/ui/AvatarCanvas.tsx': `import React from 'react';
import { AVATAR_ASSETS } from './AvatarStage';

interface AvatarCanvasProps {
  scrollProgress?: number;
}

export const AvatarCanvas: React.FC<AvatarCanvasProps> = () => {
  return (
    <div 
      className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0C1017] shadow-2xl"
    >
      <img
        src={AVATAR_ASSETS.portrait}
        alt="Mujeeb Qadri - Quality Analyst"
        width={360}
        height={450}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-black/20 pointer-events-none" />

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-[#07080A]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[9px] text-slate-300 tracking-wider uppercase font-semibold">
            VERIFIED CANDIDATE
          </span>
        </div>
        <span className="font-mono text-[9px] text-slate-400 bg-[#07080A]/85 backdrop-blur-md px-2 py-1 rounded-md border border-white/[0.08]">
          2026 DOSSIER
        </span>
      </div>

      <div className="absolute bottom-3 left-3 right-3 bg-[#07080A]/90 backdrop-blur-md p-3 rounded-xl border border-white/[0.08] pointer-events-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">CURRENT MANDATE</p>
            <p className="text-xs font-semibold text-white font-mono mt-0.5">QA & AI OPERATIONS</p>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};
`,

  'src/components/ui/Modal.tsx': `import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = \`\${scrollbarWidth}px\`;
      modalRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        window.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#0C1017] border border-white/[0.12] rounded-2xl p-5 sm:p-8 shadow-2xl z-10 max-h-[88dvh] overflow-y-auto outline-none"
      >
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
          <h2 id="modal-headline" className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
};
`,

  // -------------------------------------------------------------
  // LAYOUT COMPONENTS
  // -------------------------------------------------------------
  'src/components/layout/Navigation.tsx': `import React, { useState } from 'react';
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
                className={\`px-3 py-1.5 text-[11px] font-mono tracking-wider rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white \${
                  isActive
                    ? 'bg-white text-[#07080A] font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }\`}
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
                className={\`text-left px-4 py-2.5 text-xs font-mono rounded-lg transition-colors \${
                  activeSection === item.id
                    ? 'bg-white text-[#07080A] font-bold'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }\`}
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
`,

  'src/components/layout/Footer.tsx': `import React from 'react';
import { PROFILE } from '../../data/profile';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#050608] border-t border-white/[0.06] text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <span className="font-bold text-slate-300 block">{PROFILE.name}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            Quality Assurance • Generative AI Content Operations • Process Optimization
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>ZERO FABRICATION POLICY // VERIFIED METRICS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
`,

  // -------------------------------------------------------------
  // SECTIONS
  // -------------------------------------------------------------
  'src/components/sections/HeroSection.tsx': `import React from 'react';
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
              <a href={\`mailto:\${PROFILE.email}\`} className="flex items-center gap-1.5 hover:text-white transition-colors">
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
`,

  'src/components/sections/RecruiterQuickView.tsx': `import React from 'react';
import { UserCheck, Download } from 'lucide-react';

interface RecruiterQuickViewProps {
  onOpenResumeModal: () => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-6 bg-[#0B0E14] border-y border-white/[0.07]" aria-label="Recruiter 10-Second Summary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">RECRUITER FAST-TRACK</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-tight font-mono">10-Second Executive Summary</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto flex-1 lg:mx-8">
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">CURRENT SENIORITY</span>
              <span className="text-xs font-semibold text-slate-200">Senior Quality Analyst</span>
            </div>
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">CORE DOMAIN</span>
              <span className="text-xs font-semibold text-slate-200">AI Evaluation & Content Moderation</span>
            </div>
            <div className="bg-[#0E121A] p-3 rounded-lg border border-white/[0.06]">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">OPERATIONAL TOOLING</span>
              <span className="text-xs font-semibold text-slate-200">QA Automation (Python / AppScript)</span>
            </div>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#0A0D14] text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-colors hover:bg-slate-200 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD DOSSIER</span>
          </button>
        </div>
      </div>
    </section>
  );
};
`,

  'src/components/sections/AboutSection.tsx': `import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROFILE } from '../../data/profile';
import { Cpu, ShieldAlert, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="02"
          subtitle="POSITIONING & MANDATE"
          title="I work where quality, AI, and operations meet."
          description="Synthesizing rigorous audit standards, machine learning model validation, and high-scale operational precision."
        />

        <div className="relative mb-16 p-8 md:p-12 rounded-2xl bg-[#0C1017] border border-white/[0.07] shadow-xl">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-200 leading-relaxed">
            "In an era where generative models produce infinite content, <span className="text-white font-semibold">accuracy is the ultimate competitive advantage</span>. I specialize in auditing synthetic outputs, designing error-proof workflows, and calibrating high-velocity teams to eliminate discrepancy."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-[#0B0E14] border border-white/[0.07] hover:border-white/15 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 mb-4 group-hover:scale-105 transition-transform">
                {idx === 0 ? <Cpu className="w-5 h-5" /> : idx === 1 ? <ShieldAlert className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
`,

  'src/components/sections/MetricsSection.tsx': `import React from 'react';
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
`,

  'src/components/sections/ExperienceSection.tsx': `import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXPERIENCES } from '../../data/experience';
import { Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="03"
          subtitle="EMPLOYMENT HISTORY"
          title="Professional Experience"
          description="Verified career history across high-volume healthcare compliance, Amazon Retail investigations, and Generative AI quality leadership."
        />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-[#0C0F17] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl transition-all hover:border-white/15"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.07]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-slate-300 font-semibold bg-white/[0.05] px-2.5 py-0.5 rounded border border-white/[0.08]">
                      {exp.organization}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400">ROLE 0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-[#121622] px-4 py-2 rounded-xl border border-white/[0.08] w-fit">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-200">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {exp.id === 'cognizant-sqa' ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-[#080B10] border border-white/[0.05]">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">TEAM LEADERSHIP</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">16 QAs Led</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">QA ACCURACY</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">98–100%</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">PRODUCTIVITY GAIN</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">+40% Gain</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">ERROR REDUCTION</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">-35% Errors</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-[#080B10] border border-white/[0.05]">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">REGULATORY COMPLIANCE</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">100% HIPAA</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">CUSTOMER ADVOCACY</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">100% NPS</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">RESOLUTION RATE</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">78% FCR</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">CSAT RATING</span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">82% CSAT</span>
                  </div>
                </div>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                    Audited Workflows & Datasets:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs font-mono bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded border border-white/[0.07]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3 font-semibold">
                  Core Responsibilities & Deliverables:
                </span>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest block mb-2 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    Verified Achievements & Recognition:
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                        <span className="text-slate-400 font-mono">▸</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-mono uppercase bg-white/[0.03] text-slate-400 px-2 py-0.5 rounded border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
`,

  'src/components/sections/AiQualitySection.tsx': `import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { AI_QUALITY_PHILOSOPHY } from '../../data/aiQuality';
import { CheckCircle } from 'lucide-react';

export const AiQualitySection: React.FC = () => {
  return (
    <section id="ai-quality" className="py-24 md:py-32 bg-[#090C12] border-y border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="04"
          subtitle="SYSTEM ARCHITECTURE"
          title="Quality Assurance in Generative AI"
          description={AI_QUALITY_PHILOSOPHY.subheadline}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {AI_QUALITY_PHILOSOPHY.pillars.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/[0.07] hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-mono font-bold text-slate-400">{item.step}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                    {item.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-3">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-[10px] font-mono text-slate-400 gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>FRAMEWORK STAGE CALIBRATED</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/[0.08] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.07]">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-widest block mb-1">
                EVALUATION WORKFLOWS
              </span>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Multi-Modal Generative AI Assessment Modules
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              RLHF & RUBRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_QUALITY_PHILOSOPHY.workflowProjects.map((wf, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090C12] border border-white/[0.06] hover:border-white/15 transition-all">
                <span className="text-xs font-bold text-slate-200 block mb-1 font-mono">{wf.name}</span>
                <span className="text-[11px] text-slate-400 block">{wf.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
`,

  'src/components/sections/SkillsSection.tsx': `import React, { useState, useMemo } from 'react';
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
                className={\`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-white \${
                  isSelected
                    ? 'bg-white text-[#08090C] border-white font-bold shadow-md'
                    : 'bg-[#0B0E14] text-slate-400 border-white/[0.07] hover:text-slate-200 hover:border-white/15'
                }\`}
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
                    className={\`relative p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-white \${
                      isSelected
                        ? 'bg-[#121722] border-white/30 shadow-lg'
                        : isConnected
                        ? 'bg-[#0E131C] border-slate-400/40'
                        : 'bg-[#0A0D14] border-white/[0.06] hover:border-white/15 hover:bg-[#0E121A]'
                    }\`}
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={\`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border \${
                          isSelected
                            ? 'bg-white text-[#0A0D14] font-bold border-white'
                            : 'bg-white/[0.04] text-slate-400 border-white/[0.06]'
                        }\`}>
                          {skill.category}
                        </span>

                        <span className="text-[10px] font-mono text-slate-400">
                          {skill.proficiency}
                        </span>
                      </div>

                      <h3 className={\`text-sm font-bold font-['Space_Grotesk'] tracking-tight transition-colors \${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }\`}>
                        {skill.name}
                      </h3>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono">
                      <span className={\`flex items-center gap-1 \${
                        isConnected && !isSelected ? 'text-slate-200 font-semibold' : 'text-slate-400'
                      }\`}>
                        {isConnected && !isSelected && <GitCommit className="w-3 h-3 text-slate-300" />}
                        {isConnected && !isSelected ? 'CONNECTED NODE' : \`\${skill.connectedSkillIds.length} LINKS\`}
                      </span>

                      <span className={\`transition-transform \${isSelected ? 'text-white translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}\`}>
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
`,

  'src/components/sections/ToolHierarchySection.tsx': `import React from 'react';
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
`,

  'src/components/sections/ProjectsSection.tsx': `import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CASE_STUDIES } from '../../data/projects';
import { CaseStudyProject } from '../../types';
import { Modal } from '../ui/Modal';
import { ArrowUpRight, AlertCircle, Wrench, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<CaseStudyProject | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="06"
          subtitle="APPLIED CASE STUDIES"
          title="Featured Projects & Systems"
          description="Direct application of QA automation, AI prompt calibration, and workflow optimization to solve real operational bottlenecks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedModalProject(project)}
              className="p-6 rounded-2xl bg-[#0C0F17] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                    {project.category}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-slate-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="space-y-2 mb-4 bg-[#080B10] p-3 rounded-xl border border-white/[0.04]">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">PROBLEM</span>
                    <p className="text-xs text-slate-300 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[9px] font-mono text-slate-300 uppercase tracking-wider block font-semibold">RESULT</span>
                    <p className="text-xs text-slate-200 line-clamp-2">{project.result}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tools.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-white/[0.03] text-slate-400 px-2 py-0.5 rounded border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[10px] font-mono bg-white/[0.03] text-slate-500 px-1.5 py-0.5 rounded">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] group-hover:text-white transition-colors">READ FULL DOSSIER</span>
                  <span>▸</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {selectedModalProject && (
        <Modal
          isOpen={Boolean(selectedModalProject)}
          onClose={() => setSelectedModalProject(null)}
          title={selectedModalProject.title}
        >
          <div className="space-y-5 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded border border-white/[0.08]">
                {selectedModalProject.category}
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium mt-2">
                {selectedModalProject.tagline}
              </p>
            </div>

            <div className="space-y-3.5 bg-[#080B10] p-4 sm:p-5 rounded-xl border border-white/[0.06]">
              <div>
                <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Problem Statement</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedModalProject.problem}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  <span>Implementation & Approach</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedModalProject.approach}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <h5 className="text-[10px] font-mono text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>Verified Outcome & Impact</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">{selectedModalProject.result}</p>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                Tools & Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedModalProject.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs font-mono bg-white/[0.04] text-slate-200 px-2.5 py-1 rounded border border-white/[0.08]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedModalProject(null)}
              className="w-full py-3 bg-white text-[#08090C] hover:bg-slate-200 font-mono text-xs font-bold rounded-xl transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};
`,

  'src/components/sections/ResumeModalSection.tsx': `import React from 'react';
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
              href={\`mailto:\${PROFILE.email}?subject=Resume%20Inquiry%20-%20Mujeeb%20Qadri\`}
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
`,

  'src/components/sections/ContactSection.tsx': `import React, { useState } from 'react';
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
                      <a href={\`mailto:\${PROFILE.email}\`} className="text-xs sm:text-sm font-mono text-white hover:underline">
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
                      <a href={\`tel:\${PROFILE.phone}\`} className="text-xs sm:text-sm font-mono text-white hover:underline">
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
              href={\`mailto:\${PROFILE.email}?subject=Senior%20QA%20%2F%20AI%20Quality%20Role%20Inquiry%20-%20Mujeeb%20Qadri\`}
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
`,

  'src/App.tsx': `import React, { useState } from 'react';
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
`
};

// -------------------------------------------------------------
// EXECUTE RECURSIVE DIRECTORY & FILE CREATION
// -------------------------------------------------------------
console.log('📦 Generating Mujeeb Qadri Cinematic Portfolio...');

for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(` ✓ Created ${filePath}`);
}

// Create public asset folders for avatar character assets
const assetDirs = ['public/assets/avatar'];
assetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('\\n✅ Project generation complete!');
console.log('\\n🚀 To run locally:');
console.log('  1. npm install');
console.log('  2. Place your 5 avatar photos in public/assets/avatar/ (portrait.jpg, standing.jpg, profile.jpg, working.jpg, silhouette.jpg)');
console.log('  3. npm run dev\\n');
