import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
	constructor(props) {
    super(props);
    this.state = {
      numOne: 1,
      numTwo: 1,
    }
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber() {
    const newNumOne = Math.floor(Math.random() * 5) + 1;
    const newNumTwo = Math.floor(Math.random() * 5) + 1;

    this.setState({
      numOne: newNumOne,
      numTwo: newNumTwo,
    })
  }

  render() {
    return (
      <div>
        <div>
          <Die num={this.state.numOne} />
          <Die num={this.state.numTwo} />
        </div>
        <br />
        <div>
          <button onClick={this.randomNumber}>Roll dice!</button>
        </div>
      </div>
    )
  }
}

export default RollDice;