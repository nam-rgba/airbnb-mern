import style from './tabs.module.css';
import CountriesCard from '../../countries/countriesCard';
import { useState } from 'react';
import { countries } from '../../../utils';

export default function Where({ handleChoose, setSearchValue, searchValue }) {
  const [searchKey, setSearchKey] = useState('');

  const listFilter = countries.filter((country) =>
    country.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  const handleInputSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const whenSelectCountry = (country) => {
    console.log('just call change country to... ' + country);
    setSearchValue({ ...searchValue, country: country });
    handleChoose();
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
          <div
            key={country.id}
            onClick={() => whenSelectCountry(country.nameDisplay)}
          >
            <CountriesCard
              name={country.name}
              displayName={country.nameDisplay}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
