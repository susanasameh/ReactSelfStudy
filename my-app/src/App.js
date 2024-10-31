import React from 'react';
import {useState, useEffect } from "react";

export default function App() {
  //------------------------useState----------------------------------------
  const [susana, setSusana] = React.useState("hi");
  // console.log(susana);
  function Toggle() {
    setSusana("hello");
  }
  const [accept, setAccept] = React.useState("yes");
  function Accept() {
    setAccept((choose) => (choose === "yes" ? "no" : "yes"));
  }
  //use booleans values
  const [agree, setAgreet] = React.useState(true);
  function Agree() {
    setAgreet((agree) => !agree);
  }
  //change the style color of heart icon
  const [change, setChange] = React.useState(true);
  function Change() {
    setChange((icon) => !icon);
  }
  //use arrow function
  const [arrowChange, setArrowChange] = React.useState(true);
  //use useState with form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  console.log(firstName);
  console.log(lastName);
  console.log(email);

  //-------------------------useEffect---------------------------------------
  //useEffect with fetch Api
  //useEffect take 2 parameters (function , number of repeting useEffect)
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      // .then((data) => console.log(data.data));   //data.data to get the array data only
      // .then((data) => console.log(data.data.memes)); //data.data.memes to get the all objects in the array
      //using map()to get something from the objects of array
      .then((data) => console.log(data.data.memes.map((item)=>item.name)));  //get only object's name
  }, []);
  

  return (
    // the way to use another function(Toggle)
    <div style={{ textAlign: "center", fontSize: "15px" }} onClick={Toggle}>
      {/* the way to use the same function(setSusana) and use arrow function */}
      <div
        style={{ textAlign: "center", fontSize: "15px" }}
        onClick={() => setSusana("wooow")}
      >
        {susana}
      </div>
      <div style={{ textAlign: "center", fontSize: "15px" }} onClick={Accept}>
        {accept}
      </div>
      {/* give the values which i want */}
      <div style={{ textAlign: "center", fontSize: "15px" }} onClick={Agree}>
        {agree ? "OK" : "Never"}
      </div>
      <div style={{ textAlign: "center", fontSize: "15px" }} onClick={Change}>
        <i
          className="fa-solid fa-heart"
          style={{ color: change ? "" : "red" }}
        ></i>
      </div>
      <div
        style={{ textAlign: "center", fontSize: "15px" }}
        //using arrow function in onClick
        onClick={() => setArrowChange((first) => !first)}
      >
        <i
          className="fa-brands fa-twitter"
          style={{ color: arrowChange ? "" : "blue" }}
        ></i>
      </div>

      <form action="">
        <label htmlFor="fname">First Name </label>
        <input
          name="fname"
          id="fname"
          placeholder="First Name"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lname">Last Name </label>
        <input
          name="lname"
          id="lname"
          placeholder="Last Name"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email </label>
        <input
          name="email"
          id="email"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}