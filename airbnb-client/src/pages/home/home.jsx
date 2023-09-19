import Header from "../../component/header/index";
import Type from "../../component/typeFilters/type";
import Card from "../../component/placeCard/card";
import SearchTab from "../../component/searchTab/SearchTabs";
import style from "./home.module.css";
import data from "../../assets/fakedata/places.json";
import { useContext } from "react";
import { SearchbarContext } from "../../contexts/SearchbarContext";

const Home = () => {
  const places = data.place;
  const { show } = useContext(SearchbarContext);

  return (
    <div className={style.container}>
      <Header hide="" />
      <div className={style.content}>
        <div className={show ? style.search_container : style.search_none}>
          {show && <SearchTab />}
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
