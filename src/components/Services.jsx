// Services.js

import React from 'react';
import './style/services.css';

const services = [
  { title: 'Borehole Drilling', description: 'Professional drilling services tailored to your needs.' },
  { title: 'Capacity Test', description: 'Accurate assessments to ensure optimal water extraction rates.' },
  { title: 'Irrigation Systems', description: 'Efficient solutions for water management and irrigation.' },
  { title: 'Solar Pump Installations', description: 'Eco-friendly solar-powered pumping systems for all needs.' },
  { title: 'Borehole Repairs', description: 'Expert repairs to ensure your borehole continues to function efficiently.' },
  { title: 'Lawn and Sprinkler Installations', description: 'Comprehensive installation of lawn and irrigation systems.' },
  { title: 'Borehole Clean Out', description: 'Effective cleaning to maintain borehole functionality.' },
  { title: 'Flashing Installation (Electrical, Solar & Bush Pump)', description: 'Professional electrical, solar, and bush pump flashing installations.' },
];

function Services() {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="/services" className="cta-button">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
