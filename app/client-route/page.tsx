"use client";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";

function ClientRoutePage() {
  console.log("Client route rendered");
  return (
    <div className="image-slider-container">
      <Slider>
        <div>
          <img src="https://picsum.photos/400/200" alt="placeholder" />
        </div>
        <div>
          <img src="https://picsum.photos/400/300" alt="placeholder" />
        </div>
        <div>
          <img src="https://picsum.photos/400/250" alt="placeholder" />
        </div>
        <div>
          <img src="https://picsum.photos/400/350" alt="placeholder" />
        </div>
      </Slider>
    </div>
  );
}

export default ClientRoutePage;
