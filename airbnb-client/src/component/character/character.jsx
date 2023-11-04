import style from './character.module.css';

import {CiLocationOn, CiMedal} from 'react-icons/ci'
import {BsDoorOpen} from 'react-icons/bs'




export default function Character({ ...props }) {
  const icons={door:BsDoorOpen,
  medal:CiMedal,
local:CiLocationOn}
  const { icon, name, describe } = props;

  const Icon=icons[icon]

  return (
    <div className={style.container}>
      <div className={style.icon}>
        <Icon size={25} />
      </div>
      <div className={style.info}>
        <div className={style.name}>{name}</div>
        <div className={style.describe}>{describe}</div>
      </div>
    </div>
  );
}
