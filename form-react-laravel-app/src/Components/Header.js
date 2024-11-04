//instead of <a href=""> we will use <link to="">
import { Link } from "react-router-dom";



export default function Header() {

  // handle log out function
  function handleLogOut() {
    window.localStorage.removeItem("email");
    // redirect to login page
    window.location.pathname = "/home";
  }


    return (
      <div className="container">
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",

            fontSize: "25PX",
            fontWeight: "bold",
            // cursor : "pointer"
          }}
        >
          <Link to="/home" className="navLinks">
            Home
          </Link>
          {/* get the email (key) from the localstorage and compare it with the db email  */}
          { ! window.localStorage.getItem("email") ? (
            // <> it is a <div>
            <>
              <Link to="./login" className="navLinks">
                Sign in
              </Link>
              <Link to="/register" className="navLinks">
                Register
              </Link>
            </>
          ) : (
            <div className="navLinks" onClick={handleLogOut}>
              Logout
            </div>
          )}
        </nav>
      </div>
    );
}