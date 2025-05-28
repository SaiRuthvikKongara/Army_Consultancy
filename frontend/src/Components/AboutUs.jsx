import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./AboutUs.css";
import left from "../Images/left2.png";
import middle from "../Images/Middle.jpg";
import right from "../Images/Right2.jpg";

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Functions to handle navigation
  const handleLeftTextClick = () => {
    navigate("/Pages/History");
  };

  const handleMiddleTextClick = () => {
    navigate("/Pages/MottoAndCrest");
  };

  const handleRightTextClick = () => {
    navigate("/Pages/Organization");
  };

  return (
    <div className="aboutus-container">
      {/* Title */}
      <div className="aboutus-title-wrapper">
        <h1 className="aboutus-title">A CUT ABOVE</h1>
      </div>

      {/* Gallery Grid */}
      <div className="aboutus-gallery-grid">
        {/* Left Image */}
        <div className="aboutus-gallery-item">
          <img src={left} alt="Our Journey" className="aboutus-gallery-image" />
          <div className="aboutus-overlay">
            <div
              className="aboutus-overlay-text"
              onClick={handleLeftTextClick} // Navigation on text click
            >
              𝑂𝑢𝑟 𝐽𝑜𝑢𝑟𝑛𝑒𝑦
            </div>
          </div>
        </div>

        {/* Middle Image */}
        <div className="aboutus-gallery-item">
          <img src={middle} alt="Being an Army Warrior" className="aboutus-gallery-image" />
          <div className="aboutus-overlay">
            <div
              className="aboutus-overlay-text"
              onClick={handleMiddleTextClick} // Navigation on text click
            >
              𝐵𝑒𝑖𝑛𝑔 𝑎𝑛 𝐴𝑟𝑚𝑦 𝑊𝑎𝑟𝑟𝑖𝑜𝑟
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="aboutus-gallery-item">
          <img src={right} alt="Our Organization" className="aboutus-gallery-image" />
          <div className="aboutus-overlay">
            <div
              className="aboutus-overlay-text"
              onClick={handleRightTextClick} // Navigation on text click
            >
              𝑂𝑢𝑟 𝑂𝑟𝑔𝑎𝑛𝑖𝑧𝑎𝑡𝑖𝑜𝑛
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;









