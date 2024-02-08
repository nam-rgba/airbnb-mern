import Header from '../../component/header/index';
import Type from '../../component/typeFilters/type';
import Card from '../../component/placeCard/card';
import style from './home.module.css';
import { useState } from 'react';
import { places } from '../../utils';

const Home = () => {
  const [isSearchDisplay, setIsSearchDisplay] = useState(false);

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
      <Header hide="" whenDisplaySearch={whenDisplaySearch} />
      <div className={style.content}>
        <div className={style.type_wrap}>
          <Type />
        </div>
        <div className={style.places}>
          {places.map((place) => (
            <Card key={place.place} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
