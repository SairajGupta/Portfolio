// src/components/Services.tsx
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';
import { SERVICES } from '../data/portfolioData';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onNavClick: (href: string) => void;
}

function ServiceCard({ service, onNavClick }: { service: ServiceItem; onNavClick: (href: string) => void }) {
  if (service.isCTA) {
    return (
      <div className="service-card card-cta">
        <div className="service-icon-wrap">
          <Icon name={service.icon} size={28} strokeWidth={1.5} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a
          href="#contact"
          className="btn-primary btn-sm cta-btn"
          onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }}
        >
          <span>Let's Talk</span>
          <ArrowRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div className="service-card">
      <div className="service-icon-wrap">
        <Icon name={service.icon} size={28} strokeWidth={1.5} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ArrowRight size={18} className="sc-arrow" />
    </div>
  );
}

export default function Services({ onNavClick }: ServicesProps) {
  // onNavClick unused here but kept in props just in case parent passes it
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Services I Offer</h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${Math.min(i % 4 + 1, 4)}`}
            >
              <ServiceCard service={service} onNavClick={onNavClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
