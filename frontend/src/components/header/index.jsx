import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/atlantis_logo.png';
import './index.css';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/venue', label: 'VENUE' },
  { to: '/services', label: 'SERVICES' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/contact', label: 'CONTACT US' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="nav-container">
        {/* Logo Area */}
        <div className="logo-area">
          <Link to="/">
            <img src={logo} alt="Atlantis Logo" className="logo-img" />
          </Link>
        </div>
        {/* Nav Links */}
        <ul className={`exact-nav-links${menuOpen ? ' show' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Contact Area */}
        <div className={`exact-nav-contact${menuOpen ? ' show' : ''}`}>
          <span className="contact-number">+91 73000 56712</span>
          <a href="tel:+917300056712" className="exact-call-btn">CALL US</a>
        </div>
        {/* Hamburger for mobile */}
        <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
