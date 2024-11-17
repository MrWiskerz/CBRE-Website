import React from 'react';
import './Statistics.css';
import { BiRotateLeft } from 'react-icons/bi';

function StatisticElement({ id, contents }) {

  const statNames = ["Carbon Emission", "Rate of Pollution", "Energy Usage"];

  return (
    <>
      <h2 className="h1">
        <b>{contents.title}</b>
      </h2>
      {contents.stats.map((value, index) => (<p>{statNames[index] +": "+value}</p>))}
      <p>STATUS:</p>
      <div className="status-circle2"
        style={{
          backgroundColor:
            contents.statusCode === 0
              ? 'red'
              : contents.statusCode === 1
              ? 'yellow'
              : 'green',
                }}
      ></div>
    </>
  );
}

export default StatisticElement;
