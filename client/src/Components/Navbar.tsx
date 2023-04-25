import { Link } from "react-router-dom";
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration:"none"}}>
        <span className="logo">Delabookings</span>
        </Link>
        
        <div className="navItems">
          <button className="navButtons">Login</button>
          <button className="navButtons">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
