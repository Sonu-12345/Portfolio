import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Sonu Kumar Singh</h1>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>👨‍💻 About</Link></li>
        <li><Link to="/experience" onClick={() => setIsOpen(false)}>📂 Experience</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>🚀 Projects</Link></li>
        <li><Link to="/contact" className="contact-btn" onClick={() => setIsOpen(false)}>📩 Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
