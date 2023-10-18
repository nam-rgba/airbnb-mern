import style from "./tabs.module.css";
import CountriesCard from "../../countries/countriesCard";

export default function Where() {
  const countries = [
    { id: 1, map: "australia" },
    { id: 2, map: "europ" },
    { id: 3, map: "flexible" },
    { id: 4, map: "southkorea" },
    { id: 5, map: "unitedstates" },
  ];
  return (
    <div className={style.container}>
      <div className={style.search_input}>
        <input type="text" placeholder="Somewhere only we know..." />
      </div>
      <div className={style.result}>
        {countries.map((country) => (
          <CountriesCard
            key={country.id}
            name={country.map}
            map={country.map}
          />
        ))}
      </div>
    </div>
  );
}
