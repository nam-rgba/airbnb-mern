import { useState } from "react";
import style from "./quantity.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function Quantity({ name, old }) {
  const [amout, setAmount] = useState(0);

  const minus = () => {
    // helper function decrease amount
    if (amout > 0) {
      setAmount(amout - 1);
    }
  };
  const add = () => {
    // helper function increase amount
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
        <FaMinus size={10} color="#3d3d3d"/>
        </div>
        <div className={style.amout}>{amout}</div>
        <div className={style.change_qtt} onClick={add}>
        <FaPlus size={10} color="#3d3d3d"/>
        </div>
      </div>
    </div>
  );
}
