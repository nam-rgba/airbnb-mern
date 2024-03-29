import style from "./card.module.css";
import { AiFillStar } from "react-icons/ai";
import Slider from "../slider/slider";
import { Link } from "react-router-dom";

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
            <span>{place.price}$ </span> nights
          </div>
          <span>
            {" "}
            <AiFillStar /> {place.review}
          </span>
        </div>
      </Link>
    </div>
  );
}
