import style from "./card.module.css";
import Image from "../../Image.jsx";
import { AiFillStar } from "react-icons/ai";

export default function Card({ star }) {
  return (
    <div className={style.container}>
      <div className={style.mark}>
        <div className={style.slider}>
          <Image name="temp" type="webp" />
        </div>
      </div>

      <div className={style.infomation}>
        <div className={style.position}>Tambon Pha Nok Khao, Thailand</div>
        <div className={style.distance}>620 kilometers away</div>
        <div className={style.date}>Jul 15-20</div>
        <div className={style.price}>
          <span>$26</span> nights
        </div>
        <span>
          {" "}
          <AiFillStar /> {star}
        </span>
      </div>
    </div>
  );
}
