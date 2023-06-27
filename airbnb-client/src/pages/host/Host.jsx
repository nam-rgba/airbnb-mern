import style from "./host.module.css";
import Image from "../../Image";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";

export default function Host() {
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
            You could earn
            <div>$182</div>
          </div>
          <div className="">
            <span>7 nights</span>
            at an estimated 26$ per nigth
            <Link> Learn how we estimate your earnings</Link>
          </div>
        </div>
      </section>
    </>
  );
}
