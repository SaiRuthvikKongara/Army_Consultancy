import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for tracking URL changes
import Emblem from '../Images/Emblem.png';
import azadi from '../Images/75.png';

const Navbar = () => {
  // Scroll to specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dropdown visibility state
  const [showHonorsDropdown, setShowHonorsDropdown] = useState(false);
  const [showLinksDropdown, setShowLinksDropdown] = useState(false);

  // Reset scroll position when navigating to a new page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="outer">
        <div className="logo">ARMY</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a onClick={() => scrollToSection('about-us-section')}>About Us</a>
          <Link to="/Leaders">Leaders</Link>
          {/* <a onClick={() => scrollToSection('gallery-section')}>Gallery</a> */}


          <div
            className="dropdown"
            onMouseEnter={() => setShowHonorsDropdown(true)}
            onMouseLeave={() => setShowHonorsDropdown(false)}
          >
            <a onClick={() => scrollToSection('gallery-section')}>Gallery</a>
            {showHonorsDropdown && (
              <div className="dropdown-menu">
                <Link to="/Photo">Photo Gallery</Link>
                <Link to="/Video">Video Gallery</Link>
              </div>
            )}
          </div>

          {/* Honors & Awards Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowHonorsDropdown(true)}
            onMouseLeave={() => setShowHonorsDropdown(false)}
          >
            <Link to="#">Honors & Awards</Link>
            {showHonorsDropdown && (
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

          <Link to="/Training">Training</Link>

          {/* Important Links Dropdown */}
          <div
  className="dropdown1"
  onMouseEnter={() => setShowLinksDropdown(true)}
  onMouseLeave={() => setShowLinksDropdown(false)}
>
  <Link to="#">Important Links</Link>
  {showLinksDropdown && (
    <div className="dropdown-menu1">
      {/* Row 1 */}
      <div className="dropdown-row">
        <a href="https://www.mod.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Defence</a>
        <a href="https://pcdapension.nic.in/pcda/index.php" target="_blank" rel="noopener noreferrer">PCDA Pensions</a>
        <a href="https://indiannavy.nic.in/" target="_blank" rel="noopener noreferrer">Indian Navy</a>
        <a href="https://cdm.ap.nic.in/" target="_blank" rel="noopener noreferrer">CDM</a>
      </div>
      {/* Row 2 */}
      <div className="dropdown-row">
        <a href="https://indianairforce.nic.in/" target="_blank" rel="noopener noreferrer">Indian Air Force</a>
        <a href="https://rimc.gov.in/rimcindex.aspx" target="_blank" rel="noopener noreferrer">RIMC</a>
        <a href="https://ids.nic.in/" target="_blank" rel="noopener noreferrer">Integrated Defence Staff</a>
        <a href="https://www.dgrindia.gov.in/" target="_blank" rel="noopener noreferrer">DGR</a>
      </div>
      {/* Row 3 */}
      <div className="dropdown-row">
        <a href="https://joinindiancoastguard.gov.in/" target="_blank" rel="noopener noreferrer">Indian Coast Guard</a>
        <a href="http://www.bro.gov.in/" target="_blank" rel="noopener noreferrer">Border Roads Organisation</a>
        <a href="https://pcdaopune.gov.in/" target="_blank" rel="noopener noreferrer">CDA(O), Pune</a>
        <a href="https://ddpdos.gov.in/" target="_blank" rel="noopener noreferrer">Directorate of Standardisation</a>
      </div>
      {/* Row 4 */}
      <div className="dropdown-row">
        <a href="https://www.echs.gov.in/" target="_blank" rel="noopener noreferrer">ECHS</a>
        <a href="https://www.exarmynaukri.com/" target="_blank" rel="noopener noreferrer">AWPO</a>
        <a href="https://sainiksamachar.nic.in/" target="_blank" rel="noopener noreferrer">Sainik Samachar</a>
        <a href="https://www.desw.gov.in/kendriya_sainik_board" target="_blank" rel="noopener noreferrer">Kendriya Sainik Board (KSB)</a>
      </div>
        {/* Row 5 */}
        <div className="dropdown-row">
        <a href="https://rodra.gov.in/" target="_blank" rel="noopener noreferrer">RODRA.GOV.IN</a>
      <a href="http://ndacivrect.gov.in/" target="_blank" rel="noopener noreferrer">NDA</a>
      <a href="https://ndc.nic.in/" target="_blank" rel="noopener noreferrer">NDC</a>
      <a href="https://www.aitpune.com/" target="_blank" rel="noopener noreferrer">AIT, Pune</a>
      </div>
        {/* Row 6 */}
        <div className="dropdown-row">
        <a href="https://afmc.nic.in/" target="_blank" rel="noopener noreferrer">AFMC, Pune</a>
      <a href="https://awhosena.in/new/" target="_blank" rel="noopener noreferrer">AWHO</a>
      <a href="https://mod.gov.in/dod/directorate-general-armed-force-medical-services" target="_blank" rel="noopener noreferrer">DGAFMS</a>
      <a href="https://nationalwarmemorial.gov.in/" target="_blank" rel="noopener noreferrer">National War Memorial</a>
      </div>
        {/* Row 7 */}
        <div className="dropdown-row">
        <a href="https://indiancc.nic.in/" target="_blank" rel="noopener noreferrer">NCC</a>
      <a href="https://armaan.gov.in/" target="_blank" rel="noopener noreferrer">ARMAAN</a>
      <a href="https://hamraazmp8.gov.in/Default.aspx" target="_blank" rel="noopener noreferrer">HAMRAAZ Web</a>
      <a href="https://mes.gov.in/" target="_blank" rel="noopener noreferrer">MES</a>
      </div>
      {/* Row 8 */}
      <div className="dropdown-row">
      <a href="https://awesindia.com/" target="_blank" rel="noopener noreferrer">AWES</a>
    
      </div>
      {/* Continue creating rows in a similar way for other links */}
    </div>
    
  )}
</div>


          <a href="#">हिन्दी</a>
        </div>

        <input type="text" name="search-bar" id="search-bar" placeholder="Search" />
        <div className="icons">
          <img className="emblem" src={Emblem} alt="Emblem" />
          <img className="azadi" src={azadi} alt="Azadi" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
