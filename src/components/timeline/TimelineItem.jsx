import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './TimelineItem.css';

export function TimelineItem({ item, index }) {
  const isEducation = item.type === 'education';

  return (
    <motion.div
      className={`timeline-item ${isEducation ? 'education' : 'experience'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Center Line Marker Node */}
      <div className="timeline-node">
        <div className="timeline-node-icon">
          {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
        </div>
        {item.isCurrent && <div className="timeline-node-pulse" />}
      </div>

      {/* Content Card */}
      <div className="timeline-card glass-card">
        {/* Card Header */}
        <div className="timeline-header">
          <div className="timeline-meta-badges">
            <span className={`timeline-badge ${item.isCurrent ? 'current' : ''}`}>
              {item.badge}
            </span>
            <span className="timeline-period">
              <Calendar size={13} />
              {item.period}
            </span>
          </div>

          <h3 className="timeline-role">{item.role}</h3>
          
          <div className="timeline-institution-row">
            <strong className="timeline-institution">{item.institution}</strong>
            <span className="timeline-location">
              <MapPin size={12} />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="timeline-desc">{item.description}</p>

        {/* Bullet Achievements */}
        {item.achievements && (
          <ul className="timeline-achievements">
            {item.achievements.map((ach, i) => (
              <li key={i} className="timeline-ach-item">
                <CheckCircle2 size={15} className="ach-icon" />
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Skill tags */}
        {item.skills && (
          <div className="timeline-skills">
            {item.skills.map((s, i) => (
              <span key={i} className="timeline-skill-pill">{s}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
