import Header from '../../component/header/index';
import Type from '../../component/typeFilters/type';
import Card from '../../component/placeCard/card';
import style from './home.module.css';
import data from '../../assets/fakedata/places.json';

const Home = () => {
  const places = data.place;
  return (
    <div className={style.container}>
      <Header hide="" />
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
