import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { Github } from '../common/Icons';
import './ProjectCard.css';

export function ProjectCard({ project, onSelect, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // 3D Perspective Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
    setSpotlightPos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="project-card-perspective-wrap">
      <motion.article 
        className="project-card-small glass-card"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic Holographic Spotlight that tracks the cursor */}
        {isHovered && (
          <div 
            className="project-cursor-spotlight"
            style={{
              background: `radial-gradient(220px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0, 242, 254, 0.18), transparent 75%)`
            }}
          />
        )}

        {/* Animated Cyber Border Glow */}
        <div 
          className="project-glow-border-beam" 
          style={{ '--project-accent': project.accentColor || '#00f2fe' }} 
        />

        {/* Compact Image Banner */}
        <div 
          className="project-media-compact" 
          onClick={() => onSelect(project)}
          role="button"
          tabIndex={0}
          aria-label={`Open details for ${project.title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(project);
            }
          }}
        >
          <img 
            src={project.image} 
            alt={`${project.title} Preview`} 
            className="project-compact-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = project.id === 'g-shop' ? '/src/assets/images/g-shop-preview.svg' : '/src/assets/images/loan-checker-preview.svg';
            }}
          />

          {/* Dark Glass Overlay with Quick Reveal */}
          <div className="project-compact-overlay">
            <span className="compact-view-tag">
              <Info size={13} />
              <span>Details</span>
            </span>
          </div>

          {/* Floating Category Pill */}
          <div className="project-compact-badge">
            <Sparkles size={11} className="badge-sparkle" />
            <span>{project.badge}</span>
          </div>
        </div>

        {/* Compact Body Content */}
        <div className="project-compact-content">
          <div className="project-compact-header">
            <h3 
              className="project-compact-title" 
              onClick={() => onSelect(project)}
            >
              {project.title}
            </h3>
          </div>

          <p className="project-compact-desc">
            {project.shortDescription}
          </p>

          {/* Tech Tag Pills */}
          <div className="project-compact-tags">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className="compact-tech-pill">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="compact-tech-pill more">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="project-compact-actions">
            <button
              type="button"
              className="compact-btn-primary"
              onClick={() => onSelect(project)}
              aria-label={`View details for ${project.title}`}
            >
              <Info size={14} />
              <span>View Details</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="compact-btn-github"
              aria-label={`Open ${project.title} on GitHub`}
            >
              <Github size={15} />
              <span>GitHub</span>
              <ArrowUpRight size={13} className="btn-arrow-icon" />
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
