import React from 'react';
import './Comm.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import img4 from '../Images/4.png';
import img5 from '../Images/5.png';
import img6 from '../Images/6.png';
import img7 from '../Images/7.png';

function Comm() {
  const navigate = useNavigate();

  const commands = [
    { name: 'Southern Command', img: img1, action: () => navigate("/SouthCommand") },
    { name: 'Eastern Command', img: img2, action: () => navigate("/eastern-command") },
    { name: 'Western Command', img: img3, action: () => navigate("/western-command") },
    { name: 'Central Command', img: img4, action: () => navigate("/central-command") },
    { name: 'Northern Command', img: img5, action: () => navigate("/northern-command") },
    { name: 'ARTRAC', img: img6, action: () => navigate("/artrac") },
    { name: 'South Western Command', img: img7, action: () => navigate("/south-western-command") },
  ];

  return (
    <div className="comm-app">
      <header className="comm-header">
        <h1>INDIAN ARMY COMMANDS</h1>
      </header>
      <section className="comm-commands-section">
        {commands.map((command, index) => (
          <div
            key={index}
            className="comm-command-card"
            style={{ backgroundImage: `url(${command.img})` }}
            onClick={command.action}
          >
            <div className="comm-command-overlay">
              <span className="comm-command-link">{command.name}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Comm;
