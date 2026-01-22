import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-5">
              {/* Mission Statement Section */}
              <div className="d-flex flex-column text-center gspace-3">
                <h2 className="title-heading">
                  OUR MAIN GOAL IS TO SET YOUR BUSINESS TO THE HILLS
                </h2>
                <p className="footer-secondary-text">
                  Community quarter obviously boardroom could pin money. Call
                  job what member needed. Power intersection of pretend finance
                  keywords. Done didn't anyway closing pups performance.
                </p>
              </div>

              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      <img
                        src="/assets/images/logo.png"
                        alt="Infernation"
                        className="site-logo img-fluid"
                      />
                    </div>
                    <h4>TURNING YOUR IMAGINATION INTO REALITY!</h4>
                    <p>
                      Infernation is a next-generation content creation and
                      digital innovation platform built to transform ideas into
                      impactful experiences.
                    </p>
                  </div>
                </div>

                <div className="col col-lg-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/service">Services</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-services-container">
                    <h5>Our Services</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/service">Visual Content</a>
                      </li>
                      <li>
                        <a href="/service">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="/service">Design & Development</a>
                      </li>
                      <li>
                        <a href="/service">Event Planning</a>
                      </li>
                      <li>
                        <a href="/service">Influencer Collabs</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-contact-container">
                    <h5>LET'S TALK ABOUT THE NEXT BIG IDEA</h5>
                    <ul className="contact-list">
                      <li>dreams@infernation.com</li>
                      <li>+94 (0) 766 338 858</li>
                    </ul>
                    <div className="d-flex flex-column gspace-1">
                      <h5>Follow Us</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.facebook.com/infernation"
                            target="_blank"
                            rel="noreferrer"
                            className="social-item"
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.instagram.com/_infernation_"
                            target="_blank"
                            rel="noreferrer"
                            className="social-item"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.linkedin.com/company/infernation"
                            target="_blank"
                            rel="noreferrer"
                            className="social-item"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-content-spacer"></div>
            </div>

            <div className="copyright-container justify-content-center">
              <span className="copyright">
                © 2026 Infernation. All Rights Reserved.
              </span>
            </div>

            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
