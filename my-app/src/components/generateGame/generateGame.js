import React, { Component } from 'react';

class GenerateGame extends Component {
    render () {
        return (
                <div className={this.props.className}>
                    <form>
                      <label>
                        Please enter number of holes:
                        <input type="text" onChange={(event) => this.props.handleChange(event)} value={this.props.inputValue}/>
                      </label>
                      <input onClick={(event) => this.props.generateHoles(event)} type="submit" value="Start Game" />
                    </form>
                </div>
        )
    }
}
export default GenerateGame;
