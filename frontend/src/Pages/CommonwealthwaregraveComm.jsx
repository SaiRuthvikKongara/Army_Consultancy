import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommonwealthwaregraveComm.css'; // Make sure to import the CSS file

const CWGC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className="cwgc-container">
      <div className="cwgc-content">
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
        <h2>Commonwealth War Graves Commission</h2>
        <ul>
          <li>CWGC is a statutory body based in London. It is responsible for the maintenance of war graves and monuments of all soldiers who fought under the British Flag during the wars between 1914 to 1945.</li>
          <li>India has been a member of CWGC since 1917 and contributes 1.195% of the annual budget (approximately ₹4 Crore).</li>
          <li>Approximately 1,60,000 graves and memorials of Indian soldiers are spread across three continents (Europe, Asia, and Africa).</li>
          <li>Contribution is sanctioned and released through the CDA.</li>
        </ul>
      </div>
    </div>
  );
};

export default CWGC;
