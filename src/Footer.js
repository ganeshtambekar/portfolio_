import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      padding: '3rem 0',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'Syne, sans-serif',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Ganesh Tambekar
          </motion.div>

          {/* Quick Links */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['About', 'Projects', 'Experience', 'Contact'].map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            height: '1px',
            background: 'var(--color-border)'
          }} />

          {/* Copyright */}
          <div style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: '0.9rem'
          }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              Made with <FiHeart style={{ color: 'var(--color-accent)' }} /> by Ganesh Tambekar
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
