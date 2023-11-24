import style from "./tabs.module.css";
import CountriesCard from "../../countries/countriesCard";
import { useState } from "react";

const countries = [
  { id: 1, map: "australia" },
  { id: 2, map: "europ" },
  { id: 3, map: "flexible" },
  { id: 4, map: "southkorea" },
  { id: 5, map: "unitedstates" },
  { id: 6, map: "vietnam" },
];

export default function Where() {
  const [searchKey, setSearchKey] = useState("");

  const listFilter = countries.filter((country) =>
    country.map.toLowerCase().includes(searchKey.toLowerCase())
  );

  const handleInputSearch = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <div className={style.container}>
      <div className={style.search_input}>
        <input
          type="text"
          placeholder="Somewhere only we know..."
          value={searchKey}
          onChange={handleInputSearch}
        />
      </div>
      <div className={style.result_where}>
        {listFilter.map((country) => (
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
