// BHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './bhome.css'; // Import the CSS file

const BHome = () => {
  return (
    <div className="bhome-container">
      {/* Navigation Bar */}
      <nav>
        <div className="nav-title">Online E-Learning</div> {/* Title */}
        <div>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link> {/* Login button in navbar */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h1>Welcome to Our Online E-Learning Platform</h1>
        <p>
          Our platform offers a wide range of courses to help you learn and grow. Whether you are a beginner looking to acquire new skills or an experienced professional seeking to expand your knowledge, we have courses tailored to your needs. Explore our diverse offerings and start learning today!
        </p>
        {/* <div className="buttons">
          <Link to="/courses" className="btn">Explore Courses</Link> Button to explore courses
        </div> */}
      </div>
    </div>
  );
};

export default BHome;
