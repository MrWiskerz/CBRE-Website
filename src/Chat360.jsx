import React from 'react';
import Header from './components/Header.jsx'; // Import the Header component
import SidePanel from './components/SidePanel.jsx'; // Import the Side Panel component
import Chatbot from './Chatbot';
import Footer from './components/Footer.jsx';

function Chat360() {
  return (
    <>
    <div className="Chat360">
      <Header />
      <SidePanel />
      <Chatbot />
      
    </div>
    <Footer />
    </>
  );
}

export default Chat360;