import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, ShieldCheck, Award, Calendar, Building, CheckCircle2 } from 'lucide-react';
import './CertificationDetail.css';

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

const CertificationDetail = () => {
  const { id } = useParams();

  const certifications = [
    { 
      id: 'wipro-talentnext',
      title: 'Java Full Stack', 
      org: 'Wipro Talentnext', 
      date: '7 Oct 2024', 
      link: 'https://drive.google.com/file/d/1I_66pE16E2FcgQa4k9I6BUOgjMe_sBFe/view?usp=sharing',
      image: '/certificates/wipro_java_cert.jpg',
      about: 'This comprehensive full-stack development program involved rigorous training and evaluation in core Java technologies, enterprise frameworks, and modern web development practices. Validated by Wipro\'s TalentNext initiative.',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'freecodecamp-rwd',
      title: 'Responsive Web Design',
      org: 'FreeCodeCamp',
      date: 'July 30, 2025',
      link: 'https://drive.google.com/file/d/1VmFlBK2hA3D14HpMQalXj33ujIdWnip1/view?usp=sharing',
      image: certFCCReal,
      about: 'A prestigious certification validating deep understanding of responsive design principles, CSS architecture, and cross-platform web development. Includes mastery of Flexbox, Grid, and accessibility standards.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility', 'Flexbox', 'CSS Grid', 'Web Design UI/UX']
    },
    { 
      id: 'masai-speaking-marathon',
      title: 'Masai Speaking Marathon Season - II', 
      org: 'Masai School', 
      date: 'Nov 10 - Dec 1, 2025', 
      link: 'https://drive.google.com/file/d/1Idq-oXO5KLBmShHXpipuYcp8cL1G9T0J/view?usp=sharing',
      image: certMasai,
      about: 'A high-intensity 21-day speaking challenge (Half-Marathon) at Masai School. This certification validates tremendous commitment and endurance in professional communication, impromptu speaking, and technical presentation skills. (Student ID: EMP_HR_FT_S2_0012556)',
      skills: ['Public Speaking', 'Communication', 'Presentation', 'Impromptu Speaking', 'Technical Storytelling']
    },
    { 
      id: 'servicenow-cad',
      title: 'ServiceNow Certified Application Developer', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1MG-qttWVHDgLOgo1wDzi_BKvazL4EQl2/view?usp=sharing',
      image: certCAD,
      about: 'The ServiceNow Certified Application Developer (CAD) certification validates the skills and essential knowledge needed to develop custom applications on the ServiceNow platform. This includes designing application tables, developing business logic, creating user interfaces, and ensuring application security.',
      skills: ['ServiceNow Development', 'JavaScript (ServiceNow)', 'Service Portal', 'Flow Designer', 'IntegrationHub']
    },
    { 
      id: 'servicenow-csa-maintenance',
      title: 'Certified System Administrator Maintenance Exam (Delta)', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1SYpjePBiLdsNkg0Dcohe0AqX5bqTFQMb/view?usp=sharing',
      image: certCSADelta,
      about: 'The ServiceNow Certified System Administrator (CSA) Maintenance Exam (Delta) validates a candidate\'s continued proficiency in configuring, customizing, and managing the ServiceNow platform with the latest release features.',
      skills: ['ServiceNow Administration', 'Platform Updates', 'Delta Maintenance', 'Configuration Management']
    },
    { 
      id: 'servicenow-cad-maintenance',
      title: 'Certified Application Developer Maintenance Exam (Delta)', 
      org: 'ServiceNow', 
      date: 'March 26 2026', 
      link: 'https://drive.google.com/file/d/1RTs5UeZ1W-4ia37ugB9pWxD4Prua58h5/view?usp=sharing',
      image: certCADDelta,
      about: 'The ServiceNow Certified Application Developer (CAD) Maintenance Exam (Delta) validates a candidate\'s continued proficiency in designing, building, and deploying custom applications on the ServiceNow platform with the latest release features.',
      skills: ['ServiceNow Development', 'Platform Updates', 'Delta Maintenance', 'Application Architecture']
    },
    { 
      id: 'servicenow-csa',
      title: 'ServiceNow Certified System Administrator', 
      org: 'ServiceNow', 
      date: '26 March 2026', 
      link: 'https://drive.google.com/file/d/1KzowNwuxFmAa_tGtbUNyicaDi4u7ttz6/view?usp=sharing',
      image: certServiceNow,
      about: 'Professional certification demonstrating the ability to configure, customize, and manage the ServiceNow platform. Validates expertise in data architecture, workflow automation, and platform security.',
      skills: ['ServiceNow Administration', 'Platform Configuration', 'Workflow Automation', 'CMDB', 'Instance Management']
    },
    { 
      id: 'masai-reading-marathon',
      title: 'Masai Reading Marathon', 
      org: 'Masai School', 
      date: 'Dec 8 - Dec 28, 2025', 
      link: 'https://drive.google.com/file/d/1-Ee59M0KWYqEgxoIesFINSfT7ZVLTkAC/view?usp=sharing',
      image: certMasaiReading,
      about: 'The Masai Reading Marathon is a rigorous challenge designed to test and improve reading speed, comprehension, and analytical thinking. This certification confirms mastery in processing large volumes of technical and professional documentation with high accuracy.',
      skills: ['Analytical Reading', 'Critical Thinking', 'Information Synthesis', 'Comprehension', 'Technical Literacy']
    }
  ];

  const certification = certifications.find(cert => cert.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!certification) {
    return (
      <div className="cert-not-found">
        <h2>Certification not found</h2>
        <Link to="/#certifications" className="back-link">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="certification-detail-page">
      <div className="cert-bg-elements">
        <div className="glow glow-orange"></div>
        <div className="glow glow-pink"></div>
        <div className="glow glow-indigo"></div>
      </div>

      <div className="cert-container container">
        <Link to="/#certifications" className="back-to-certs">
          <ChevronLeft size={20} /> Back to Certificates
        </Link>

        <div className="cert-layout">
          {/* Left Column: Visuals */}
          <div className="cert-visual-column">
            <div className="cert-image-card glass">
              <img src={certification.image} alt={certification.title} className="cert-main-image" />
            </div>
            {certification.link !== '#' && (
              <a href={certification.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                Verify Credential <ExternalLink size={18} />
              </a>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="cert-info-column">
            <div className="cert-header-info">
              <h1 className="cert-detail-title">{certification.title}</h1>
              <div className="cert-meta-badges">
                <div className="meta-badge org">
                  <Building size={16} /> {certification.org}
                </div>
                <div className="meta-badge date">
                  <Calendar size={16} /> {certification.date}
                </div>
              </div>
            </div>

            <div className="cert-section">
              <h2 className="cert-section-title">About this Certification</h2>
              <p className="cert-about-text">{certification.about}</p>
            </div>

            <div className="cert-section">
              <h2 className="cert-section-title">
                <span className="title-icon"><CheckCircle2 size={18} /></span> Skills Validated
              </h2>
              <div className="cert-skills-grid">
                {certification.skills.map((skill, index) => (
                  <div key={index} className="skill-item glass">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="cert-trust-banner glass">
              <Award size={32} className="trust-icon" />
              <div className="trust-content">
                <h3>Verified Achievement</h3>
                <p>This credential has been verified and issued by {certification.org}.</p>
              </div>
              <ShieldCheck size={32} className="trust-badge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationDetail;
