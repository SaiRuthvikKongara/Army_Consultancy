import React from "react";
import { useNavigate } from "react-router-dom";
import "./Chief.css";
// import emblem from "../Images/Emblem.png";
import general from "../Images/General_Image.jpg";

const Chief = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/leaders");
  };

  const handlePreviousChiefs = () => {
    navigate("/officer"); 
  };

  return (
    <div className="chief-card-container">
      <div className="chief-card">
        <img
          className="chief-image"
          src={general}
          alt="Air Chief"
        />
        <div className="chief-content">
          <div className="yellow-line"></div>
          <h2 className="title">Chief of the Army Staff</h2>
          <h3 className="subtitle">General Upendra Dwivedi, PVSM, AVSM</h3>
          <p className="description">
            General Upendra Dwivedi assumed command of the Indian Army on June 30, 2024, after serving as Vice Chief from February 2024. A distinguished officer, he has received several prestigious awards, including the Param Vishisht Seva Medal and the Ati Vishisht Seva Medal. With a career spanning across diverse terrains and operational environments, he has commanded forces in Kashmir, Rajasthan, and Assam, and contributed significantly to the modernization of the Indian Army. Known for his expertise in counter-terrorism and his passion for technology, General Dwivedi has also played a key role in enhancing military capabilities and promoting indigenous equipment. He holds multiple advanced degrees, including an M Phil and two Master's degrees.
          </p>
          <div className="button-container">
            <button className="button" onClick={handleReadMore}>Read More</button>
            <button className="button" onClick={handlePreviousChiefs}>Previous Chiefs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chief;
