import React from "react";
import { serviceGridCards } from "../../Data/ServiceGridData";
import ServiceCard from "../Card/ServiceCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceGridSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceGridSection;
