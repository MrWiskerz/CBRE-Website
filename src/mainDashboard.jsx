import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Dashboard.jsx';

function MainDashboard() {
  return (
    <>
      <Dashboard />
    </>
  );
}

// Mount the React application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainDashboard />);