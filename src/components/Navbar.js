import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Sonu Kumar Singh</h1>
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">👨‍💻 About</Link></li>
        <li><Link to="/experience">📂 Experience</Link></li>
        <li><Link to="/projects">🚀 Projects</Link></li>
        <li><Link to="/contact" className="contact-btn">📩 Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
