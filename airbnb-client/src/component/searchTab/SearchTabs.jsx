import style from "./searchTab.module.css";
import { useState } from "react";
export default function SearchTab() {
  const [active, setActive] = useState();
  return (
    <div className={style.container}>
      <div className={style.tabs}>
        <div>Where</div>
        <div>Checkin</div>
        <div>Checkout</div>
        <div>Who</div>
      </div>
      <div className={style.outlet}></div>
    </div>
  );
}
