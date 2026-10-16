import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { profileData } from '../data/profileData';
import './ContactSection.css';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something"
          highlight="Exceptional"
          subtitle="Have an opportunity, project, or want to discuss full-stack development and UI/UX design? Feel free to reach out!"
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-box glass-card">
              <span className="contact-status-tag">
                Open to Work &amp; Collaborations
              </span>

              <h3 className="contact-info-title">Contact Channels</h3>
              <p className="contact-info-desc">
                I am actively seeking full-time roles, internships, and engineering opportunities as a MERN Stack Developer and UI/UX Designer.
              </p>

              <div className="contact-channels-list">
                {/* Email Channel */}
                <div className="contact-channel-item">
                  <div className="channel-icon-wrap cyan">
                    <Mail size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${profileData.socials.email}`} className="channel-value">
                      {profileData.socials.email}
                    </a>
                  </div>
                  <button 
                    onClick={copyEmail} 
                    className="copy-btn" 
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* GitHub Channel */}
                <a 
                  href={profileData.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item link-item"
                >
                  <div className="channel-icon-wrap violet">
                    <Github size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">GitHub Profile</span>
                    <span className="channel-value">github.com/DshanthiniRajarathinam</span>
                  </div>
                  <ArrowUpRight size={18} className="channel-arrow" />
                </a>

                {/* LinkedIn Channel */}
                <a 
                  href={profileData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item link-item"
                >
                  <div className="channel-icon-wrap blue">
                    <Linkedin size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-value">linkedin.com/in/dshanthini-rajarathinam</span>
                  </div>
                  <ArrowUpRight size={18} className="channel-arrow" />
                </a>

                {/* Location Channel */}
                <div className="contact-channel-item">
                  <div className="channel-icon-wrap amber">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fully Working Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
