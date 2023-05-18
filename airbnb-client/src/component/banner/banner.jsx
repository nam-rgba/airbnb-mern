import Image from "../../Image";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>
      <div>
        <Image name="loginbanner7" type="jpg" />
      </div>
      <div>
        <Image name="loginbanner5" type="jpg" />
      </div>
      <div>
        <Image name="loginbanner6" type="jpg" />
      </div>
      <div>
        <Image name="loginbanner4" type="jpg" />
      </div>
    </div>
  );
};

export default Banner;
