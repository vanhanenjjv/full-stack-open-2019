import React, { useState } from 'react';
import Statistics from './components/Statistics';

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
      <Statistics options={options} votes={votes} />
    </>
  );
}

export default App;
