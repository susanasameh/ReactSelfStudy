import React,{ useState } from "react";
export default function Inputs(props) {
  // use useState hook because it is a functional component
  //make useState to store the value of the input field
    const [ value,setValue] = useState()
    return (
      <div className="inp-container">
        <h1>{props.formTitle}</h1>
            <label style={{ fontSize: "20px" }}>{props.inputLabel}</label>
            <span>{value}</span>
        <input
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            margin: "10px",
            fontSize: "16px",
          }}
          type={props.type}
          placeholder={props.placeHolder}
          action={props.action}
          value={props.value}
          onChange={(event) => {
            // using setValue to display the value of the input
            setValue(event.target.value);
          }}
        />
      </div>
    );
}