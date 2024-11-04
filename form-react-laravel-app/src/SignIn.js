import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  //useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [accept, setAccept] = useState(false);

    async function Submit(e) {
      let flag = true;
      e.preventDefault();
      setAccept(true);
      if (email === "" || password === "" || password.length < 8) {
        flag = false;
      } else flag = true;
      try {
        if (flag) {
          let res = await axios.post("http://127.0.0.1:8000/api/login", {
            email: email,
            password: password,
          });

          if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/home";
          }
          console.log(res.data);
        }
      } catch (err) {
        setEmailError(err.response.status);
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
      <form action="" method="" onSubmit={Submit} className="formStyle">
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
        {accept && emailError === 422 && (
          <p className="errorMessage">Email already been taken</p>
        )}

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
          <p className="errorMessage">password is invalid</p>
        )}
        {password === "" && accept && (
          <p className="errorMessage">password is required</p>
        )}
        {email === "" && accept && (
          <p className="errorMessage">email is required</p>
        )}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
