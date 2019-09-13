import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numbers: {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
    }
  }

	render() {
    let fontAwesomeName = `fas fa-dice-${this.props.numbers[this.props.num]}`;

    return (
      <i className={fontAwesomeName}></i>
    )
  }
}

export default Die;