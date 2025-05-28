import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import AboutUs from '../Components/AboutUs.jsx';
import Chief from '../Components/Chief.jsx';
import Gallery from '../Components/Gallery.jsx';
import Footer from '../Components/Footer.jsx';
import Pict from '../Components/Pict.jsx';
import Flag_Logo from '../Images/Army_Logo.png';
import Command from '../Components/Comm.jsx';

import './HomePage.css';

const HomePage = () => {
    // Scroll to top when the page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="homepage-container">
            {/* Header Section */}
            <header className="homepage-header">
                <img src={Flag_Logo} alt="Flag Logo" className="logo" />
                <h1 className="indian-army-title">
                    INDIAN ARMY <span className="saffron">/</span> <span className="white">/</span> <span className="green">/</span> भारतीय थलसेना
                </h1>
            </header>

            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section / Introductory Image */}
            <Pict />

            {/* About Us Section */}
            <div id="about-us-section">
                <AboutUs />
            </div>

            {/* Chief Section */}
            <Chief />

            {/* Gallery Section */}
            <div id="gallery-section">
                <Gallery />
            </div>

            {/* Command Section */}
            <Command />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;
