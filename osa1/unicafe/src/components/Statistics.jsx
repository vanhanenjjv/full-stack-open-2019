import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ options, votes }) => (
  <>
    <h1>statistics</h1>
    {votes.length === 0 ?
      <h4>No feedback given</h4> :
      <table>
        <tbody>
          {options.map(o => (
            <Statistic key={o.value} text={o.label} value={votes.filter(v => v.label === o.label).length} />
          ))}
          <tr>
            <td>all</td>
            <td>{votes.length}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(votes.filter(v => v.value > 0).length / votes.length) * 100} %</td>
          </tr>
        </tbody>      
      </table>
    }
  </>
);

export default Statistics;
