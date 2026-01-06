// Form Types
export interface QuoteFormData {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  businessType: string;
  serviceNeeded: string[];
  projectDescription: string;
  mainObjective: string;
  estimatedBudget?: string;
}

// Section Types
export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}
