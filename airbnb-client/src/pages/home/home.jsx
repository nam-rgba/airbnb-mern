import Header from "../../component/header/index";
import Type from "../../component/typeFilters/type";
import Card from "../../component/placeCard/card";
import style from "./home.module.css";
import data from "../../assets/fakedata/places.json";
import { useContext } from "react";
import { SearchbarContext } from "../../contexts/SearchbarContext";

const Home = () => {
  const places = data.place;
  const { show, setShow } = useContext(SearchbarContext);

  return (
    <div className={style.container}>
      <Header hide="" />
      <div className={style.content}>
        <div className={show ? style.search_container : style.search_none}>
          {show && (
            <div className={style.search_main}>
              <div className={style.tabs_bar}></div>
            </div>
          )}
        </div>
        <Type />
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
