import style from "./hosting.module.css";
import Image from "../../Image";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

export default function Hosting() {
  const menuOptions = ["today", "inbox", "carlender", "insight"];
  const url = "/hosting/";
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image name="airbnb" type="svg" />
        </div>
        <div className={style.menu}>
          {menuOptions.map((item) => (
            <Link key={item} to={url + item}>
              {item}
            </Link>
          ))}

          <button className={style.menusub}>
            Menu <AiOutlineCaretDown />
          </button>
        </div>
        <div className={style.account}>
          <div className={style.notifi}>
            <FiBell />
          </div>
          <div className={style.avt}>Đ</div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
