import React, { Component } from 'react';

class Counter extends Component {
    render () {
        return (
                <header className={this.props.className}>
                     <h1><span className="score">{this.props.score}</span></h1>
                      <button onClick={(event) => this.props.stopInterval(event)}>pause game</button>
                      <button onClick={(event) => this.props.startInterval(event)}>{"continue game"}</button>
                       <button onClick={(event) => this.props.restartGame(event)}>restart game</button>
                </header>
        )
    }
}
export default Counter;
