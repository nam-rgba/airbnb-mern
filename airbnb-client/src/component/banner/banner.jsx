import acp from '../../assets/logo/login.png';
import style from './banner.module.css';

const Banner = () => {
  return (
    <div className={style.container}>
      <a href="https://storyset.com/travel">
        <img src={acp} alt="acp" />
      </a>
    </div>
  );
};

export default Banner;
