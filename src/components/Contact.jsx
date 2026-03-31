import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name.toLowerCase()]: value }));
  };

  // Maps form fields to EmailJS template variable names
  // Modify these if your template uses different names
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Recipient Name', // You can change this or add to template
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <h2 className="section-title gradient-text-about">Get In Touch</h2>
            <div className="title-underline-glow mx-auto"></div>
          </div>

          <div className="contact-bg-elements">
            <div className="contact-glow glow-1"></div>
            <div className="contact-glow glow-2"></div>
            <div className="contact-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`particle particle-${i+1}`}></div>
              ))}
            </div>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-heading">Let's discuss your next project</h3>
              <p className="contact-text">
                I'm always open to new opportunities, collaborations, or just a friendly chat. 
                Feel free to reach out to me via email or through my social media.
              </p>
              
              <div className="contact-methods">
                <a href="mailto:maddinenilakshmiseshasai@gmail.com" className="contact-method glass" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }} data-color="blue">
                  <span className="method-label" style={{ color: '#3b82f6' }}><Mail size={16} /> Email</span>
                  <span className="method-value">maddinenilakshmiseshasai@gmail.com</span>
                </a>
                <a href="https://github.com/SeshaSai07" target="_blank" rel="noopener noreferrer" className="contact-method glass" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} data-color="white">
                  <span className="method-label" style={{ color: '#fff' }}><Github size={16} /> GitHub</span>
                  <span className="method-value">github.com/SeshaSai07</span>
                </a>
                <a href="https://www.linkedin.com/in/lakshmi-sesha-sai-maddineni-688648257/" target="_blank" rel="noopener noreferrer" className="contact-method glass" style={{ borderColor: 'rgba(6, 182, 212, 0.2)' }} data-color="cyan">
                  <span className="method-label" style={{ color: '#06b6d4' }}><Linkedin size={16} /> LinkedIn</span>
                  <span className="method-value">linkedin.com/in/lakshmi-sesha-sai...</span>
                </a>
              </div>
            </div>

            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="Name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="Email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="Message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  required
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'loading' && (
                  <>
                    <span>Sending...</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    <span>Sent!</span>
                    <CheckCircle size={18} />
                  </>
                )}
                {status === 'error' && (
                  <>
                    <span>Failed</span>
                    <XCircle size={18} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="form-message success"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="form-message error"
                  >
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
