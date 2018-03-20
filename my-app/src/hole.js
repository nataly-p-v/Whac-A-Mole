import React, {Component} from 'react';

class Hole extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <div
                className={"hole " + this.props.customClass+' '+(this.props.customId===this.props.currentId ? 'up': '')}
                data-id={this.props.customId}>
                <div className="mole" onClick={() => this.props.changeCount()}/>
            </div>

        )
    }
}

export default Hole;
// className={"hole " + this.props.customClass + ' '+ (parseInt(this.props.customClass) == this.props.customId ? 'up': '')}
//{/*<div className={"hole "+ this.props.customClass  +' '+ (this.props.currentId===this.props.customId ? 'up': '')} data-id={this.props.customId} >*/}