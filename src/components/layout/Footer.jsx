import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { profileData } from '../../data/profileData';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow-divider" />
      <div className="container footer-container">
        {/* Main Footer Row */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-symbol">
                <span>D</span>
              </div>
              <div>
                <h3 className="footer-name">{profileData.name}</h3>
                <p className="footer-role">{profileData.role}</p>
              </div>
            </div>
            <p className="footer-bio">
              Bridging engineering precision with human-centered UI/UX design. Building scalable full-stack applications with MERN and intuitive Figma prototypes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-nav-columns">
              <ul className="footer-nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
              <ul className="footer-nav-list">
                <li><a href="#education">Education</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-connect-text">
              Open to full-time roles, software engineering internships, and UI/UX design opportunities.
            </p>
            <div className="footer-social-pills">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="footer-social-pill"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 {profileData.name}. All rights reserved.
          </p>

          <p className="footer-made-with">
            Designed &amp; Developed with <Heart size={14} className="heart-icon" /> using React &amp; Framer Motion
          </p>

          <button 
            onClick={scrollToTop} 
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
