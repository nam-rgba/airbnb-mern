// import { useEffect } from "react";
import Header from "../../component/header/index";
import style from "./rooms.module.css";
import { AiFillStar } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BsFillHouseHeartFill } from "react-icons/bs";
import Image from "../../Image";
import { useParams } from "react-router-dom";

export default function Room() {
  const id = useParams();
  console.log(id);
  return (
    <div className={style.container}>
      <Header hide={"none"} />

      <div className={style.content}>
        <section className={style.se1}>
          <div className={style.text}>
            <div className={style.overview}>
              <div className={style.title}>Beach Bungalow Private Island</div>
              <div className={style.overview_review}>
                <div className={style.star}>
                  <AiFillStar /> 5.0
                </div>
                <div className={style.host_reward}>
                  <BiMedal /> Superhost
                </div>
                <div className={style.place}>
                  North Male Athon, Kaafu, Maldives
                </div>
              </div>
            </div>

            <div className={style.action}>
              <div className={style.share}>
                <FiShare /> Share
              </div>
              <div className={style.save}>
                <BsFillHouseHeartFill /> Save
              </div>
            </div>
          </div>

          <div className={style.photos}></div>
        </section>

        <section className={style.detail_and_payment}>
          <div className={style.detail}>
            <div className={style.hosted}>
              <div className={style.text}>
                <h3>Entire home hosted by Diana</h3>
                <p>7 guests . 3 bedrooms . 4 beds . 3 baths</p>
              </div>
              <div className={style.avt}>
                <div>
                  <Image name={"profile"} type={"jpeg"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
