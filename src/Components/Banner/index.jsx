import React, { useEffect, useRef } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      onYouTubeIframeAPIReady();
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("banner-video-background", {
        videoId: "P68V3iH4TeE",
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: "P68V3iH4TeE",
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          disablekb: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    function onPlayerReady(event) {
      event.target.playVideo();
      setYoutubeSize();
      window.addEventListener("resize", setYoutubeSize);
    }

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        playerRef.current.playVideo();
      }
      if (event.data === window.YT.PlayerState.PLAYING) {
        playerRef.current.setPlaybackQuality("hd1080");
        // Ensure styling prevents interaction
        const iframe = playerRef.current.getIframe();
        if (iframe) {
          iframe.style.pointerEvents = "none";
          iframe.style.opacity = "1";
        }
      }
    }

    function setYoutubeSize() {
      const container = videoContainerRef.current;
      if (!container || !playerRef.current?.getIframe) return;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const aspectRatio = 16 / 9;
      // Scale factor to zoom the video slightly to hide controls/branding
      const scaleFactor = 1.6;

      let newWidth, newHeight;
      if (containerWidth / containerHeight > aspectRatio) {
        newWidth = containerWidth;
        newHeight = containerWidth / aspectRatio;
      } else {
        newWidth = containerHeight * aspectRatio;
        newHeight = containerHeight;
      }

      // Apply scale
      newWidth *= scaleFactor;
      newHeight *= scaleFactor;

      const iframe = playerRef.current.getIframe();
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight}px`;
      if (!iframe.style.opacity) {
        iframe.style.opacity = "0";
        iframe.style.transition = "opacity 1s ease-in-out";
      }
    }

    function handleYouTubeErrors() {
      window.addEventListener("message", function (event) {
        if (event.origin !== "https://www.youtube.com") return;

        try {
          var data = JSON.parse(event.data);
        } catch (e) {}
      });
    }

    return () => {
      window.removeEventListener("resize", setYoutubeSize);
    };
  }, []);

  return (
    <div className="section-banner">
      <AnimateOnScroll animation="fadeInUp">
        <div
          ref={videoContainerRef}
          className="banner-video-container keep-dark"
        >
          <div id="banner-video-background"></div>
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
