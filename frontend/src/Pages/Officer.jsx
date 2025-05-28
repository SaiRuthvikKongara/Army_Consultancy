import React, { useState } from "react";
import styles from "./Officer.module.css"; // CSS Module import
import officersData from "./LeadersData"; // Your officer data file
import { useNavigate } from 'react-router-dom';


const OfficersPage = () => {
  
  const [selectedOfficer, setSelectedOfficer] = useState(null);

  const handleOfficerClick = (officer) => {
    setSelectedOfficer(officer);
  };

  const handleBackClick = () => {
    setSelectedOfficer(null);
  };
  const navigate = useNavigate();

  return (
    
    <div className={styles.officersPage}>
              <div className={styles.homeButtonContainer}>
  <button className={styles.homeButton} onClick={() => navigate("/")}>
    🏠︎
  </button>
</div>

      {selectedOfficer ? (

        <div className={styles.officerDetails}>
          
          <h2 className={styles.detailsTitle}>{selectedOfficer.name}</h2>
          <h3 className={styles.detailsSubtitle}>{selectedOfficer.rank}</h3>
          <h4 className={styles.detailsTenure}>{selectedOfficer.tenure}</h4>
          <div className={styles.detailsDescription}>

            {selectedOfficer.details
              .split("\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
          </div>
          <button
            className={`${styles.button} ${styles.backButton}`}
            onClick={handleBackClick}
          >
            Back to List
            
          </button>
        </div>
      ) : (
        <div className={styles.officerList}>
          {officersData.map((officer, index) => (
            <div
              className={styles.officerCard}
              key={index}
              onClick={() => handleOfficerClick(officer)}
            >
              <img
                className={styles.officerImage}
                src={officer.image}
                alt={officer.name}
              />
              <div className={styles.officerContent}>
                <h2 className={styles.title}>{officer.name}</h2>
                <h3 className={styles.subtitle}>{officer.rank}</h3>
                <p className={styles.tenure}>{officer.tenure}</p>
                <p className={styles.description}>{officer.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfficersPage;
