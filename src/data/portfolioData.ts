// src/data/portfolioData.ts
import type { NavItem, ServiceItem, Project, WhyPoint, Skill } from '../types';

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
    stack: 'React · Tailwind CSS · TypeScript',
    title: 'Al Mansoori & Partners — Law Firm',
    description: 'A premium, authority-building website for a top-tier law firm in Dubai. Designed to convey trust and excellence, featuring dynamic practice areas, case statistics, and streamlined consultation booking.',
    highlights: [
      '20+ Years Experience',
      '500+ Cases Won',
      '98% Client Satisfaction',
    ],
    ctaText: 'Want something like this?',
    visualType: 'law',
    link: 'https://lawfirmsample.vercel.app/',
    imageUrl: '/law-demo.png',
  },
  {
    id: 'clinic',
    type: 'Healthcare',
    typeIcon: 'stethoscope',
    stack: 'React · Tailwind CSS · FastAPI',
    title: 'Healing Harmony — Clinic Website',
    description: 'A professional and welcoming website for a general physician clinic. Features online appointment booking, WhatsApp integration, and prescription downloads to streamline patient care.',
    highlights: [
      'Online appointment booking',
      'Direct WhatsApp consultation',
      'Modern, trust-building design',
    ],
    ctaText: 'Want something like this?',
    visualType: 'clinic',
    link: 'https://kpclinic.vercel.app',
    imageUrl: '/clinic-demo.png',
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
