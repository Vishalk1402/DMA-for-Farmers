import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
// import missionImage from "./images/mission.jpg"; // Example image
// import vision from "./images/vision.jpg"; // Example image
// import featureImage from "./images/features.jpg"; // Example image

const About = () => {
  const aboutData = {
    title: "Welcome to Agro Farm",
    description:
      "Agro Farm is a revolutionary platform designed to connect farmers directly with buyers. Our mission is to create a transparent, fair, and efficient marketplace for agricultural produce.",
    mission: "Empowering farmers with resources to thrive and bridging the gap with buyers.",
    vision:
      "To build a sustainable agricultural ecosystem where farmers get fair prices and consumers receive high-quality products directly from the source.",
    features: [
      { title: "Transparent Pricing", description: "No middlemen, no hidden costs." },
      { title: "Easy Communication", description: "Direct interaction between farmers and buyers." },
      { title: "Sustainable Practices", description: "Encouraging eco-friendly farming methods." },
      { title: "Technology Integration", description: "Cutting-edge tools to boost productivity." },
    ],
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
        <button className="explore-button">Explore More</button>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <div className="text-container">
          <h2>Our Mission</h2>
          <p>{aboutData.mission}</p>
        </div>
        <div className="image-container">
          <img src="./images/mission.jpg" alt="Our Mission" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section reverse">
        <div className="text-container">
          <h2>Our Vision</h2>
          <p>{aboutData.vision}</p>
        </div>
        <div className="image-container">
          <img src="./images/vision.jpg" alt="Our Vision" />
        </div>
      </div>

      {/* Features Section */}
      <div className="about-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {aboutData.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <img src="./images/features.png" alt="Join Us" />
        <div className="cta-content">
          <h2>Join Agro Farm Today!</h2>
          <p>Whether you're a farmer or buyer, Agro Farm offers tools to grow your business.</p>
          <Link to="/Sign in">
          <button className="cta-button" >Sign Up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
