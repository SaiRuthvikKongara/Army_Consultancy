import React, { useState, useEffect } from "react";
import Navbar from '../Components/Navbar.jsx';
import './Organization.css';
import { imageService } from '../services/imageService';

const Organization = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const badgeImages = await imageService.getImagesByCategory('Badges');
        const badgeData = badgeImages.map((img, index) => ({
          id: index + 1,
          src: imageService.getImage(img._id),
          title: getBadgeTitle(index)
        }));
        setBadges(badgeData);
      } catch (error) {
        console.error('Error fetching badge images:', error);
      }
    };

    fetchBadges();
  }, []);

  const getBadgeTitle = (index) => {
    const titles = [
      "General",
      "Lieutenant General",
      "Major General",
      "Brigadier",
      "Colonel",
      "Lieutenant Colonel",
      "Lieutenant",
      "Major",
      "Captain",
      "Subedar Major",
      "Subedar",
      "Naib Subedar",
      "Havildar",
      "Naik",
      "Lance Naik",
      "Sepoy"
    ];
    return titles[index] || "Badge";
  };

  return (
    <div>
      <Navbar /> {/* Placing Navbar inside the root div */}

      <div className="army-org-container">
        <h1>Indian Army Organization</h1>

        {/* Section 1: Introduction */}
        <section className="army-org-section">
          <h2>Introduction to the Indian Army</h2>
          <p>
            The Indian Army, the largest component of the Indian Armed Forces, plays a crucial role in ensuring national security and unity. The President of India serves as its Supreme Commander, while the Chief of Army Staff (COAS) leads its professional operations. Established on 1 April 1895, the Army evolved by integrating the presidency armies of the East India Company and princely state forces. Its rich history includes participation in significant battles and campaigns worldwide, earning numerous honours.
            <br /><br />
            The Army's mission encompasses defending against external aggression, addressing internal threats, maintaining peace, and conducting humanitarian rescue operations during crises. It is a vital element of national power alongside the Navy and Air Force. The Indian Army has engaged in major conflicts with Pakistan and China, as well as notable operations like Operation Vijay and Operation Meghdoot. It has also contributed extensively to United Nations peacekeeping missions and participated in World War I and II.
            <br /><br />
            With over 1.2 million active personnel, the Indian Army is the world's largest standing force. Divided into seven commands, its operational structure includes divisions and regiments responsible for recruitment and training. The Army is actively modernizing through initiatives like the Futuristic Infantry Soldier As a System (F-INSAS) and upgrades to its armoured, artillery, and aviation capabilities.
          </p>
        </section>

        {/* Section 2: Organizational Structure */}
        <section className="army-org-section">
          <h2>Organizational Structure</h2>
          <p>The organizational structure of the Indian Army is designed to ensure effective command and control, streamline operations, and maintain a high level of preparedness. Here's an overview:</p>

          <h3>Army Headquarters (HQ)</h3>
          <p>Located in New Delhi, the Army HQ is responsible for the overall command, control, and administration of the Indian Army. It is headed by the Chief of the Army Staff (COAS), a four-star general.</p>

          <h3>Commands</h3>
          <p>Below the Army HQ are the various Army Commands, which are geographical and operational units. Each command is headed by a General Officer Commanding-in-Chief (GOC-in-C), typically a Lieutenant General. The Indian Army is divided into seven commands:</p>
          <ul>
            <li>Northern Command (Udhampur, Jammu & Kashmir)</li>
            <li>Western Command (Chandimandir, Haryana)</li>
            <li>Eastern Command (Kolkata, West Bengal)</li>
            <li>Southern Command (Pune, Maharashtra)</li>
            <li>Central Command (Lucknow, Uttar Pradesh)</li>
            <li>South Western Command (Jaipur, Rajasthan)</li>
            <li>Army Training Command (ARTRAC) (Shimla, Himachal Pradesh)</li>
          </ul>

          <h3>Corps</h3>
          <p>Each command consists of several corps, which are field formations responsible for specific operational areas. A corps is commanded by a Lieutenant General. Types of corps include:</p>
          <ul>
            <li><strong>Strike Corps:</strong> Focused on offensive operations.</li>
            <li><strong>Holding Corps:</strong> Responsible for defensive operations.</li>
            <li><strong>Mixed Corps:</strong> Combination of both offensive and defensive roles.</li>
          </ul>

         <h3>Divisions</h3>
        <p>A corps is composed of multiple divisions, each commanded by a Major General. Divisions are the primary combat formations and are categorized into different types based on their operational role. Types of divisions include:</p>
        <ul>
          <li><strong>Infantry Divisions:</strong> Mainstay for ground combat.</li>
          <li><strong>Armoured Divisions:</strong> Focus on armored warfare.</li>
          <li><strong>Artillery Divisions:</strong> Specialize in artillery operations.</li>
        </ul>

        <h3>Brigades</h3>
          <p>A division consists of several brigades, each led by a Brigadier. Brigades are made up of battalions and support elements.</p>

          <h3>Battalions</h3>
          <p>A brigade typically includes three to four battalions, each commanded by a Colonel. Battalions are the main fighting units of the Infantry.</p>

          <h3>Companies</h3>
          <p>A battalion consists of several companies, each led by a Major or Captain. Companies are made up of platoons.</p>

          <h3>Platoons and Sections</h3>
          <p>A company consists of several platoons, each led by a Lieutenant or Captain. A platoon consists of several sections, each led by a non-commissioned officer (NCO).</p>

          <p>This hierarchical structure ensures that the Indian Army can effectively manage its operations and maintain readiness for any situation.</p>
      </section>

        {/* Section 3: Rank Structure */}
        <section className="army-org-section">
          <h2>Rank Structure</h2>
          <p>The rank structure of the Indian Army follows a hierarchical system, starting from enlisted personnel to commissioned officers:</p>
          <div className="badges-grid">
            {badges.map((badge) => (
              <div key={badge.id} className="badge-card">
                <img src={badge.src} alt={badge.title} />
                <h3>{badge.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Specialized Forces */}
        <section className="army-org-section">
          <h2>Specialized Forces</h2>
          <p>The Indian Army also has specialized forces that handle specific operations such as:</p>
          <ul>
            <li>Special Forces (Para SF)</li>
            <li>National Security Guard (NSG)</li>
            <li>Army Aviation Corps</li>
            <li>Ghatak Force</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Organization;
