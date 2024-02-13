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
            name={country.name}
            displayName={country.nameDisplay}
            onClick={handleChoose}
          />
        ))}
      </div>
    </div>
  );
}
