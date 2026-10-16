import React from 'react';
import { motion } from 'framer-motion';
import './SkillCard.css';

export function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="skill-card glass-card"
      style={{ '--skill-accent': skill.accent }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
    >
      {/* Dynamic Hover Glow Background */}
      <div className="skill-card-glow" />

      {/* Top Header Row with Category Tag */}
      <div className="skill-card-top">
        <span className="skill-category-badge">{skill.category}</span>
      </div>

      {/* Skill Name & Tagline */}
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-tagline">{skill.tagline}</p>

      {/* Skill Detailed Application Description */}
      <p className="skill-description">{skill.description}</p>
    </motion.div>
  );
}
