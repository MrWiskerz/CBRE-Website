import React from 'react';
import Header from './components/Header.jsx'; // Import the Header component
import Footer from './components/Footer.jsx'; // Import the Header component
import SidePanel from './components/SidePanel.jsx'; // Import the Side Panel component
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import default Calendar styles
import './AppCalendar.css'; // Import AppCalendar-specific styles



const AppCalendar = () => {
  return (
    <>
    <div className="App">
      {/* Header */}
      <Header />
      <h1>Calendar</h1>
      <p>. </p>

      {/* Layout with Side Panel and Main Content */}
      <div className="app-calendar-layout">
        {/* Side Panel */}
        <SidePanel />
        

        {/* Main Content */}
        <div className="app-calendar-content">

          {/* Calendar Container */}
          <div className="calendar-container">
            <Calendar />
            
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default AppCalendar;
