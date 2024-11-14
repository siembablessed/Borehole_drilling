import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './style/home.css';
import Image1 from './images/PDTHR-300.jpeg';
import Image2 from './images/Community.jpg';
import Image3 from './images/taps.jpg';
import MissionImage from './images/drilling.jpg';
import Wdishes from './images/blackWdishes.jpg';
import VisionImage from './images/leading.jpg';
import WaterImage from '../images/pexels-pixabay-50691.jpg';
import SustainabilityImage from '../images/pexels-pixabay-50691.jpg';
import CommunityImage from '../images/pexels-pixabay-50691.jpg';
import logoz from './images/logo.png'

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
          <img src={logoz} alt="About Premier Works" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Global Investments (Pvt) Ltd, we are dedicated to delivering reliable and sustainable water solutions. With expertise in borehole drilling, solar pump installations, and irrigation systems, our team ensures the highest standards of quality and service for each project.
          </p>
          <p>
            Our goal is to empower communities and businesses with dependable access to water, contributing to a brighter, greener future.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <div className="mission-vision-content">
          <div className="mission">
            <img src={Wdishes} alt="Our Mission" />
            <h3>Our Mission</h3>
            <p>To provide reliable, efficient, and sustainable borehole drilling services to communities, farms, and industries in Zimbabwe, while ensuring excellent customer service, environmental responsibility, and contributing to the country's economic growth.</p>
          </div>
          <div className="vision">
            <img src={VisionImage} alt="Our Vision" />
            <h3>Our Vision</h3>
            <p>To be the leading borehole drilling company in Zimbabwe, recognized for our professionalism, innovative solutions, and commitment to delivering clean water access to all, thereby improving lives and empowering communities</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="image-gallery">
        <h2>Supporting Our Mission and Vision</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={WaterImage} alt="Provision of Water" />
            <div className="overlay">
              <p>Provision of Water</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={SustainabilityImage} alt="Sustainability Efforts" />
            <div className="overlay">
              <p>Sustainability Efforts</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={CommunityImage} alt="Community Support" />
            <div className="overlay">
              <p>Community Support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
