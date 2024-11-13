import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './style/home.css';
import Image1 from '../images/pexels-drector-16227438.jpg';
import Image2 from '../images/pexels-drector-16227439.jpg';
import Image3 from '../images/pexels-pixabay-50691.jpg';

function Home() {
  return (
    <main className="home">
      {/* Carousel Section */}
      <section className="hero-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          <div className="carousel-slide">
            <img src={Image1} alt="Borehole Drilling" />
            <div className="carousel-caption">
              <h2>Borehole Drilling</h2>
              <p>Professional drilling services tailored to your needs.</p>
              <Link to="/services" className="cta-button">Explore Services</Link>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Image2} alt="Irrigation Systems" />
            <div className="carousel-caption">
              <h2>Irrigation Systems</h2>
              <p>Efficient solutions for water management and irrigation.</p>
              <Link to="/services" className="cta-button">Explore Services</Link>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Image3} alt="Solar Pump Installations" />
            <div className="carousel-caption">
              <h2>Solar Pump Installations</h2>
              <p>Eco-friendly solar-powered pumping systems for all needs.</p>
              <Link to="/services" className="cta-button">Explore Services</Link>
            </div>
          </div>
        </Carousel>
      </section>

      {/* About Details */}
      <section className="about-details">
        <div className="about-image">
          <img src={Image2} alt="About Premier Works" />
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
    </main>
  );
}

export default Home;
