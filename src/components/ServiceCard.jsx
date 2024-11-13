import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={`/services/${title.toLowerCase().replace(' ', '-')}`}>Learn More</Link>
    </div>
  );
}

export default ServiceCard;
