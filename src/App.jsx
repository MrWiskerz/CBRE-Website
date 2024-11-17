import React from 'react';
import Header from './components/Header.jsx'; // Import the Header component
import Footer from './components/Footer.jsx';
import BubbleGroup from './components/BubbleGroup.jsx'; // Import the BubbleGroup component
import Statistics from './components/Statistics.jsx';
import SidePanel from './components/SidePanel.jsx';
import AiResponse from './AiResponse';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="overview-container">
        <h1 className="customHeader1">------- Key Insights -------</h1>
        <div className="overview-content">
          <p>
            <strong>The AI Site Manager chatbot</strong> is a cutting-edge solution designed to reduce the carbon footprint of buildings by providing timely and actionable warnings. By analyzing real-time data from building sensors, energy usage patterns, and environmental metrics, the chatbot identifies inefficiencies such as excessive energy consumption, HVAC malfunctions, or lighting mismanagement.
          </p>
          <p>
            It proactively alerts site managers with tailored recommendations to optimize resource usage, minimize waste, and improve sustainability practices. This intelligent system not only helps reduce operational costs but also ensures buildings contribute to global carbon reduction efforts.
          </p>
        </div>
      </div>
      <BubbleGroup style={{ marginTop: "40px" }} />
      <Statistics />
      <SidePanel />
      <Footer />
    </div>
  );
}

export default App;
