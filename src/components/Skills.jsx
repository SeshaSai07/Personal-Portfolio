import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const getIcon = (skill) => {
    const iconMap = {
      // Programming Languages
      'Java': { local: '/java.svg', color: 'f89820' },
      'JavaScript': { slug: 'javascript', color: 'f7df1e' },
      'Python': { slug: 'python', color: '3776ab' },
      'HTML5': { slug: 'html5', color: 'e34f26' },
      'CSS': { local: '/css.svg', color: '1572b6' },
      'CSS3': { slug: 'css3', color: '1572b6' },
      
      // Frameworks & Libraries
      'SpringBoot': { slug: 'springboot', color: '6db33f' },
      'React': { slug: 'react', color: '61dafb' },
      'Next.js': { slug: 'nextdotjs', color: 'ffffff' },
      'Node.js': { slug: 'nodedotjs', color: '339933' },
      'Express': { slug: 'express' },
      'Vite': { slug: 'vite', color: '646cff' },
      'Supabase': { slug: 'supabase', color: '3ecf8e' },
      
      // Databases & Cloud
      'MongoDB': { slug: 'mongodb', color: '47a248' },
      'PostgreSQL': { slug: 'postgresql', color: '4169e1' },
      'Firebase': { slug: 'firebase', color: 'ffca28' },
      'Vercel': { slug: 'vercel', color: 'ffffff' },
      
      // Tools
      'Git': { slug: 'git', color: 'f05032' },
      'Postman': { slug: 'postman', color: 'ff6c37' },
      'VS Code': { local: '/vscode.svg', color: '007acc' },
      'ServiceNow': { local: '/servicenow.svg', color: '81b535' }
    };

    const iconData = iconMap[skill];
    if (iconData) {
      const iconSrc = iconData.local 
        ? iconData.local 
        : `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color}`;

      return (
        <img 
          src={iconSrc} 
          alt={skill} 
          className="skill-card-icon" 
        />
      );
    }

    return null;
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'HTML5', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['SpringBoot', 'React', 'Next.js', 'Node.js', 'Express', 'Vite']
    },
    {
      title: 'Databases & Cloud',
      skills: ['Firebase', 'MongoDB', 'Vercel', 'PostgreSQL', 'Supabase']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Postman', 'VS Code', 'ServiceNow']
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="skills-bg-elements">
          <div className="about-glow glow-orange"></div>
          <div className="about-glow glow-pink"></div>
          <div className="about-glow glow-indigo"></div>
        </div>

        <div className="section-title-wrapper text-center">
          <h2 className="section-title gradient-text-about">Technical Skills</h2>
          <div className="title-underline-glow mx-auto"></div>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-group">
              <h3 className="category-group-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                    whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <div className="skill-card-inner">
                      <div className="skill-icon-container">
                        {getIcon(skill)}
                      </div>
                      <span className="skill-card-name">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
