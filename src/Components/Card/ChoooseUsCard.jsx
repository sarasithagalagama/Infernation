import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ChooseUsCard = ({ icon, title, content, link, speed }) => {
  return (
    <>
      <AnimateOnScroll animation="fadeInRight" speed={speed}>
        <div className="card card-chooseus">
          <div className="chooseus-icon-wrapper">
            <div className="chooseus-spacer above"></div>
            <div className="chooseus-icon-layout">
              <div className="chooseus-icon">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--accent-color)",
                    maskImage: `url("${icon}")`,
                    WebkitMaskImage: `url("${icon}")`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <div className="chooseus-spacer below"></div>
          </div>
          <div className="chooseus-content">
            <h4 className="chooseus-title">{title}</h4>
            <p>{content}</p>
            {/* <div className="link-wrapper">
                            <a href={link}>Read More</a>
                            <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                        </div> */}
          </div>
        </div>
      </AnimateOnScroll>
    </>
  );
};

export default ChooseUsCard;
