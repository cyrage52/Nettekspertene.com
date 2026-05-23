export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // Name of Lucide icon
  color: string; // Tailwind color classes for accents
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  stat?: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Nettside" | "E-handel" | "Bedriftsløsning" | "SEO & Vekst";
  description: string;
  detailedDescription: string;
  results: string;
  metric: string;
  metricLabel: string;
  bgGradient: string;
  icon: string;
  tech: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatarInitials: string;
  avatarColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
