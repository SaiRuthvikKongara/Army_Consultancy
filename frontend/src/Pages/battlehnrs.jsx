import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './battlehnrs.css';


const BattleHonours = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="battle-honours-page">
      <div className="battle-honours-container">
        <div className="battle-honours-content">

          <h1>Battle Honours</h1>
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
          <p>
            1. Recognition of gallant performance by grant of Battle Honours, Theatre Honours and Honour Titles to units reinforces motivation of soldiers for collective acts of valour during war. It caters to the intrinsic and extrinsic needs of the arms in combat. Units will be awarded the honours due to them for taking active and creditable part in claiming an award of Battle Honours.
          </p><br></br>

          <p>
            2. Battle Honours are official commemoration of battles, actions or engagements and are awarded to Regiments whose units or sub-units have taken active and creditable part in these operations. Battle Honours may be awarded in the form of ‘Battle Honour, Theatre Honour or Honour Title’.
          </p><br></br>

          <p>
            3. Battle/Theatre Honours and Honour Titles so awarded will be included in the title of a unit. Details of the award will be published at the appropriate place in the Army List from time to time.
          </p><br></br>

          <p>
            4. The policy regarding emblazonment of Battle Honours on Colonelours has been laid down in Government of India, Ministry of Defence Office Memorandum No F3/17/68/D(Ceremonials) dated 24 October 68, reproduced in AO 429/69.
          </p><br></br>

          <p>
            5. Only the Mechanised Forces, the Corps of Engineers, and the Infantry, including embodied Units of the Territorial Army, are eligible for the award of Battle Honours and Theatre Honours. Honour Titles can be claimed only by Artillery units including embodied units of the Territorial Army, Air Defence Artillery Units, and Army Aviation Corps Units.
          </p><br></br>

          <p>
            6. Signal Regiments/Signal Units whose collective performance in war merits due recognition will be eligible for the award of Unit Citation by COAS. The Unit Citation will be claimed in the same manner as is being done in peacetime. A separate committee will examine these claims at the Army Headquarters as is being done presently.
          </p><br></br>

          <p>Conditions for claiming Battle Honours are as under:</p>

          <ul className="battle-honours-list">
            <li>
              (a) The Units must have been committed to battle, action or engagement listed in the tabulated list which will be issued separately by Army Headquarters within the time limit laid down therein, and have been actively engaged with enemy troops.
            </li><br></br>
            <li>
              (b) There is no question of an honour being awarded merely because a unit was present at a battle. It must have taken active part in it and fought creditably with distinction in the operation. It is emphasized that heavy casualties, although they may indicate heavy fighting, will not be considered as the sole reason for the award of this honour.
            </li><br></br>
            <li>
              (c) As a general rule, the Headquarters and 50 percent of a unit must have been present in the battle. Three particular extensions of this general rule will, however, be permitted:
              <ul className="battle-honours-list">
                <li>
                  (i) Infantry Battalions, which on occasions had to fight on a company basis independently, claims may be submitted where 50 percent of such sub-units were engaged in an operation. Where a battalion had sub-units committed simultaneously to different operations at the same time, only one claim per unit may be submitted to cover any one period of time.
                </li>
                <li>
                  (ii) Where for operational reasons, a part of one unit was combined with another unit to continue the fight as one unit, the claims may be submitted by both units as under:
                  <ul className="battle-honours-list">
                    <li>(aa) By the unit providing the HQ and its remnants.</li>
                    <li>(bb) By the unit combining with the above, provided its strength was a minimum of 50 percent.</li>
                  </ul>
                </li>
                <li>
                  (iii) In very exceptional cases, a squadron/company or equivalent sub-unit may be considered as a unit if it took part in certain operations independently of its parent unit and the strength of the squadron/company concerned consisted of at least 50 percent of its personnel.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BattleHonours;
