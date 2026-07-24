// src/components/Contact.tsx
import { useState, type FormEvent } from 'react';
import {
  Mail,
  Lock,
  CheckCircle2,
  Send,
  Check,
} from 'lucide-react';
import { BUDGET_OPTIONS } from '../data/portfolioData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  budget: '',
};

const PERKS = [
  'Free consultation call',
  'No upfront payment required',
  'Reply within 24 hours',
  'Fixed pricing, no surprises',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network delay — replace with real API call (Formspree / EmailJS etc.)
    await new Promise((res) => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
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

            <div className="contact-socials">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" title="WhatsApp">
                <WhatsAppIcon size={24} />
              </a>
              <a href="mailto:sairajgupta12@gmail.com" title="Email">
                <Mail size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="X (Twitter)">
                <TwitterIcon size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="LinkedIn">
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
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Dr. Sharma / Mr. Mehta..."
                    required
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
                    rows={4}
                    placeholder="What does your business do? What do you need on the website? Any deadline?"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Budget Range (optional)</label>
                  <div className="budget-options">
                    {BUDGET_OPTIONS.map((opt) => (
                      <label key={opt.value} className="budget-opt">
                        <input
                          type="radio"
                          name="budget"
                          value={opt.value}
                          checked={form.budget === opt.value}
                          onChange={handleChange}
                          onClick={() => {
                            if (form.budget === opt.value) {
                              setForm((prev) => ({ ...prev, budget: '' }));
                            }
                          }}
                        />
                        <span>
                          {opt.label}
                          <small>{opt.sublabel}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

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

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);
