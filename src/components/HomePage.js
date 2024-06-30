import React from 'react';
import './HomePage.css'; // Import the CSS file for HomePage
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to the City Portal</h1>
        <p>Your one-stop destination for city services, reporting issues, and real-time city data.</p>
        <Link to="/services" className="btn-primary">Get Started</Link>
      </section>
      <section className="quick-links">
        <div className="link-card">
          <Link to="/report-issue">
            <i className="fas fa-exclamation-circle"></i>
            <h2>Report an Issue</h2>
          </Link>
        </div>
        <div className="link-card">
          <Link to="/services">
            <i className="fas fa-cogs"></i>
            <h2>City Services</h2>
          </Link>
        </div>
        <div className="link-card">
          <Link to="/dashboard">
            <i className="fas fa-chart-line"></i>
            <h2>Data Dashboard</h2>
          </Link>
        </div>
      </section>
      <section className="about">
        <h2>About Our Portal</h2>
        <p>
          The City Portal is designed to make it easy for residents to access important city services, report issues in their neighborhoods, and stay informed with real-time data on city operations. Our goal is to enhance community engagement and improve city management through technology.
        </p>
      </section>
      <section className="announcements">
        <h2>Recent Announcements</h2>
        <ul>
          <li>City Council Meeting on July 15th, 2024</li>
          <li>New Waste Management Schedule</li>
          <li>Community Clean-Up Event on August 20th, 2024</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
