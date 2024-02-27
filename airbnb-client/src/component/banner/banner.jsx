import Image from '../../Image';
import style from './banner.module.css';

const Banner = () => {
  return (
    <div className={style.container}>
      <div>
        <Image name="banner" type="png" />
      </div>
    </div>
  );
};

export default Banner;
