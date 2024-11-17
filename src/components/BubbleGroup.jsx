import React, { useRef, useEffect, useState } from 'react';
import './BubbleGroup.css';

const BubbleGroup = () => {
  const [jsonData, setJsonData] = useState([]); // Store data from JSON
  const [bubbles, setBubbles] = useState([]); // Displayed bubbles
  const [error, setError] = useState(null);

  const statNames = ["Carbon Emission", "Rate of Pollution", "Energy Usage"];
  const bubbleContainerRef = useRef(null);
  //const averageStatusCode = data.reduce((sum, item) => sum + item.statusCode, 0) / data.length;

  const lockScroll = () => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  };

  const unlockScroll = () => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  };

  useEffect(() => {
    if (bubbleContainerRef.current) {
      bubbleContainerRef.current.addEventListener('mouseenter', lockScroll);
      bubbleContainerRef.current.addEventListener('mouseleave', unlockScroll);

      return () => {
        bubbleContainerRef.current.removeEventListener(
          'mouseenter',
          lockScroll
        );
        bubbleContainerRef.current.removeEventListener(
          'mouseleave',
          unlockScroll
        );
      };
    }
  }, []);

  // Fetch JSON data on component mount
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

  // Handler to add a new bubble
  const addBubble = () => {
    if (bubbles.length < jsonData.length) {
      setBubbles((prevBubbles) => [...prevBubbles, jsonData[prevBubbles.length]]);
    }
  };

  // Handler to delete a bubble
  const deleteBubble = (index) => {
    setBubbles((prevBubbles) => prevBubbles.filter((_, i) => i !== index));
  };

  const averageStatusCode =
  jsonData.length > 0
    ? (jsonData.reduce((sum, item) => sum + item.statusCode, 0) / jsonData.length).toFixed(2)
    : "N/A";


  return (
    <>
    <h1 className = "customHeader1">------- Important Sites -------</h1>
    <p className = "customP">Average Status Rating: {averageStatusCode}</p>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <>
          {/* Bubble Container */}
          <div className="bubble-container" ref={bubbleContainerRef}>
            {bubbles.map((bubble, index) => (
              <div key={index} className="bubble">
                {/* Delete Button */}
                <button
                  className="delete-bubble-btn"
                  onClick={() => deleteBubble(index)}
                  title="Delete this bubble"
                >
                  &times;
                </button>

                <span className="bubble-text">{bubble.title || 'Title'}</span>
                <p className="bubble-paragraph">
                  {bubble.desc}
                </p>

                {/* Status with colored circle */}
                <div className="bubble-status">
                  <span
                    className="status-circle"
                    style={{
                      backgroundColor:
                        bubble.statusCode === 0
                          ? 'red'
                          : bubble.statusCode === 1
                          ? 'yellow'
                          : 'green',
                    }}
                  ></span>
                  Status Code: {bubble.statusCode}
                </div>

                <img
                  className="bubble-image"
                  src={bubble.image || 'https://via.placeholder.com/300'}
                  alt={`Bubble ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Add Bubble Button, hidden when limit is reached */}
          {bubbles.length < jsonData.length && (
            <button onClick={addBubble} className="add-bubble-btn">
              <i className="fa-solid fa-plus"></i> {/* Font Awesome Plus Icon */}
            </button>
          )}
        </>
      )}
    </div>
    </>
  );
};

export default BubbleGroup;
