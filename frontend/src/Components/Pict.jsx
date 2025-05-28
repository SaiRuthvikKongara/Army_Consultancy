import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router
import './Pict.css';

const Pict = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const items = [
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/DETAILED_NOTIFICATION_FOR_SSC_T_-64.pdf',
      text: 'SSC Tech 64: Engineering Graduates Apply Now',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/NOTIFICATION_FOR_TES-53_COURSE.pdf',
      text: 'TES-53: 10+2 Entry Scheme for July 2025',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/NDA_NOTIFICATION.pdf',
      text: 'NDA Exam 2025: Dates & Details Announced',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/SSB_NOTIFICATION.pdf',
      text: 'SSB 2025: Key Instructions for Applicants',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/AGNIVEER_NOTIFICATION.pdf',
      text: 'Agniveer Exam 2025: Apply Now',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/AMC_NOTIFICATION.pdf',
      text: 'Army Medical Corps: Exam Details 2025',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/JAG_NOTIFICATION.pdf',
      text: 'JAG-32: Recruitment for Law Graduates',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/TGC_NOTIFICATION.pdf',
      text: 'TGC-139: Engineering Graduates Entry',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/UES_NOTIFICATION.pdf',
      text: 'University Entry Scheme: Final Year Students',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/TA_NOTIFICATION.pdf',
      text: 'Territorial Army: Officer Recruitment 2025',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];
  
  
  
  

  const imageArray = [
    '/Images/d5.jpg', // Use absolute paths starting from the public folder
    '/Images/ind.jpg',
    '/Images/ind2.jpg',
    '/Images/ind3.jpg',
    '/Images/ind4.jpg',
    '/Images/ind5.jpg',
    '/Images/ind6.jpg',
    '/Images/ind7.jpg',
    '/Images/ind8.jpg',
    '/Images/ind9.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleLoginClick = () => {
    window.open('/login', '_blank'); // Open login page in a new tab
  };

  return (
    <div className="pict-container" style={{ backgroundImage: `url(${imageArray[currentImageIndex]})` }}>
      <div className="pict-image">
        <section className="hero">
          <div className="tagline"><b>​S​​🇪​​🇼​​🇦​ ​P​​🇦​​🇷​​🇦​​🇲​​🇴​ ​D​​🇭​​🇦​​🇷​​🇲​​🇦​</b></div>
        </section>
        <img src={imageArray[currentImageIndex]} alt="" />
      </div>

      {/* Show updates only if popup is not visible */}
      {!showPopup && (
        <div
          className="updates-text"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <h6>ᴜᴘᴅᴀᴛᴇꜱ</h6>
        </div>
      )}

      <button type="button" className="login-btn" onClick={handleLoginClick}>
        <h6>ʟᴏɢɪɴ</h6>
      </button>

      {showPopup && (
        <div
          className="pict-popup"
          onMouseEnter={() => setShowPopup(true)} // Keep the box visible when the mouse is inside it
          onMouseLeave={() => setShowPopup(false)} // Hide the box when the mouse leaves the box
        >
          <div className="pict-header">
            <legend className="pict-title">What's New</legend>
            {/* Link to the updates page */}
            <Link to="/UpdatesPage" className="pict-view-all">View All</Link>
          </div>
          <ul className="pict-list">
  {items.map((item, index) => (
    <li key={index}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.text}
      </a>
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
};

export default Pict;
