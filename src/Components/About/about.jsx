import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection() {
            </div>
          </div>
          <div className="about-title">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>About Us</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Transforming Ideas into Impactful Experiences
                </h2>
              </AnimateOnScroll>

              <p>
                Infernation is a next-generation content creation and digital
                innovation platform built to transform ideas into impactful
                experiences. We specialize in crafting compelling visuals,
                powerful digital strategies, and memorable events that bring
                brands and stories to life.
              </p>
              <p>
                Get to know the passionate team behind the strategies. We ignite
                imagination and turn it into reality.
              </p>

              <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Visual Content</a>
                    </li>
                    <li>
                      <a href="./single_services">Brand Strategy</a>
                    </li>
                    <li>
                      <a href="./single_services">Web Development</a>
                    </li>
                  </ul>
                </div>

                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="./single_services">Event Planning</a>
                    </li>
                    <li>
                      <a href="./single_services">Influencer Collabs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
