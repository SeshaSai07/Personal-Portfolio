import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#/#home' },
    { name: 'About', href: '/#/#about' },
    { name: 'Education', href: '/#/#education' },
    { name: 'Services', href: '/#/#services' },
    { name: 'Skills', href: '/#/#skills' },
    { name: 'Projects', href: '/#/#projects' },
    { name: 'Experience', href: '/#/#experience' },
    { name: 'Achievements', href: '/#/#achievements' },
    { name: 'Certifications', href: '/#/#certifications' },
    { name: 'Hobbies', href: '/#/#hobbies' },
    { name: 'Contact', href: '/#/#contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0,0)}>
          <img src="/profile.jpg" alt="Sai" className="header-avatar" />
          <span className="logo-text gradient-text-about">Portfolio</span>
        </Link>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a 
                  href={link.href}
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
