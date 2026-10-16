import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink, Eye, Trophy } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Modal } from '../components/common/Modal';
import { achievementsData } from '../data/achievementsData';
import './AchievementsSection.css';

export function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <SectionHeader
          badge="Honors & Credentials"
          title="Key"
          highlight="Achievements"
          subtitle="Official certifications validating technical competence."
        />

        <div className="achievements-card-wrapper">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="achievement-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Card Header matching Education card */}
              <div className="achievement-card-header">
                <div className="achievement-meta-badges">
                  <span className="achievement-badge current">
                    {item.badge}
                  </span>
                  <span className="achievement-score-pill">
                    Score: {item.score}
                  </span>
                  <span className="achievement-period">
                    <Calendar size={13} />
                    {item.period}
                  </span>
                </div>

                <h3 className="achievement-title">{item.title}</h3>

                <div className="achievement-issuer-row">
                  <strong className="achievement-issuer">{item.issuer}</strong>
                  <span className="achievement-issuer-tag">
                    <Trophy size={13} />
                    Elite Silver Certification
                  </span>
                </div>
              </div>

              {/* Description matching Education card */}
              <p className="achievement-desc">{item.description}</p>

              {/* Certificate Button */}
              {item.certificateImage && (
                <div className="achievement-action-row">
                  <button
                    type="button"
                    className="achievement-cert-btn"
                    onClick={() => setSelectedCert(item)}
                    aria-label={`View Certificate for ${item.role}`}
                  >
                    <Award size={15} />
                    <span>View Certificate</span>
                    <Eye size={14} className="cert-btn-arrow" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <Modal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.certificateTitle || "Achievement Certificate"}
        maxWidth="860px"
      >
        {selectedCert && (
          <div className="cert-modal-box">
            <div className="cert-modal-image-wrapper">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.certificateTitle}
                className="cert-modal-image"
              />
            </div>

            <div className="cert-modal-action-bar">
              <div className="cert-modal-text">
                <strong>{selectedCert.title}</strong>
                <span>{selectedCert.issuer} • Score: {selectedCert.score} ({selectedCert.badge})</span>
              </div>

              <a
                href={selectedCert.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-open-link"
                download="NPTEL-Programming-in-Java-Elite-Silver-Certificate.svg"
              >
                <ExternalLink size={15} />
                <span>Open Full Image</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
