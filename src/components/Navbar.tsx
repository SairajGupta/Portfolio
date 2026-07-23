// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ['home', 'projects', 'services', 'about', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          >
            <span className="logo-sg">SG</span>
            <span className="logo-text">Sairaj Gupta<span className="amber">.</span></span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link${activeSection === sectionId ? ' active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="btn-nav"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Let's Talk
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          <span>Let's Talk</span>
        </a>
      </div>
    </>
  );
}
