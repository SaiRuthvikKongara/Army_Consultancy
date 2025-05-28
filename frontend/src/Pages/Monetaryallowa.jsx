import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Monetaryallowa.css'; 

const MonetaryAllowances = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className="monetary-allowances">
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

      <h2>Monetary Allowances to Awardees</h2>
      <p>
        Click <a href="/pdfs/pdf1.pdf" className="download-link" download>
          here
        </a> to download Booklet of Monetary Allowances & Other Benefits to Awardees.
      </p>
      <p>
        Click <a href="/pdfs/pdf1.pdf" className="download-link" download>
          here
        </a> to view Various Monetary Allowances by State and Centre Govt to Awardees.
      </p>
    </div>
  );
};

export default MonetaryAllowances;
