import React, {Component} from 'react';
import '../index.css';
import Square from './Square';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    // Create a shallow copy of this.state.squares
    const squares = [...this.state.squares];

    // Whichever button was clicked in Square.js,
    // set its value either 'X' or 'O'
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // Set new state
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        // Setting value to each square being created
        value={this.state.squares[i]}
        // Passing a click function into each square being created
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className='game-board'>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {/* Calls the function renderSquare */}
          {/* and pass in the square's id as value */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
