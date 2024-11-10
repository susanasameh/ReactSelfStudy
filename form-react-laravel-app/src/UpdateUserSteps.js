//[2]-------------------import--------------------
//use react hooks(useState& useEffect)
import { useState, useEffect } from 'react';
//use Axios library for http requests
import axios from 'axios';

//[1]----------------UpdatedUser function--------------------------------
export default function UpdateUser() {
    //[3]-------------useState--------------------------------
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");
    //to check all the inputs is valid or not
    const [accept, setAccept] = useState(false);

    //[4]get the id of the user from the url
    //using [0] because we need the last part of the url as a number not array
    //(URL) هذه السطر يستخرج  معرف المستخدم  من عنوان الرابط 
    // عن طريق تقسيم الرابط إلى أجزاء واستخدام الجزء الأخير.هذا المعرف يُستخدم لجلب وتحديث بيانات المستخدم المحدد.
    const id = window.location.pathname.split("/").splice(-1)[0];
    
    //[5]-------------useEffect--------------------------------
    //useEffect to get data from the database and fetch it in the form to update the user
    useEffect(() => {
        //fetch data from the database using Axios library
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                //fetch date in form
                //using setName because we need the name of the user we save it in the above useState
                //when we use console.log(data) we get an array with one object so we use [0] as index
                setName(data[0].name);
                setEmail(data[0].email);
            });

    }, [id]);


    //[6]-------------handlle submite function--------------------------------------------------------
    async function Submit(e) {
        //to check all the data of the form is valid
        let flag = true;
        //to prevent form from submitting 
        e.preventDefault();
        //to check all inputs are valid
        setAccept(true);
        //condition = true to change the value of flag
        if (name === "" || password.length < 8 || passwordR !== password) {
            flag = false;
        } else flag = true;
        try {
            if (flag) {
                //send data to the server to update the user by using axios and post method
                let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordR
                });
                //if the status of the response is 200
                if (res.status === 200) {
                    //storing email in local storage
                    window.localStorage.setItem("email", email);
                    //redirect to users table   
                    window.location.pathname = "/dashboard/users";
                }
            }
        } catch (err) {
            console.log(err.response.data);
        }

    }
    //[7]-------------return--------------------------------
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
    )
        } 
 

 


