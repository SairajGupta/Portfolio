// src/components/Marquee.tsx
import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function Marquee() {
  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            {i < items.length - 1 && <span className="dot"> ◆ </span>}
          </span>
        ))}
      </div>
    </div>
  );
}
