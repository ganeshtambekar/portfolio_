import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone, FiSend, FiCode, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:ganesh.tambekar124@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ganesh.tambekar124@gmail.com',
      link: 'mailto:ganesh.tambekar124@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91-9158279508',
      link: 'tel:+919158279508'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      link: 'https://github.com/ganeshtambekar',
      color: '#ffffff'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/tambekarganesh',
      color: '#0077b5'
    },
    {
      icon: FiCode,
      label: 'LeetCode',
      link: 'https://leetcode.com/u/shiva_1914/',
      color: '#FFA116'
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      link: 'https://instagram.com/ganesh_t.12',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Let's Connect</h2>
            <div className="accent-line" />
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.2rem',
              marginTop: '1rem',
              maxWidth: '600px',
              margin: '1rem auto 0'
            }}>
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '2rem',
                fontWeight: 700
              }}>
                Get In Touch
              </h3>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'var(--color-bg-secondary)',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--color-accent-dim)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <info.icon style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--color-accent)'
                      }} />
                    </div>
                    <div>
                      <p style={{ 
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        marginBottom: '0.25rem'
                      }}>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          style={{ 
                            color: 'var(--color-text)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textDecoration: 'none'
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ 
                          color: 'var(--color-text)',
                          fontSize: '1rem',
                          fontWeight: 600
                        }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1.5rem',
                fontWeight: 700
              }}>
                Connect on Social
              </h4>
              <div style={{ 
                display: 'flex', 
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.background = 'var(--color-accent-dim)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'var(--color-bg-secondary)';
                    }}
                  >
                    <social.icon style={{ 
                      fontSize: '1.8rem', 
                      color: 'var(--color-accent)'
                    }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '2rem',
                  fontWeight: 700
                }}>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block',
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      fontWeight: 600
                    }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                        fontFamily: 'DM Sans, sans-serif',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block',
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      fontWeight: 600
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                        fontFamily: 'DM Sans, sans-serif',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block',
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      fontWeight: 600
                    }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                        fontFamily: 'DM Sans, sans-serif',
                        resize: 'vertical',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FiSend />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;