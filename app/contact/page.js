'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <main className="section">
      <div className="container">
        <div className="contact-grid">
          
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <label>
                  <span className="form-label">Full Name *</span>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </label>
                <label>
                  <span className="form-label">Email Address *</span>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </label>
              </div>

              <div className="row">
                <label>
                  <span className="form-label">Company Name</span>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                </label>
                <label>
                  <span className="form-label">Subject</span>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Partnership Inquiry" />
                </label>
              </div>

              <label>
                <span className="form-label">Message *</span>
                <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." />
              </label>

              <button type="submit" className="btn form-submit" disabled={status.loading}>
                {status.loading ? 'Sending...' : 'Send Message'}
                <span className="arrow">→</span>
              </button>

              <p className={`form-success ${status.success ? 'show' : ''}`}>
                ✓ Thank you! Your message has been sent successfully.
              </p>
              <p className={`form-error ${status.error ? 'show' : ''}`}>
                ✕ Error: {status.error}
              </p>
            </form>
          </div>

          <div className="contact-side">
            <h3 className="serif h-3">Contact Information</h3>
            <div className="contact-block">
              <p className="eyebrow">General Inquiries</p>
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
