// import { useEffect } from "react";
import Header from "../../component/header/index";
import style from "./rooms.module.css";
import { AiFillStar } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BsFillHouseHeartFill, BsDoorOpen } from "react-icons/bs";
import { GiSwimfins } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import Image from "../../Image";
// import { useParams } from "react-router-dom";
import data from "../../assets/fakedata/places.json";
import { IconContext } from "react-icons/lib";

export default function Room() {
  const place = data.place[1];
  const services = [
    {
      icon: MdTableRestaurant,
      name: "Dedicated workspace",
      description: "A common area with wifi that well suit for working",
    },
    {
      icon: GiSwimfins,
      name: "Dive right in",
      description: "This is one of few places in the area with pool",
    },
    {
      icon: BsDoorOpen,
      name: "Self check-in",
      description: "You can check in with the building staff",
    },
  ];

  const renderService = (service) => {
    const Icon = service.icon;
    return (
      <div key={service.name} className={style.service}>
        <IconContext.Provider value={{ color: "black" }}>
          <div>
            <Icon color="#3d3d3d" fontSize="2em" />
          </div>
        </IconContext.Provider>
        <div className={style.text_service}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    );
  };
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
            <div className={style.services}>
              {services.map((service) => {
                renderService(service);
              })}
            </div>
          </div>
          <div className={style.checkout}></div>
        </section>
      </div>
    </div>
  );
}
