import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'; // Import the CSS file for ServiceDetail

const servicesData = [
  { id: 1, name: 'Utility Payments', description: 'Pay your utility bills quickly and easily.', details: 'Here you can pay your electricity, water, and gas bills. It\'s quick and easy!' },
  { id: 2, name: 'Permits', description: 'Apply for permits for construction, events, and more.', details: 'Apply for various permits including construction, event hosting, and more.' },
  { id: 3, name: 'Community Programs', description: 'Join various community programs and initiatives.', details: 'Join community programs to engage and contribute to various initiatives.' },
  { id: 4, name: 'Public Transport', description: 'Get information about public transport schedules and routes.', details: 'Find information on public transport schedules, routes, and fares.' },
  { id: 5, name: 'Waste Management', description: 'Learn about waste management services in your area.', details: 'Learn about waste collection schedules, recycling programs, and more.' },
];

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(service => service.id === parseInt(id));

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-detail">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <div className="details">
        <h2>Details</h2>
        <p>{service.details}</p>
      </div>
    </div>
  );
}

export default ServiceDetail;
