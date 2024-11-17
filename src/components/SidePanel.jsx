import React, { useEffect } from 'react';
import './SidePanel.css';
import { FaHome, FaCalendarAlt, FaGlobe, FaRobot, FaComments } from 'react-icons/fa'; // Import icons

const SidePanel = () => {
  // Get the base URL of the site
  const baseUrl = window.location.origin;

  useEffect(() => {
    const links = document.querySelectorAll('.sidebar-button');
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, []);

  return (
    <div className="sidebar">
      <h1 className="titleSideBar">
        <span className="bold">First-Name Last-Name</span>'s 360 Board
      </h1>
      <div className="sidebar-buttons">
        <a href={`${baseUrl}/dashboard.html`} className="sidebar-button">
          <FaHome className="button-icon" /> Dashboard
        </a>
        <a href={`${baseUrl}/calendar.html`} className="sidebar-button">
          <FaCalendarAlt className="button-icon" /> Calendar
        </a>
        
        <a href={`${baseUrl}`} className="sidebar-button">
          <FaRobot className="button-icon" /> AI Manager
        </a>
        <a href={`${baseUrl}/chat360.html`} className="sidebar-button">
          <FaComments className="button-icon" /> Chat360
        </a>
      </div>
    </div>
  );
};

export default SidePanel;
