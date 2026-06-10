export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface EnterpriseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface MissionCard {
  title: string;
  description?: string;
  items?: string[];
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ContactItem {
  type: "email" | "location" | "phone";
  label: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
