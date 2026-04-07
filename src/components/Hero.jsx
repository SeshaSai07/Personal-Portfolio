import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Download, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name gradient-text-about">Maddineni Lakshmi Sesha Sai</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I'm a dedicated Full Stack Developer with a strong foundation in building scalable web applications. 
            I specialize in leveraging frameworks like React and Node.js to create intuitive, efficient digital experiences. 
            With a Computer Science background, I excel at bridging complex backend logic with seamless frontend design, 
            staying committed to clean code, performance, and collaborative problem-solving to drive impactful results.
          </p>
          
          <div className="hero-ctas">
            <a href="/maddineni_lakshmi_sesha_sai_full_stack_resume.pdf" download className="btn btn-primary resume-btn-hero">
              <Download size={18} /> Download Resume
            </a>
            <a href="/#/#projects" className="btn btn-secondary">
              View Projects
            </a>
            <a href="/#/#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/SeshaSai07" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lakshmi-sesha-sai-maddineni-688648257/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/maddinenisesha07/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
              <Code size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <img src="/profile.jpg" alt="Sesha Sai" className="hero-img" />
            <div className="hero-image-glow"></div>
          </div>
        </motion.div>
      </div>

      <div className="hero-bg-elements">
        <div className="about-glow glow-orange"></div>
        <div className="about-glow glow-pink"></div>
        <div className="about-glow glow-indigo"></div>
      </div>
    </section>
  );
};

export default Hero;
