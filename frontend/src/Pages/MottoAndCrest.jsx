import React, { useState, useEffect } from "react";
import "./MottoAndCrest.css";
import { imageService } from '../services/imageService';
import Navbar from '../Components/Navbar.jsx';

const MottoAndCrest = () => {
  const [crestImage, setCrestImage] = useState('');

  useEffect(() => {
    const fetchCrest = async () => {
      try {
        const images = await imageService.getImagesByCategory('General');
        const crest = images.find(img => img.name === 'Crest.png');
        if (crest) {
          setCrestImage(imageService.getImage(crest._id));
        }
      } catch (error) {
        console.error('Error fetching crest image:', error);
      }
    };

    fetchCrest();
  }, []);

  return (
    <div>
      <Navbar /> {/* Place Navbar inside the root div */}

      <div className="container1">
        {/* Motto Section */}
        <div className="box motto-box">
          <h1 className="box-title">MOTTO OF THE INDIAN ARMY</h1>
          <p className="box-subtitle">"Service Before Self"</p>
          <div className="box-content">
            <p>
              The motto of the Indian Army is <b>Service Before Self</b>, which reflects the values of sacrifice, dedication, and duty. It emphasizes the commitment of the soldiers to place the welfare of the nation above their personal interests. The Indian Army's motto signifies a strong sense of discipline, honor, and patriotism, encouraging every soldier to serve the country with unwavering loyalty, courage, and resilience. It encapsulates the spirit of selflessness and the highest ideals of military service.
            </p>
            <div className="box-verse">
              <p className="sanskrit-text">"सेवा परमो धर्मः"</p>
              <p>
                This Sanskrit verse translates to "Service is the Highest Duty,"
                resonating with the Indian Army's philosophy and spirit.
              </p>
            </div>
          </div>
        </div>

        {/* Crest Section */}
        <div className="box crest-box">
          <h2 className="box-title">CREST OF THE INDIAN ARMY</h2>
          {crestImage && <img
            src={crestImage}
            alt="Indian Army Crest"
            className="crest-image"
          />}
          <p className="box-content">
            The crest of the Indian Army symbolizes its rich history, valor, and commitment to national service. It features a <b>Lion Capital of Ashoka</b> at the top, which represents courage, strength, and the enduring legacy of India's rich cultural heritage. Beneath the lion, there is a <b>National Motto</b> - "Satyamev Jayate" (Truth Alone Triumphs), reflecting the Indian Army's dedication to truth and righteousness in all its endeavors. The crest is surrounded by a scroll with the words <b>Indian Army</b>, highlighting the pride and honor of serving the nation. The overall design signifies unity, bravery, and the unwavering commitment of the Indian Army to safeguard the country's sovereignty and uphold its values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MottoAndCrest;
