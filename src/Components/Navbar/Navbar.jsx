// Update Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/image.png";
import dropdown from "../Assests/dropdown_icon.png";
import menuIcon from "../Assests/menu.png";
import closeIcon from "../Assests/close.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <img src={mobileMenuOpen ? closeIcon : menuIcon} alt="Menu Icon" />
      </div>

      {/* Backdrop for Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop active" onClick={closeMobileMenu} />
      )}

      {/* Navigation Menu */}
      <ul className={`nav-menu ${mobileMenuOpen ? "mobile-menu-active" : ""}`}>
        <li onClick={() => { setMenu("home"); closeMobileMenu(); }}>
          <Link to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>

        {/* ABOUT US WITH DROPDOWN */}
        <li
          className="dropdown-container"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
          onClick={() => setAboutDropdown(!aboutDropdown)}
        >
          <div className="dropdown-toggle">
            <Link to="/about-us">About Us</Link>
            <span className="dropdown-icon">
              <img src={dropdown} alt="Dropdown Icon" />
            </span>
          </div>
          {aboutDropdown && (
            <ul className="dropdown">
              <li><Link to="/about-us/vision-mission">Vision & Mission</Link></li>
              <li><Link to="/about-us/message-founder">Message from Founder</Link></li>
              <li><Link to="/about-us/our-team">Our Team</Link></li>
              <li><Link to="/about-us/objectives">Objectives</Link></li>
            </ul>
          )}
        </li>

        {/* PROGRAMS WITH DROPDOWN */}
        <li
          className="dropdown-container"
          onMouseEnter={() => setProgramsDropdown(true)}
          onMouseLeave={() => setProgramsDropdown(false)}
          onClick={() => setProgramsDropdown(!programsDropdown)}
        >
          <div className="dropdown-toggle">
            <Link to="/programs">Programs</Link>
            <span className="dropdown-icon">
              <img src={dropdown} alt="Dropdown Icon" />
            </span>
          </div>
          {programsDropdown && (
            <ul className="dropdown">
              <li><Link to="/programs/women-climate">Women in climate resilience</Link></li>
              <li><Link to="/programs/youth-leadership">Youth leadership in climate action</Link></li>
              <li><Link to="/programs/lcoy">Local conference of youth (LCOY)</Link></li>
              <li><Link to="/programs/virtual-consultations">Youth virtual consultations</Link></li>
              <li><Link to="/programs/afforestation">Afforestation projects in Kambia</Link></li>
              <li><Link to="/programs/hygiene">Hygiene management program</Link></li>
              <li><Link to="/programs/leadership">Leadership program in York village</Link></li>
            </ul>
          )}
        </li>

        <li onClick={() => { setMenu("blog"); closeMobileMenu(); }}>
          <Link to="/blog">Blog</Link>
          {menu === "blog" && <hr />}
        </li>

        {/* MORE WITH DROPDOWN */}
        <li
          className="dropdown-container"
          onMouseEnter={() => setMoreDropdown(true)}
          onMouseLeave={() => setMoreDropdown(false)}
          onClick={() => setMoreDropdown(!moreDropdown)}
        >
          <div className="dropdown-toggle">
            <Link to="">More</Link>
            <span className="dropdown-icon">
              <img src={dropdown} alt="Dropdown Icon" />
            </span>
          </div>
          {moreDropdown && (
            <ul className="dropdown">
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/donation">Make a Donation</Link></li>
            </ul>
          )}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Donate Now</button></Link>
      </div>
    </div>
  );
};

export default Navbar;