import style from "./type.module.css";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import {
  GiBirchTrees,
  GiCastleRuins,
  GiForestCamp,
  GiHomeGarage,
  GiTreehouse,
  GiParkBench,
} from "react-icons/gi";

export default function Type() {
  const typeList = [
    {
      icon: FaUmbrellaBeach,
      describe: "Beach view",
      isFocus: 1,
    },
    {
      icon: FaSwimmingPool,
      describe: "Pool",
      isFocus: 0,
    },
    {
      icon: GiCastleRuins,
      describe: "Castles",
      isFocus: 0,
    },
    {
      icon: GiForestCamp,
      describe: "Camping",
      isFocus: 0,
    },
    {
      icon: GiHomeGarage,
      describe: "Car park",
      isFocus: 0,
    },
    {
      icon: GiParkBench,
      describe: "Park",
      isFocus: 0,
    },
    {
      icon: GiTreehouse,
      describe: "Tree House",
      isFocus: 0,
    },
    {
      icon: GiBirchTrees,
      describe: "Trees",
      isFocus: 0,
    },
    {
      icon: GiTreehouse,
      describe: "Tree House",
      isFocus: 0,
    },
    {
      icon: GiBirchTrees,
      describe: "Trees",
      isFocus: 0,
    },
  ];

  const renderType = (type, index) => {
    const Icon = type.icon;
    return (
      <div className={style.type} key={index}>
        <Icon />
        <p>{type.describe}</p>
      </div>
    );
  };

  return (
    <>
      <div className={style.container}>
        {typeList.map((type, index) => renderType(type, index))}
      </div>
    </>
  );
}
