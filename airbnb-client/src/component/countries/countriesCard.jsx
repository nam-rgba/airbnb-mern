import style from "./countriesCard.module.css";

export default function CountriesCard({ props }) {
  const { name, map } = props;
  return (
    <div className={style.cardContainer}>
      <div className={style.map}></div>
    </div>
  );
}
