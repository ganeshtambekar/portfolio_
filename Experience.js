import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const workExperience = [
    {
      role: 'Web Development Intern',
      company: 'RS Softech',
      location: 'Pune, Maharashtra',
      period: 'Feb 2025 - Apr 2025',
      description: 'Contributed to the company\'s LMS platform, enhancing backend APIs and integrating payment solutions.',
      highlights: [
        'Enhanced backend APIs handling course and user management for 500+ users',
        'Integrated Razorpay payment gateway, reducing manual processing time by 80%',
        'Implemented Role-Based Access Control (RBAC) for secure access management'
      ],
      tech: ['Node.js', 'MongoDB', 'Razorpay', 'Nodemailer']
    }
  ];

  const education = [
    {
      degree: 'BE Electronics and Telecommunications',
      institution: 'Pune Institute of Computer Technology',
      location: 'Pune, Maharashtra',
      period: 'Aug 2023 - Jul 2026',
      score: 'CGPA: 8.55/10',
      icon: '🎓'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic Jalna',
      location: 'Jalna, Maharashtra',
      period: 'Aug 2020 - Jul 2023',
      score: 'Percentage: 91%',
      achievement: 'Gold Medalist',
      icon: '🏆'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Experience & Education</h2>
            <div className="accent-line" />
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem'
          }}>
            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <FiBriefcase style={{ 
                  fontSize: '2rem', 
                  color: 'var(--color-accent)' 
                }} />
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700
                }}>
                  Work Experience
                </h3>
              </div>

              <div style={{ 
                position: 'relative',
                paddingLeft: '2rem',
                borderLeft: '2px solid var(--color-border)'
              }}>
                {workExperience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="card"
                    style={{ 
                      marginBottom: '2rem',
                      position: 'relative'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div style={{
                      position: 'absolute',
                      left: '-2.6rem',
                      top: '2rem',
                      width: '12px',
                      height: '12px',
                      background: 'var(--color-accent)',
                      borderRadius: '50%',
                      boxShadow: '0 0 0 4px var(--color-bg)'
                    }} />

                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ 
                        fontSize: '1.5rem', 
                        marginBottom: '0.5rem',
                        fontWeight: 700,
                        color: 'var(--color-accent)'
                      }}>
                        {exp.role}
                      </h4>
                      <p style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--color-text)',
                        fontWeight: 600,
                        marginBottom: '0.25rem'
                      }}>
                        {exp.company}
                      </p>
                      <p style={{ 
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.95rem'
                      }}>
                        {exp.location} • {exp.period}
                      </p>
                    </div>

                    <p style={{ 
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {exp.description}
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 style={{ 
                        fontSize: '1rem',
                        marginBottom: '1rem',
                        color: 'var(--color-text)',
                        fontWeight: 600
                      }}>
                        Key Contributions:
                      </h5>
                      <ul style={{ listStyle: 'none' }}>
                        {exp.highlights.map((highlight, hIdx) => (
                          <li 
                            key={hIdx}
                            style={{ 
                              display: 'flex',
                              alignItems: 'flex-start',
                              color: 'var(--color-text-secondary)',
                              marginBottom: '0.75rem',
                              fontSize: '0.95rem'
                            }}
                          >
                            <span style={{ 
                              color: 'var(--color-accent)', 
                              marginRight: '0.75rem',
                              fontSize: '1.2rem',
                              lineHeight: '1'
                            }}>
                              ✓
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem'
                    }}>
                      {exp.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="tag" style={{ fontSize: '0.85rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <FiBookOpen style={{ 
                  fontSize: '2rem', 
                  color: 'var(--color-accent)' 
                }} />
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700
                }}>
                  Education
                </h3>
              </div>

              <div style={{ 
                position: 'relative',
                paddingLeft: '2rem',
                borderLeft: '2px solid var(--color-border)'
              }}>
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="card"
                    style={{ 
                      marginBottom: '2rem',
                      position: 'relative'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div style={{
                      position: 'absolute',
                      left: '-2.6rem',
                      top: '2rem',
                      width: '12px',
                      height: '12px',
                      background: 'var(--color-accent)',
                      borderRadius: '50%',
                      boxShadow: '0 0 0 4px var(--color-bg)'
                    }} />

                    <div style={{ 
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{ fontSize: '2rem' }}>{edu.icon}</span>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ 
                          fontSize: '1.3rem', 
                          marginBottom: '0.5rem',
                          fontWeight: 700,
                          color: 'var(--color-accent)'
                        }}>
                          {edu.degree}
                        </h4>
                        <p style={{ 
                          fontSize: '1.05rem',
                          color: 'var(--color-text)',
                          fontWeight: 600,
                          marginBottom: '0.25rem'
                        }}>
                          {edu.institution}
                        </p>
                        <p style={{ 
                          color: 'var(--color-text-secondary)',
                          fontSize: '0.95rem',
                          marginBottom: '0.75rem'
                        }}>
                          {edu.location} • {edu.period}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}>
                          <div style={{
                            padding: '0.5rem 1rem',
                            background: 'var(--color-bg)',
                            borderRadius: '6px',
                            display: 'inline-block',
                            width: 'fit-content'
                          }}>
                            <span style={{ 
                              color: 'var(--color-accent)',
                              fontWeight: 600,
                              fontSize: '0.95rem'
                            }}>
                              {edu.score}
                            </span>
                          </div>
                          
                          {edu.achievement && (
                            <div style={{
                              padding: '0.5rem 1rem',
                              background: 'var(--color-accent-dim)',
                              border: '1px solid rgba(0, 255, 136, 0.3)',
                              borderRadius: '6px',
                              display: 'inline-block',
                              width: 'fit-content'
                            }}>
                              <span style={{ 
                                color: 'var(--color-accent)',
                                fontWeight: 600,
                                fontSize: '0.95rem'
                              }}>
                                🏆 {edu.achievement}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
