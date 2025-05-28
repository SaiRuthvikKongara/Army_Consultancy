import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './DistinguishedServiceAwds.css';
import { imageService } from '../services/imageService';

const DistinguishedServiceAwds = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [awards, setAwards] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const awardImages = await imageService.getImagesByCategory('Awards');
        const awardData = awardImages.map((img, index) => ({
          id: index + 1,
          src: imageService.getImage(img._id),
          title: getAwardTitle(index),
          link: getAwardLink(index)
        }));
        setAwards(awardData);
      } catch (error) {
        console.error('Error fetching award images:', error);
      }
    };

    fetchAwards();
  }, []);

  const getAwardTitle = (index) => {
    const titles = [
      "Bharat Ratna",
      "Padma Vibhushan",
      "Padma Bhushan",
      "Padma Shri",
      "Jeevan Raksha Padak",
      "Vishisht Seva Medal",
      "Yuddh Seva Medal",
      "Prakram Padak",
      "General Service Medal 1947",
      "Samayna Seva Medal",
      "Special Service Medal",
      "Siachen Glacier Medal",
      "Raksha Medal",
      "Sangram Medal",
      "OP Vijay Medal",
      "Sainya Seva Medal",
      "High Altitude Medal",
      "Videsh Seva Medal"
    ];
    return titles[index] || "Award";
  };

  const getAwardLink = (index) => {
    const links = [
      "https://en.wikipedia.org/wiki/Bharat_Ratna",
      "https://en.wikipedia.org/wiki/Padma_Vibhushan",
      "https://en.wikipedia.org/wiki/Padma_Bhushan",
      "https://en.wikipedia.org/wiki/Padma_Sri",
      "https://en.wikipedia.org/wiki/Jeevan_Raksha_Padak",
      "https://en.wikipedia.org/wiki/Vishisht_Seva_Medal",
      "https://en.wikipedia.org/wiki/Yuddh_Seva_Medal",
      "https://en.wikipedia.org/wiki/Prakram_Padak",
      "https://en.wikipedia.org/wiki/General_Service_Medal_1947",
      "https://en.wikipedia.org/wiki/Samayna_Seva_Medal",
      "https://en.wikipedia.org/wiki/Special_Service_Medal",
      "https://en.wikipedia.org/wiki/Siachen_Glacier_Medal",
      "https://en.wikipedia.org/wiki/Raksha_Medal",
      "https://en.wikipedia.org/wiki/Sangram_Medal",
      "https://en.wikipedia.org/wiki/OP_Vijay_Medal",
      "https://en.wikipedia.org/wiki/Sainya_Seva_Medal",
      "https://en.wikipedia.org/wiki/High_Altitude_Medal",
      "https://en.wikipedia.org/wiki/Videsh_Seva_Medal"
    ];
    return links[index] || "#";
  };

  return (
    <div className="award-container"><br />
      <h1>Distinguished Service Awards</h1><br />
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
        The Distinguished Service Awards are conferred for exceptional service in the fields of Art, Literature, and Science, and in recognition of public service of the highest order. The decoration is awarded by the President of India through a Sanad under his hand and seal.
      </p>
      <p>
        These awards are available to any person, regardless of race, occupation, position, or sex.
      </p><br />
      

      <section className="award-images">
        <h2>Click on the Award to Learn More</h2>

        <div className="award-images-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-image">
              <a href={award.link} target="_blank" rel="noopener noreferrer">
                <img src={award.src} alt={award.title} />
                <p>{award.title}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DistinguishedServiceAwds;
