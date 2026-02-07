import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Glow */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(140px, 220px) 1fr',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Profile Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.img
                src="/profile-placeholder.svg.jpg"
                alt="Profile"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--color-accent-dim)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
                }}
              />
            </div>

            <div>
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p style={{ 
              color: 'var(--color-accent)', 
              fontSize: '1.1rem', 
              fontWeight: 600,
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              👋 HEY THERE, I'M
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              marginBottom: '1rem',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Ganesh <span className="gradient-text">Tambekar</span>
          </motion.h1>

          {/* Role */}
          <motion.h2 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem',
              fontWeight: 600
            }}
          >
            Full Stack Developer & Problem Solver
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--color-text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '700px',
              lineHeight: '1.8'
            }}
          >
            Crafting scalable web applications with modern technologies. 
            Passionate about building solutions that make a difference, 
            from AI-powered platforms to microservice architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
          >
            <a 
              href="https://github.com/ganeshtambekar" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                fontSize: '1.5rem',
                transition: 'all 0.3s',
                color: 'var(--color-text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/tambekarganesh" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                fontSize: '1.5rem',
                transition: 'all 0.3s',
                color: 'var(--color-text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <FiLinkedin />
            </a>
            <a 
              href="mailto:ganesh.tambekar124@gmail.com"
              style={{ 
                fontSize: '1.5rem',
                transition: 'all 0.3s',
                color: 'var(--color-text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <FiMail />
            </a>
          </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          color: 'var(--color-accent)',
          animation: 'bounce 2s infinite'
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
