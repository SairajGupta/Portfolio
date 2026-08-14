// src/components/Contact.tsx
import { useState, type FormEvent } from 'react';
import {
  Mail,
  Lock,
  CheckCircle2,
  Send,
  Check,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import CountrySelect from './CountrySelect';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  country: '',
  message: '',
};

const PERKS = [
  'Free consultation call',
  'No upfront payment required',
  'Reply within 24 hours',
  'Pricing tailored to your region',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value: string) => {
    setForm((prev) => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Rate limiting check: allow 3 sends, then 5 min cooldown
    const historyString = localStorage.getItem('formSubmissionHistory');
    let submissionHistory: number[] = [];
    if (historyString) {
      try {
        submissionHistory = JSON.parse(historyString);
      } catch (err) {
        // ignore parse errors
      }
    }
    
    const now = Date.now();
    const cooldownPeriod = 5 * 60 * 1000; // 5 minutes

    // Remove timestamps older than the cooldown period
    submissionHistory = submissionHistory.filter((timestamp) => now - timestamp < cooldownPeriod);

    if (submissionHistory.length >= 3) {
      const oldestInWindow = submissionHistory[0];
      const timeSinceOldest = now - oldestInWindow;
      
      if (timeSinceOldest < cooldownPeriod) {
        const remainingMinutes = Math.ceil((cooldownPeriod - timeSinceOldest) / 60000);
        setFormError(`Please wait ${remainingMinutes} minute(s) before sending another message.`);
        return;
      }
    }

    setSubmitting(true);
    
    try {
      const payload = { ...form };
      
      // Read credentials from environment variables (.env file)
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS credentials are not fully set in the .env file.');
      }
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
      
      // Record this submission
      submissionHistory.push(now);
      localStorage.setItem('formSubmissionHistory', JSON.stringify(submissionHistory));
      
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="lead-gen" id="contact">
      <div className="lg-bg-glow" />
      <div className="container">
        <div className="lg-inner">
          {/* Left column */}
          <div className="lg-left reveal">
            <span className="section-tag">Let&apos;s Build Together</span>
            <h2 className="lg-title">
              Ready to Get<br />
              <span className="amber">Your Business Online?</span>
            </h2>
            <p className="lg-desc">
              Fill out the quick form and I&apos;ll get back to you within{' '}
              <strong>24 hours</strong> with a free consultation and a rough estimate —
              no commitment needed.
            </p>

            <div className="lg-perks">
              {PERKS.map((perk) => (
                <div key={perk} className="lg-perk">
                  <span className="lg-perk-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {perk}
                </div>
              ))}
            </div>
            <div className="contact-methods">
              <a href="mailto:work@sairajgupta.tech" className="contact-method-link">
                <div className="cml-icon"><Mail size={18} /></div>
                <span>work@sairajgupta.tech</span>
              </a>
              <a href="https://wa.me/919915499455" target="_blank" rel="noreferrer" className="contact-method-link">
                <div className="cml-icon"><WhatsAppIcon size={18} /></div>
                <span>+91 99154 99455</span>
              </a>
            </div>
            
            <div className="contact-socials" style={{ marginTop: '24px' }}>
              <a href="https://x.com/sairaj_127" target="_blank" rel="noreferrer" title="X (Twitter)">
                <XIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sairajgupta/" target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          {/* Right column: Form or Success */}
          <div className="lg-right reveal reveal-delay-2">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <CheckCircle2 size={56} strokeWidth={1.5} />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thanks for reaching out. I&apos;ll review your project and reply within{' '}
                  <strong>24 hours</strong>.
                </p>
                <p className="success-sub">
                  Meanwhile, feel free to check out my projects above!
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Dr. Sharma / Mr. Mehta..."
                    required
                    pattern=".*\S+.*"
                    title="This field is required"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@yourbusiness.com"
                    required
                    pattern=".*\S+.*"
                    title="This field is required"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell me about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="What does your business do? What do you need on the website? Any deadline?"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Your Country *</label>
                  <CountrySelect
                    value={form.country}
                    onChange={handleCountryChange}
                    required
                  />
                </div>

                {formError && (
                  <p className="form-error" style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '1rem', marginTop: '-0.5rem' }}>
                    {formError}
                  </p>
                )}

                <button type="submit" className="btn-primary btn-submit" disabled={submitting}>
                  {submitting ? (
                    <div className="btn-spinner" />
                  ) : (
                    <>
                      <span>Send My Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="form-note">
                  <Lock size={13} strokeWidth={2} />
                  Your information is private and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
  </svg>
);
