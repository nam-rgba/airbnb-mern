import Header from "../../component/header/index";
import Type from "../../component/typeFilters/type";
import Card from "../../component/placeCard/card";
import style from "./home.module.css";

const Home = () => {
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(stars);
  return (
    <>
      <Header hide="" />
      <Type />
      <div className={style.places}>
        {stars.map((star) => (
          <Card star={star} key={star} />
        ))}
      </div>
    </>
  );
};

export default Home;
