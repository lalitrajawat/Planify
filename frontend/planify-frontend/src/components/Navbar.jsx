import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Planify</h2>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/calendar">Calendar</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
