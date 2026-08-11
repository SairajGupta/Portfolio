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

        {/* New Built for Small Business Owners Section */}
        <div className="sbo-section reveal mt-32">
          <div className="section-header align-center">
            <h2 className="section-title">Built for Business Owners</h2>
            <p className="sbo-subtitle">
              You focus on your craft and leave the hassle of technology to <span className="amber" style={{ whiteSpace: 'nowrap' }}>Sairaj Gupta.</span>
            </p>
          </div>

          <div className="sbo-grid">
            {[
              { id: 'gym', title: 'Gym & Fitness Centres', icon: 'dumbbell' },
              { id: 'doctors', title: 'Doctors & Health Clinics', icon: 'stethoscope' },
              { id: 'bakers', title: 'Bakers & Cake Shops', icon: 'chef-hat' },
              { id: 'salon', title: 'Salon Owners', icon: 'scissors' },
              { id: 'restaurants', title: 'Restaurants & Bars', icon: 'utensils' },
              { id: 'pest', title: 'Pest Control Businesses', icon: 'bug' },
              { id: 'garages', title: 'Car Garages & Mechanics', icon: 'wrench' },
              { id: 'tours', title: 'Tours & Travels', icon: 'plane' },
              { id: 'yoga', title: 'Yoga & Wellness', icon: 'heart' },
              { id: 'handyman', title: 'Handyman Services', icon: 'hammer' },
            ].map((item, i) => (
              <div key={item.id} className={`sbo-card reveal reveal-delay-${Math.min(i % 4 + 1, 4)}`}>
                <span className="sbo-card-title">{item.title}</span>
                <div className="sbo-card-icon">
                  <Icon name={item.icon} size={32} strokeWidth={1.5} />
                </div>
              </div>
            ))}
            
            <div className="sbo-card sbo-cta-card reveal reveal-delay-3">
              <div className="sbo-cta-content">
                <span className="sbo-cta-title">And many more businesses like yours</span>
              </div>
              <a 
                href="#contact" 
                className="btn-primary sbo-cta-btn"
                onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }}
              >
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
