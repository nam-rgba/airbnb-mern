import style from "./host.module.css";
import Image from "../../Image";
import { Link } from "react-router-dom";

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
          <button>Airbnb Setup</button>
        </div>
      </header>

      <section></section>
    </>
  );
}
