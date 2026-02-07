import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiTrendingUp, FiUsers, FiStar } from 'react-icons/fi';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const achievements = [
    {
      icon: FiUsers,
      title: 'BNY Career Catalyst Mentee',
      description: 'Selected among 3,000+ applicants for backend mentorship program',
      color: '#667eea',
      highlight: '3,000+ Applicants'
    },
    {
      icon: FiAward,
      title: 'Cummins Scholar \'24',
      description: 'Recognized for academic excellence and technical innovation',
      color: '#f093fb',
      highlight: 'Excellence Award'
    },
    {
      icon: FiTrendingUp,
      title: 'Hackathon Runner-up',
      description: 'Built a secure offline fintech payment system using Node.js at Cummins Hackathon',
      color: '#4facfe',
      highlight: 'Runner-up'
    },
    {
      icon: FiStar,
      title: 'Gold Medalist',
      description: 'Achieved Gold Medal in Diploma Computer Engineering at GP Jalna',
      color: '#00ff88',
      highlight: 'Gold Medal'
    }
  ];

  return (
    <section id="achievements" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Achievements & Recognition</h2>
            <div className="accent-line" />
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.1rem',
              marginTop: '1rem'
            }}>
              Milestones that shaped my journey
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card"
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 60px ${achievement.color}20`
                }}
                style={{ 
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient Background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: `linear-gradient(90deg, ${achievement.color}, transparent)`
                }} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    background: `${achievement.color}15`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid ${achievement.color}30`
                  }}
                >
                  <achievement.icon style={{ 
                    fontSize: '2.5rem', 
                    color: achievement.color
                  }} />
                </motion.div>

                {/* Highlight Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  background: `${achievement.color}20`,
                  borderRadius: '20px',
                  marginBottom: '1rem',
                  border: `1px solid ${achievement.color}40`
                }}>
                  <span style={{ 
                    color: achievement.color,
                    fontWeight: 600,
                    fontSize: '0.85rem'
                  }}>
                    {achievement.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  marginBottom: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-text)'
                }}>
                  {achievement.title}
                </h3>

                {/* Description */}
                <p style={{ 
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
