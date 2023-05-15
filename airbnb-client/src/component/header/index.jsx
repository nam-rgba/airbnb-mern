import Image from "../../Image";
import { TfiWorld } from "react-icons/tfi";
import { BsList } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <a href="">
            <Image name="airbnb" />
          </a>
        </div>

        <div className={style.find}>
          <div className={style.where}>
            <p>Any where</p>
          </div>
          <div className={style.week}>
            <p>Any week</p>
          </div>
          <div className={style.search}>
            <p>Add geust</p>
            <div>
              <BiSearch />
            </div>
          </div>
        </div>

        <div className={style.setting}>
          <div className={style.yourhome}>
            <a href="">Airbnb your home</a>
          </div>

          <div className={style.language_btn}>
            <TfiWorld />
          </div>

          <div className={style.account_btn}>
            <BsList />
            <FaUserCircle />
          </div>
        </div>
      </header>
    </>
  );
}
