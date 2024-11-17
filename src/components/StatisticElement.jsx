import React from 'react';
import './Statistics.css';

function StatisticElement({ id, contents }) {

  const statValues = ["stat0", "stat1", "stat2"];

  return (
    <>
      <h2 className="h1">
        <b>{contents.title}</b>
      </h2>
      {contents.stats.map((value, index) => (<p>{statValues[index] +": "+value}</p>))}
      <p>Status Code: {contents.statusCode}</p>
    </>
  );
}

export default StatisticElement;
