import React, {Component} from 'react';
import '../index.css';

export default class Square extends Component {
  render() {
    // render a single square button with value 'i'
    // passed from Board.js
    return (
      <button
        className='square'
        /* Because onClick only takes function, */
        /* we need to create an onClick function */
        /* and pass in this.props.onClick() to call */
        /* handleCLick(i) function from Board.js */
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
