import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* About Us Introduction */}
      <p className="about-us-description">
        Welcome to Paradise Nursery, where green meets serenity!
      </p>

      {/* First paragraph about the company's mission */}
      <p className="about-us-content">
        At Paradise Nursery, we are passionate about bringing nature closer to you.
        Our mission is to provide a wide range of high-quality plants that enhance
        your surroundings and promote a sustainable lifestyle. From air-purifying plants
        to fragrant aromatic ones, we have something for every plant lover.
      </p>

      {/* Second paragraph about their team and service */}
      <p className="about-us-content">
        Our team ensures each plant meets high standards of quality and care.
        Whether you're a seasoned gardener or a beginner, we're here to support your journey
        toward greener living.
      </p>

      {/* Closing paragraph inviting customers */}
      <p className="about-us-content">
        Join us in creating a greener world. Visit Paradise Nursery today and
        experience nature at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
