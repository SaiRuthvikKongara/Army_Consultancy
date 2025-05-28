import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

// Add the logo image files for social media
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.png';
import twitterIcon from '../Images/twitter.png';
import youtubeIcon from '../Images/youtube.png';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const lastUpdated = new Date().toLocaleDateString();

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const response = await fetch('/api/visitor-count'); // Replace with your API endpoint
      const data = await response.json();
      setVisitorCount(data.count || 548485); // Default visitor number
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a href="https://www.facebook.com/Indianarmy.adgpi" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/indianarmy.adgpi/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://x.com/adgpi" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://youtube.com/@adgpiindianarmy?si=46x7A-obQUtWjSHF" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="social-icon" />
        </a>
      </div>

      <div className="tags">
        <a href="">Contact us</a>
        <Link to="/ImportantLinksPage">External Links</Link>
        <Link to="/SiteCredits">Site credits</Link>
        <a href="">FAQ's</a>
        <a href="">Right to Information</a>
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
        <a href="">Sitemap</a>
      </div>

      <p>
        © 2024 Indian Army. This is the Official Indian Army Web Portal, maintained & managed by the Indian Army. Site hosted by NIC.
      </p>

      <p className="footer-info">
        Content last updated on: {lastUpdated}.
        <span className="visitor-number">Your visitor number: {visitorCount}</span>
      </p>
    </footer>
  );
};

export default Footer;
