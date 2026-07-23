// src/App.tsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="cursor-glow" id="cursorGlow" />;
}

function App() {
  // Initialize scroll reveal observer after mount
  useScrollReveal();

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero onNavClick={handleNavClick} />
        <Marquee />
        <Projects onNavClick={handleNavClick} />
        <Services onNavClick={handleNavClick} />
        <About onNavClick={handleNavClick} />
        <Contact />
      </main>
      <Footer onNavClick={handleNavClick} />
    </>
  );
}

export default App;
