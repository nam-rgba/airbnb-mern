import style from "./card.module.css";
import Image from "../../Image.jsx";

export default function Card() {
  return (
    <>
      <div className={style.container}>
        <div className={style.images}>
          <div className={style.mark}>
            <div className={style.slider}>
              <Image name="temp" type="webp" />
            </div>
          </div>
        </div>

        <div className={style.infomation}>
          <div className={style.position}>Tambon Pha Nok Khao, Thailand</div>
          <div className={style.distance}>620 kilometers away</div>
          <div className={style.date}>Jul 15-20</div>
          <div className={style.price}>
            <span>$26</span> night
          </div>
        </div>
      </div>
      ;
    </>
  );
}
