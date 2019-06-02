import React, { useState } from 'react';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      {anecdotes[selected]}
      <br />
      <button onClick={() => setSelected(Number.parseInt(Math.random() * anecdotes.length))}>next anecdote</button>
    </>
  );
}

export default App;
