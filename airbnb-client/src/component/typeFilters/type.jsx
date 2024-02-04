import { useState } from 'react';
import style from './type.module.css';
import { IconContext } from 'react-icons/lib';
import { FaUmbrellaBeach, FaFireAlt } from 'react-icons/fa';
import {
  GiBirchTrees,
  GiCastleRuins,
  GiForestCamp,
  GiHomeGarage,
  GiTreehouse,
  GiParkBench,
  GiGolfFlag,
  GiChefToque
} from 'react-icons/gi';
import { TbBrandGoogleHome } from 'react-icons/tb';
import { BiSwim } from 'react-icons/bi';

export default function Type() {
  const [current, setCurrent] = useState('1');
  const defaultColor = '#717171';

  const typeList = [
    {
      id: '1',
      icon: FaUmbrellaBeach,
      describe: 'Beach view'
    },
    {
      id: '2',
      icon: BiSwim,
      describe: 'Pool'
    },
    {
      id: '3',
      icon: GiCastleRuins,
      describe: 'Castles'
    },
    {
      id: '4',
      icon: GiForestCamp,
      describe: 'Camping'
    },
    { id: '5', icon: GiHomeGarage, describe: 'Car park' },
    {
      id: '6',
      icon: GiParkBench,
      describe: 'Park'
    },
    {
      id: '7',
      icon: GiTreehouse,
      describe: 'Tree House'
    },
    {
      id: '8',
      icon: GiBirchTrees,
      describe: 'Forest'
    },
    { id: '9', icon: GiTreehouse, describe: 'Tree House' },

    {
      id: '11',
      icon: TbBrandGoogleHome,
      describe: 'Cabins'
    },
    {
      id: '12',
      icon: GiGolfFlag,
      describe: 'Golfs'
    },
    {
      id: '13',
      icon: FaFireAlt,
      describe: 'trending'
    },
    {
      id: '14',
      icon: GiChefToque,
      describe: 'Great kitchen'
    }
  ];

  const handleTypeChange = (id) => {
    setCurrent(id);
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
        <IconContext.Provider value={{ color: 'gray' }}>
          <div>
            <Icon
              color={type.id === current ? '#ff385c' : defaultColor}
              fontSize="1.5em"
            />
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
