import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
    super(props);
    this.state = {
      numOne: null,
      numTwo: null,
      hasRolled: false,
      isRolling: false,
    }
    this.roll = this.roll.bind(this);
  }

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

  roll() {
    const newNumOne = this.props.numbers[Math.floor(Math.random() * 6) + 1];
    const newNumTwo = this.props.numbers[Math.floor(Math.random() * 6) + 1];

    this.setState({
      numOne: newNumOne,
      numTwo: newNumTwo,
      hasRolled: true,
      isRolling: true,
    })

    setTimeout(() => {
      this.setState({isRolling: false});
    }, 1000)
  }

  render() {
    return (
      <div className="RollDice">
        {
          this.state.hasRolled === false ?
          <h1>Roll the dice!</h1> :
          <div>
            <Die num={this.state.numOne} isRolling={this.state.isRolling}/>
            <Die num={this.state.numTwo} isRolling={this.state.isRolling} />
          </div>
        }
        <div>
          <button onClick={this.roll} disabled={this.state.isRolling}>
            {this.state.isRolling ? 'Rolling...' : 'Roll dice!'}
          </button>
        </div>
      </div>
    )
  }
}

export default RollDice;