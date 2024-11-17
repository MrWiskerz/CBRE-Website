import React from 'react';
import Header from './components/Header.jsx'; // Import the Header component
import BubbleGroup from './components/BubbleGroup.jsx'; // Import the BubbleGroup component
import Statistics from './components/Statistics.jsx';
import SidePanel from './components/SidePanel.jsx';
import AiResponse from './AiResponse'


function App() {

  // font-size: 1.5em;
  // line-height: 1.5em;
  // text-align: center;
  // max-width: 50%;

  return (
    <div className="App">
      <Header />
      <h1 className = "customHeader1">Overview</h1>
      <p>
        Blah blah, blah blah blah. Blah blah blah blah blah blah blah blah blah. 
        Blah, blah blah blah, blah blah. Blah blah blah blah blah blah blah, blah blah.
        Blah blah, blah blah blah. Blah blah blah blah blah blah blah blah blah. 
        Blah, blah blah blah, blah blah. Blah blah blah blah blah blah blah, blah blah.
        Blah blah, blah blah blah. Blah blah blah blah blah blah blah blah blah. 
        Blah, blah blah blah, blah blah. Blah blah blah blah blah blah blah, blah blah.
        Blah blah, blah blah blah. Blah blah blah blah blah blah blah blah blah. 
        Blah, blah blah blah, blah blah. Blah blah blah blah blah blah blah, blah blah.
      </p>
      <BubbleGroup style={{ marginTop: "40px" }} />
      <Statistics />
      <SidePanel />
    </div>
  );
}

export default App;
