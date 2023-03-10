import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Delabookings</span>
        <div className="navItems">
          <button className="navButtons">Login</button>
          <button className="navButtons">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
