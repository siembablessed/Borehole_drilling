import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1>Global Investments (Pvt) Ltd</h1>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          {/* Close button for mobile view */}
          {isOpen && <button className="close-button" onClick={toggleMenu}>✕</button>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
