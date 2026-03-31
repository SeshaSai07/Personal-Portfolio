import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">Sesha <span className="blue">Sai</span></h2>
          <p className="footer-tagline">Building the digital future with clean code and innovative design.</p>
        </div>
        
        <div className="link-group">
          <h3>Navigation</h3>
          <a href="/#/#home">Home</a>
          <a href="/#/#about">About</a>
          <a href="/#/#projects">Projects</a>
          <a href="/#/#contact">Contact</a>
        </div>
        <div className="link-group">
          <h3>Social</h3>
          <a href="https://www.linkedin.com/in/lakshmi-sesha-sai-maddineni-688648257/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SeshaSai07" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/maddinenisesha07/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sesha Sai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
