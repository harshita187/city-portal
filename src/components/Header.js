import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for Header

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
            <a href='/'>
            <h1>City Portal</h1>
            </a>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link></li>
            <li className="nav-item"><Link to="/report-issue" className="nav-link" onClick={toggleMobileMenu}>Report Issue</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link" onClick={toggleMobileMenu}>Services</Link></li>
            <li className="nav-item"><Link to="/dashboard" className="nav-link" onClick={toggleMobileMenu}>Dashboard</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link" onClick={toggleMobileMenu}>Login</Link></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
