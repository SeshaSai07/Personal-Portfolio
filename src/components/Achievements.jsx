import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Users, Rocket, Cpu } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: '1st Prize - IoT & AI Hackathon',
      subtitle: 'College-Level Innovation Showcase',
      desc: 'Won 1st Prize in College-Level IoT & AI Hackathon for the Smart Cap innovation, demonstrating expertise in hardware and AI integration.',
      icon: <Trophy size={40} />,
      color: '#f59e0b', // Yellow
      bgIcon: <Trophy size={140} />
    },
    {
      title: 'Top 100 ServiceNow Developers',
      subtitle: 'Application Development Challenge',
      desc: 'Ranked among the Top 100 developers out of 5,000+ participants for building a high-impact ServiceNow application.',
      icon: <Star size={40} />,
      color: '#3b82f6', // Blue
      bgIcon: <Star size={140} />
    },
    {
      title: 'Global Rank 379 (Top ~17%)',
      subtitle: 'Iqigai GenAI Fellowship Challenge 2026',
      desc: 'Achieved Rank 379 in the GenAI Fellowship Challenge hosted by Analytics Vidhya & Fractal Analytics, demonstrating GenAI proficiency.',
      icon: <TrendingUp size={40} />,
      color: '#8b5cf6', // Purple
      bgIcon: <TrendingUp size={140} />
    },
    {
      title: 'Technical Excellence',
      subtitle: 'Data Analysis & Technical Reasoning',
      desc: 'Demonstrated strong skills in data analysis, complex problem-solving, and technical reasoning through various industry-level challenges.',
      icon: <Rocket size={40} />,
      color: '#ef4444', // Red
      bgIcon: <Rocket size={140} />
    },
    {
      title: 'Hackathon Team Lead',
      subtitle: 'Inter & Intra-College Hackathons',
      desc: 'Led teams across multiple hackathons, driving idea execution, development strategy, and final product delivery.',
      icon: <Users size={40} />,
      color: '#10b981', // Green
      bgIcon: <Users size={140} />
    }
  ];

  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        <div className="achievements-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">My Achievements</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <motion.div 
              key={index}
              className="achievement-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="achievement-icon">
                {ach.icon}
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{ach.title}</h3>
                <span className="achievement-subtitle">{ach.subtitle}</span>
                <p className="achievement-desc">{ach.desc}</p>
              </div>

              <div className="achievement-watermark" style={{ color: ach.color }}>
                {ach.bgIcon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
