import { useState, useEffect } from "react";
import axios from "axios";
export default function UpdateUser() {
  //--------------using useState-----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  //i don't need this useState because now we update the user so we don't have to check if it in db or not
    // const [emailError, setEmailError] = useState("");

    //get the id of the user from the url
    //using [0] because we need the last part of the url as a number not array 
    const id = window.location.pathname.split('/').splice(-1)[0];

    //useEffect to get data from the database and fetch it in the form to update the user
    useEffect(() => {
        // fetch(get) data from your API
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //fetch date in form
                //using setName because we need the name of the user we save it in the above useState
                //when we use console.log(data) we get an array with one object so we use [0] as index
                setName(data[0].name);
              setEmail(data[0].email);
              // setPassword(data[0].password);
              // setPasswordR(data[0].passwordR);
              
              
            
            });
    }, [id]);
    

    async function Submit(e) {
      let flag = true;
      e.preventDefault();
      setAccept(true);
      if (name === "" || password.length < 8 || passwordR !== password) {
        flag = false;
      } else flag = true;
      try {
        // let res;
        if (flag) {
          let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          });
          if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/dashboard/users";
          }
        }
      } catch (err) {
        console.log(err.response.data);
        
      }
    }
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
      <form onSubmit={Submit} id="signUpForm" className="formStyle">
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
          <p className="errorMessage">pasword must be more than 8 characters</p>
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
          <p className="errorMessage">the password must as the same password</p>
        )}

        <div style={{ textAlign: "center" }} className="register">
          <button type="submit" id="signUpButton">
            Update
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}