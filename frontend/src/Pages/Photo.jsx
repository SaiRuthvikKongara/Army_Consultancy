import React, { useState, useEffect } from "react";
import "./Photo.css";
import { useNavigate } from 'react-router-dom';
import { imageService } from '../services/imageService';

function Photo() {
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("Photo Gallery");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [mainPhotos, setMainPhotos] = useState([]);

  useEffect(() => {
    // Fetch main gallery images
    const fetchMainGallery = async () => {
      try {
        const galleryImages = await imageService.getImagesByCategory('Gallery');
        const mainImages = galleryImages.slice(0, 7).map((img, index) => ({
          id: index + 1,
          src: imageService.getImage(img._id),
          title: getGalleryTitle(index),
          alt: "View Gallery",
          relatedImages: []
        }));
        setMainPhotos(mainImages);
        setCurrentImages(mainImages);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchMainGallery();
  }, []);

  const getGalleryTitle = (index) => {
    const titles = [
      "Main Photo Gallery",
      "World War 1",
      "Operations",
      "Disaster Management",
      "Training",
      "Republic Day",
      "Modernization"
    ];
    return titles[index] || "Gallery";
  };

  const handleImageClick = async (photo) => {
    setCurrentTitle(photo.title);
    try {
      const galleryImages = await imageService.getImagesByCategory('Gallery');
      const startIndex = (photo.id - 1) * 25;
      const relatedImages = galleryImages
        .slice(startIndex, startIndex + 25)
        .map(img => ({
          src: imageService.getImage(img._id),
          caption: "Related Image"
        }));
      setCurrentImages(relatedImages);
    } catch (error) {
      console.error('Error fetching related images:', error);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const backToMainPage = () => {
    setCurrentImages(mainPhotos);
    setCurrentTitle("Photo Gallery");
  };
  
  const navigate = useNavigate();
  return (
    <div className="photo-page">
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate("/")}>
          🏠︎
        </button>
      </div>
      <h1 className="photo-title">{currentTitle}</h1>
      <div className="photo-grid">
        {currentImages.map((image, index) => (
          <div key={index} className="photo-item" onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.alt || image.title} />
            <div className="photo-caption">{image.title}</div>
          </div>
        ))}
      </div>
      {modalOpen && modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage.src} alt={modalImage.caption} />
            <div className="modal-caption">{modalImage.caption}</div>
          </div>
        </div>
      )}
      {currentTitle !== "Photo Gallery" && (
        <button className="back-button" onClick={backToMainPage}>
          Back to Gallery
        </button>
      )}
    </div>
  );
}

export default Photo;
  