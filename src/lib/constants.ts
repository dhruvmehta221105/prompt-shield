import type {
  ContactItem,
  EnterpriseFeature,
  FeatureItem,
  FooterLink,
  MissionCard,
  NavLink,
  PricingPlan,
  SocialLink,
  Testimonial,
} from "@/types";

export const SITE = {
  name: "PromptShield",
  tagline: "Protect Your AI Before It Thinks",
  description:
    "PromptShield helps developers and businesses protect AI systems against prompt injection, jailbreak attempts, data leakage, and malicious user inputs before they reach your LLM.",
} as const;

export const ASSETS = {
  heroShield: "/images/hero-shield.png",
  aboutTyping: "/images/about-typing.jpg",
  aboutData: "/images/about-data.jpg",
  featuresDeveloper: "/images/features-developer.png",
  iconInjection: "/images/icon-injection.png",
  iconCyberSecurity: "/images/icon-cyber-security.png",
  iconBackup: "/images/icon-backup.png",
  iconCustomize: "/images/icon-customize.png",
  icon24Hours: "/images/icon-24hours.png",
  iconThreat: "/images/icon-threat.png",
  iconTraining: "/images/icon-training.png",
  checkIcon: "/images/check-icon.png",
  stars: "/images/stars.png",
  socialIg: "/images/social-ig.png",
  socialFb: "/images/social-fb.png",
  socialTw: "/images/social-tw.png",
  socialYt: "/images/social-yt.png",
  iconEmail: "/images/icon-email.png",
  iconLocation: "/images/icon-location.png",
  iconPhone: "/images/icon-phone.png",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    title: "Prompt Injection Detection",
    description:
      "Identify and block malicious prompts attempting to manipulate AI behavior.",
    icon: ASSETS.iconInjection,
    highlighted: true,
  },
  {
    title: "Jailbreak Prevention",
    description:
      "Detect attempts to bypass model restrictions and safety policies.",
    icon: ASSETS.iconCyberSecurity,
  },
  {
    title: "Sensitive Data Protection",
    description:
      "Prevent accidental exposure of confidential information and credentials.",
    icon: ASSETS.iconBackup,
  },
];

export const ENTERPRISE_FEATURES: EnterpriseFeature[] = [
  {
    title: "Real-Time Threat Analysis",
    description: "Analyze prompts instantly before they reach your LLM.",
    icon: ASSETS.iconCustomize,
  },
  {
    title: "Risk Scoring Engine",
    description:
      "Assign security scores based on prompt behavior and attack patterns.",
    icon: ASSETS.iconThreat,
  },
  {
    title: "Custom Security Policies",
    description:
      "Create organization-specific filtering and validation rules.",
    icon: ASSETS.icon24Hours,
  },
  {
    title: "Developer-Friendly APIs",
    description:
      "Simple integration with OpenAI, Claude, Gemini, and open-source models.",
    icon: ASSETS.iconTraining,
  },
];

export const MISSION_CARDS: MissionCard[] = [
  {
    title: "Mission Statement",
    description:
      "Provide a reliable security layer that protects AI systems from manipulation and misuse.",
    highlighted: true,
  },
  {
    title: "Key Objectives",
    items: [
      "Detect prompt attacks",
      "Prevent jailbreaks",
      "Secure sensitive information",
      "Improve AI reliability",
    ],
  },
  {
    title: "Security-First Approach",
    description:
      "Every prompt is validated, analyzed, and scored before reaching the AI model.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "BASIC",
    description:
      "Perfect for developers exploring AI security with essential protection features.",
    price: "$0",
    period: "/per month",
    features: [
      "100 Requests Daily",
      "Basic Threat Detection",
      "API Access",
    ],
    cta: "Start Free",
  },
  {
    id: "standard",
    name: "STANDARD",
    description:
      "Ideal for growing teams that need advanced threat detection and monitoring.",
    price: "₹499",
    period: "/per month",
    features: [
      "10,000 Requests Monthly",
      "Advanced Threat Detection",
      "Risk Dashboard",
      "24/7 Priority Support",
    ],
    cta: "Get Pro",
    featured: true,
  },
  {
    id: "premium",
    name: "PREMIUM",
    description:
      "Enterprise-grade protection with unlimited scale and custom security policies.",
    price: "Custom",
    period: "/per month",
    features: [
      "Unlimited Requests",
      "Custom Security Policies",
      "Advanced Threat Intelligence",
    ],
    cta: "Contact Sales",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"PromptShield helped us stop prompt injection attacks before they reached production."',
    name: "Priya Mehta",
    role: "Founder, AI Startup",
    avatar: "/images/avatar-priya.png",
  },
  {
    quote:
      '"The risk scoring system gives our team complete visibility into prompt threats."',
    name: "Regina Weissnat",
    role: "Regional Branding Consultant",
    avatar: "/images/avatar-regina.png",
  },
  {
    quote:
      "Integration took less than an hour and immediately improved our AI security posture.",
    name: "Aarav",
    role: "AI Engineer",
    avatar: "/images/avatar-aarav.png",
  },
  {
    quote:
      '"A must-have security layer for anyone deploying LLM-based applications."',
    name: "Marianne Bode",
    role: "Product Intranet Agent",
    avatar: "/images/avatar-marianne.png",
  },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Our Service", href: "#features" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonial", href: "#testimonials" },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    type: "email",
    label: "promptshield@gmail.com",
    icon: ASSETS.iconEmail,
  },
  {
    type: "location",
    label: "Greater Noida, India",
    icon: ASSETS.iconLocation,
  },
  {
    type: "phone",
    label: "+91 7986692577",
    icon: ASSETS.iconPhone,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "#", icon: ASSETS.socialIg },
  { name: "Facebook", href: "#", icon: ASSETS.socialFb },
  { name: "Twitter", href: "#", icon: ASSETS.socialTw },
  { name: "YouTube", href: "#", icon: ASSETS.socialYt },
];
