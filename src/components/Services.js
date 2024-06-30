import React from 'react';
import './Services.css'; // Import the CSS file for Services
import { Link } from 'react-router-dom';

const servicesData = [
  { id: 1, name: 'Utility Payments', description: 'Pay your utility bills quickly and easily.' },
  { id: 2, name: 'Permits', description: 'Apply for permits for construction, events, and more.' },
  { id: 3, name: 'Community Programs', description: 'Join various community programs and initiatives.' },
  { id: 4, name: 'Public Transport', description: 'Get information about public transport schedules and routes.' },
  { id: 5, name: 'Waste Management', description: 'Learn about waste management services in your area.' },
];

function Services() {
  return (
    <div className="services">
      <h1>City Services</h1>
      <div className="services-list">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <Link to={`/services/${service.id}`} className="btn-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
