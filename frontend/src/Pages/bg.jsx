import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './bg.css';

const Background = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();

  return (
    <div className="background-page">
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate("/")}>
        🏠︎
        </button>
      </div>
      <div className="background-content">
      
      <h1>Background</h1>
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
      <p style={{ fontSize: '17px' }}>
        "This world rests on the arms of heroes like a son on those of his sire. He, therefore, that is a hero deserves respect under every circumstance. There is nothing higher in the three worlds than heroism. The hero protects and cherishes all, and things depend upon the hero".
      </p>

      <p style={{ fontSize: '17px' }}>
        GALLANTRY has always commanded respect and recognition. In primitive societies, the leadership of the clan or tribe fell upon the bravest. The origin of the state saw the brave elevated to kingship. Indra, the most distinguished of the brave among the Indo-Aryans, became the King and the Commander.
      </p>

      <p style={{ fontSize: '17px' }}>
        The evolution of regular armies, however, demanded an elaboration of the system of honours and awards. In the Vedic Age, this was done by granting a share to soldiers in the booty.
      </p>

      <h2>EPIC Age</h2>
      <p style={{ fontSize: '17px' }}>
  In the Epic Age, more emphasis came to be laid upon heavenly rewards. This development can possibly be related to the philosophical and religious learnings of the age, which were reflected in the attitude of the people. In the Mahabharata, the merit of dying as a martyr in the cause of Dharma is all along appreciated as the easiest way to heaven. In fact, any kind of death on the battlefield was considered glorious.
</p>

      <p style={{ fontSize: '17px' }}>
        "They that die slaughtered by chance go to the world of gods and kings; they that die with the thought. I will die' join the angels' they that hold out against all odds, these go to the home of Brahma; while even those that have begged for mercy, if they still die with their faces to the foe, go to the Guhyaka world; moreover, those that die anyhow on the field of battle, even if killed by accident, go to the Kurus of the North after death." The epic concept of war is fully endorsed in the later military annals of India.
      </p>
      <p style={{ fontSize: '17px' }}>
        This concept, reiterated in literature, later found expression in the institution of Virakals, i.e., memorials to the gallants, widely witnessed in southern India. That such memorials had come into vogue about the 2nd century is indicated in the Sangam literature. When a gallant soldier fell fighting, his compatriots usually marked the spot by raising there a stone bearing the name and fame of the fallen hero.
      </p>

      <p style={{ fontSize: '17px' }}>
        The Arthasastra of Kautilya gives an elaborate account of the gallantry awards. It even specifies the awards for various gallant acts. "A hundred thousand (panas) for slaying the king (the enemy); fifty thousand for slaying the commander-in-chief or the heir-apparent; ten thousand for slaying the chief of the infantry; twenty for bringing a head; and twice the pay in addition to whatever is seized."
      </p>

      <h2>Medieval Period</h2>
      <p style={{ fontSize: '17px' }}>
        GRANTS of titles, fiefs, robes of honour, cash awards, and the privilege to use ceremonial music were often made to honour the gallant in medieval India as well.
      </p>
      <p style={{ fontSize: '17px' }}>
        The Sultans of Delhi honoured their distinguished nobles with the title of Khan. The lesser nobles were granted the titles of Malik or Amir. Persons of merit were appointed to high offices with titles of honour. Nobles were also bestowed with other dignities which were designated as 'Maratib'. It signified the privilege to use dresses, sword, dagger, horses and elephants, ensigns, and musical instruments of a superior type. Fiefs known as Aqta were also granted in recognition of meritorious service.
      </p>

      <h2>Modern India (British period)</h2>
      <p style={{ fontSize: '17px' }}>
        The history of present-day Indian medals is traceable to the days of Company rule in India. The Honorable East India Company not only brought in British customs on medals but also introduced some new concepts. To illustrate the point, it made a departure from the general British custom of restricting the grant of medals to officers by making all ranks eligible to them. Some early institutions of the company included the Deccan Medal for service during 1778-84, the Mysore Medal (1791-92), and the Seringapatanam Medal (1799).
      </p>
      <p style={{ fontSize: '17px' }}>
        About the middle of the 19th century, the custom of rewarding individual acts of extraordinary gallantry came into vogue in Britain. The Victoria Cross, the most coveted of all decorations, was instituted in 1756 to honour the gallant acts of British soldiery in the Crimean War.
      </p>

      <h2>Independent India</h2>
      <p style={{ fontSize: '17px' }}>
        British rule over India came to an end on 14 August 1947, and with it also ended the old institution of British honours and awards. The new Indian awards could come into being only with the dawn of the Republic on 26 January 1950.
      </p>
      <p style={{ fontSize: '17px' }}>
        But on the basis of proposals made by early May 1948, the new awards, known as Param Vir Chakra, Maha Vir Chakra, and Vir Chakra, were finally selected in June 1948.
      </p>
      <p style={{ fontSize: '17px' }}>
        Thus, on becoming a Republic, decorations and medals were introduced to honour the deeds of gallantry and valor by members of the Indian defense forces. Gradually, with the passage of time, the range of awards kept on expanding. A complete break with the past was, however, not possible because members of the Indian armed forces still held British honours and awards, thus substituting the British decorations and medals, which could no longer be granted to Indians.
      </p>

      <p style={{ fontSize: '17px' }}>
        A perusal of the British and Indian awards will show that the Param Vir Chakra to the Victoria Cross, the Maha Vir Chakra to the Indian Order of Merit, and the Vir Chakra are equivalent to the Military Cross. The other group of awards, i.e., the Ashoka Chakra series, meant for gallantry other than in the face of the enemy, was probably meant to replace the George Cross, Albert Medal, and George Medal.
      </p>

      <p style={{ fontSize: '17px' }}>
        The first batch of decorations introduced on 26 January 1950 was thus made effective with retrospective effect from 15 August 1947. The Vir Chakra and Ashoka Chakra series became important institutions of this batch.
      </p>

      <p style={{ fontSize: '17px' }}>
        The second installment came in March 1953 in the form of the Meritorious Service Medal, Long Service and Good Conduct Medal, Territorial Army Decoration, and Territorial Army Medal. Then followed the highest award of the land—the Bharat Ratna—and Padma series in 1954. On 26 January 1960, some more medals were instituted, and these included the Vishisht Seva Medal (in the classes), Sainya Seva Medal, Videsh Seva Medal, and Sena, Nao Sena, and Vayu Sena Medals.
      </p>

      <p style={{ fontSize: '17px' }}>
        As a result of the Indo-Pak conflict of 1965, the Raksha Medal, Samar Seva Star, and some others were introduced. Then came the 1971 war, and it led to the institution of the Sangram Medal, Poorvi Star, and Paschimi Star.
      </p>

      <p style={{ fontSize: '17px' }}>
        For the purpose of classification, Indian honours and awards can be divided into two categories:
      </p>
      <ul>
        <li>Gallantry awards</li>
        <li>Non-gallantry awards</li>
      </ul>
      </div>
    </div>
  );
};

export default Background;







