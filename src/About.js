import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">About Me</h2>
            <div className="accent-line" />
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left Column - Story */}
            <motion.div variants={itemVariants}>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem',
                color: 'var(--color-accent)'
              }}>
                Building Digital Solutions
              </h3>
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                I'm a passionate full-stack developer currently pursuing my BE in Electronics and 
                Telecommunications at Pune Institute of Computer Technology. With a strong foundation 
                in computer engineering from my diploma days, I've cultivated a deep love for creating 
                impactful web applications.
              </p>
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                My journey has been marked by hands-on experience in building scalable systems, 
                from developing microservice architectures to integrating AI-powered features. 
                I thrive on solving complex problems and turning innovative ideas into reality.
              </p>
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                fontSize: '1.05rem',
                lineHeight: '1.8'
              }}>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers. I believe in continuous 
                learning and pushing the boundaries of what's possible with code.
              </p>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants}>
              <div className="card" style={{ height: '100%' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '2rem',
                  color: 'var(--color-accent)'
                }}>
                  Highlights
                </h3>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.75rem' 
                  }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: 'var(--color-accent)', 
                      borderRadius: '50%', 
                      marginRight: '1rem' 
                    }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text)' }}>CGPA:</strong> 8.55/10
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.75rem' 
                  }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: 'var(--color-accent)', 
                      borderRadius: '50%', 
                      marginRight: '1rem' 
                    }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text)' }}>Location:</strong> Pune, Maharashtra
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.75rem' 
                  }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: 'var(--color-accent)', 
                      borderRadius: '50%', 
                      marginRight: '1rem' 
                    }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text)' }}>Experience:</strong> Web Development Intern
                    </span>
                  </div>
                </div>

                <h4 style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '1.5rem',
                  marginTop: '2rem',
                  color: 'var(--color-text)'
                }}>
                  Key Achievements
                </h4>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem' 
                }}>
                  <div style={{ 
                    padding: '1rem', 
                    background: 'var(--color-bg)', 
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--color-accent)'
                  }}>
                    <p style={{ 
                      color: 'var(--color-text)', 
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}>
                      BNY Career Catalyst Mentee
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                      Selected from 3,000+ applicants
                    </p>
                  </div>

                  <div style={{ 
                    padding: '1rem', 
                    background: 'var(--color-bg)', 
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--color-accent)'
                  }}>
                    <p style={{ 
                      color: 'var(--color-text)', 
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}>
                      Cummins Scholar '24
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                      Academic excellence & innovation
                    </p>
                  </div>

                  <div style={{ 
                    padding: '1rem', 
                    background: 'var(--color-bg)', 
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--color-accent)'
                  }}>
                    <p style={{ 
                      color: 'var(--color-text)', 
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}>
                      Gold Medalist
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                      Diploma in Computer Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
