import style from "./host.module.css";
import Image from "../../Image";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Host() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.GOOGLE_KEY_MAP,
  });

  const center = useMemo(
    () => ({ lat: 10.732680385612682, lng: 106.69933696671156 }),
    []
  );

  console.log(isLoaded);

  return (
    <>
      <header className={style.header}>
        <Link to="/">
          <div className={style.branch}>
            <Image name="airbnb" type="svg" />
          </div>
        </Link>

        <div className={style.setup}>
          <div>Ready to Airbnb it?</div>
          <button className={style.btn}>
            {" "}
            <BiHome /> Airbnb Setup
          </button>
        </div>
      </header>

      <section className={style.earning}>
        <div className={style.txt1}>
          <div className={style.title1}>
            <span>Airbnb it.</span>
            <br />
            You could earn
            <div>$182</div>
          </div>
          <div className={style.cash}>
            <span>7 nights </span>
            at an estimated 26$ per nigth
            <br />
            <Link> Learn how we estimate your earnings</Link>
          </div>
        </div>

        <div className={style.map}>
          {!isLoaded ? (
            <p>Loading...</p>
          ) : (
            <GoogleMap
              mapContainerClassName={style.map_container}
              center={center}
              zoom={16}
            >
              <MarkerF
                position={{ lat: 10.732680385612682, lng: 106.69933696671156 }}
              />
            </GoogleMap>
          )}
        </div>
      </section>

      <section className={style.easysetupS}></section>
    </>
  );
}
