import React, { useEffect } from 'react';
import Header from './components/Header';
import SidePanel from './components/SidePanel';
import './Dashboard.css'; // Add custom styles for the Dashboard
import { FaCalendarAlt, FaGlobe, FaRobot, FaComments } from 'react-icons/fa'; // Import icons

const Dashboard = () => {
  // Disable scrolling on mount, re-enable on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = ''; // Re-enable scrolling
    };
  }, []);

  // Function to determine the greeting based on the time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Get current CST time
  const currentDate = new Date();
  const timeOptions = {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  let cstTime = currentDate.toLocaleTimeString('en-US', timeOptions);

  // Remove leading zeros from hours
  cstTime = cstTime.replace(/^0/, '');

  const cstDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-layout">
        <SidePanel />
        
        <div className="dashboard-content">
          {/* Greeting Section */}
          <div className="dashboard-greeting">
            <h1>{`${getGreeting()}, First-Name Last-Name.`}</h1>
            <p>{`${cstTime}`}</p>
            <p>{`${cstDate}`}</p>
          </div>

          {/* Large Tile Buttons */}
          <div className="dashboard-tiles">
            <a href="/calendar.html" className="dashboard-tile">
              <div className="tile-content">
                <h2>Calendar</h2>
                <p>Plan and view your schedule with ease.</p>
              </div>
              <FaCalendarAlt className="tile-icon" />
              
            </a>


            <a href="/ai-site-manager.html" className="dashboard-tile">
              <div className="tile-content">
                <h2>AI Manager</h2>
                <p>Get AI-powered real-time site analysis for all locations.</p>
              </div>
              <FaRobot className="tile-icon" />
            </a>

            <a href="/chat360.html" className="dashboard-tile">
              <div className="tile-content">
                <h2>Chat360</h2>
                <p>Engage in intelligent conversations with AI.</p>
              </div>
              <FaComments className="tile-icon" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
