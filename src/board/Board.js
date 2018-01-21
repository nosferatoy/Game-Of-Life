import React, { Component } from 'react';
import Square from './Square'
import { gameState } from './GameFunctions.js'
import './Board.css';

const nullState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { time: 0, seed: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]}

  }

  start = () => {
    this.interval = setInterval(() =>
      this.setState({ seed: gameState(this.state.seed), time: this.state.time + 1 }), 400);
  }

  stop = () => {
    clearInterval(this.interval);
  }

  reset = () => {
    clearInterval(this.interval);
    this.setState({ seed: nullState, time: 0 });
  }

  handleChildClick(event) {
    console.log(event)
  }

  render() {
    return (
      <div className="Board">
        <button onClick={this.start}> Start </button>
        <button onClick={this.stop}> Stop </button>
        <button onClick={this.reset}> Reset </button>
        <h1>Circles: {this.state.time}</h1>
        <table>
          <tbody>
            {[...Array(this.state.seed.length)].map((x, i) =>
              <tr key={i}>
                {[...Array(this.state.seed[0].length)].map((x, j) =>
                  <Square key={i + j} x={i} y={j} onClick={this.handleChildClick} alive={this.state.seed[i][j] === 0 ? false : true} />
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
