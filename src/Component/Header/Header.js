import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="nav-div">
        <nav className="logo">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <h1>
              <span className="void">VOID</span>
              <span className="edu">EDU</span>
            </h1>
          </NavLink>
        </nav>
        <nav className="nav">
          <NavLink
            className="nav-text"
            to="/home"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-text"
            to="/courses"
            style={{ textDecoration: "none" }}
          >
            Courses
          </NavLink>
          <NavLink
            className="nav-text"
            to="/about"
            style={{ textDecoration: "none" }}
          >
            About
          </NavLink>
          <NavLink
            className="nav-text"
            to="/teacher"
            style={{ textDecoration: "none" }}
          >
            OurTeachers
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
