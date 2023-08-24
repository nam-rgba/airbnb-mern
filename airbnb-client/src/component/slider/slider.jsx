import { useState } from "react";
import style from "./slider.module.css";
import ButtonSlider from "./buttonSlider";

export default function Slider({ place }) {
  const [slide, setSlide] = useState(1);

  const nextSlide = () => {
    if (slide !== place.image.length) {
      setSlide(slide + 1);
      console.log("+");
    } else {
      setSlide(1);
    }
  };
  const previousSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else {
      setSlide(place.image.length);
    }
  };
  const movedot = (index) => {
    setSlide(index);
  };

  return (
    <div className={style.containerslider}>
      {place.image.map((image, index) => {
        console.log(image);
        return (
          <div
            key={index}
            className={index + 1 == slide ? style.slide_activeanm : style.slide}
          >
            <img src={image} alt="" />
          </div>
        );
      })}
      <ButtonSlider direction="prev" moveSlide={previousSlide} />
      <ButtonSlider direction="next" moveSlide={nextSlide} />
      <div>
        {Array.from({ length: place.image.length }).map((item, index) => {
          <div
            className={slide == index + 1 ? style.dot_active : style.dot}
            onClick={() => {
              movedot(index + 1);
            }}
            key={item}
          ></div>;
        })}
      </div>
    </div>
  );
}
