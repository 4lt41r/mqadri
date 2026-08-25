import { CaseStudyProject } from '../types';

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
