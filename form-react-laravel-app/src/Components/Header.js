//instead of <a href=""> we will use <link to="">
import { Link } from "react-router-dom";

export default function Header() {
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
                <h6 className="navLinks">Home</h6>
             
          <Link to="/login" className="navLinks">Sign in</Link>
                <Link to="/register" className="navLinks">Register</Link>
               
        </nav>
      </div>
    );
}