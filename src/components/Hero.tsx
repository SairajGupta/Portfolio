// src/components/Hero.tsx
import { ArrowRight, Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  onNavClick: (href: string) => void;
}

import { motion, animate } from 'framer-motion';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    const controls = animate(from, to, {
      duration,
      delay: 1,
      onUpdate(value) {
        node.textContent = Math.round(value) + suffix;
      },
    });
    
    return () => controls.stop();
  }, [from, to, duration, suffix]);

  return <span ref={nodeRef} className="stat-number">{from}{suffix}</span>;
}

const statsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8
    }
  }
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const statDivider = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: { duration: 0.6 } }
};

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for new clients
          </div>

          <h1 className="hero-title">
            Building <span className="title-highlight">software</span> that helps businesses operate{' '}
            <span className="title-highlight">smarter.</span>
          </h1>

          <p className="hero-sub">
            I build scalable web applications, SaaS products and AI-powered solutions
            that solve real business problems and deliver results.
          </p>

          <div className="hero-cta">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); onNavClick('#projects'); }}
            >
              <Eye size={16} />
              View My Work
            </a>
          </div>

          <motion.div 
            className="hero-stats"
            variants={statsContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="stat-item" variants={statItem}>
              <Counter from={0} to={5} suffix="+" duration={1.5} />
              <span className="stat-label">Years of Coding</span>
            </motion.div>
            <motion.div className="stat-divider" variants={statDivider} />
            <motion.div className="stat-item" variants={statItem}>
              <Counter from={0} to={100} suffix="%" duration={2} />
              <span className="stat-label">Client Satisfaction</span>
            </motion.div>
            <motion.div className="stat-divider" variants={statDivider} />
            <motion.div className="stat-item" variants={statItem}>
              <span className="stat-number">Fast</span>
              <span className="stat-label">Delivery</span>
            </motion.div>
            <motion.div className="stat-divider" variants={statDivider} />
            <motion.div className="stat-item" variants={statItem}>
              <span className="stat-number">SEO</span>
              <span className="stat-label">Friendly</span>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-halo">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="halo-svg">
              <path id="halo-path" d="M 250, 250 m -235, 0 a 235,235 0 1,1 470,0 a 235,235 0 1,1 -470,0" fill="none" />
              <text fill="var(--amber-500)" fontSize="16" fontWeight="bold" letterSpacing="3">
                <textPath href="#halo-path" startOffset="0%" textLength="1475">
                  FULL-STACK DEVELOPMENT • BUSINESS SOLUTIONS • SAAS PRODUCTS • AI INTEGRATION • WEB DESIGN • SEO FRIENDLY • 
                </textPath>
              </text>
            </svg>
          </div>
          <img src="/profilenew.png" alt="Hero Portrait" />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
