import Image from '../../Image';
import style from './header.module.css';
import { UserContext } from '../../contexts/UserContext';
import { SearchbarContext } from '../../contexts/SearchbarContext';

import { TfiWorld } from 'react-icons/tfi';
import { BsList, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiSearchAlt, BiUser } from 'react-icons/bi';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';

export default function Header({ hide }) {
  const [account, setAccount] = useState(false);
  const { user } = useContext(UserContext);
  const { show, setShow } = useContext(SearchbarContext);
  const navigate = useNavigate();

  console.log(show);

  const expandAccount = () => {
    setAccount(!account);
  };

  const logout = async () => {
    await axios.post('/logout');
    return navigate('/account/login');
  };
  return (
    <>
      <header>
        <div className={style.logo}>
          <Link to={'/'}>
            <Image name="airbnb" type="svg" />
          </Link>
        </div>

        {hide !== 'find' && (
          <>
            <div
              className={style.find}
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              <div className={style.where}>
                <p>Any where</p>
              </div>
              <div className={style.week}>
                <p>Any week</p>
              </div>
              <div className={style.search}>
                <p>Add geust</p>
                <div>
                  <BiSearch />
                </div>
              </div>
            </div>
          </>
        )}

        <div className={style.setting}>
          <div className={style.yourhome}>
            <Link to="/host">Airbnb your home</Link>
          </div>

          <div className={style.language_btn}>
            <TfiWorld />
          </div>

          <div className={style.account_btn} onClick={expandAccount}>
            <BsList />
            <Link>
              <FaUserCircle />
            </Link>

            {account && (
              <div className={style.account_expand}>
                {user == null ? (
                  <>
                    <Link to={'/account/login'}>Login</Link>
                    <Link to={'/account/register'}>Register</Link>
                    <Link>Airbnb your home</Link>
                    <Link>Help</Link>
                  </>
                ) : (
                  <>
                    <Link>
                      2023 Summer Release <span>New</span>
                    </Link>
                    <Link>Message</Link>
                    <Link to={'/user/profile'}>
                      {' '}
                      View my profile <span> {user.name}</span>
                    </Link>
                    <Link onClick={logout}>Log out</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={style.bottom_navbar}>
        <div className={style.explore}>
          <Link to="/">
            <BiSearchAlt />
            <p>Explore</p>
          </Link>
        </div>
        <div className={style.login}>
          <Link to="/account/login">
            <BiUser />
            <p>Login</p>
          </Link>
        </div>
        <div className={style.wishlist}>
          <Link to="/accout/wishlist">
            <BsFillBookmarkHeartFill />
            <p>Wishlist</p>
          </Link>
        </div>
      </div>
    </>
  );
}
