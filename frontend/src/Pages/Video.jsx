import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Video.css";

const videos = [
  { 
    
    id: 7, 
    title: "Indian Army", 
    links: [
      { label: "A Life Less Ordinary", url: "https://youtu.be/3t5M10gBVCc?si=T31XFkAoSMiloyrf" },
      { label: "Indian Military Academy", url: "https://youtu.be/OEk59gK-FjA?si=r9VEuz8_S5Xht0Kg" },
      { label: "The Untold Story- Kargil 1999", url: "https://youtu.be/MiWtJdnix30?si=FLMixkSKcJIvHH3V" },
      { label: "The Lion of Ladakh", url: "https://youtu.be/Ynnz9lO3w2w?si=LD702TSLDNRhjCKj" }
    ],
    description: "Celebrate Republic Day with the Indian Army."
  }, 
  { 

    id: 6, 
    title: "Republic Day 2024", 
    links: [
      { label: "Indian Army Hell March 2024", url: "https://youtu.be/cLLBSocTZx0?si=iveTuvK-pPXr7NHA" },
      { label: "Parade", url: "https://www.youtube.com/live/jPYvsngFGIE?si=V2gJRK24-b7ZRo1-" }
    ],
    description: "Celebrate Republic Day with the Indian Army."
  },  
  { 
    id: 3, 
    title: "Indian Army Day 2024", 
    links: [
      { label: "Parade", url: "https://www.youtube.com/live/j_6XGYEfuqk?si=CzmLcHXlDa0Le8Cx" },
      { label: "Indian Army Year 2024", url: "https://youtu.be/xxKEIrKFvqs?si=ab3bdBnHLxwmnlG2" },
      { label: "Beginning of ‘Year of Tech Absorption’", url: "https://youtu.be/EGqVQ_AI4ng?si=yav8RcdxN_78hUQo" },
      { label: "Forging Ahead, Securing Tomorrow", url: "https://youtu.be/Ov1bj1cEZXs?si=gcATgoZZASqj2OLE" },
      
    ],
    description: "Saluting the Brave: Indian Army Day 2024 – A Tribute to Our Heroes!"
  },
  {

    id: 1, 
    title: "Beating Retreat", 
    links: [
      { label: "Faulad Ka Jigar", url: "https://youtu.be/9UI0QQR--LY?si=um9GLLaASc2zHmFE" },
      { label: "ताकत वतन की हमसे है", url: "https://youtu.be/otpG7n0mfLs?si=4_20Yt1PB_qV_kMu" },
      { label: "अग्रणी भारत", url: "https://youtu.be/vRH5OpOcidA?si=oPsjT1MkqIIdYMMP" },
      { label: "वीर भारत", url: "https://youtu.be/tcbcadEwFhc?si=ITLqXBhFN1S87SLT" },
      { label: " शंखनाद", url: "https://youtu.be/dSY58aepEkU?si=CmH4vzV7n4b2c8tE" },
      { label: "संगम", url: "https://youtu.be/g4gjHcfusj8?si=SYhenPfoopMkO3Fo" },
      { label: "भागीरथी", url: "https://youtu.be/lUlDOkcma2Y?si=bKkZnNapNs1ktBAM" },
      { label: "भागीरथी", url: "https://youtu.be/lUlDOkcma2Y?si=bKkZnNapNs1ktBAM" },
      { label: "अर्जुना", url: "https://youtu.be/FVPjJqIbCsE?si=7hAYiDq5IzkXAoIC" }
    ],
    description: "Witness the Elegance and Honor: Beating Retreat – A Tribute to the Indian Army."
  },
  
 

  
  { 
    id: 4, 
    title: "Disaster Management", 
    links: [
      { label: "BIHAR FLOODS 2017", url: "https://youtu.be/q7-9NLlRCGo?si=l7B4t4Le6lNJ9XNk" },
      { label: "GUJARAT FLOODS 2017", url: "https://youtu.be/5HzjaTbcROo?si=6vDBWEsGJiykOIpQ" },
      { label: "Flood Relief at Chennai", url: "https://youtu.be/p9_znvMz8og?si=asihV0PT3OeTzHA_" },
      { label: "OP Megh Rahat", url: "https://youtu.be/0cbBpVam4fk?si=vHHvvnceiG4M7jh7" },
      { label: "Flood Relief at Chennai", url: "https://youtu.be/p9_znvMz8og?si=asihV0PT3OeTzHA_" }
    ],
    description: "See how the Indian Army handles disaster management."
  },
  { 
    id: 5, 
    title: "Events", 
    links: [
      { label: "Captain Jintu Gogoi, Vir Chakra(P) Memorial Football Tournament 2023", url: "https://youtu.be/2YU3Pa3Zj5A?si=pxGQRPWwZn6XakHA" }
    ],
    description: "Get a glimpse of the Indian Army's events."
  },
  { 
    id: 2, 
    title: "1965", 
    links: [
      { label: "Indo-Pak War 1", url: "https://youtu.be/WKuznDoQUHA?si=9o364PlVoJ0HQr6n" },
      { label: "पैटन का पतन", url: "https://youtu.be/Sk2wm9oH11U?si=saf8HPvynyKelLBm" },
      { label: "A Blaze of Glory", url: "https://youtu.be/4EEMqpHslVQ?si=dHGjxwRKx88b-N9M" },
      { label: "Shauryanjali", url: "https://youtu.be/Bus2MZ0reIo?si=9PB5Fo7I8gZcKeiq" },
      { label: "Remembering", url: "https://youtu.be/5_3UXChYvNA?si=j7jUk8mTvri7SSu6" },
      { label: "Battle of Hajipir", url: "https://youtu.be/AmuLKGQskiM?si=2r5emSudievUJhRT" },
      { label: "Prelude to Indo Pak War", url: "https://youtu.be/AZ47QXzAtAw?si=v4nfL23sAL5Q6DFh" }
    ],
    description: "Explore the history of Indo-Pak War."
  },
  
];



function Video() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, "_blank"); // Open the video link in a new tab
    }
  };

  return (
    <div className="video-page">
      {/* Home Button */}
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate("/")}>
        🏠︎
        </button>
      </div>

      <div className="video-container">
        <h3 className="video-title">Video Gallery</h3>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-heading">
                <h2>{video.title}</h2>
              </div>
              <div className="video-links">
                <ul className="link-list">
                  {video.links.map((link, index) => (
                    <li key={index} className="link-item">
                      <a href="#" onClick={() => handleLinkClick(link.url)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="video-description">
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
