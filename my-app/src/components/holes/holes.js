import React, { Component } from 'react';
import Hole from "../hole/hole.js";

class Holes extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
               <div className="game">
                    {this.props.number.map((elem, i) => {

                       return <Hole key={i} customClass={"hole"+i} currentId={this.props.currentId} customId={i} changeCount={this.props.changeCount}/>
                    })}
               </div>
        )
    }
}
export default Holes;
