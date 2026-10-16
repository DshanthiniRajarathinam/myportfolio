import React from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { InternshipSection } from './sections/InternshipSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Interactive Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Viewport Scroll Progress Line */}
      <ScrollProgress />

      {/* Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <InternshipSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
