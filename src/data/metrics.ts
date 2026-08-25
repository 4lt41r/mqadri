import { MetricItem } from '../types';

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
