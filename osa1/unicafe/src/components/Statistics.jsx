import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ options, votes }) => (
  <>
    <h1>statistics</h1>
    {votes.length === 0 ?
      <h4>No feedback given</h4> :
      <>
        {options.map(o => (
          <Statistic key={o.value} text={o.label} value={votes.filter(v => v.label === o.label).length} />
        ))}
        <p>all {votes.length}</p>
        <p>average {votes.length > 0 ? (votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length) : 0}</p>
        <p>positive {votes.length > 0 ? ((votes.filter(v => v.value > 0).length / votes.length) * 100) : 0} %</p>
      </>
    }
  </>
);

export default Statistics;
