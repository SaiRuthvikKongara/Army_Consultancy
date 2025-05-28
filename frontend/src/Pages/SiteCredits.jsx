import React from 'react';
import './SiteCredits.css'; // Ensure you have the CSS file correctly linked

const SiteCredits = () => {
  return (
    <div className="credits-container">
      {/* Marquee Effect for Scrolling Text */}
      <div className="marquee">
        <div className="marquee-content">
          <p>
            Honoring the bravery, sacrifice, and dedication of the Indian Army. Your courage inspires us every day! 🙏 &nbsp;&nbsp;&nbsp;&nbsp;
            Proudly presenting this project in tribute to the Indian Army – Our true heroes! 🙏 &nbsp;&nbsp;&nbsp;&nbsp;
            With respect and admiration for the Indian Army, whose unwavering dedication keeps our nation safe. 🙏 &nbsp;&nbsp;&nbsp;&nbsp;
            This project is dedicated to the Indian Army and our mentors who guided us to success. 🙏 &nbsp;&nbsp;&nbsp;&nbsp;
            To the Indian Army, thank you for your service, sacrifice, and selflessness in protecting our freedom. 🙏
          </p>
        </div>
      </div>

      {/* Credits Section */}
      <h2 className="credits-title">Site Credits</h2>
      
      <div className="credits-team">
        <h3 className="credits-subtitle">Developed By:</h3>
        <ul className="credits-list">
          <li className="credits-item"><strong>Rahul Bingi</strong> – Content Writer & Researcher</li>
          <li className="credits-item"><strong>Kranthi Kandagatla</strong> – Frontend Developer</li>
          <li className="credits-item"><strong>Lokesh Puliseri</strong> – Backend Developer</li>
          <li className="credits-item"><strong>Ruthwik Kongara</strong> – Backend Developer</li>
          <li className="credits-item"><strong>Vishwasakshini</strong> – UI/UX Designer</li>
          <li className="credits-item"><strong>Sreenithya</strong> – QA & Tester</li>
        </ul>
      </div>

      <div className="credits-technology">
        <h3 className="credits-subtitle">Technologies Used:</h3>
        <p className="credits-text">HTML5, CSS3, JavaScript, React, Bootstrap, Node.js, Express, MongoDB</p>
      </div>

      <div className="credits-thanks">
        <h3 className="credits-subtitle">Special Thanks To:</h3>
        <p className="credits-text">Mentors: Dr. T. Senthil Murugan, Y. Bhavani, A. Bhaskar, and Kiran Kumar for their constant support and encouragement.</p>
      </div>

      <div className="credits-footer">
        <p className="credits-text">&copy; 2025 [Indian Army WebSite]. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SiteCredits;
