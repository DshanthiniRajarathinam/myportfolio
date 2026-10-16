import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { ExternalLink } from 'lucide-react';
import { Github } from '../common/Icons';
import './ProjectDetailsModal.css';

export function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="840px"
    >
      <div className="modal-project-wrap">
        {/* Project Image Preview */}
        <div className="modal-project-media">
          <img
            src={project.image}
            alt={`${project.title} detailed visual`}
            className="modal-project-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = project.id === 'g-shop' ? '/src/assets/images/g-shop-preview.svg' : '/src/assets/images/loan-checker-preview.svg';
            }}
          />
          <div className="modal-badge-overlay">
            <span className="pill-badge">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Action Header */}
        <div className="modal-action-bar">
          <div className="modal-tech-pills">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="modal-tech-tag">{t}</span>
            ))}
          </div>

          <div className="modal-button-group">
            <Button
              variant="primary"
              size="sm"
              href={project.githubUrl}
              target="_blank"
              icon={Github}
            >
              View on GitHub
            </Button>

            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="modal-section-block">
          <h4 className="modal-subheading">Project Overview</h4>
          <p className="modal-text">{project.fullDescription}</p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="modal-dual-grid">
          <div className="modal-grid-box problem">
            <h5 className="modal-box-title">
              <span className="box-dot problem-dot" /> The Problem
            </h5>
            <p className="modal-box-text">{project.problem}</p>
          </div>

          <div className="modal-grid-box solution">
            <h5 className="modal-box-title">
              <span className="box-dot solution-dot" /> The Solution
            </h5>
            <p className="modal-box-text">{project.solution}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
