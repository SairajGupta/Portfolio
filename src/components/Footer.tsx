// src/components/Footer.tsx
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Col 1 */}
          <div className="footer-brand">
            <a
              href="#home"
              className="nav-logo"
              onClick={(e) => { e.preventDefault(); onNavClick('#home'); }}
            >
              <img src="/sg-logo.png" alt="Sairaj Gupta Logo" className="logo-img" />
              <span className="logo-text">Sairaj Gupta<span className="amber">.</span></span>
            </a>
            <p>Building modern web applications and digital solutions that help businesses grow.</p>
            <div className="footer-socials">
              <a href="https://github.com/SairajGupta" target="_blank" rel="noreferrer"><GithubIcon size={18} /></a>
              <a href="https://www.linkedin.com/in/sairajgupta/" target="_blank" rel="noreferrer"><LinkedinIcon size={18} /></a>
              <a href="https://x.com/sairaj_127" target="_blank" rel="noreferrer"><TwitterIcon size={18} /></a>
              <a href="mailto:srgupta1235@gmail.com"><Mail size={18} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-links">
            <strong>Quick Links</strong>
            {[
              { label: 'Home', href: '#home' },
              { label: 'Projects', href: '#projects' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { 
                  if (link.href !== '#') {
                    e.preventDefault(); 
                    onNavClick(link.href); 
                  }
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={14} className="fl-icon" />
              </a>
            ))}
          </div>

          {/* Col 3 */}
          <div className="footer-links">
            <strong>Services</strong>
            <span>Web Development</span>
            <span>SaaS Development</span>
            <span>API Development</span>
            <span>AI Integrations</span>
            <span>Consulting</span>
          </div>

          {/* Col 4 */}
          <div className="footer-contact">
            <strong>Get In Touch</strong>
            <a href="mailto:srgupta1235@gmail.com" className="fc-item">
              <Mail size={16} className="amber" />
              srgupta1235@gmail.com
            </a>
            <div className="fc-item">
              <Phone size={16} className="amber" />
              +91 8200639614
            </div>
            <div className="fc-item">
              <MapPin size={16} className="amber" />
              India
            </div>
            <div className="fc-avail">
              <span className="status-dot green"></span>
              <p>Available for Freelance<br/>and Full Time Opportunities</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Sairaj Gupta. All rights reserved.</span>
          <span>Designed &amp; Built with ❤️</span>
        </div>
      </div>
    </footer>
  );
}

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
