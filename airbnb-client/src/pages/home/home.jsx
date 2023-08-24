import Header from "../../component/header/index";
import Type from "../../component/typeFilters/type";
import Card from "../../component/placeCard/card";
import style from "./home.module.css";
import data from "../../assets/fakedata/places.json";

const Home = () => {
  const places = data.place;

  return (
    <>
      <Header hide="" />
      <Type />
      <div className={style.places}>
        {places.map((place) => (
          <Card key={place.place} place={place} />
        ))}
      </div>
    </>
  );
};

export default Home;
