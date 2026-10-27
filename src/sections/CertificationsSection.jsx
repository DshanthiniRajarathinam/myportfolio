import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink, Eye, Trophy, Briefcase } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Modal } from '../components/common/Modal';
import { certificationsData } from '../data/certificationsData';
import './CertificationsSection.css';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="certifications-section">
      {/* Target anchors for alternate references */}
      <span id="certification" className="section-anchor" aria-hidden="true" />
      <span id="internship" className="section-anchor" aria-hidden="true" />
      <span id="achievements" className="section-anchor" aria-hidden="true" />

      <div className="container">
        <SectionHeader
          badge="Credentials & Experience"
          title="My"
          highlight="Certifications"
          subtitle="Hands-on industrial internship experience and verified technical certifications."
        />

        <div className="certifications-grid">
          {certificationsData.map((item, index) => {
            const isInternship = item.type === 'internship';

            return (
              <motion.div
                key={item.id}
                className="cert-card glass-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div>
                  {/* Category & Period Row */}
                  <div className="cert-category-row">
                    <span className={`cert-category-tag ${item.badgeType === 'cyan' ? 'cyan' : 'violet'}`}>
                      {isInternship ? <Briefcase size={12} /> : <Trophy size={12} />}
                      {item.category}
                    </span>

                    <span className="cert-period">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                  </div>

                  {/* Header / Badges */}
                  <div className="cert-card-header">
                    <div className="cert-meta-badges">
                      <span className={`cert-badge ${item.badgeType}`}>
                        {item.badge}
                      </span>
                      {item.score && (
                        <span className="cert-score-pill">
                          Score: {item.score}
                        </span>
                      )}
                    </div>

                    <h3 className="cert-title">{item.role}</h3>

                    <div className="cert-org-row">
                      <strong className="cert-org">{item.company}</strong>
                      {item.location && (
                        <span className="cert-org-sub">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      )}
                      {item.issuerTag && (
                        <span className="cert-org-sub">
                          <Trophy size={12} />
                          {item.issuerTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="cert-desc">{item.description}</p>
                </div>

                {/* Certificate Action Button */}
                {item.certificateImage && (
                  <div className="cert-action-row">
                    <button
                      type="button"
                      className="cert-btn"
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
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <Modal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.certificateTitle || "Certificate"}
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
                <strong>{selectedCert.role}</strong>
                <span>
                  {selectedCert.company}
                  {selectedCert.score ? ` • Score: ${selectedCert.score} (${selectedCert.badge})` : ` • ${selectedCert.period}`}
                </span>
              </div>

              <a
                href={selectedCert.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-open-link"
                download={selectedCert.downloadName || "Certificate.png"}
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
