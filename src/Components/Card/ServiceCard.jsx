import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ServiceCard = ({ icon, title, content, link, speed = "" }) => {
  return (
    <>
      <AnimateOnScroll animation="fadeInLeft" speed={speed}>
        <div className="card card-service">
          <div className="d-flex flex-row gspace-2 gspace-md-3 align-items-center">
            <div className="service-icon-wrapper">
              <div className="service-icon">
                <div
                  style={{
                    width: "60%",
                    height: "60%",
                    backgroundColor: "var(--accent-color)",
                    maskImage: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
            </div>
            <div className="service-title flex-grow-1">
              <h4>{title}</h4>
            </div>
          </div>
          <p>{content}</p>
          {/* <a href={link} className="btn btn-accent">
            <div className="btn-title">
              <span>View Details</span>
            </div>
            <div className="icon-circle">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </a> */}
        </div>
      </AnimateOnScroll>
    </>
  );
};

export default ServiceCard;
