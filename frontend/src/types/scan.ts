export interface Threat {
  name: string;
  category: string;
  description: string;
  score: number;
}

export interface ScanResult {
  prompt: string;
  riskScore: number;
  severity: string;
  recommendation: string;
  threats: Threat[];
  timestamp: string;
}