import React, { useState, useEffect } from "react";
import "./LeadersPage.css";
import { imageService } from '../services/imageService';
import Navbar from '../Components/Navbar.jsx';

const LeadersPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [selectedLeader, setSelectedLeader] = useState(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const leaderImages = await imageService.getImagesByCategory('Leaders');
        const leaderData = leaderImages
          .filter(img => ['Chief.jpg', 'Vice_Chief.jpg', 'Commander1.jpg', 'Commander2.jpg', 'Commander3.jpg', 'Commander4.jpg', 'Commander5.jpg', 'Commander6.jpg'].includes(img.name))
          .map((img, index) => ({
            id: index + 1,
            src: imageService.getImage(img._id),
            title: getLeaderTitle(index)
          }));
        setLeaders(leaderData);
      } catch (error) {
        console.error('Error fetching leader images:', error);
      }
    };

    fetchLeaders();
  }, []);

  const getLeaderTitle = (index) => {
    const titles = [
      "Chief of Army Staff",
      "Vice Chief of Army Staff",
      "Northern Command",
      "Western Command",
      "Southern Command",
      "Eastern Command",
      "Central Command",
      "South Western Command"
    ];
    return titles[index] || "Leader";
  };

  const handleClick = (leader) => {
    setSelectedLeader(leader);
  };

  const renderLeaderInfo = (leader) => (
    <div className="leader-info-container">
      <img src={leader.src} alt={leader.title} className="leader-image" />
      <h2 className="leader-name">{leader.title}</h2>
    </div>
  );

  return (
    <div className="leaders-container">
      <Navbar />
      <header className="leaders-header">
        <h1 className="leaders-title">Indian Army Leaders</h1>
      </header>

      {/* Conditionally render selected leader */}
      {selectedLeader ? (
        <div className="leader-detail">
          {renderLeaderInfo(selectedLeader)}
          <button className="back-button" onClick={() => setSelectedLeader(null)}>
            Back to Leaders List
          </button>
        </div>
      ) : (
        <div className="leaders-grid">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="leader-card"
              onClick={() => handleClick(leader)}
            >
              <img src={leader.src} alt={leader.title} />
              <h3>{leader.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadersPage;

