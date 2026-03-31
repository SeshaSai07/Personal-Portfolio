import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Cpu, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Full Stack Development',
      desc: 'Building end-to-end web applications with seamless integration between frontend and backend.',
      icon: <Code size={32} />
    },
    {
      title: 'Frontend Development',
      desc: 'Crafting responsive, high-performance user interfaces using React and modern CSS.',
      icon: <Layout size={32} />
    },
    {
      title: 'Backend Development',
      desc: 'Designing scalable APIs and robust server-side logic using Node.js and various databases.',
      icon: <Server size={32} />
    },
    {
      title: 'AI Integration',
      desc: 'Integrating AI models and smart features into applications for enhanced user experience.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Performance Optimization',
      desc: 'Enhancing web application speed, SEO, and overall efficiency for better user retention.',
      icon: <Zap size={32} />
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">My Services</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
