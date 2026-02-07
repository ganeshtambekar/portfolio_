import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiJavascript, SiPython, SiOpenjdk, SiCplusplus, SiMysql, SiMongodb,
  SiNodedotjs, SiSpring, SiReact, SiGit, SiDocker, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'Java', icon: SiOpenjdk, level: 85 },
        { name: 'Python', icon: SiPython, level: 80 },
        { name: 'C++', icon: SiCplusplus, level: 75 },
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90 },
        { name: 'Spring Boot', icon: SiSpring, level: 75 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'MySQL', icon: SiMysql, level: 80 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'React', icon: SiReact, level: 88 },
        { name: 'Git/GitHub', icon: SiGit, level: 90 },
        { name: 'Docker', icon: SiDocker, level: 82 },
        { name: 'Postman', icon: SiPostman, level: 85 },
      ]
    }
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="accent-line" />
          </motion.div>

          {/* Skills Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="card"
                whileHover={{ scale: 1.02 }}
              >
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '2rem',
                  color: 'var(--color-accent)',
                  fontWeight: 700
                }}>
                  {category.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <skill.icon style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--color-accent)' 
                          }} />
                          <span style={{ 
                            fontWeight: 600,
                            color: 'var(--color-text)'
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--color-text-secondary)',
                          fontSize: '0.9rem'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div style={{ 
                        width: '100%', 
                        height: '6px', 
                        background: 'var(--color-bg)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                          style={{ 
                            height: '100%', 
                            background: 'var(--gradient-primary)',
                            borderRadius: '3px'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coursework */}
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              textAlign: 'center',
              fontWeight: 700
            }}>
              Core Coursework
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {coursework.map((course, idx) => (
                <motion.span
                  key={idx}
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                  style={{ fontSize: '1rem' }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
