import React, { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <div className="preloader-overlay">
      <div className="sphere-wrapper">
        <div className="preloader-sphere"></div>
        <span className="preloader-text">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
