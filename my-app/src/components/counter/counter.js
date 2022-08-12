import React, { Component } from 'react';

class Counter extends Component {
    render () {
        return (
                <header className={this.props.className}>
                     <h1>Whack-a-mole! <span className="score">{this.props.score}</span></h1>
                      <button onClick={(event) => this.props.stopInterval(event)}>stop game</button>
                </header>
        )
    }
}
export default Counter;
