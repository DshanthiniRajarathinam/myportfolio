import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  icon: Icon, 
  iconPosition = 'right',
  className = '', 
  download,
  target,
  rel,
  disabled = false,
  type = 'button',
  ariaLabel
}) {
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon left" size={size === 'lg' ? 20 : 17} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon right" size={size === 'lg' ? 20 : 17} />}
    </>
  );

  const buttonClasses = `custom-btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {content}
    </motion.button>
  );
}
