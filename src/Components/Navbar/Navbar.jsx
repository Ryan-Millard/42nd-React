import React from "react";
import { FaHome, FaEnvelope, FaInfoCircle, FaBox, FaBriefcase, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-container">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <div className="logo-content">
              <span className="logo-text">
                <div>42nd</div>
                <div>Precinct</div>
              </span>
            </div>
            <FaAngleDoubleRight className="arrow-icon" id="FaAngleDoubleRight" />
          </Link>
        </li>
        <li className="nav-item" id="themeButton">
          <Link to="/" className="nav-link">
            <FaHome aria-label="Home" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <FaEnvelope aria-label="Contact Us" />
            <span className="link-text">Contact Us</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FaInfoCircle aria-label="About Us" />
            <span className="link-text">About Us</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products-and-services" className="nav-link">
            <FaBox aria-label="Products and Services" />
            <span className="link-text">Products & Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/careers" className="nav-link">
            <FaBriefcase aria-label="Careers" />
            <span className="link-text">Employment Opportunities</span>
          </Link>
        </li>
        <li className="bottom-spacer"></li>
      </ul>
    </nav>
  );
};

export default Navbar;

