import { useState } from "react";
import style from "./type.module.css";
import { IconContext } from "react-icons/lib";
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
  const [current, setCurrent] = useState("1");

  const typeList = [
    {
      id: "1",
      icon: FaUmbrellaBeach,
      describe: "Beach view",
    },
    {
      id: "2",
      icon: FaSwimmingPool,
      describe: "Pool",
    },
    {
      id: "3",
      icon: GiCastleRuins,
      describe: "Castles",
    },
    {
      id: "4",
      icon: GiForestCamp,
      describe: "Camping",
    },
    { id: "5", icon: GiHomeGarage, describe: "Car park" },
    {
      id: "6",
      icon: GiParkBench,
      describe: "Park",
    },
    {
      id: "7",
      icon: GiTreehouse,
      describe: "Tree House",
    },
    {
      id: "8",
      icon: GiBirchTrees,
      describe: "Trees",
    },
    { id: "9", icon: GiTreehouse, describe: "Tree House" },
    {
      id: "10",
      icon: GiBirchTrees,
      describe: "Trees",
    },
  ];

  const handleTypeChange = (id) => {
    setCurrent(id);
    console.log(current);
  };

  const renderType = (type) => {
    const Icon = type.icon;
    return (
      <div
        id={type.id}
        className={type.id === current ? style.typeFocus : style.type}
        key={type.id}
        onClick={() => handleTypeChange(type.id)}
      >
        <IconContext.Provider value={{ color: "gray" }}>
          <div>
            <Icon color="#717171" fontSize="1.5em" />
          </div>
        </IconContext.Provider>
        <p>{type.describe}</p>
      </div>
    );
  };

  return (
    <>
      <div className={style.container}>
        {typeList.map((type) => renderType(type))}
      </div>
    </>
  );
}
