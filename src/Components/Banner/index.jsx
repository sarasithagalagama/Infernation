import React, { useEffect, useRef } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import heroVideo from "../../assets/video/🎬 4K Screensaver – Neon Blue and Purple Liquid Bubbles on Dark Background (No A - Trim.mp4";

function BannerHomeSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="section-banner">
      <AnimateOnScroll animation="fadeInUp">
        <div className="banner-video-container keep-dark">
          <video
            ref={videoRef}
            className="banner-video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInLeft" speed="normal">
                <h1 className="title-heading-banner">
                  Turning Your Imagination Into Reality!
                </h1>
              </AnimateOnScroll>
              <div className="banner-heading">
                <div className="banner-video-content order-lg-1 order-2">
                  {/* Content placeholder */}
                </div>

                <AnimateOnScroll animation="fadeInRight" speed="normal">
                  <div className="banner-content order-lg-2 order-1">
                    <p>
                      Infernation Is A Next-Generation Content Creation And
                      Digital Innovation Platform Built To Transform Ideas Into
                      Impactful Experiences. We Specialize In Crafting
                      Compelling Visuals, Powerful Digital Strategies, And
                      Memorable Events That Bring Brands And Stories To Life.
                    </p>
                    <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                      <a href="./service" className="btn btn-accent">
                        <div className="btn-title">
                          <span>EXPLORE OUR SERVICES</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default BannerHomeSection;
