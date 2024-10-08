import React, { Component } from 'react';

export class Counterclass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // increment = () => {
  //   this.setState((increment) => ({ count: increment.count + 1 }));
  // };

  decrement = () => {
    this.setState((decrement) => ({ count: decrement.count - 1 }));
  };

  render() {
    return (
      <>
        <h2>Counter: {this.state.count}</h2>
       
        <button onClick={ () => this.setState({count: this.state.count + 1})}>Increment</button>
      
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Counterclass;
