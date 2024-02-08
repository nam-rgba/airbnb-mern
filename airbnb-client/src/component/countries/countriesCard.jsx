import style from './countriesCard.module.css';
import { useState } from 'react';

export default function CountriesCard(props) {
  const [image, setImage] = useState();
  try {
    import(`../../assets/countries/${props.name}.png`).then((image) => {
      setImage(image.default);
    });

    if (!image) return null;
  } catch (error) {
    console.log(`Image with name "${props.name}" does not exist`);
    return null;
  }
  return (
    <div className={style.cardContainer}>
      <div className={style.map}>
        <img src={image} alt={props.name} />
      </div>
      <div className={style.name}>{props.displayName}</div>
    </div>
  );
}
