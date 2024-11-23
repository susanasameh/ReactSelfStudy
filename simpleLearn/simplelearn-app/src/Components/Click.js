import React, { Component } from 'react'
import UpdatedComp from "./HigherOrder.js";

export class Click extends Component {

    //using props and state from component
    //constructor method is used to initialize state
    //constructor method is called automatically when a new instance of a class is created.
    //it's a good place to initialize state variables.
    //state is an object that holds the data that a component uses to render itself.
    //it's used to track changes in the component's internal state.
    constructor(props) {
        //call the constructor method of the parent class and initialize state variables for the component itself
        super(props)
        this.state = {
            count: 0
        };
    }
    
    //updateClick function is called automatically when a button is clicked
    UpdateClick = () => {
        //update the state of the component when the button is clicked
        this.setState({
            count: this.state.count + 1
        });
    };




    render() {
      // use state and props to render the component
        const { count } = this.state;
        
      return (
        <div>
          {/* using {count} to access the count variable in the state object */}
          <button onClick={this.UpdateClick}>
            {this.props.title}Clicked {count} times
          </button>
        </div>
      );
    }
}

export default UpdatedComp(Click);