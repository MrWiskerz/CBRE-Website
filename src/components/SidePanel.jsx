import React, { useEffect } from 'react';
import './SidePanel.css';

const SidePanel = () => {
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
        <span className="bold">Herbert Ronaldo Melgar</span>'s 360 Board
      </h1>
      <div className="sidebar-buttons">
        <a href="/dashboard.html" className="sidebar-button">
          Dashboard
        </a>
        <a href="/calendar.html" className="sidebar-button">
          Calendar
        </a>
        <a href="/my-sites.html" className="sidebar-button">
          My Sites
        </a>
        <a href="/ai-site-manager.html" className="sidebar-button">
          AI Site Manager
        </a>
        <a href="/chat360.html" className="sidebar-button">
          Chat360
        </a>
      </div>
    </div>
  );
};

export default SidePanel;
