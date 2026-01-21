import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection() {
                        </div>
                      </AnimateOnScroll>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Our Expertise</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Turning Your Imagination Into Reality!
                </h2>
              </AnimateOnScroll>
              <p>
                At Infernation, we specialize in crafting innovative digital
                strategies that drive real business growth. Our expertise
                ensures your brand stays ahead in the competitive digital
                landscape.
              </p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We Do Best</h5>
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Visual Content</a>
                    </li>
                    <li>
                      <a href="./single_services">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="./single_services">Web Development</a>
                    </li>
                    <li>
                      <a href="./single_services">Event Planning</a>
                    </li>
                    <li>
                      <a href="./single_services">Brand Strategy</a>
                    </li>
                    <li>
                      <a href="./single_services">Influencer Collabs</a>
                    </li>
                  </ul>
                </div>

                <AnimateOnScroll animation="fadeInUp">
                  <div className="card card-expertise card-expertise-counter animate-box">
                    <div className="d-flex flex-row gspace-2 align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <CounterOnScroll
                          target={100}
                          suffix="%"
                          counterClassName="counter"
                          suffixClassName="counter-detail"
                        />
                      </div>
                      <h6>Client Satisfaction Guarantee</h6>
                    </div>
                    <p>
                      We are committed to delivering excellence in every
                      project, ensuring our clients' visions are brought to life
                      with precision and creativity.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertiseSection;
