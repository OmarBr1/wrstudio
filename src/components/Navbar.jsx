import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">W&R Studio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
