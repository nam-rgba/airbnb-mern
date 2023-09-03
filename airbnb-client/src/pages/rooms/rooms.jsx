// import { useEffect } from "react";
import Header from "../../component/header/index";
import style from "./rooms.module.css";
import { AiFillStar } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BsFillHouseHeartFill } from "react-icons/bs";
import Image from "../../Image";
import { useParams } from "react-router-dom";
import data from "../../assets/fakedata/places.json";

export default function Room() {
  const id = useParams();
  const place = data.place[1];
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
                <div className="">.</div>
                <div className={style.host_reward}>
                  <BiMedal /> Superhost
                </div>
                <div className="">.</div>
                <div className={style.place}>
                  North Male Athon, Kaafu, Maldives
                </div>
              </div>
            </div>

            <div className={style.action}>
              <div className={style.share}>
                <FiShare />
                Share
              </div>
              <div className={style.save}>
                <BsFillHouseHeartFill />
                Save
              </div>
            </div>
          </div>

          <div className={style.photos}>
            <div className={style.big}>
              <img src={place.image[0]} alt="" />
            </div>
            <div className={style.small}>
              <div>
                <img src={place.image[1]} alt="" />
              </div>
              <div>
                <img src={place.image[2]} alt="" />
              </div>
              <div>
                <img src={place.image[3]} alt="" />
              </div>
              <div>
                <img src={place.image[0]} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.detail_and_checkout}>
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
          <div className={style.checkout}></div>
        </section>
      </div>
    </div>
  );
}
