import React, { Component } from 'react';

class GenerateGame extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
                <div className={this.props.className}>
                    <form>
                      <label>
                        Введите количество кротовьих нор:
                        <input type="text" onChange={(event) => this.props.handleChange(event)}/>
                      </label>
                      <input onClick={(event) => this.props.generateHoles(event)} type="submit" value="Start Game" />
                    </form>
                </div>
        )
    }
}
export default GenerateGame;
