import { useState, useEffect } from 'react';
import axios from "axios";

export default function SignUp() {
    //--------------using useState-----------------
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");

    //to check the form inputs values

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    
    //--------------to handle form submission and error messages appear after first error -----------------
    const [accept, setAccept] = useState(false);
    
    // if all fields are valid and correct
  // const [flag, setFlag] = useState(true);
  
  //handle email error
  const [emailError, setEmailError] = useState("");
   




  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        })
        .then((t) => console.log(t.data));
      }
    } catch (err) {
      //using setEmailError
      setEmailError(err.response.status);
    }
    }
     
    

  


    //--------------useEffect------------------------
    useEffect(() => {
        fetch('')
    });



    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div className="register" > */}
        <form onSubmit={Submit} id="signUpForm">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="errorMessage">user name is required</p>
          )}

          <label htmlFor="email">Email : </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {accept && emailError === 422 && <p className="errorMessage">Email already been taken</p>}

          <label htmlFor="password">Password : </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* if condition = true to display the error message */}
          {password.length < 8 && accept && (
            <p className="errorMessage">
              pasword must be more than 8 characters
            </p>
          )}

          <label htmlFor="repeat">Confirmed Password :</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="repeat"
            id="repeat"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="errorMessage">
              the password must as the same password
            </p>
          )}

          <div style={{ textAlign: "center" }} className="register">
            <button type="submit" id="signUpButton">
              Sign Up
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    );
}