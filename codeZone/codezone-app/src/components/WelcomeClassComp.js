import React from 'react';

class WelcomeCC extends React.Component {
  //--------------using state only with Class Component--------------
  // state is an internal data of component but props is an external data of component
  state = {
    firstName: "Susana",
    secondName: "Sameh",
    // lastName : ''
  };

  //--------------using state with constructor(props)--------------
  //طريقة قديمة الاحدث استخدام ال
  //state على طول زى اللى فوق
  constructor(props) {
    //first stage of component life cycle is mountainous stage---->phase 1--> constructor process
    console.log("constructor method is called");

    // calling parent constructor

    super(props);
    // هنا this.setState() لا تستدعي
    //set state using in update phase
    //here we can use state for initialization the value of state
    this.state = {
      firstName: "Susana",
      secondName: "Sameh",
      date: new Date(),
    };
    //binding state for initialization the value of state
    //بتعمل over write state by change the context of this
    this.AddEmoji = this.AddEmoji.bind(this);
  }
  ChangeName = () => {
    
    console.log(this);
    this.setState({
      lastName: "Mikhail",
    });
  };

  //if we don't want use arrow function and use the default function
  //we should bind this
  AddEmoji() {
    //this here return undefined so we use the bind function in constructor to make this return to the Class(classComponent)
    console.log(this);
    
    this.setState(prevState => ({
      
      lastName: prevState.lastName + "❤",
    }));
  }

  handleButtonClick = () => {
    this.ChangeName();
    this.AddEmoji();
  };

  //--------------Don,t use set state in render it will cause infinite loop--------------
  render() {
    //first stage of component life cycle is mountainous stage---->phase 2--> render process
    console.log("render method is called");
    // console.log(this.props);
    console.log(this.state);

    return (
      <div style={{ backgroundColor: this.props.color, width: "300px" }}>
        <h1>Welcome with class component {this.props.name}</h1>
        <p>your age is {this.props.age}</p>
        <p>your favorite color is {this.props.color}</p>
        <h5>
          Created By {this.state.firstName} {this.state.secondName}{" "}
          {this.state.lastName}
        </h5>
        <h6>it is {this.state.date.toLocaleString()}.</h6>
        {/* here we use set state not in render but in button so it work correctly */}
        <button onClick={() => this.setState({ date: new Date() })}>
          Refresh Time
        </button>
        <button
          onClick={() =>
            this.setState({ firstName: "🤞" + this.state.firstName })
          }
        >
          Thanks
        </button>
        {/* we should use this in Class component */}

        <button onClick={this.handleButtonClick}>Change Name</button>
      </div>
    );
  }
  componentDidMount() {
    //this is the last stage of component life cycle
    this.setState({
      lastName: "Khalil",
    });
    console.log("componentDidMount method is called");
  }
}

export default WelcomeCC