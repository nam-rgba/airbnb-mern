// import { useEffect } from "react";
import Header from '../../component/header/index';
import style from './rooms.module.css';
import { AiFillStar } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { HiOutlineArrowDownRight } from 'react-icons/hi2';
import Character from '../../component/character/character';
import Charged from '../../component/chagred/chagred';
import { useParams } from 'react-router-dom';
import { places } from '../../utils';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';

export default function Room() {
  const idRoom = useParams();
  const place = places[idRoom.id - 1];
  const user = JSON.parse(localStorage.getItem('userfe'));
  const [like, setLike] = useState(user?.likes.includes(place.id) || false);
  const [seeMore, setSeeMore] = useState(false);
  const [reserve, setReserve] = useState(
    user?.bookings.some((booking) => booking.id === place.id)
  );

  const characters = [
    {
      id: 1,
      icon: 'door',
      name: 'Self check-in',
      describe: 'Check yourself in with the lockbox.'
    },
    {
      id: 2,
      icon: 'medal',
      name: 'Nam is a Superhost',
      describe: 'Superhosts are experienced, highly rated Hosts.'
    },
    {
      id: 3,
      icon: 'local',
      name: 'Great location',
      describe: '100% of recent guests gave the location a 5-star rating.'
    }
  ];

  const handleReserve = (price, time) => {
    if (reserve) {
      user.bookings = user.bookings.filter(
        (booking) => booking.id !== place.id
      );

      setReserve(false);
    } else {
      user.bookings.push({
        id: place.id,
        name: place.place,
        price: price,
        time: time
      });
      setReserve(true);
    }
    localStorage.setItem('userfe', JSON.stringify(user));
  };

  return (
    <div className={style.container}>
      <Header hide={'none'} />

      <div className={style.content}>
        <section className={style.se1}>
          <div className={style.text}>
            <div className={style.overview}>
              <div className={style.title}>
                {place.describe
                  ? place.describe
                  : 'Beach Bungalow Private Island'}
              </div>
              <div className={style.overview_review}>
                <div className={style.star}>
                  <AiFillStar /> {place.review}
                </div>
                <div className="">.</div>
                <div className={style.host_reward}>
                  <BiMedal /> Superhost
                </div>
                <div className="">.</div>
                <div className={style.place}>{place.place}</div>
              </div>
            </div>

            <div className={style.action}>
              <div className={style.share}>
                <FiShare />
                Share
              </div>
              <div className={style.save}>
                {like ? (
                  <div>
                    <IoMdHeart
                      color="var(--primary-color)"
                      onClick={() => {
                        setLike(!like);
                        user.likes = user.likes.filter(
                          (item) => item !== place.id
                        );
                        localStorage.setItem('userfe', JSON.stringify(user));
                      }}
                    />
                    Loved
                  </div>
                ) : (
                  <div>
                    <FaRegHeart
                      color="var(--primary-color)"
                      onClick={() => {
                        setLike(!like);
                        user.likes.push(place.id);
                        localStorage.setItem('userfe', JSON.stringify(user));
                      }}
                    />
                    Love it
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={style.photos}>
            <div className={style.big}>
              <img src={place.image[0]} alt="" />
            </div>
            <div className={style.small}>
              <div>
                <img src={place.image[1]} alt="" />
              </div>
              <div>
                <img src={place.image[2]} alt="" />
              </div>
              <div>
                <img src={place.image[3]} alt="" />
              </div>
              <div>
                <img
                  src={place.image[4] ? place.image[4] : place.image[0]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className={style.detail_and_checkout}>
          <div className={style.detail}>
            <div className={style.hosted}>
              <div className={style.text}>
                <h3>Entire home hosted by {place.hoster}</h3>
                <p>7 guests . 3 bedrooms . 4 beds . 3 baths</p>
              </div>
              <div className={style.avt}>
                <div>{/* <Image name={'profile'} type={'jpeg'} /> */}</div>
              </div>
            </div>

            <div className={style.character}>
              {characters.map((cha) => (
                <Character
                  key={cha.id}
                  icon={cha.icon}
                  name={cha.name}
                  describe={cha.describe}
                />
              ))}
            </div>
            <div className={style.about}>
              <div
                className={style.longdes}
                style={{ height: seeMore ? 'auto' : '4rem' }}
              >
                A stunningly situated 3 bedroom house, overlooking idyllic
                Polurrian Beach on the edge of the Lizard. The perfect spot for
                a magic Cornwall family holiday, the secluded comfy three bed
                house has incredible sea views and direct access to one of the
                Lizards prettiest beaches. Theres also a lovely garden and large
                private field to walk the dog. A short walk to the south-west
                coastal path, nearby surf spots and great food in Porthleven,
                theres something for everyone.
              </div>
              <div
                className={style.seemore}
                onClick={() => setSeeMore(!seeMore)}
              >
                <p>Show more </p>
                <HiOutlineArrowDownRight size={14} />
              </div>
            </div>
          </div>

          <div className={style.checkout}>
            <Charged
              price={place.price}
              star={place.review}
              handleReserve={handleReserve}
              reserve={reserve}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
