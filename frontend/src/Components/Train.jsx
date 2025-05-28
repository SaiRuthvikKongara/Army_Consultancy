import React from 'react';
import './Train.css';

const Train = () => {
  return (
    <div className="training-section">
      {/* Common Section */}
      <section className="content-section">
        <div className="content">
          <h1>Welcome to the Indian Army Training Portal</h1>
          <p>Building strength, resilience, and excellence in the nation’s defenders.</p>
          <a href="#programs" className="cta-button">Explore Programs</a>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="content-section">
        <h2>Our Training Programs</h2>
        <div className="program-cards">
          <div className="program-card">
            <h3>Basic Combat Training</h3>
            <p>Foundation course for all new recruits, focusing on physical fitness, weapons handling, and survival skills.</p>
          </div>
          <div className="program-card">
            <h3>Advanced Tactical Training</h3>
            <p>Specialized training in strategy, counter-terrorism, and operations in diverse terrains.</p>
          </div>
          <div className="program-card">
            <h3>Leadership Development</h3>
            <p>Programs designed to cultivate leadership qualities and team management skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Train;
