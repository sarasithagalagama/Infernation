import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const BannerInnerSection = ({ title, currentPage }) => {
  return (
    <div className="section-banner">
      <div className="banner-layout-wrapper banner-inner">
        <div className="banner-layout">
          <div className="d-flex flex-column text-center align-items-center gspace-2">
            <AnimateOnScroll animation="fadeInRight" speed="normal">
              <h2 className="title-heading">{title}</h2>
            </AnimateOnScroll>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerInnerSection;
