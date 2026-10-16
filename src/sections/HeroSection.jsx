import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Download, 
  Sparkles, 
  Code2, 
  Palette 
} from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';
import { Button } from '../components/common/Button';
import { profileData } from '../data/profileData';
import profilePhoto from '../assets/profile.jpg';
import placeholderAvatar from '../assets/images/profile-placeholder.svg';
import './HeroSection.css';

const TECH_BADGES = [
  {
    id: 'react',
    title: 'React.js',
    subtitle: 'Frontend UI',
    icon: '⚛',
    iconClass: 'react',
    className: 'badge-react',
    hiddenX: -80,
    hiddenY: 70
  },
  {
    id: 'java',
    title: 'Java & SQL',
    subtitle: 'Backend Core',
    icon: '⌨️',
    iconClass: 'java',
    className: 'badge-java',
    hiddenX: 80,
    hiddenY: 60
  },
  {
    id: 'figma',
    title: 'Figma',
    subtitle: 'UI/UX Design',
    icon: '❖',
    iconClass: 'figma',
    className: 'badge-figma',
    hiddenX: 80,
    hiddenY: -60
  },
  {
    id: 'mern',
    title: 'MERN',
    subtitle: 'Full Stack',
    icon: '💻',
    iconClass: 'node',
    className: 'badge-mern',
    hiddenX: -60,
    hiddenY: -70
  }
];

export function HeroSection() {
  const [imgSrc, setImgSrc] = useState(profilePhoto);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showBadges = isRevealed || isHovered;

  const handleImageError = () => {
    setImgSrc(placeholderAvatar);
  };

  useEffect(() => {
    if (!isRevealed) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.photo-presentation-wrapper')) {
        setIsRevealed(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('touchstart', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isRevealed]);


  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Ambient Glow Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-container">
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-dot" />
              <span className="status-ping" />
            </span>
            <span>Available for MERN &amp; UI/UX Roles</span>
          </div>

          {/* Main Greeting & Name */}
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">{profileData.name}</span>
          </h1>

          {/* Subtitle / Dual Role */}
          <div className="hero-role-wrapper">
            <span className="hero-role-badge">
              <Code2 size={16} className="role-icon cyan" />
              MERN Stack Developer
            </span>
            <span className="hero-role-divider">•</span>
            <span className="hero-role-badge">
              <Palette size={16} className="role-icon violet" />
              UI/UX Designer
            </span>
          </div>

          {/* Introduction Paragraph */}
          <p className="hero-intro">
            {profileData.shortIntro}
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-mini-stats">
            <div className="mini-stat-item">
              <strong>110+</strong>
              <span>Problems Solved</span>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat-item">
              <strong>B.E. CSE</strong>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat-item">
              <strong>Full Stack</strong>
              <span>MERN + Figma</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              icon={ArrowRight}
            >
              View My Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              icon={Mail}
            >
              Contact Me
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/resume.pdf"
              download="Dshanthini_R_Resume.pdf"
              icon={Download}
            >
              Download Resume
            </Button>
          </div>

          {/* Quick Social Links */}
          <div className="hero-social-row">
            <span className="social-row-label">Find me on:</span>
            <div className="social-links-group">
              <a 
                href={profileData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href={profileData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${profileData.socials.email}`}
                className="hero-social-link"
                aria-label="Email Dshanthini"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Creative Photo Presentation */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div 
            className={`photo-presentation-wrapper ${showBadges ? 'active' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer Conic Rotating Gradient Ring */}
            <div className="orbit-ring-outer animate-spin-slow" />
            <div className="orbit-ring-inner animate-float" />

            {/* Glowing Backdrop */}
            <div className="photo-backdrop-glow" />

            {/* Unique Shape Photo Container */}
            <div 
              className={`photo-card-frame ${showBadges ? 'is-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsRevealed(prev => !prev);
              }}
              role="button"
              tabIndex={0}
              aria-label="Touch photo to reveal tech stack"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsRevealed(prev => !prev);
                }
              }}
            >
              <img
                src={imgSrc}
                alt="Dshanthini R - MERN Stack Developer and UI/UX Designer"
                className="hero-profile-image"
                onError={handleImageError}
              />

              {/* Status Hint Badge */}
              <div className={`photo-status-badge ${showBadges ? 'revealed' : ''}`}>
                <Sparkles size={13} className="status-sparkle" />
                <span>{showBadges ? 'Tech Stack Active ⚡' : 'Touch photo to reveal stack ✨'}</span>
              </div>
            </div>

            {/* Interactive Pop-Out Tech Badges */}
            {TECH_BADGES.map((badge, idx) => (
              <motion.div 
                key={badge.id}
                className={`floating-tech-badge ${badge.className}`}
                initial={{ opacity: 0, scale: 0.1, x: badge.hiddenX, y: badge.hiddenY, pointerEvents: 'none' }}
                animate={showBadges 
                  ? { opacity: 1, scale: 1, x: 0, y: 0, pointerEvents: 'auto' } 
                  : { opacity: 0, scale: 0.1, x: badge.hiddenX, y: badge.hiddenY, pointerEvents: 'none' }
                }
                transition={{ 
                  type: 'spring', 
                  stiffness: 320, 
                  damping: 22, 
                  mass: 0.8,
                  delay: showBadges ? idx * 0.08 : 0 
                }}
                whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
              >
                <div className="tech-badge-inner animate-float">
                  <div className={`tech-badge-icon ${badge.iconClass}`}>{badge.icon}</div>
                  <div className="tech-badge-info">
                    <strong>{badge.title}</strong>
                    <span>{badge.subtitle}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
