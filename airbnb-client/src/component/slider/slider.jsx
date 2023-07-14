import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";

export default function Slider() {
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
        );
      })}
    </div>
  );
}
