import style from './profile.module.css';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone, MdOutlineQuestionMark } from 'react-icons/md';
import avt from '../../../assets/logo/airbnb.svg';

export default function ProfilePage() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();

  const time = () => {
    const now = Date.parse(new Date());
    const timeCreate = Date.parse(user.timeCreate);
    const totals = now - timeCreate;

    return Math.floor(totals / 86400000) + 1;
  };

  if (ready && !user) {
    return navigate('/account/login');
  } else if (!ready) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={style.info}>
        <section className={style.card}>
          <div className={style.card_info}>
            <div className={style.avt}>
              <img src={avt} alt="" />
            </div>
            <div className={style.countTime}>
              <div>
                <h3>{user.name}</h3>
                <p>Guest</p>
              </div>
              <div>
                <span>{time()}</span>
                <p> days on Airbnb!</p>{' '}
              </div>
            </div>
          </div>
          <div className={style.verification}>
            <div className={style.email}>
              <h3>Your confirmed infomation </h3>
              <span>
                <MdOutlineDone color="green" size={20} />
                <p>Email address</p>
              </span>
            </div>
            <div className={style.email}>
              <h3>Verify your identity </h3>

              <span>
                <MdOutlineQuestionMark size={28} color="#f9375a" />
                <p>
                  Before you book or Host on Airbnb, you’ll need to complete
                  this step
                </p>
              </span>
            </div>
          </div>
        </section>
        <section className={style.table}></section>
      </div>

      <div className={style.action}></div>
    </>
  );
}
