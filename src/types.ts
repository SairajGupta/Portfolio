// src/types.ts
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  isCTA?: boolean;
}

export interface Project {
  id: string;
  type: string;
  typeIcon: string;
  stack: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  visualType: 'law' | 'clinic' | 'emotion';
  link?: string;
  imageUrl?: string;
}

export interface WhyPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  percent: number;
}

