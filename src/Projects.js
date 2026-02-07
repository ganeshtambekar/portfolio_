import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const projects = [
    {
      title: 'AgroGuru',
      category: 'Farming Platform',
      description: 'A comprehensive platform offering crop predictions, real-time weather updates, and discovery of nearby nurseries, markets, and laboratories to support farmer decision-making.',
      features: [
        'Crop prediction using ML algorithms',
        'Real-time weather API integration',
        'Geolocation-based resource discovery',
        'Microservice architecture for scalability'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Nginx'],
      impact: 'Helping farmers adopt modern technology for improved productivity',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'EFIR',
      category: 'AI-Driven Legal Tech',
      description: 'An AI-powered FIR registration system enabling users to securely and anonymously file complaints online with real-time legal guidance powered by Gemini AI.',
      features: [
        'AI-powered incident categorization',
        'Real-time legal guidance using Gemini API',
        'JWT-based secure authentication',
        'Evidence upload and management',
        'Role-based dashboards'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI'],
      impact: 'Reduced manual workload by 60% with AI-assisted validation',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Multithreaded Web Server',
      category: 'Systems Project',
      description: 'A custom HTTP web server built from scratch using Java Socket Programming, capable of handling multiple client requests concurrently with efficient thread management.',
      features: [
        'Thread Pool Executor for efficiency',
        'Concurrent request handling',
        'Modular routing system',
        'GET/POST request support',
        'Proper HTTP formatting'
      ],
      tech: ['Java', 'Sockets', 'Multithreading', 'OOP'],
      impact: 'Improved throughput and prevented thread overload',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="accent-line" />
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.1rem',
              marginTop: '1rem',
              maxWidth: '600px',
              margin: '1rem auto 0'
            }}>
              A showcase of my recent work in full-stack development, AI integration, and systems programming
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gap: '2.5rem'
          }}>
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card"
                style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.01 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: project.gradient,
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Header */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <span style={{ 
                        color: 'var(--color-accent)', 
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                      }}>
                        {project.category}
                      </span>
                      <h3 style={{ 
                        fontSize: '2rem', 
                        marginTop: '0.5rem',
                        fontWeight: 800,
                        background: project.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {project.title}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a 
                        href="https://github.com/ganeshtambekar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontSize: '1.5rem',
                          color: 'var(--color-text-secondary)',
                          transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ 
                    color: 'var(--color-text-secondary)', 
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      marginBottom: '1rem',
                      color: 'var(--color-text)',
                      fontWeight: 600
                    }}>
                      Key Features
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '0.75rem'
                    }}>
                      {project.features.map((feature, fIdx) => (
                        <li 
                          key={fIdx}
                          style={{ 
                            display: 'flex',
                            alignItems: 'flex-start',
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.95rem'
                          }}
                        >
                          <span style={{ 
                            color: 'var(--color-accent)', 
                            marginRight: '0.75rem',
                            fontSize: '1.2rem',
                            lineHeight: '1'
                          }}>
                            →
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      marginBottom: '1rem',
                      color: 'var(--color-text)',
                      fontWeight: 600
                    }}>
                      Tech Stack
                    </h4>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.75rem'
                    }}>
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div style={{ 
                    marginTop: '2rem',
                    padding: '1rem',
                    background: 'var(--color-bg)',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--color-accent)'
                  }}>
                    <p style={{ 
                      color: 'var(--color-text)', 
                      fontSize: '0.95rem',
                      fontWeight: 600
                    }}>
                      <span style={{ color: 'var(--color-accent)' }}>Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
