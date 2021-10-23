import React, { Component } from 'react';
import '../index.css';
import Board from './Board';

export default class Game extends Component {
    render() {
        return (
            <div className='game'>
                <Board />
            <div className='game-info'>
                <div>{/* status */}</div>
                <div>{/* TODO */ }</div>
            </div>
            </div>
        );
    }
}
