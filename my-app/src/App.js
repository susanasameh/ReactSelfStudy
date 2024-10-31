import React from 'react';

export default function App() {  
  const [susana, setSusana] = React.useState("hi");
  // console.log(susana);
  function Toggle() {
    setSusana("hello");
  }
  const [accept, setAccept] = React.useState("yes");
  function Accept() {
    setAccept(choose => choose === "yes" ? "no" : "yes");
  }
  //use booleans values 
  const [agree, setAgreet] = React.useState(true);
  function Agree() {
    setAgreet((agree) => !agree);
  }
  //change the style color of heart icon
  const [change, setChange] = React.useState(true);
  function Change() {
    setChange((icon) =>!icon);
  }
  //use arrow function
  const [arrowChange, setArrowChange] = React.useState(true);
  
 
  return (
    //the way to use another function(Toggle)
    // <div style={{ textAlign: "center", fontSize: "15px" }} onClick={Toggle}>
    //the way to use the same function(setSusana) and use arrow function
    <div
      style={{ textAlign: "center", fontSize: "15px" }}
      onClick={() => setSusana("wooow")}
    >
      {susana}

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
    </div>
  );


  
  
}