import React, { useState, useEffect } from 'react';
import StatisticElement from './StatisticElement';
import AiResponse from '/src/AiResponse.jsx';
import './Statistics.css';

function Statistics() {
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState(null);

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

  // Convert jsonData to a JSON string for the prompt
  const jsonDataString = JSON.stringify(jsonData, null, 2);

  return (
    <>
      <h1 className="customHeader1">------- Statistics -------</h1>
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
        {jsonData.length > 0 && (
          <AiResponse prompt={`Analyze the following data, Keep it very short and concise, and provide no text formatting:\n${jsonDataString}`} />
        )}
      </div>
    </>
  );
}

export default Statistics;
