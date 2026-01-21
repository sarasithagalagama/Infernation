import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
  const { isDropdownActive } = useNav();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-container">
          <div className="logo-container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="/assets/images/logo.png"
                className="site-logo img-fluid"
                alt="Infernation"
              />
            </NavLink>
          </div>

          <button
            className="navbar-toggler nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Navbar Action */}
          <div className="navbar-action-container">
            <div className="navbar-action-button">
              <ThemeSwitcher />
            </div>
            <a
              href="tel:+94766338858"
              className="navbar-icon-wrapper"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="icon-circle">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <h6>+94 (0) 766 338 858</h6>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
