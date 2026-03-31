import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CertificationDetail from './components/CertificationDetail';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ProjectCredential from './components/ProjectCredential';
import './App.css';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Handle initial scroll or hash change
    const scrollToSection = () => {
      const hashData = (hash || window.location.hash).split('#');
      // hashData might look like ['', '/', 'about'] for /#/#about
      const id = hashData[hashData.length - 1]; // Get the last part
      if (id && id !== '/') {
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay for content to render or un-reveal
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    scrollToSection();

    return () => observer.disconnect();
  }, [hash]); // Re-run when hash changes

  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Achievements />
      <Certifications />
      <Hobbies />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/credential" element={<ProjectCredential />} />
          <Route path="/certification/:id" element={<CertificationDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;