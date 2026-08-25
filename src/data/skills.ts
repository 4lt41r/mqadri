import { SkillNode } from '../types';

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
