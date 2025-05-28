import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListofAwdees.css';
import ParamVirChakraList from './ParamVirChakraList';
import AshokaChakraList from './ashokachakra';
import MahaVirChakraList from './mahavir';
import KirtiChakraList from './kirtichakra';
import VirChakraList from './virchakra';
import ShauryaChakraList from './shauryachakra';

// Import image
import awardeesImage from '../Images/Awards/download.png';

const AwardeesPage = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (awardType) => {
    setSelectedAward(awardType);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="awardees-website">
      <div className="page-container">
        <div className="main-content">
          <h1>List of Awardees</h1>

          {/* Dropdown button */}
          <button className="btnn" onClick={toggleDropdown}>
            Honours & Awards ▼
          </button>

          {/* Dropdown menu */}
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

          {/* Display Image when no award is selected */}
          {!selectedAward && (
            <img src={awardeesImage} alt="Awardees" className="header-image" />
          )}

          {/* Conditionally render award lists */}
          {selectedAward === "paramVirChakra" && <ParamVirChakraList />}
          {selectedAward === "ashokaChakra" && <AshokaChakraList />}
          {selectedAward === "mahavir" && <MahaVirChakraList />}
          {selectedAward === "kirtichakra" && <KirtiChakraList />}
          {selectedAward === "virchakra" && <VirChakraList />}
          {selectedAward === "shauryachakra" && <ShauryaChakraList />}
        </div>

        {/* Related Links Section */}
        <div className="related-links">
          <h2>Related Links</h2>
          <ul>
            <li>
              <a href="#!" onClick={() => handleLinkClick("paramVirChakra")}>
                The Param Vir Chakra (PVC)
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick("ashokaChakra")}>
                Ashoka Chakra
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick("mahavir")}>
                Maha Vir Chakra
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick("kirtichakra")}>
                Kirti Chakra
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick("virchakra")}>
                Vir Chakra
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick("shauryachakra")}>
                Shaurya Chakra
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwardeesPage;
