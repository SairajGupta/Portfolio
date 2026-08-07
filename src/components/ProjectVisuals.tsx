// src/components/ProjectVisuals.tsx
// Mock browser UI components — deliberately styled as mini-previews
// These use minimal inline visual text, NOT emojis or icons for clarity at small scale

export function LawVisual() {
  return (
    <div className="pv-content law-content">
      <div className="mock-nav">
        <div className="mock-logo"><strong>LexPro</strong> Law</div>
        <div className="mock-links">
          <span /><span /><span />
        </div>
      </div>
      <div className="mock-hero law-hero">
        <div className="mh-title">
          Justice You<br />
          <span>Can Trust</span>
        </div>
        <div className="mh-btn">Book Free Consult</div>
      </div>
      <div className="mock-tags">
        <span>Family Law</span>
        <span>Criminal Defense</span>
        <span>Corporate</span>
      </div>
    </div>
  );
}

export function ClinicVisual() {
  return (
    <div className="pv-content clinic-content">
      <div className="clinic-nav">
        <div className="clinic-logo">
          Dr. Kajal <span>BHMS</span>
        </div>
        <div className="clinic-links">
          <span /><span /><span /><span />
        </div>
        <div className="clinic-nav-btn">Book</div>
      </div>
      <div className="clinic-hero">
        <div className="clinic-tags">
          <div className="clinic-tag">Mon-Sat: 9AM - 8PM</div>
          <div className="clinic-tag blue-tag">Healing Harmony</div>
        </div>
        <div className="clinic-title">
          Compassionate<br />
          <span>Care</span> for Every<br />
          Stage of <span className="light-blue">Life</span>
        </div>
        <div className="clinic-desc">
          Personalized healthcare focused on prevention, wellness, and long-term relationships.
        </div>
        <div className="clinic-actions">
          <div className="clinic-btn primary">Book Appointment</div>
          <div className="clinic-btn secondary">WhatsApp</div>
        </div>
      </div>
    </div>
  );
}


