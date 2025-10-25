import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" >
        <svg
          width="400"
          height="140"
          viewBox="0 0 450 140"
          xmlns="http://www.w3.org/2000/svg"
          className="codevnium-logo"
        >
          <rect width="450" height="140" fill="transparent" />

          {/* Elemental emblem (C + core symbol) */}
          <g
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="6"
            strokeLinecap="round"
          >
            <circle cx="70" cy="70" r="40" opacity="0.15" />
            <path
              d="M90,45 A30,30 0 1,0 90,95"
              stroke="var(--accent-secondary)"
            />
            <circle cx="70" cy="70" r="4" fill="var(--accent-tertiary)">
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Brand Name */}
          <text
            x="140"
            y="80"
            fontFamily="Poppins, sans-serif"
            fontSize="40"
            fill="var(--text-color)"
            fontWeight="600"
            letterSpacing="2"
          >
            Codevnium
          </text>

          {/* Animated energy line */}
          <line
            x1="140"
            y1="90"
            x2="420"
            y2="90"
            stroke="var(--accent-primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="140" cy="90" r="4" fill="var(--accent-primary)">
            <animate
              attributeName="cx"
              from="140"
              to="420"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Subtle glowing element */}
          <circle
            cx="70"
            cy="70"
            r="55"
            stroke="var(--accent-secondary)"
            strokeWidth="1"
            opacity="0.1"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 70 70"
              to="360 70 70"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
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
          <a href="#Home" onClick={() => setMenuOpen(false)}>
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
