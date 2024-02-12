import { useState } from 'react';
import style from './quantity.module.css';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

export default function Quantity({ name, old, setGuest }) {
  const [amout, setAmount] = useState(0);

  const minus = () => {
    // helper function decrease amount
    if (amout > 0) {
      setAmount(amout - 1);
      setGuest((prev) => prev - 1);
    }
  };
  const add = () => {
    // helper function increase amount
    setAmount(amout + 1);
    setGuest((prev) => prev + 1);
  };
  return (
    <div className={style.container}>
      <div className={style.customer}>
        <b>{name}</b>
        <p>{old}</p>
      </div>
      <div className={style.quantity}>
        <div className={style.change_qtt} onClick={minus}>
          <CiCircleMinus size={24} color="#3d3d3d" />
        </div>
        <p className={style.amout}>{amout}</p>
        <div className={style.change_qtt} onClick={add}>
          <CiCirclePlus size={24} color="#3d3d3d" />
        </div>
      </div>
    </div>
  );
}
