import style from "./hosting.module.css";
import Image from "../../Image";

export default function Hosting() {
  return (
    <>
      <header>
        <div className={style.branch}>
          <div className={style.logo}>
            <Image name="airbnb" type="svg" />
          </div>
        </div>
        <div className={style.menu}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={style.account}></div>
      </header>
    </>
  );
}
