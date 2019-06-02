import React, { Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      votes: new Array(props.anecdotes.length).fill(0)
    };
  }

  render = () => {
    const { anecdotes } = this.props;
    const { selected, votes } = this.state;

    return (
      <>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <div>
          <button onClick={this.submitVote}>vote</button>
          <button onClick={this.getRandomAnecdote}>next anecdote</button>
        </div>
      </>
    );
  }

  submitVote = () => {
    const { selected, votes } = this.state;

    const updatedVotes = votes;
    updatedVotes[selected] += 1;

    this.setState({
      ...this.state,
      votes: updatedVotes
    });
  }

  getRandomAnecdote = () => {
    const { anecdotes } = this.props;

    this.setState({
      ...this.state,
      selected: Number.parseInt(Math.random() * anecdotes.length)
    })
  }
}

export default App;
