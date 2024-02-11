import ReactSlider from 'react-slider';
import style from './slider.module.css';
import { useState } from 'react';

export default function PriceRange({
  handleChoose,
  setSearchValue,
  searchValue
}) {
  const [price, setPrice] = useState([50, 300]);

  const handleSliderChange = (value) => {
    setPrice(value);
  };

  const handleSubmitPrice = () => {
    setSearchValue({ ...searchValue, price: { min: price[0], max: price[1] } });
    handleChoose();
  };
  return (
    <div className={style.container}>
      <div className={style.mid}>
        <div className={style.plea}> Choose your budget </div>
        <div className={style.now}>
          From <input type="number" value={price[0]} readOnly />$ to{' '}
          <input type="number" value={price[1]} readOnly />${' '}
        </div>
        <ReactSlider
          className="text-pink-900"
          thumbClassName={style.thumk}
          trackClassName={style.track}
          thumbActiveClassName={style.active}
          min={0}
          max={1000}
          minDistance={50}
          defaultValue={[50, 300]}
          renderThumb={(props) => {
            return <div {...props}></div>;
          }}
          pearling
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          onChange={handleSliderChange}
        />
        <div className={style.button}>
          <button onClick={() => handleSubmitPrice()}>Apply</button>
        </div>
      </div>
    </div>
  );
}
