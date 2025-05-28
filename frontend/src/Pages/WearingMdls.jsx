import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WearingMdls.css';



const WearingOfMedals = () => {
  
  const [isOpen, setIsOpen] = useState({
    precedence: false,
    wearingRibbands: false,
    wearingClasps: false,
    affiliation: false,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const precedenceMedals = [
    "Bharat Ratna",
    "Param Vir Chakra",
    "Ashoka Chakra",
    "Padma Vibhusan",
    "Padma Bhushan",
    "Sarvattom Yudh Seva Medal",
    "Param Vishisht Seva Medal",
    "Maha Vir Chakra",
    "Kirti Chakra",
    "Padma Shri",
    "Sarvottom Jeevan Raksha Padak",
    "Uttam Yudh Seva Medal",
    "Ati Vishisht Seva Medal",
    "Vir Chakra",
    "Shaurya Chakra",
    "President's Police and Fire Services Medal for Gallantry",
    "President's Police Medal for Gallantry",
    "President's Fire Services Medal for Gallantry",
    "President's Correctional Service Medal for Gallantry",
    "President's Home Guards and Civil Defence Medal for Gallantry",
    "Yudh Seva Medal",
    "Sena /Nao Sena/Vayu Sena Medal",
    "Mention in Dispatches",
    "Vishisht Seva Medal",
    "Police Medal for Gallantry",
    "Fire Services Medal for Gallantry",
    "Correctional Service Medal for Gallantry",
    "Home Guards and Civil Defence Medal for Gallantry",
    "Uttam Jeevan Raksha Padak",
    "Parakram Padak",
    "General Service Medal - 1947",
    "Samanya Seva Medal - 1965",
    "Special Service Medal",
    "Samar Seva Star-1965",
    "Poorvi Star",
    "Paschimi Star",
    "OP Vijay Star Medal",
    "Siachen Glacier Medal",
    "Raksha Medal – 1965",
    "Sangram Medal",
    "OP Vijay Medal",
    "OP Parakram Medal",
    "Sainya Seva Medal",
    "High Altitude Medal",
    "Police (Special Duty) Medal - 1962",
    "Videsh Seva Medal",
    "President's Police and Fire Services Medal for Distinguished Service",
    "President's Police Medal for Distinguished Service",
    "President's Fire Services Medal for Distinguished Service",
    "President's Correctional Service Medal for Distinguished Service",
    "President's Home Guards and Civil Defence for Distinguished Service",
    "Meritorious Service Medal",
    "Long Service and Good Conduct Medal",
    "Police Medal for Meritorious Service",
    "Fire Services Medal for Meritorious Service",
    "Correction Service Medal for Meritorious Service",
    "Home Guards and Civil Defence Medal for Meritorious Service",
    "Jeevan Raksha Padak",
    "Territorial Army Decoration",
    "Territorial Army Medal",
    "Indian Independence Medal-1947",
    "Independence Medal - 1950",
    "50th Anniversary of Independence Medal",
    "25th Independence Anniversary Medal",
    "30 Years Long Service Medal",
    "20 Years Long Service Medal",
    "9 Years Long Service Medal",
    "Commonwealth Awards",
    "Other Awards",
  ];

  return (
    <div className="wearing-medals">
      <h1>Wearing of Medals</h1><br />
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
      <p>No. 75-Pres/2001-The President has been pleased to determine the following order of Precedence of Wearing of various Medals and Decorations...</p>

        <h2 onClick={() => toggleSection('precedence')}>Precedence of Medals</h2>
        {isOpen.precedence && (
          <ul className="wearing-medals__medals-list">
            {precedenceMedals.map((medal, index) => (
              <li key={index}>{medal}</li>
            ))}
          </ul>
        )}

        <h2 onClick={() => toggleSection('wearingRibbands')}>Wearing of Medals Ribbands</h2>
        {isOpen.wearingRibbands && (
          <ul className="wearing-medals__medals-list">
            <li>
              <b>Full Medals:</b>
              <ul>
                <li>
                  <b>Occasions:</b> Ceremonial occasions with specified uniforms and official functions at designated locations.
                </li>
              </ul>
            </li>
            <li>
              <b>Miniature Medals:</b>
              <ul>
                <li>
                  <b>Occasions:</b> Mess dress, lounge suit, dinner jacket, or national dress during specific events.
                </li>
              </ul>
            </li>
            <li>
              <b>Medal Ribbands:</b>
              <ul>
                <li>
                  <b>Occasions When Worn:</b> Worn on uniform unless specified exceptions like over-garments or combat dress.
                </li>
              </ul>
            </li>
            <li>
              <b>Chief of the Army Staff Commendation Badge:</b>
              <ul>
                <li>
                  <b>Usage:</b> Worn on uniforms except combat dress or over-garments, with specific placement guidelines.
                </li>
              </ul>
            </li>
          </ul>
        )}

        <h2 onClick={() => toggleSection('wearingClasps')}>Wearing of Clasps with Ribbands</h2>
        {isOpen.wearingClasps && (
          <div className='claps'>
             <p>
            The proposal of 'Wearing of clasps with ribbands and medal' both has been considered at appropriate level. It would be a matter of great honour and pride for a soldier to display his services rendered in various Op/Field areas through clasps on the ribbands and medals. Therefore, wearing of clasps by individuals along with medals and ribbands both is hereby authorized.
          </p>
          </div>
         
        )}

        <h2 onClick={() => toggleSection('affiliation')}>Affiliation of Indian Army Units with Other Services</h2>
        {isOpen.affiliation && (
          <ul className="wearing-medals__medals-list">
            <li>
              <b>Affiliation with Navy:</b>
              <ul>
                <li>Operations involving beach assaults or landings.</li>
                <li>Close cooperation in UN Peace Missions for at least three months.</li>
                <li>Joint efforts in counter-insurgency operations.</li>
              </ul>
            </li>
            <li>
              <b>Affiliation with Air Force:</b>
              <ul>
                <li>Airborne operations in coordination with the Air Force.</li>
                <li>Close air support to ground troops requiring detailed planning.</li>
                <li>Counter-insurgency missions of significant importance.</li>
              </ul>
            </li>
          </ul>
        )}
      
    </div>
  );
};

export default WearingOfMedals;
