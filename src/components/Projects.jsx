import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

const ProjectImageCarousel = ({ project }) => {
  const images = project.images || [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="project-visual">
      <div
        className="visual-container"
        onClick={handleClick}
        style={{ cursor: images.length > 1 ? 'pointer' : 'default' }}
      >
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={project.title}
          className="project-main-img"
        />
        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, idx) => (
              <React.Fragment key={idx}>
                <span className={`dot ${idx === currentIndex ? 'active' : ''}`}></span>
                {idx < images.length - 1 && <span className="bar"></span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="projects-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">Latest Work</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="section-header" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
          <div className="filter-container">
            <Filter size={20} className="filter-icon" />
            <div className="filter-buttons">
              {['All', 'Web', 'AI', 'IoT'].map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                <ProjectImageCarousel project={project} />
                
                <div className="project-card-content">
                  <div className="project-card-header">
                    <span className="project-card-badge">{project.category}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>
                  
                  <p className="project-card-desc">{project.desc}</p>

                  <div className="project-card-hashtags">
                    {project.hashtags.map(h => <span key={h}>#{h}</span>)}
                  </div>

                  <div className="project-card-actions">
                    <Link to={`/project/${project.id}`} className="btn-project-view">
                      View Case Study <ExternalLink size={16} />
                    </Link>
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

export default Projects;
