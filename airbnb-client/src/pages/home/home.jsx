import Header from '../../component/header/index';
import Type from '../../component/typeFilters/type';
import Card from '../../component/placeCard/card';
import style from './home.module.css';
import { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import axios from 'axios';

const Home = () => {
  const [isSearchDisplay, setIsSearchDisplay] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('/places')
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const { placeFiltered, handleType, handleSearch } = useFilter(rooms);

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
          {rooms.map((place) => (
            <Card key={place.place} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
