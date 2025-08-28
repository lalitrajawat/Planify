import { useState } from "react";
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Planify</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
