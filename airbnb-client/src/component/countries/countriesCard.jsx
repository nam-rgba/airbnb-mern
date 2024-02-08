import style from './countriesCard.module.css';
import Image from '../../Image';

export default function CountriesCard(props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.map}>
        <Image name={props.map} type={'webp'} />
      </div>
      <div className={style.name}>{props.name}</div>
    </div>
  );
}
