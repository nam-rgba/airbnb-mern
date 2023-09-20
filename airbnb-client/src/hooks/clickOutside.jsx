import { useEffect, useRef } from "react";
import style from "./clickOutside.module.css";

function useOutsideCloser(ref, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    }
    console.log("...");
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, onClickOutside]);
}
export default function OutsideCloser(props) {
  const { onClickOutside } = props;
  const wrapperRef = useRef(null);
  useOutsideCloser(wrapperRef, onClickOutside);
  if (!props.show) {
    return null;
  }
  return (
    <div ref={wrapperRef} className={style.contain}>
      {props.children}
    </div>
  );
}
