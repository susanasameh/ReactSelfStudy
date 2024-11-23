import React, { Component } from 'react'
import UpdatedComp from "./HigherOrder.js";

export class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    ChangeCount = () => {
        this.setState({ count: this.state.count + 1 })
    };
    


    render() {
        const { count } = this.state;
        return (
          <div>
            <button onMouseEnter={this.ChangeCount}>
              {this.props.title} Hover to change {count}
            </button>
          </div>
        );
    }
}

export default UpdatedComp(Count);
