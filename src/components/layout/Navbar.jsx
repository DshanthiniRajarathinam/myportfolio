import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from '../common/Button';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'internship', label: 'Internship' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <div className="brand-symbol">
            <span>D</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Dshanthini<span className="brand-dot">.</span>R</span>
            <span className="brand-role">MERN & UI/UX</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-link-list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="nav-active-indicator"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <Button
            variant="outline"
            size="sm"
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            icon={ArrowUpRight}
            className="navbar-cta-btn"
          >
            Let's Talk
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-drawer-content container">
              <ul className="mobile-nav-list">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <a
                        href={`#${link.id}`}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, link.id)}
                      >
                        <span className="mobile-nav-number">0{index + 1}.</span>
                        <span className="mobile-nav-text">{link.label}</span>
                        {isActive && <span className="mobile-active-dot" />}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mobile-drawer-cta">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  icon={ArrowUpRight}
                  className="w-full"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
