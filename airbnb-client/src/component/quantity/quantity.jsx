import { useState } from "react";
import style from "./quantity.module.css";

export default function Quantity({ name, old }) {
  const [amout, setAmount] = useState(0);

  const minus = () => {
    if (amout > 0) {
      setAmount(amout - 1);
    }
  };
  const add = () => {
    setAmount(amout + 1);
  };
  return (
    <div className={style.container}>
      <div className={style.customer}>
        <b>{name}</b>
        <p>{old}</p>
      </div>
      <div className={style.quantity}>
        <div className={style.change_qtt} onClick={minus}>
          -
        </div>
        <div className={style.amout}>{amout}</div>
        <div className={style.change_qtt} onClick={add}>
          +
        </div>
      </div>
    </div>
  );
}
