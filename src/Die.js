import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

	render() {
    return (
      <i className={`fas fa-dice-${this.props.num} ${this.props.isRolling && 'wobbling'}`}></i>
    )
  }
}

export default Die;