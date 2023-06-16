import style from "./host.module.css";
import Image from "../../Image";

export default function Host() {
  return (
    <>
      <header>
        <div className={style.branch}>
          <Image name="airbnb" type="svg" />
        </div>

        <div className={style.setup}>
          <p>Ready to Airbnb it?</p>
          <button>Airbnb Setup</button>
        </div>
      </header>
    </>
  );
}
