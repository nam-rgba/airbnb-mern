import style from './character.module.css';
import { lazy } from 'react';

export default function Character({ props }) {
  const { icon, name, describe } = props;

  const lazyIcons = {
    Door: lazy(() => import('react-icons/bs/BsDoorOpen')),
    Medal: lazy(() => import('react-icons/pi/PiMedalDuotone')),
    Location: lazy(() => import('react-iocns/sl/SlLocationPin'))
  };

  const Icon = lazyIcons[icon];

  return (
    <div className={style.container}>
      <div className={style.icon}>
        <Icon />
      </div>
      <div className={style.info}>
        <div className={style.name}>{name}</div>
        <div className={style.describe}>{describe}</div>
      </div>
    </div>
  );
}
