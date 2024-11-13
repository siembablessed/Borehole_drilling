import React from 'react';
import './style/gallery.css'; // Assuming the CSS file is in the "style" folder

import Image1 from '../images/pexels-drector-16227438.jpg'; // Sample images
import Image2 from '../images/pexels-drector-16227439.jpg';
import Image3 from '../images/pexels-pixabay-50691.jpg';
import Image4 from '../images/pexels-drector-16227438.jpg';

function Gallery() {
  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image1} alt="Gallery Image 1" />
            <div className="overlay">
              <div className="overlay-text">Borehole Installation</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image2} alt="Gallery Image 2" />
            <div className="overlay">
              <div className="overlay-text">Irrigation System</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image3} alt="Gallery Image 3" />
            <div className="overlay">
              <div className="overlay-text">Solar Pump Installation</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image4} alt="Gallery Image 4" />
            <div className="overlay">
              <div className="overlay-text">Borehole Drilling</div>
            </div>
          </div>
        </div>
      </div>
    <br />
      <div className="gallery-grid">
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image1} alt="Gallery Image 1" />
            <div className="overlay">
              <div className="overlay-text">Borehole Installation</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image2} alt="Gallery Image 2" />
            <div className="overlay">
              <div className="overlay-text">Irrigation System</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image3} alt="Gallery Image 3" />
            <div className="overlay">
              <div className="overlay-text">Solar Pump Installation</div>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={Image4} alt="Gallery Image 4" />
            <div className="overlay">
              <div className="overlay-text">Borehole Drilling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
