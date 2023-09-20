import Header from "../../component/header/index";
import Type from "../../component/typeFilters/type";
import Card from "../../component/placeCard/card";
import SearchTab from "../../component/searchTab/SearchTabs";
import style from "./home.module.css";
import data from "../../assets/fakedata/places.json";
import OutsideCloser from "../../hooks/clickOutside";
import { useContext } from "react";
import { SearchbarContext } from "../../contexts/SearchbarContext";

const Home = () => {
  const places = data.place;
  const { show, setShow } = useContext(SearchbarContext);
  console.log(show);

  return (
    <div className={style.container}>
      <Header hide="" />
      <div className={style.content}>
        <div className={show ? style.search_container : style.search_none}>
          <OutsideCloser
            show={show}
            onClickOutside={() => {
              console.log(show);
              setShow(false);
            }}
          >
            <SearchTab />
          </OutsideCloser>
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
