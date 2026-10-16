import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Compass, 
  GraduationCap, 
  MapPin, 
  Laptop 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { profileData } from '../data/profileData';
import profilePhoto from '../assets/profile-laptop.jpg';
import placeholderAvatar from '../assets/images/profile-placeholder.svg';
import './AboutSection.css';

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeader
          badge="Who I Am"
          highlight="ABOUT ME"
          subtitle="A look into my engineering principles, design methodology, and career aspirations."
        />

        <div className="about-grid">
          {/* Left Column: Visual Profile Card (Full Bleed Image with Overlay Content) */}
          <motion.div
            className="about-image-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image Covering The Entire Card */}
            <div className="about-card-bg-wrap">
              <img
                src={profilePhoto}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = placeholderAvatar;
                }}
                alt="Dshanthini R - MERN Stack Developer and UI/UX Designer"
                className="about-card-bg-img"
              />
              <div className="about-card-overlay" />
            </div>

            {/* Content Placed Into The Image */}
            <div className="about-card-content">
              {/* Top Floating Badge */}
              <div className="about-card-top-badge">
                <span>MERN &amp; UI/UX</span>
              </div>

              {/* Bottom Information Over Image */}
              <div className="about-card-bottom-info">
                <h3 className="about-card-name">{profileData.name}</h3>
                <p className="about-card-role">{profileData.role}</p>

                <div className="about-pill-list">
                  <div className="about-pill">
                    <GraduationCap size={15} className="pill-icon" />
                    <span>Sri Shakthi Institute of Engineering and Technology</span>
                  </div>
                  <div className="about-pill">
                    <Laptop size={15} className="pill-icon" />
                    <span>B.E. Computer Science and Engineering</span>
                  </div>
                  <div className="about-pill">
                    <MapPin size={15} className="pill-icon" />
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Focus Areas */}
          <motion.div
            className="about-narrative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Bio Description */}
            <div className="about-text-block">
              <h3 className="about-subheading">Passionate Engineer &amp; Designer</h3>
              <p className="about-p">
                My passion lies at the unique intersection of full-stack development and intuitive UI/UX design. Rather than treating design and development as separate phases, I treat them as continuous feedback loops.
              </p>
              <p className="about-p">
                Whether formulating modular RESTful architectures in <strong>Node.js and Express</strong>, engineering dynamic single-page applications with <strong>React.js</strong>, or structuring relational databases in <strong>MySQL and MongoDB</strong>, I strive to make software that is fast, resilient, and easy to use.
              </p>
            </div>

            {/* Core Focus Split Grid */}
            <div className="about-focus-grid">
              {/* Box 1: Development Interests */}
              <div className="focus-box dev">
                <div className="focus-box-header">
                  <div className="focus-icon-wrap dev">
                    <Code size={18} />
                  </div>
                  <h4>Development Focus</h4>
                </div>
                <p>
                  MERN Stack architectures, robust client-side state handling, REST API endpoints, JWT security, and object-oriented backend algorithms in Java.
                </p>
              </div>

              {/* Box 2: UI/UX Interests */}
              <div className="focus-box design">
                <div className="focus-box-header">
                  <div className="focus-icon-wrap design">
                    <Palette size={18} />
                  </div>
                  <h4>UI/UX &amp; Design Focus</h4>
                </div>
                <p>
                  Translating complex user workflows into clean Figma wireframes, interactive prototypes, accessible typography hierarchies, and modern glassmorphic interfaces.
                </p>
              </div>
            </div>

            {/* Career Goal */}
            <div className="career-goal-banner">
              <Compass size={20} className="goal-icon" />
              <div>
                <strong>Career Focus:</strong> MERN Stack Development + Frontend Development + UI/UX Design. Eager to learn and contribute to real-world projects.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Statistics / Numbers Row */}
        <div className="about-stats-grid">
          {profileData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card glass-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="stat-number gradient-text">{stat.value}</span>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
