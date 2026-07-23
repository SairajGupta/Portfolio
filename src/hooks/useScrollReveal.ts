// src/hooks/useScrollReveal.ts
import { useEffect } from 'react';

function observeRevealElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe all current .reveal elements
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  return observer;
}

export function useScrollReveal() {
  useEffect(() => {
    // Small delay to ensure all DOM elements are painted
    const timer = setTimeout(() => {
      const observer = observeRevealElements();
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, []);
}
