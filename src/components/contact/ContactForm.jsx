import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Info } from 'lucide-react';
import { profileData } from '../../data/profileData';
import './ContactForm.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'activation_needed' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Email format validation regex
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com)';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    const recipientEmail = profileData.socials.email || 'dshanthinibama@gmail.com';
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1. Try EmailJS if valid credentials are provided
    if (serviceId && templateId && publicKey && !serviceId.includes('your_')) {
      try {
        const templateParams = {
  from_name: formData.name.trim(),
  from_email: formData.email.trim(),
  reply_to: formData.email.trim(),
  subject: formData.subject.trim(),
  message: formData.message.trim(),
  submitted_at: new Date().toLocaleString()
};
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setStatus('success');
        setStatusMessage(`Message Sent Successfully ✓ Delivered to ${recipientEmail}`);
        triggerSuccessCelebration();
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      } catch (err) {
        console.warn('EmailJS attempt failed, falling back to direct delivery:', err);
      }
    }

    // 2. Direct real delivery to recipient inbox via FormSubmit AJAX
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          message: formData.message.trim(),
          submitted_at: new Date().toLocaleString(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        setStatus('success');
        setStatusMessage(`Message Sent Successfully ✓ Delivered to ${recipientEmail}`);
        triggerSuccessCelebration();
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        setStatus('activation_needed');
        setStatusMessage(
          `FormSubmit sent a one-time activation link to ${recipientEmail}. Please check your inbox (and Spam folder) and click "Activate Form" once. After activating, all messages will arrive directly in your inbox!`
        );
        triggerSuccessCelebration();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setStatusMessage('Direct submission encountered an issue. You can send your message directly using the mail app below:');
    }
  };

  const triggerSuccessCelebration = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#8b5cf6', '#38bdf8']
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div className="contact-form-container glass-card">
      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <div className="form-header">
          <h3 className="form-title">Send a Direct Message</h3>
          <p className="form-subtitle">Fill in the form below and I will respond to your inquiry promptly.</p>
        </div>

        {/* Row 1: Name & Email */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              disabled={status === 'sending'}
              autoComplete="name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Your Email <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@example.com"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              disabled={status === 'sending'}
              autoComplete="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>

        {/* Row 2: Subject */}
        <div className="form-group">
          <label htmlFor="contact-subject" className="form-label">
            Subject <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Opportunity for MERN Stack Developer / Project Collaboration"
            className={`form-input ${errors.subject ? 'input-error' : ''}`}
            disabled={status === 'sending'}
          />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>

        {/* Row 3: Message */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Your Message <span className="required-star">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            disabled={status === 'sending'}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        {/* Status Feedback Banners */}
        {status === 'success' && (
          <div className="status-banner success">
            <CheckCircle2 size={18} className="status-icon" />
            <div>
              <strong>{statusMessage}</strong>
            </div>
          </div>
        )}

        {status === 'activation_needed' && (
          <div className="status-banner info">
            <Info size={18} className="status-icon" />
            <div>
              <strong>{statusMessage}</strong>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="status-banner error">
            <AlertCircle size={18} className="status-icon" />
            <div>
              <p>{statusMessage}</p>
              <a
                href={`mailto:${profileData.socials.email || 'dshanthinibama@gmail.com'}?subject=${encodeURIComponent(formData.subject || 'Portfolio Message')}&body=${encodeURIComponent(`Hi Dshanthini,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                className="btn-mailto"
              >
                <Mail size={15} />
                <span>Open in Email App &amp; Send</span>
              </a>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="form-submit-row">
          <button
            type="submit"
            className={`submit-btn ${status === 'sending' ? 'sending' : ''} ${status === 'success' ? 'success' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={18} className="spinner" />
                <span>Sending...</span>
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={18} />
                <span>Message Sent Successfully ✓</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={16} className="btn-send-icon" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
