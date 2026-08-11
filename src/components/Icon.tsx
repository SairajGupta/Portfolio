// src/components/Icon.tsx
// Central icon resolver — maps string keys to lucide-react components
import {
  Stethoscope,
  Scale,
  Utensils,
  Zap,
  Layers,
  MessageCircle,
  Target,
  Timer,
  Headset,
  Smartphone,
  GraduationCap,
  Briefcase,
  Mail,
  MessageSquare,
  Lock,
  CheckCircle2,
  ArrowRight,
  Flame,
  Coffee,
  Car,
  Brain,
  Sparkles,
  Code2,
  TerminalSquare,
  Wrench,
  Dumbbell,
  ChefHat,
  Scissors,
  Bug,
  Plane,
  Heart,
  Hammer,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  stethoscope: Stethoscope,
  scale: Scale,
  utensils: Utensils,
  zap: Zap,
  layers: Layers,
  'message-circle': MessageCircle,
  target: Target,
  timer: Timer,
  headset: Headset,
  smartphone: Smartphone,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  mail: Mail,
  'message-square': MessageSquare,
  lock: Lock,
  'check-circle': CheckCircle2,
  'arrow-right': ArrowRight,
  flame: Flame,
  coffee: Coffee,
  car: Car,
  brain: Brain,
  sparkles: Sparkles,
  'code-2': Code2,
  'square-code': TerminalSquare,
  wrench: Wrench,
  dumbbell: Dumbbell,
  'chef-hat': ChefHat,
  scissors: Scissors,
  bug: Bug,
  plane: Plane,
  heart: Heart,
  hammer: Hammer,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
