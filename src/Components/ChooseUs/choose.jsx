import React from "react";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";


function ChooseUsSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-lg-row gspace-5">
            <div className="chooseus-card-container">
              <div className="d-flex flex-column gspace-2">
                {whychooseus.slice(0, 3).map((item) => (
                  <ChooseUsCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className="chooseus-content-container">
              <div className="d-flex flex-column gspace-5">
                <AnimateOnScroll animation="fadeInDown" speed="normal">
                  <div className="d-flex flex-column gspace-2">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>Our Mission</span>
                    </div>
                    <h2 className="title-heading">
                      OUR MAIN GOAL IS TO SET YOUR BUSINESS ON THE HILLS
                    </h2>
                    <p className="mb-0">
                      We make creativity meet strategy. Our expertise ensures
                      your brand shines across every platform, from high-impact
                      digital campaigns to unforgettable real-world events. At
                      Infernation, we don't just create content — we ignite
                      imagination and turn it into reality.
                    </p>
                  </div>
                </AnimateOnScroll>
                <div className="image-container">
                  <img
                    src="/assets/images/dummy-img-600x400.jpg"
                    alt="Why Choose Us Image"
                    className="chooseus-img"
                  />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                          <div className="card card-chooseus-cta">
                            <h5>
                              Partner with Infernation & take your brand to the
                              next level.
                            </h5>
                            <div className="link-wrapper">
                              <a href="./service">What we do</a>
                              <i className="fa-solid fa-circle-arrow-right"></i>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      </div>

                    </div>
                  </div>
                </div>

}

export default ChooseUsSection;
