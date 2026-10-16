import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { SkillCard } from '../components/skills/SkillCard';
import { skillCategories, skillsData } from '../data/skillsData';
import './SkillsSection.css';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeader
          badge="Skills"
          highlight="Skills"
          subtitle="A comprehensive toolkit across full-stack development, core programming logic, and interface design."
        />

        {/* Category Filter Pills */}
        <div className="skills-tabs-wrap">
          <div className="skills-tabs-container">
            {skillCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`skill-tab-btn ${isSelected ? 'active' : ''}`}
                >
                  {cat.label}
                  {isSelected && (
                    <motion.div
                      className="tab-active-indicator"
                      layoutId="activeSkillTabIndicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${skill.category}`}
                skill={skill}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
