import React, { useRef, useEffect, useState } from 'react';
import './BubbleGroup.css';

const BubbleGroup = () => {
  const [bubbles, setBubbles] = useState([
    {
      description: 'Description',
      paragraph:
        'A random paragraph can also be an excellent way for a writer to tackle writers block...',
      status: 'Status',
      statusCode: 2,
    },
  ]);

  const bubbleContainerRef = useRef(null);

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

  // Handler to add a new bubble
  const addBubble = () => {
    setBubbles((prevBubbles) => [
      ...prevBubbles,
      {
        description: 'New Bubble',
        paragraph: 'This is a newly added bubble.',
        status: 'New Status',
        statusCode: Math.floor(Math.random() * 3), // Randomize status code (0, 1, 2)
      },
    ]);
  };

  // Handler to delete a bubble
  const deleteBubble = (index) => {
    setBubbles((prevBubbles) => prevBubbles.filter((_, i) => i !== index));
  };

  // Scroll handler
  const scrollBubbles = (direction) => {
    if (bubbleContainerRef.current) {
      const scrollAmount = 300; // Adjust for smoother scroll
      bubbleContainerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Left Arrow */}
      <button
        className="arrow-btn arrow-left"
        onClick={() => scrollBubbles(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Right Arrow */}
      <button
        className="arrow-btn arrow-right"
        onClick={() => scrollBubbles(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

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

            <span className="bubble-text">{bubble.description}</span>
            <p className="bubble-paragraph">{bubble.paragraph}</p>

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
              {bubble.status}
            </div>

            <img
              className="bubble-image"
              src="https://costar.brightspotcdn.com/dims4/default/8c453af/2147483647/strip/true/crop/5042x3359+0+0/resize/2100x1399!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2F94%2Fbf%2Fd8b5ecaa49609748a4b1add90d20%2Fprimaryphoto-47.jpg"
              alt="bubble icon"
            />
          </div>
        ))}
      </div>

      {/* Add Bubble Button */}
      <button onClick={addBubble} className="add-bubble-btn">
        <i className="fa-solid fa-plus"></i> {/* Font Awesome Plus Icon */}
      </button>
    </div>
  );
};

export default BubbleGroup;
