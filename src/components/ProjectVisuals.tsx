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
      <div className="clinic-sidebar">
        <div className="cs-logo">Md</div>
        <div className="cs-item active-item">Dashboard</div>
        <div className="cs-item">Appointments</div>
        <div className="cs-item">Patients</div>
        <div className="cs-item">Reports</div>
      </div>
      <div className="clinic-main">
        <div className="cm-header">Good Morning, Dr. Sharma</div>
        <div className="cm-cards">
          <div className="cmc">
            <div className="cmc-n">24</div>
            <div className="cmc-l">Today&apos;s Patients</div>
          </div>
          <div className="cmc cmc-amber">
            <div className="cmc-n">8</div>
            <div className="cmc-l">Pending</div>
          </div>
        </div>
        <div className="cm-row"><span className="cm-dot green" /> 10:00 AM — John D.</div>
        <div className="cm-row"><span className="cm-dot amber-dot" /> 10:30 AM — Sarah M.</div>
        <div className="cm-row"><span className="cm-dot grey" /> 11:00 AM — Raj P.</div>
      </div>
    </div>
  );
}

export function EmotionVisual() {
  return (
    <div className="pv-content emotion-content">
      <div className="em-header">
        <div className="em-logo">EmotionSpace</div>
        <div className="em-nav"><span /><span /></div>
      </div>
      <div className="em-hero">
        <div className="em-title">
          Your Mental Wellness<br />
          <span>Companion</span>
        </div>
        <div className="em-sub">Track. Reflect. Grow.</div>
        <div className="em-cta">Get Started Free</div>
      </div>
      <div className="em-cards">
        <div className="em-card">
          <div className="em-emoji">Calm</div>
          <div className="em-mood">Relaxed</div>
        </div>
        <div className="em-card em-active">
          <div className="em-emoji">Happy</div>
          <div className="em-mood">Positive</div>
        </div>
        <div className="em-card">
          <div className="em-emoji">Focus</div>
          <div className="em-mood">Alert</div>
        </div>
      </div>
    </div>
  );
}
