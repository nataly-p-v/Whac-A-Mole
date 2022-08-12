import React, {Component} from 'react';

class Hole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={"hole " + this.props.customClass+' '+(this.props.customId===this.props.currentId ? 'up': '')}
                data-id={this.props.customId}>
                <div className="mole" onClick={(event) => this.props.changeCount(event)}/>
            </div>

        )
    }
}

export default Hole;