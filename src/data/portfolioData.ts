// src/data/portfolioData.ts
import type { NavItem, ServiceItem, Project, WhyPoint, Skill, BudgetOption } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: 'code-2',
    title: 'Web Development',
    description: 'Responsive, fast and modern websites built with best practices.',
  },
  {
    id: 'saas-dev',
    icon: 'layers',
    title: 'SaaS Development',
    description: 'End-to-end SaaS products from idea to deployment.',
  },
  {
    id: 'api-dev',
    icon: 'square-code',
    title: 'API Development',
    description: 'RESTful APIs and integrations that power your applications.',
  },
  {
    id: 'maintenance',
    icon: 'wrench',
    title: 'Maintenance',
    description: 'Bug fixes, updates and performance improvements for existing apps.',
  },
  {
    id: 'cta',
    icon: 'message-circle',
    title: 'Not sure what you need?',
    description: "Tell me about your business and I'll recommend exactly what will work for you.",
    isCTA: true,
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'lawfirm',
    type: 'Legal',
    typeIcon: 'scale',
    stack: 'HTML · CSS · JS',
    title: 'LexPro — Law Firm Website',
    description: 'A professional authority-building website for a law firm. Features a bold hero, practice areas, attorney profiles, and a consultation booking form designed to convert visitors into clients.',
    highlights: [
      'Mobile-responsive design',
      'Consultation contact form',
      'SEO-optimized structure',
    ],
    ctaText: 'Want something like this?',
    visualType: 'law',
  },
  {
    id: 'clinic',
    type: 'Healthcare',
    typeIcon: 'stethoscope',
    stack: 'Django · Python · SQLite',
    title: 'MediDesk — Clinic Management System',
    description: 'A full-stack multi-role web application for clinic operations. Separate dashboards for the Receptionist, Doctor, and Admin — covering appointments, patient records, and real-time reporting.',
    highlights: [
      '3 role-based dashboards',
      'Appointment & patient management',
      'Built with Django + Python',
    ],
    ctaText: 'Want something like this?',
    visualType: 'clinic',
  },
  {
    id: 'emotion',
    type: 'SaaS / Wellness',
    typeIcon: 'brain',
    stack: 'Django · Python · Team Project',
    title: 'EmotionSpace — Mental Wellness SaaS',
    description: 'A collaborative Django team project — a SaaS platform for emotional wellbeing. Features mood tracking, journaling, analytics dashboards, and a subscription model. Built with a team using agile practices.',
    highlights: [
      'Mood tracking & journaling',
      'SaaS subscription model',
      'Team collaboration project',
    ],
    ctaText: 'Interested in a SaaS?',
    visualType: 'emotion',
  },
];

export const WHY_POINTS: WhyPoint[] = [
  {
    id: 'wp1',
    icon: 'target',
    title: 'Business-First Thinking',
    description: "I don't just write code. I think about what makes your clients click, call, and convert.",
  },
  {
    id: 'wp2',
    icon: 'timer',
    title: 'Fast Turnaround',
    description: 'Most business websites delivered within 7–14 days — no endless delays.',
  },
  {
    id: 'wp3',
    icon: 'headset',
    title: 'Post-Launch Support',
    description: "I don't disappear after delivery. Updates, fixes, and changes — I'm here.",
  },
  {
    id: 'wp4',
    icon: 'smartphone',
    title: 'Mobile-First Always',
    description: '60%+ of your clients browse on phones. Your site will look perfect on every device.',
  },
];

export const SKILLS: Skill[] = [
  { id: 'html', name: 'HTML / CSS / JS', percent: 92 },
  { id: 'django', name: 'Django / Python', percent: 82 },
  { id: 'responsive', name: 'Responsive Design', percent: 88 },
  { id: 'db', name: 'Database Design', percent: 75 },
  { id: 'git', name: 'Git / Deployment', percent: 70 },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { value: 'basic', label: '₹5k–10k', sublabel: 'Basic Site' },
  { value: 'standard', label: '₹10k–25k', sublabel: 'Standard' },
  { value: 'premium', label: '₹25k+', sublabel: 'Full Custom' },
];

export const FLOATING_TAGS: { label: string; icon: string }[] = [
  { label: 'Medical Clinics', icon: 'stethoscope' },
  { label: 'Law Firms', icon: 'scale' },
  { label: 'Restaurants', icon: 'utensils' },
  { label: 'Cafes', icon: 'coffee' },
  { label: 'Cab Services', icon: 'car' },
  { label: 'Electricians', icon: 'zap' },
];

export const MARQUEE_ITEMS = [
  'Web Design', 'Full-Stack Development', 'Business Websites', 'Django & Python',
  'SaaS Products', 'Clinic Systems', 'Restaurant Pages', 'Law Firm Sites',
];
