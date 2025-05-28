import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Honrarycommi.css';

const HonoraryCommission = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="honorary-commission-container">
      <div className="honorary-commission-content">
        <h1>Honorary Commission</h1>
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

        <ul>
        <li>Twice a year on Independence Day and Republic Day.</li>
          <li>Vacs based on auth str at the ratio of 12 Hony Lts for every 1000 JCOs and one Hony Capt for every four Hony Lts.</li>
          <li>Total Vacancies RD-06 Hony Lt -1060, Hony Capt-264. Minor variation depending on change in auth str.</li>
          <li>Vacancies split in ratio of 30:70 i.e. 30% Merit and 70% in Regt Quota.</li>
          <li>Vacs further divided in ratio of 25% and 75% in two chances and last chances categories.</li>
          <li>Process commences with receipt of forms approx 4 months in adv and ends with pub of DGN.</li>
          <li>Approx 20,000 forms recd on each occasion of which nearly 9000 pertain to active list cases.</li>
          <li>Bd of offrs takes approx 45 days to complete the scrutiny, drawal of merit and finalise the list.</li>
        </ul>
      </div>
    </div>
  );
};

export default HonoraryCommission;
