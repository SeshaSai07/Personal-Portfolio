import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  const eduData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'KKR & KSR Institute of Technology and Sciences',
      duration: '2022 – 2025',
      desc: 'Focusing on Core Computer Science principles, Data Structures, and Software Engineering.'
    },
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'MBTS Government Polytechnic',
      duration: '2019 – 2022',
      desc: 'Foundational studies in computer hardware, networking, and programming fundamentals.'
    },
    {
      degree: 'Higher Secondary Education (10th)',
      institution: 'Oxford IIT School',
      duration: '2018 – 2019',
      desc: 'Completed secondary education with a strong emphasis on Mathematics and Science.'
    }
  ];

  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <div className="edu-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">My Education</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="education-grid">
          {eduData.map((edu, index) => (
            <motion.div 
              key={index}
              className="edu-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-duration">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                </div>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-desc">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
