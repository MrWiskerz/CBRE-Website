import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from './Calendar.jsx';

function calendarPage() {
  return (
    <>
      <Calendar/>
    </>
  );
}

// Mount the React application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<calendarPage />);
