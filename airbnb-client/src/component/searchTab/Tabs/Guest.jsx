import style from './tabs.module.css';
import Quantity from '../../quantity/quantity';
import { useState } from 'react';

const datas = [
  { cname: 'Adult', old: 'More than 13 years old' },
  {
    cname: 'Children',
    old: '2-12 years old'
  },
  {
    cname: 'Infants',
    old: 'Under 2'
  }
];
export default function Guest({ setSearchValue, searchValue }) {
  const [guest, setGuest] = useState(0);
  const [isPet, setIsPet] = useState(false);

  const handleSubmitGuest = () => {
    setSearchValue({ ...searchValue, Guest: guest, isPetAble: isPet });
  };

  return (
    <div className={style.container}>
      {datas.map((data) => (
        <Quantity
          key={data.cname}
          name={data.cname}
          old={data.old}
          setGuest={setGuest}
        />
      ))}

      <div className={style.pet_check}>
        <div>Do you bring any 4 legged friends?</div>
        <input
          type="checkbox"
          value={isPet}
          onChange={() => setIsPet(!isPet)}
        />
      </div>

      <div className={style.total_guest}>
        <p>Total guest</p>
        <span>{searchValue.Guest}</span>
      </div>
    </div>
  );
}
