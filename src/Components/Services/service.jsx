import React from "react";
import { Link } from "react-router-dom";
import { serviceGridCards } from "../../Data/ServiceGridData";
import ServiceCard from "../Card/ServiceCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <AnimateOnScroll animation="fadeInDown" speed="normal">
                <div className="sub-heading align-self-center">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>What We Do</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInDown" speed="normal">
                <h2 className="title-heading heading-container heading-container-medium">
                  WHAT WE DO: STRATEGY, CREATION, & EXECUTION
                </h2>
              </AnimateOnScroll>
            </div>

            {/* Service List Text */}
            <AnimateOnScroll animation="fadeInDown" speed="normal">
              <h3 className="title-heading">
                Photography | Videography | Social Media Management | Graphic
                Design | Advertising Campaigns | Marketing Campaigns |
                Influencer Partnerships | Web Development | App Development |
                Event Planning
              </h3>
            </AnimateOnScroll>

            <div className="card-service-wrapper">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {serviceGridCards.map((item) => (
                  <div className="col" key={item.id}>
                    <ServiceCard
                      icon={item.icon}
                      title={item.title}
                      content={item.content}
                      speed={item.speed}
                      link={item.link}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="service-link-footer">
              <p>
                Need a custom solution? Let&apos;s create a strategy tailored
                for your business.
                <Link to="/contact"> Get a Free Strategy Call</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
