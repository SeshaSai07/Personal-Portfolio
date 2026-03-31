import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Music, BookOpen, Map, Gamepad2 } from 'lucide-react';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    { 
      name: 'Puzzles', 
      tag: 'Logic & Strategy',
      desc: 'Solving complex puzzles to sharpen logical thinking.',
      icon: <Puzzle size={24} />, 
      color: '#3b82f6'
    },
    { 
      name: 'Music', 
      tag: 'Rhythm & Soul',
      desc: 'Exploring diverse genres to find inspiration.',
      icon: <Music size={24} />, 
      color: '#f59e0b'
    },
    { 
      name: 'Tech Books', 
      tag: 'Growth',
      desc: 'Reading tech insights to stay ahead.',
      icon: <BookOpen size={24} />, 
      color: '#8b5cf6'
    },
    { 
      name: 'Traveling', 
      tag: 'Exploring',
      desc: 'Visiting new places to broaden outlook.',
      icon: <Map size={24} />, 
      color: '#ec4899'
    },
    { 
      name: 'Gaming', 
      tag: 'Strategy',
      desc: 'Enjoying games for quick decisions.',
      icon: <Gamepad2 size={24} />, 
      color: '#06b6d4'
    }
  ];

  return (
    <section id="hobbies" className="hobbies section-padding">
      <div className="container">
        <div className="hobbies-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">Beyond Code</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="hobbies-row">
          {hobbies.map((hobby, idx) => (
            <motion.div 
              key={idx} 
              className="hobby-card-small glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -5, 
                borderColor: hobby.color,
                boxShadow: `0 5px 15px -5px ${hobby.color}40`
              }}
            >
              <div className="hobby-icon-sm" style={{ background: `${hobby.color}15`, color: hobby.color }}>
                {hobby.icon}
              </div>
              <div className="hobby-info-sm">
                <span className="hobby-tag-sm" style={{ color: hobby.color }}>{hobby.tag}</span>
                <h3 className="hobby-name-sm">{hobby.name}</h3>
                <p className="hobby-desc-sm">{hobby.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
