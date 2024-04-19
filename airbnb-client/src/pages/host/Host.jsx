import style from './host.module.css';
import { Link } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import logo from '../../assets/logo/airbnb.svg';

import easySetup from '../../assets/setup/setupeasily.webp';

export default function Host() {
  // State for HMAC
  const [email, setEmail] = useState('');

  console.log(import.meta.env.VITE_GOOGLE_KEY_MAP);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY_MAP
  });

  const center = useMemo(
    () => ({ lat: 10.732680385612682, lng: 106.69933696671156 }),
    []
  );

  // Generate HMAC with crypto-js function

  // Handle submit email

  // Attacking HMAC use Brute Force function

  return (
    <>
      <header className={style.header}>
        <Link to="/">
          <div className={style.branch}>
            <img src={logo} alt="" />
          </div>
        </Link>

        <div className={style.setup}>
          <div>Ready to Airbnb it?</div>
          <button className={style.btn}>
            {' '}
            <BiHome /> Airbnb Setup
          </button>
        </div>
      </header>

      <section className={style.earning}>
        <div className={style.txt1}>
          <div className={style.title1}>
            <span>Airbnb it.</span>
            <br />
            You could earn
            <div>$182</div>
          </div>
          <div className={style.cash}>
            <span>7 nights </span>
            at an estimated 26$ per nigth
            <br />
            <Link> Learn how we estimate your earnings</Link>
          </div>

          <div className={style.form}>
            <p>Contact with us by email</p>
            <form action="">
              <label htmlFor="email" className={style.invisible}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button>
                <RiSendPlaneFill color="#ffffff" />
              </button>
            </form>
          </div>
        </div>

        <div className={style.map}>
          {!isLoaded ? (
            <p>Loading...</p>
          ) : (
            <GoogleMap
              mapContainerClassName={style.map_container}
              center={center}
              zoom={16}
            >
              <MarkerF
                position={{ lat: 10.732680385612682, lng: 106.69933696671156 }}
              />
            </GoogleMap>
          )}
        </div>
      </section>

      <section className={style.easysetup}>
        <div className={style.setup_title}>
          Airbnb it easily with Airbnb Setup
        </div>

        <div className={style.setup_img}>
          <img src={easySetup} alt="" />
        </div>
        <div className={style.setup_content}>
          <div className={style.setup_small}>
            <div className={style.setup_small_title}>
              One-to-one guidance from a Superhost
            </div>
            <div className={style.setup_small_content}>
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </div>
          </div>
          <div className={style.setup_small}>
            <div className={style.setup_small_title}>
              An experienced guest for your first booking
            </div>
            <div className={style.setup_small_content}>
              For your first booking, you can choose to welcome an experienced
              guest who has at least three stays and a good track record on
              Airbnb.
            </div>
          </div>
          <div className={style.setup_small}>
            <div className={style.setup_small_title}>
              Specialized support from Airbnb
            </div>
            <div className={style.setup_small_content}>
              New Hosts get one-tap access to specially trained Community
              Support agents who can help with everything from account issues to
              billing support.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
