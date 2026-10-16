import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink, Eye } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Modal } from '../components/common/Modal';
import { internshipData } from '../data/internshipData';
import './InternshipSection.css';

export function InternshipSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="internship" className="internship-section">
      <div className="container">
        <SectionHeader
          badge="Work Experience"
          title="My"
          highlight="Internship"
          subtitle="Hands-on industrial experience building full-stack software."
        />

        <div className="internship-card-wrapper">
          {internshipData.map((item, index) => (
            <motion.div
              key={item.id}
              className="internship-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Card Header matching Education card */}
              <div className="internship-card-header">
                <div className="internship-meta-badges">
                  <span className="internship-badge current">
                    MERN Stack
                  </span>
                  <span className="internship-period">
                    <Calendar size={13} />
                    {item.period}
                  </span>
                </div>

                <h3 className="internship-role">{item.role}</h3>

                <div className="internship-company-row">
                  <strong className="internship-company">{item.company}</strong>
                  <span className="internship-location">
                    <MapPin size={12} />
                    Coimbatore, Tamil Nadu
                  </span>
                </div>
              </div>

              {/* Description matching Education card */}
              <p className="internship-desc">{item.description}</p>

              {/* Certificate Button */}
              {item.certificateImage && (
                <div className="internship-action-row">
                  <button
                    type="button"
                    className="internship-cert-btn"
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
        title={selectedCert?.certificateTitle || "Internship Certificate"}
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
                <span>{selectedCert.company} • {selectedCert.period}</span>
              </div>

              <a
                href={selectedCert.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-open-link"
                download="App-Innovation-Technologies-MERN-Internship-Certificate.svg"
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
