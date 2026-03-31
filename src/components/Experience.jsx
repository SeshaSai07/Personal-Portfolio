import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Web Development (Trainee)',
      company: 'Masai School',
      duration: '6 Months',
      desc: 'Intensive training in full-stack development. Building production-grade applications using MERN stack and sharpening problem-solving skills through daily coding challenges.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      logo: '/masai_logo.png',
      logoBg: '#fff'
    },
    {
      role: 'ServiceNow Intern',
      company: 'SmartBridge',
      duration: '7 Months',
      desc: 'As a ServiceNow Intern at SmartBridge, I gained hands-on experience with ServiceNow and ITSM, learning how to design and implement custom workflows and automate processes. I also gained experience with JavaScript and GitLabs, learning how to use them to create custom scripts and automate tasks.',
      skills: ['ServiceNow', 'ITSM', 'JavaScript', 'GitLabs'],
      logo: '/smartbridge_logo.png',
      logoBg: '#111'
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="experience-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">Work Experience</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="exp-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="exp-dot glass"></div>
              <div className="exp-content glass">
                <div className="exp-main">
                  <div className="exp-info">
                    <div className="exp-header">
                      <h3 className="exp-role">{exp.role}</h3>
                    </div>
                    <div className="exp-company-row">
                      <h4 className="exp-company">{exp.company}</h4>
                      <Briefcase size={16} className="company-icon" />
                      <span className="exp-company-text">{exp.company}</span>
                    </div>
                    <span className="exp-duration">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                  </div>
                  {exp.logo && (
                    <div 
                      className="exp-logo-container" 
                      style={{ background: exp.logoBg || '#111' }}
                    >
                      <img src={exp.logo} alt={exp.company} className="exp-logo" />
                    </div>
                  )}
                </div>
                <p className="exp-desc">{exp.desc}</p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="exp-skills">
                    {exp.skills.map(skill => (
                      <span key={skill} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
