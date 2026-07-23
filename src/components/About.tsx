// src/components/About.tsx
import {
  Target,
  Timer,
  Headset,
  Smartphone,
  Search,
  ClipboardList,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  onNavClick: (href: string) => void;
}

const STATS = [
  { icon: Target,     heading: 'Business-First\nThinking' },
  { icon: Timer,      heading: 'Fast\nTurnaround' },
  { icon: Headset,    heading: 'Post-Launch\nSupport' },
  { icon: Smartphone, heading: 'Mobile-First\nAlways' },
];

const PROCESS = [
  {
    step: 1,
    icon: Search,
    title: 'Understand',
    desc: 'I listen carefully to understand your goals and challenges.',
  },
  {
    step: 2,
    icon: ClipboardList,
    title: 'Plan',
    desc: 'I create a roadmap and choose the right tech for the job.',
  },
  {
    step: 3,
    icon: Code2,
    title: 'Build',
    desc: 'I write clean, efficient code and build with best practices.',
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: 'Test',
    desc: 'I test thoroughly to ensure everything works perfectly.',
  },
  {
    step: 5,
    icon: Rocket,
    title: 'Deliver',
    desc: 'I deploy and make sure the solution is reliable and scalable.',
  },
];

export default function About({ onNavClick }: AboutProps) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-inner">

          {/* ── LEFT: About Me ── */}
          <div className="about-left reveal">
            <span className="section-tag">About Me</span>
            <h2 className="about-title">About Me</h2>

            <p className="about-desc">
              I'm a self-taught Full Stack Developer passionate about building
              scalable, user-friendly and impactful digital solutions. I enjoy
              solving real-world problems with code and continuously learning
              new technologies.
            </p>
            <p className="about-desc">
              When I'm not coding, I explore new tools, read about tech and
              work on side projects.
            </p>

            {/* Stat cards */}
            <div className="about-stats-grid">
              {STATS.map(({ icon: Icon, heading }) => (
                <div key={heading} className="about-stat-card">
                  <div className="asc-icon">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <div className="asc-heading">{heading}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary btn-sm about-cta"
              onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }}
            >
              <span>Let's Work Together</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* ── RIGHT: How I Work ── */}
          <div className="about-right reveal reveal-delay-2">
            <span className="section-tag">My Process</span>
            <h2 className="about-title">How I Work</h2>

            <div className="process-list">
              {PROCESS.map(({ step, icon: Icon, title, desc }, i) => (
                <motion.div 
                  key={step} 
                  className="process-step"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {/* Icon + connector line */}
                  <div className="ps-icon-wrap">
                    <motion.div 
                      className="ps-icon"
                      variants={{
                        hidden: { 
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.3)',
                          backgroundColor: 'transparent'
                        },
                        visible: { 
                          borderColor: 'rgba(245, 158, 11, 0.5)',
                          color: '#fbbf24',
                          backgroundColor: 'rgba(245, 158, 11, 0.1)',
                          transition: { duration: 0.5 } 
                        }
                      }}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </motion.div>
                    {i < PROCESS.length - 1 && (
                      <motion.div 
                        className="ps-line" 
                        variants={{
                          hidden: { background: 'rgba(255, 255, 255, 0.1)' },
                          visible: { 
                            background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.8), rgba(245, 158, 11, 0.1))',
                            transition: { duration: 0.5 } 
                          }
                        }}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <motion.div 
                    className="ps-content"
                    variants={{
                      hidden: { opacity: 0.4 },
                      visible: { opacity: 1, transition: { duration: 0.5 } }
                    }}
                  >
                    <strong>{step}. {title}</strong>
                    <p>{desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
