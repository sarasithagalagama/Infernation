import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const overlayRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const menuBtn = document.querySelector(".nav-btn");
    const closeBtn = sidebarRef.current?.querySelector(".close-btn");
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;

    function openSidebar() {
      overlay.classList.add("active");
      setTimeout(() => {
        sidebar.classList.add("active");
      }, 200);
    }

    function closeSidebar() {
      sidebar.classList.remove("active");
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 200);
    }

    menuBtn?.addEventListener("click", openSidebar);
    closeBtn?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    return () => {
      menuBtn?.removeEventListener("click", openSidebar);
      closeBtn?.removeEventListener("click", closeSidebar);
      overlay?.removeEventListener("click", closeSidebar);
    };
  }, []);

  useEffect(() => {
    const dropdownBtns = sidebarRef.current?.querySelectorAll(
      ".sidebar-dropdown-btn",
    );

    function handleDropdownClick(e) {
      const btn = e.currentTarget;
      const dropdownMenu = btn.parentElement.nextElementSibling;
      const isOpen = dropdownMenu.classList.contains("active");

      sidebarRef.current
        .querySelectorAll(".sidebar-dropdown-menu")
        .forEach((menu) => {
          menu.classList.remove("active");
        });

      if (!isOpen) dropdownMenu.classList.add("active");
    }

    dropdownBtns?.forEach((btn) => {
      btn.addEventListener("click", handleDropdownClick);
    });

    return () => {
      dropdownBtns?.forEach((btn) => {
        btn.removeEventListener("click", handleDropdownClick);
      });
    };
  }, []);

  return (
    <div>
      <div ref={overlayRef} className="sidebar-overlay"></div>
      <div ref={sidebarRef} className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img
              src="/assets/images/logo.png"
              className="site-logo img-fluid logo"
              alt="Infernation"
            />
          </div>
          <button className="close-btn">
            <span>X</span>
          </button>
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="sidebar-dropdown">
            <div className="dropdown-header">
              <a href="#">Services</a>
              <button className="sidebar-dropdown-btn">
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <ul className="sidebar-dropdown-menu">
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/single_services">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-dropdown">
            <div className="dropdown-header">
              <a href="#">Pages</a>
              <button className="sidebar-dropdown-btn">
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <ul className="sidebar-dropdown-menu">
              <li>
                <Link to="/case_studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/partnership">Partnership</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link to="/Testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/404_page">Error 404</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-dropdown">
            <div className="dropdown-header">
              <a href="#">Archive</a>
              <button className="sidebar-dropdown-btn">
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <ul className="sidebar-dropdown-menu">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/single_post">Single Post</Link>
              </li>
            </ul>
          </li>
          <li className="below-dropdown">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
