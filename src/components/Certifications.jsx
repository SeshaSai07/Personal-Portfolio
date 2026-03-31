import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Award, Calendar, Building, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Certifications.css';

// Import local assets
// import certWipro from '../assets/certificates/wipro_cert_real.png'; // Moved to public
import certFCC from '../assets/certificates/cert_fcc_rwd_1774436384059.png';
import certFCCReal from '../assets/certificates/cert_fcc_real.png';
import certServiceNow from '../assets/certificates/servicenow_csa_final.jpg';
import certMasai from '../assets/certificates/cert_masai_speaking_real.png';
import certCAD from '../assets/certificates/servicenow_cad_final.jpg';
import certCADDelta from '../assets/certificates/servicenow_cad_delta.jpg';
import certCSADelta from '../assets/certificates/servicenow_csa_delta.jpg';

import certMasaiReading from '../assets/certificates/cert_masai_reading.png';

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOrg, setFilterOrg] = useState('All');
  const navigate = useNavigate();

  const certifications = [
    { 
      id: 'wipro-talentnext',
      title: 'Java Full Stack', 
      org: 'Wipro Talentnext', 
      date: '7 Oct 2024', 
      link: 'https://drive.google.com/file/d/1I_66pE16E2FcgQa4k9I6BUOgjMe_sBFe/view?usp=sharing',
      image: '/certificates/wipro_java_cert.jpg',
      about: 'Comprehensive full-stack development program covering Java, Spring Boot, Hibernate, and modern frontend technologies.',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'freecodecamp-rwd',
      title: 'Responsive Web Design',
      org: 'FreeCodeCamp',
      date: 'July 30, 2025',
      link: 'https://drive.google.com/file/d/1VmFlBK2hA3D14HpMQalXj33ujIdWnip1/view?usp=sharing',
      image: certFCCReal,
      about: 'Validation of expertise in modern web design principles, including HTML5, CSS3, Flexbox, Grid, and responsive layouts.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility', 'Flexbox', 'CSS Grid']
    },
    { 
      id: 'masai-speaking-marathon',
      title: 'Masai Speaking Marathon Season - II', 
      org: 'Masai School', 
      date: 'Nov - Dec 2025', 
      link: 'https://drive.google.com/file/d/1Idq-oXO5KLBmShHXpipuYcp8cL1G9T0J/view?usp=sharing',
      image: certMasai,
      about: 'Successfully completed the 21-day Half-Marathon challenge (Nov 10 - Dec 1, 2025). Demonstrated exceptional commitment, focus, and endurance in professional communication and presentation.',
      skills: ['Public Speaking', 'Communication', 'Presentation', 'Impromptu Speaking']
    },
    { 
      id: 'servicenow-cad',
      title: 'ServiceNow Certified Application Developer', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1MG-qttWVHDgLOgo1wDzi_BKvazL4EQl2/view?usp=sharing',
      image: certCAD,
      about: 'Certified Application Developer certification validating the ability to design, build, and deploy custom applications on the ServiceNow platform.',
      skills: ['ServiceNow Development', 'Scripting', 'UI Policies', 'Data Modeling', 'API Integration']
    },
    { 
      id: 'servicenow-csa-maintenance',
      title: 'Certified System Administrator Maintenance Exam (Delta)', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1SYpjePBiLdsNkg0Dcohe0AqX5bqTFQMb/view?usp=sharing',
      image: certCSADelta,
      about: 'Maintenance certification validating continued expertise in ServiceNow System Administration and platform updates.',
      skills: ['ServiceNow Administration', 'Platform Updates', 'Delta Exam']
    },
    { 
      id: 'servicenow-cad-maintenance',
      title: 'Certified Application Developer Maintenance Exam (Delta)', 
      org: 'ServiceNow', 
      date: 'March 26 2026', 
      link: 'https://drive.google.com/file/d/1RTs5UeZ1W-4ia37ugB9pWxD4Prua58h5/view?usp=sharing',
      image: certCADDelta,
      about: 'Maintenance certification validating continued expertise in ServiceNow Application Development and platform updates.',
      skills: ['ServiceNow Development', 'Platform Updates', 'Delta Exam']
    },
    { 
      id: 'servicenow-csa',
      title: 'ServiceNow Certified System Administrator', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1KzowNwuxFmAa_tGtbUNyicaDi4u7ttz6/view?usp=sharing',
      image: certServiceNow,
      about: 'Certified System Administrator certification validating ability to configure, customize, and maintain the ServiceNow platform.',
      skills: ['ServiceNow Administration', 'Platform Configuration', 'Workflow Automation', 'CMDB']
    },
    { 
      id: 'masai-reading-marathon',
      title: 'Masai Reading Marathon', 
      org: 'Masai School', 
      date: 'Dec 8 - Dec 28, 2025', 
      link: 'https://drive.google.com/file/d/1-Ee59M0KWYqEgxoIesFINSfT7ZVLTkAC/view?usp=sharing',
      image: certMasaiReading,
      about: 'Successfully completed the high-intensity Reading Marathon challenge at Masai School. This certification validates exceptional focus, analytical reading capabilities, and the ability to process and synthesize complex information efficiently.',
      skills: ['Analytical Reading', 'Critical Thinking', 'Information Synthesis', 'Comprehension']
    }
  ];

  const organizations = ['All', ...new Set(certifications.map(cert => cert.org))];

  const filteredCerts = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cert.org.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterOrg === 'All' || cert.org === filterOrg;
    return matchesSearch && matchesFilter;
  });


  return (
    <section id="certifications" className="certifications section-padding">
      <div className="container">
        <div className="certifications-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">Certifications & Courses</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="certs-controls">
          <div className="search-wrapper glass">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search certificates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-wrapper glass">
            <select 
              value={filterOrg} 
              onChange={(e) => setFilterOrg(e.target.value)}
              className="org-filter"
            >
              {organizations.map(org => (
                <option key={org} value={org}>{org}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="certs-grid">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div 
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="cert-card"
                onClick={() => navigate(`/certification/${cert.id}`)}
              >
                <div className="cert-card-image-wrapper">
                  <div className="cert-card-image-container">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                </div>

                <div className="cert-card-info">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <div className="cert-card-footer">
                    <span className="cert-card-org">{cert.org}</span>
                    <span className="cert-card-date">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
