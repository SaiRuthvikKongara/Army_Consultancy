import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import paramVirChakra from '../Images/Awards/param_vir_chakra.png';
import ashokaChakra from '../Images/Awards/ashoka_chakra.png';
import mahaVirChakra from '../Images/Awards/maha_vir_chakra.png';
import kirtiChakra from '../Images/Awards/kirti_chakra.png';
import virChakra from '../Images/Awards/vir_chakra.png';
import shauryaChakra from '../Images/Awards/Shaurya_Chakra.png';
import senaMedal from '../Images/Awards/sena_medal.png';
import naoSenaMedal from '../Images/Awards/nao_sena_medal.png';
import vayuSenaMedal from '../Images/Awards/vayu_sena_medal.png';
import './GallantryAwds.css';

const awardsData = [
  {
    name: "Param Vir Chakra",
    image: paramVirChakra,
    description: "The Param Vir Chakra is India's highest military decoration awarded for displaying distinguished acts of valour during wartime."
  },
  {
    name: "Ashoka Chakra",
    image: ashokaChakra,
    description: "The Ashoka Chakra is India's highest peacetime military decoration for valor, courageous action, or self-sacrifice."
  },
  {
    name: "Maha Vir Chakra",
    image: mahaVirChakra,
    description: "The Maha Vir Chakra is the second-highest military decoration in India, awarded for acts of conspicuous gallantry in the presence of the enemy."
  },
  {
    name: "Kirti Chakra",
    image: kirtiChakra,
    description: "The Kirti Chakra is awarded for conspicuous gallantry other than in the face of the enemy."
  },
  {
    name: "Vir Chakra",
    image: virChakra,
    description: "The Vir Chakra is the third-highest military decoration in India, awarded for acts of bravery in the battlefield."
  },
  {
    name: "Shaurya Chakra",
    image: shauryaChakra,
    description: "The Shaurya Chakra is awarded for gallantry other than in the face of the enemy."
  },
  {
    name: "Sena Medal",
    image: senaMedal,
    description: "The Sena Medal is awarded to personnel of the Indian Army for individual acts of exceptional devotion to duty or courage."
  },
  {
    name: "Nao Sena Medal",
    image: naoSenaMedal,
    description: "The Nao Sena Medal is awarded to Navy personnel for acts of exceptional devotion to duty or courage."
  },
  {
    name: "Vayu Sena Medal",
    image: vayuSenaMedal,
    description: "The Vayu Sena Medal is awarded to Air Force personnel for acts of exceptional devotion to duty or courage."
  },
];

const GallantryAwards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCloseModal = () => {
    setSelectedAward(null);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="gallantry-awards-page">
      <div className="awards-container">
        <h1>Gallantry Awards</h1>

        {/* Dropdown menu trigger */}
        <div className="dropdown-container">
          <button className="btnn" onClick={toggleDropdown}>
            Honours & Awards ▼
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/background">Background</Link>
              <Link to="/battle-honours">Battle Honours</Link>
              <Link to="/gallantry-awards">Gallantry Awards</Link>
              <Link to="/distinguished-service-awards">Distinguished Service Awards</Link>
              <Link to="/wearing-of-medals">Wearing of Medals</Link>
              <Link to="/honorary-commission">Honorary Commission</Link>
              <Link to="/list-of-awardees">List of Awardees</Link>
              <Link to="/monetary-allowances">Monetary Allowances</Link>
              <Link to="/commonwealth-war-graves-commission">Commonwealth War Graves Commission</Link>
            </div>
          )}
        </div>

        <div className="awards-scrollable-content">
          <div className="awards-grid">
            {awardsData.map((award) => (
              <div
                key={award.name}
                className="award-card"
                onClick={() => setSelectedAward(award)}
              >
                <img src={award.image} alt={award.name} />
                <p>{award.name}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedAward && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedAward.name}</h2>
              <img src={selectedAward.image} alt={selectedAward.name} />
              <p>{selectedAward.description}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallantryAwards;
