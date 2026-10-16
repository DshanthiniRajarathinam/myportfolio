import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeader.css';

export function SectionHeader({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  align = 'center',
  id 
}) {
  return (
    <motion.div 
      className={`section-header align-${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {badge && (
        <div className="section-badge-wrapper">
          <span className="section-badge">
            <span className="badge-glow-dot" />
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
