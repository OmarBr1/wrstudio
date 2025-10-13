import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <svg
          width="120"
          height="40"
          viewBox="0 0 450 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="450" height="140" fill="transparent" />
          <g
            fill="none"
            stroke="#006affff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20,110 L55,20 L90,110" /> {/* W */}
            <path d="M110,110 L145,20 L180,110 L145,65 L180,65" /> {/* R */}
          </g>
          <text
            x="200"
            y="90"
            fontFamily="Poppins, sans-serif"
            fontSize="36"
            fill="#bfd1ebff"
            fontWeight="600"
          >
            Studio
          </text>
        </svg>
      </div>

      {/* Hamburger icon */}
      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
