import React from "react";
import "./App.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">KS</div>
          <span className="name">Kumari Surbhi</span>
        </div>

        <ul className="nav-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#stats">Stats</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="nav-gap"></div>
    </>
  );
}

export default Navbar;
