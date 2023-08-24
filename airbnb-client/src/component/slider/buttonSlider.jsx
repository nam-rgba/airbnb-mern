import style from "./slider.module.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function ButtonSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction == "next" ? style.next : style.previous}
    >
      {direction == "next" ? (
        <BsFillCaretRightFill size={20} color="#ffffff" />
      ) : (
        <BsFillCaretLeftFill size={20} color=" #ffffff" />
      )}
    </button>
  );
}
