import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Download, Award, FileText } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectCredential.css';

const ProjectCredential = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="error-page container section-padding">
        <h2>Credential not found</h2>
        <Link to="/" className="btn-back">Back to Home</Link>
      </div>
    );
  }

  const credentialUrl = project.credentialFile || project.deployedLink;
  const isPdf = credentialUrl?.toLowerCase().endsWith('.pdf');

  return (
    <div className="project-credential-page">
      <div className="projects-bg-elements">
        <div className="about-glow glow-orange"></div>
        <div className="about-glow glow-pink"></div>
        <div className="about-glow glow-indigo"></div>
      </div>

      <div className="container relative-content">
        <header className="credential-header">
          <Link to={`/project/${project.id}`} className="back-link">
            <ArrowLeft size={16} /> Back to Project Details
          </Link>
          <h1 className="credential-title gradient-text-about">Project Credential</h1>
          <div className="title-underline-glow"></div>
        </header>

        <div className="credential-main-layout glass">
          <div className="credential-info">
            <div className="cert-badge-container">
              <Award size={48} className="award-icon" />
            </div>
            <h2 className="project-title-large">{project.title}</h2>
            <p className="credential-type-label">{project.category}</p>
            
            <div className="verification-status glass">
              <ShieldCheck size={20} className="status-icon" />
              <span>Official Verified Credential</span>
            </div>

            <div className="credential-actions">
              {credentialUrl && credentialUrl !== '#' && (
                <>
                  <a 
                    href={credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-btn primary"
                  >
                    <ExternalLink size={20} /> Open Official Document
                  </a>
                  {isPdf && (
                    <a 
                      href={credentialUrl} 
                      download 
                      className="action-btn secondary"
                    >
                      <Download size={20} /> Download PDF
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="credential-preview-section">
            <div className="preview-container glass">
              {isPdf ? (
                <div className="pdf-embed-wrapper">
                  <iframe 
                    src={`${credentialUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                    title="Credential Preview"
                    width="100%"
                    height="600px"
                    className="pdf-iframe"
                  >
                    <div className="pdf-fallback">
                      <FileText size={64} />
                      <p>Full PDF preview is not supported by your browser.</p>
                      <a href={credentialUrl} target="_blank" rel="noopener noreferrer">View Full Document</a>
                    </div>
                  </iframe>
                </div>
              ) : (
                <img src={project.image} alt="Credential Preview" className="img-preview" />
              )}
            </div>
          </div>
        </div>

        <footer className="credential-footer-info">
          <p>This credential has been verified and is part of the professional portfolio of Lakshmi Sesha Sai.</p>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCredential;
