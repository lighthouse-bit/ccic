import React from 'react';
import './CSS/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>Dashboard</li>
          <li>User Profile</li>
          <li>Typography</li>
          <li>Images</li>
          <li>Messages</li>
          <li>Donations</li>
          <li>Notifications</li>
        </ul>
      </div>
      <div className="sidebar-account">
        <ul>
          <li>Settings</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;