import style from "./countriesCard.module.css";
import Image from "../../Image";

export default function CountriesCard({ props }) {
  const { name, map } = props;
  return (
    <div className={style.cardContainer}>
      <div className={style.map}>
        <Image name={map} type="webp" />
      </div>
      <div className={style.name}>{name}</div>
    </div>
  );
}
