import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function Main() {
  return (
    <>
      <App />
    </>
  );
}

// Mount the React application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
