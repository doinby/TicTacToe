import React, { Component } from 'react';
import '../index.css';

export default class Square extends Component {
    render() {
        // render a single square button with value 'i'
        // passed from Board.js
        return (
            <button className='square'>
                {this.props.value}
            </button>
        )
    }
}
