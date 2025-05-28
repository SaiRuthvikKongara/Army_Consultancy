import React, { useState, useEffect } from "react";
import "./pic1.css";
import { imageService } from '../../services/imageService';

const ArmyGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const galleryImages = await imageService.getImagesByCategory('Gallery');
        const selectedPhotos = galleryImages.slice(0, 5).map((img, index) => ({
          id: index + 1,
          src: imageService.getImage(img._id),
          title: getPhotoTitle(index)
        }));
        setPhotos(selectedPhotos);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchPhotos();
  }, []);

  const getPhotoTitle = (index) => {
    const titles = [
      "Operation Victory",
      "Rescue Mission",
      "Army Training",
      "Patrol Operations",
      "Republic Day Parade"
    ];
    return titles[index] || "Gallery Image";
  };

  return (
    <div className="army-gallery-container">
      <header className="army-gallery-header">
        <h1>Indian Army Photo Gallery</h1>
      </header>
      <section className="army-gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="army-photo-card">
            <img className="army-photo-img" src={photo.src} alt={photo.title} />
            <div className="army-photo-title">{photo.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArmyGallery;
