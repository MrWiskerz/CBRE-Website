import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppCalendar from './AppCalendar.jsx';

function MainCalendar() {
  return (
    <>
      <AppCalendar />
    </>
  );
}

// Mount the React application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainCalendar />);