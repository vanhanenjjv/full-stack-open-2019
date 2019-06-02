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
    </>
  );
}

export default App;
