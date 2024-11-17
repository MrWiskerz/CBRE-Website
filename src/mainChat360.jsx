import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chat360 from './Chat360.jsx';

function MainChat360() {
  return (
    <>
      <Chat360 />
    </>
  );
}

// Mount the React application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainChat360 />);