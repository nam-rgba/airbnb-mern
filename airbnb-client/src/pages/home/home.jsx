import Header from '../../component/header/index';
import Type from '../../component/typeFilters/type';
import Card from '../../component/placeCard/card';
import style from './home.module.css';
import { useState } from 'react';
import { useFilter } from '../../hooks/useFilter';

const Home = () => {
  const [isSearchDisplay, setIsSearchDisplay] = useState(false);
  let { placeFiltered, handleType, handleSearch } = useFilter();

  // console.log(placeFiltered);

  const whenDisplaySearch = () => {
    setIsSearchDisplay(!isSearchDisplay);
    document.documentElement.style.overflow = isSearchDisplay
      ? 'auto'
      : 'hidden';

    document.documentElement.style.paddingRight = isSearchDisplay
      ? '0px'
      : '8px';
  };

  return (
    <div className={style.container}>
      <Header
        hide=""
        whenDisplaySearch={whenDisplaySearch}
        handleSearch={handleSearch}
      />
      <div className={style.content}>
        <div className={style.type_wrap}>
          <Type handleType={handleType} />
        </div>
        <div className={style.places}>
          {placeFiltered.map((place) => (
            <Card key={place.place} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
