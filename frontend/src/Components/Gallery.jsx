import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import { imageService } from '../services/imageService';

function Gallery() {
  const navigate = useNavigate();
  const [galleryImage, setGalleryImage] = useState('');

  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const images = await imageService.getImagesByCategory('General');
        const galleryImg = images.find(img => img.name === 'G_Image.jpg');
        if (galleryImg) {
          setGalleryImage(imageService.getImage(galleryImg._id));
        }
      } catch (error) {
        console.error('Error fetching gallery image:', error);
      }
    };

    fetchGalleryImage();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-text">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle">Glimpses of the Indian Air Force</p>
          <div className="gallery-buttons">
            <button
              className="gallery-button"
              onClick={() => navigate("/photo")}
            >
              Photo Gallery
            </button>
            <button
              className="gallery-button"
              onClick={() => navigate("/video")}
            >
              Video Gallery
            </button>
          </div>
        </div>
        <div className="gallery-image">
          {galleryImage && (
            <img
              src={galleryImage}
              alt="Gallery"
              className="right-side-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
