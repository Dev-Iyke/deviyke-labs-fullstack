export type ProjectEvidenceStatus = "SHIPPED" | "ACTIVE_BUILD" | "EXPERIMENT";

export type ProjectImpactArea =
  | "FRONTEND_ARCHITECTURE"
  | "PRODUCT_INTERFACE"
  | "BACKEND_FOUNDATION"
  | "WORKFLOW_DESIGN"
  | "PERFORMANCE_ACCESSIBILITY";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "case-study" | "live" | "github" | "external";
}

export interface ProjectDecision {
  title: string;
  description: string;
}

export interface ProjectFeature {
  name: string;
  roles: string[];
  description: string;
  engineering: string;
}

export interface ProjectScreenshot {
  label: string;
  src?: string;
  alt?: string;
}

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  decisions: ProjectDecision[];
  privacyNote: string;
  nextSteps: string[];
  outcome?: string;
  backendNote?: string;
  challenges?: ProjectDecision[];
  screenshots?: ProjectScreenshot[];
}

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  heroImage?: {
  src: string;
  alt?: string | null;
} | null;
  evidenceStatus: ProjectEvidenceStatus;
  role: string;
  timeframe: string;
  stack: string[];
  impactAreas: ProjectImpactArea[];
  highlights: string[];
  links: ProjectLink[];
  caseStudy: ProjectCaseStudy;
  featured: boolean;
  projectType?: string;
  surfaces?: string[];
  features?: ProjectFeature[];
  outcomes?: string[];
  talkingPoints?: string[];
}
