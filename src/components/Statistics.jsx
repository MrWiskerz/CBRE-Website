import React, { useState, useEffect } from 'react';
import StatisticElement from './StatisticElement';
import './Statistics.css';

function Statistics() {
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState(null);

  var currentName = "";

  useEffect(() => {
    fetch('/BubbleData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        return response.json();
      })
      .then((data) => setJsonData(data))
      .catch((err) => setError(err.message));
  }, []);

  return(
    <>
      <h1 className="customHeader1">Statistics:{" "+currentName}</h1>
      <div className="div">
        {error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          jsonData.map((contents, index) => (
            <div key={index}>
              <StatisticElement id={index} contents={contents} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Statistics;
