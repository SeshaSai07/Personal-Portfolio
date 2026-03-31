import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Globe, Code2, Award } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="error-page container section-padding">
        <h2>Project not found</h2>
        <Link to="/" className="btn-back">Back to Home</Link>
      </div>
    );
  }

  const projectImages = project.images || [project.image];
  
  const toggleImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-detail-page"
    >
      {/* Background Elements */}
      <div className="projects-bg-elements">
        <div className="about-glow glow-orange"></div>
        <div className="about-glow glow-pink"></div>
        <div className="about-glow glow-indigo"></div>
      </div>

      <div className="container relative-content">
        <header className="detail-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="header-main">
            <div className="header-left">
              <h1 className="detail-title gradient-text-about">{project.title}</h1>
              <div className="title-underline-glow" style={{ marginBottom: '1.5rem' }}></div>
              <span className="detail-badge">{project.category}</span>
            </div>
            
            <div className="header-links">
              {((project.githubFront && project.githubFront !== '#') || (project.githubBack && project.githubBack !== '#')) && (
                <div className="link-group">
                  <a 
                    href={project.githubFront !== '#' ? project.githubFront : project.githubBack} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-label clickable"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              )}
              {project.deployedLink && project.deployedLink !== '#' && (
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="live-link">
                  <Globe size={18} /> Live Demo
                </a>
              )}
              {project.credentialFile && (
                <Link to={`/project/${project.id}/credential`} className="live-link" style={{ background: 'rgba(236, 72, 153, 0.1)', borderColor: '#ec4899', color: '#ec4899' }}>
                  <Award size={18} /> View Credential
                </Link>
              )}
            </div>
          </div>
        </header>

        <section className="detail-visual-section">
          <div className="detail-visual-container glass" onClick={toggleImage} style={{ cursor: 'pointer' }}>
            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              src={projectImages[currentImageIndex]} 
              alt={project.title} 
              className="detail-main-img" 
            />
            <div className="detail-carousel-indicators">
              {projectImages.map((_, idx) => (
                <React.Fragment key={idx}>
                  <span className={`dot ${idx === currentImageIndex ? 'active' : ''}`}></span>
                  {idx < projectImages.length - 1 && <span className="bar"></span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <aside className="detail-tech-sidebar glass">
            <h3 className="sidebar-title">Technologies</h3>
            <div className="tech-pills">
              {project.tech.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="detail-overview section-padding">
          <h2 className="overview-title">Overview</h2>
          <div className="overview-content">
            <p>{project.fullDesc}</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
