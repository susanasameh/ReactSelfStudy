import {useState} from "react";

//stateless component : ماينفعش احط فيه state
export default function WelcomeFunctionalComp(props) {
    // Declare a new state variable, which we'll call "count"
    //using hooks for 
    const [count, setCount] = useState(0);
    const [fname,setName] = useState("");
  return (
    <div
      className="welcomeFC"
      style={{ backgroundColor: props.color, width: "500px" }}
    >
      <h1>{fname}</h1>
      <h1>Welcome {props.name} to my website</h1>
      <p>your age is {props.age}</p>
      <p>your favorite color is {props.color}</p>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setName("❤" + fname)}>Welcome</button>
      </div>
    </div>
  );
}