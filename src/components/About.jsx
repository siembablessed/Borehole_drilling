import React from 'react';
import './style/about.css';
import AboutImage from './images/pexels-drector-16227438.jpg';  // Update with actual image path

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Premier Works</h1>
          <p>Your trusted partner in high-quality water solutions.</p>
        </div>
      </section>

      {/* About Details */}
      <section className="about-details">
        <div className="about-image">
          <img src={AboutImage} alt="About Premier Works" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Premier Works, we are dedicated to delivering reliable and sustainable water solutions. With expertise in borehole drilling, solar pump installations, and irrigation systems, our team ensures the highest standards of quality and service for each project.
          </p>
          <p>
            Our goal is to empower communities and businesses with dependable access to water, contributing to a brighter, greener future.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="card mission-card">
          <h3>Our Mission</h3>
          <p>Providing sustainable water solutions to empower communities and businesses.</p>
        </div>
        <div className="card vision-card">
          <h3>Our Vision</h3>
          <p>To be a leader in water resource management with innovative, eco-friendly practices.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member card">
            <img src="../images/cartoon-avatar1.png" alt="Team Member" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member card">
            <img src="../images/cartoon-avatar2.png" alt="Team Member" />
            <h4>Jane Smith</h4>
            <p>Lead Engineer</p>
          </div>
          <div className="team-member card">
            <img src="../images/cartoon-avatar3.png" alt="Team Member" />
            <h4>Michael Brown</h4>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
