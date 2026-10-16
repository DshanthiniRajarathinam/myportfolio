import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Modal.css';

export function Modal({ isOpen, onClose, title, children, maxWidth = '800px' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Modal Content Box */}
          <div className="modal-container" onClick={onClose}>
            <motion.div
              className="modal-card"
              style={{ maxWidth }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Header */}
              <div className="modal-header">
                <h3 id="modal-title" className="modal-title">{title}</h3>
                <button 
                  className="modal-close-btn" 
                  onClick={onClose}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;

  return createPortal(modalContent, document.body);
}
