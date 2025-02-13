import React from 'react';
import './CSS/MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <h1>WELCOME BACK, ADMIN!</h1>
      </div>
      <div className="stats">
        <div className="stat-box">
          <h3>Used Space</h3>
          <p>20/50gb</p>
          <button>Get space</button>
        </div>
        <div className="stat-box">
          <h3>Donations</h3>
          <p>$21,000</p>
          <p>Last 24 hrs</p>
        </div>
        <div className="stat-box">
          <h3>Messages</h3>
          <p>14</p>
          <p>Last 24 hrs</p>
        </div>
        <div className="stat-box">
          <h3>New Followers</h3>
          <p>26</p>
          <p>Last 24 hrs</p>
        </div>
      </div>
      <div className="totals">
        <div className="total-box">
          <h3>Total Donations</h3>
          <p>$55,000</p>
        </div>
        <div className="total-box">
          <h3>Total Page Views</h3>
          <p>500+</p>
        </div>
        <div className="total-box">
          <h3>Total Messages</h3>
          <p>1000+</p>
        </div>
      </div>
      <div className="updates">
        <h2>Latest updates</h2>
        <div className="update-item">
          <p>2 hours ago</p>
          <p>+3 new followers on Instagram</p>
        </div>
        <div className="update-item">
          <p>4 hours ago</p>
          <p>Micheal Ogbonna added a new blog post</p>
        </div>
        <div className="update-item">
          <p>6 hours ago</p>
          <p>You received $300!</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;