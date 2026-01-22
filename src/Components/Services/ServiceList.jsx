import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceListSection() {
  const services = [
    "Photography",
    "Videography",
    "Social Media Management",
    "Graphic Design",
    "Advertising Campaigns",
    "Marketing Campaigns",
    "Influencer Partnerships",
    "Web Development",
    "App Development",
    "Event Planning",
  ];

  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-3">
            <AnimateOnScroll animation="fadeInDown" speed="normal">
              <h3 className="title-heading">
                Photography | Videography | Social Media Management | Graphic
                Design | Advertising Campaigns | Marketing Campaigns |
                Influencer Partnerships | Web Development | App Development |
                Event Planning
              </h3>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceListSection;
