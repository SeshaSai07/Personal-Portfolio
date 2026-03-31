import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">About Me</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="about-content-centered">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="bio-paragraph">
              My journey into web development began with a curiosity that quickly evolved into a 
              passion for building beautiful, functional interfaces. I find unique joy in 
              transforming a blank screen into a dynamic, user-centric experience.
            </p>
            <p className="bio-paragraph">
              With a background in Computer Science, I specialize in bridging complex backend logic 
              with intuitive frontend design. I love the challenge of the full stack and am 
              dedicated to clean code, performance, and creative problem-solving.
            </p>
            <p className="bio-paragraph">
              Today, I build scalable applications using React and Node.js. 
              Whether architecting robust APIs or styling pixel-perfect UIs, I combine 
              technical precision with creative vision to deliver high-quality digital products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
