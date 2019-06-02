import React, { useState } from 'react';

const App = () => {
  const options = [
    { label: 'good', value: 1 },
    { label: 'neutral', value: 0 },
    { label: 'bad', value: -1 }
  ];

  const [votes, addVote] = useState([]);

  const submitVote = option => {
    addVote([
      ...votes,
      option
    ]);
  }

  return (
    <>
      <h1>give feedback</h1>
      <div>
        {options.map(o => (
          <button key={o.value} onClick={() => submitVote(o)}>{o.label}</button>
        ))}
      </div>

      <h1>statistics</h1>
      {options.map(o => (
        <p ey={o.value}>{o.label} {votes.filter(v => v.label === o.label).length}</p>
      ))}
      <p>all {votes.length}</p>
      <p>average {votes.length > 0 ? (votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length) : 0}</p>
      <p>positive {votes.length > 0 ? ((votes.filter(v => v.value > 0).length / votes.length) * 100) : 0} %</p>
    </>
  );
}

export default App;
