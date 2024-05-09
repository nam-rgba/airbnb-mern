import style from './card.module.css';
import { AiFillStar } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import Slider from '../slider/slider';
import { Link } from 'react-router-dom';

export default function Card({ place }) {
  return (
    <div className={style.container}>
      <div className={style.mark}>
        <div className={style.slider}>
          <Slider place={place} />
        </div>
      </div>

      <Link to={`/rooms/${place.id}`}>
        <div className={style.infomation}>
          <div className={style.position}>{place.place}</div>
          <div className={style.distance}>{place.distance}</div>
          <div className={style.date}>{place.timeAvailoble}</div>
          <div className={style.price}>
            <span>
              <BsCurrencyDollar size={16} /> {place.price}
            </span>{' '}
            / nights
          </div>
          <span>
            {' '}
            <AiFillStar size={16} color="var(--primary-color)" /> {place.review}
          </span>
        </div>
      </Link>
    </div>
  );
}
