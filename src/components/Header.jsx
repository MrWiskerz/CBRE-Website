import React from 'react';
import './Header.css';
import { FaBars, FaCog } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="src/assets/logo.png" alt="Logo" className="logo" />
        <h1 className="title">
            <span className="bold">First-Name Last-Name</span>'s 360 Board
        </h1>
      </div>
      <div className="header-right">
        <FaBars className="icon menu-icon" />
        <FaCog className="icon settings-icon" />
        <div className="welcome">
          <span>Welcome, First-Name Last-Name
          </span>
          <img src="src/assets/profile.png" alt="Profile" className="profile-picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
