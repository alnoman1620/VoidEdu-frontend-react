import React from "react";
import { NavLink } from "react-router-dom";
import "./Footre.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <h1>Education WordPress Theme</h1>
          <p>
            Education WordPress theme is a great theme to get started your
            education WordPress website. Theme provides various features
            including courses, teachers, testimonials, faq's and based on
            powerful Elementor Page Builder. You can enjoy the awesome support
            for theme.
          </p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <p>College Life</p>
          <p>Students</p>
          <p>Transport</p>
          <p>Join Our Events</p>
          <p>College</p>
          <p>Policy</p>
        </div>

        <div>
          <h1>Office Hours</h1>
          <p>Monday: 09:00 - 17:00</p>
          <p>Tuseday: 09:00 - 17:00</p>
          <p>Wednesday: 09:00 - 17:00</p>
          <p>Thursday: 09:00 - 17:00</p>
          <p>Friday: 09:00 - 17:00</p>
          <p>Saturday, Sunday: By appointment only</p>
        </div>

        <div>
          <h1>ADDRESS</h1>
          <p>East Rampura, Dhaka-1219</p>
          <h1>PHONE</h1>
          <p>+8801537399599</p>
          <h1>EMAIL</h1>
          <p>al.noman1620@gmail.com</p>
        </div>
      </div>
      <div className="copy">
        <div>
          <small>2023 © Abdullah-Al-Noman All Rights Reserved.</small>
        </div>
        <div className="footer-link">
          <NavLink
            className="footer-text"
            to="/home"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            className="footer-text"
            to="/courses"
            style={{ textDecoration: "none" }}
          >
            Courses
          </NavLink>
          <NavLink
            className="footer-text"
            to="/about"
            style={{ textDecoration: "none" }}
          >
            About
          </NavLink>
          <NavLink
            className="footer-text"
            to="/teacher"
            style={{ textDecoration: "none" }}
          >
            OurTeachers
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
