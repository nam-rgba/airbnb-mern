// import Image from '../../Image';
import style from './header.module.css';
import { UserContext } from '../../contexts/UserContext';
import useClickOutSide from '../../hooks/useClickOutSide';
import SearchTab from '../searchTab/SearchTabs';

import { TfiWorld } from 'react-icons/tfi';
import { BsList, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiSearchAlt, BiUser } from 'react-icons/bi';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import logo from '../../assets/logo/airbnb.svg';

export default function Header({ hide, whenDisplaySearch, handleSearch }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [ref, visible, toogleVisible] = useClickOutSide();
  const [ref2, visible2, toogleVisible2] = useClickOutSide(false);

  const logout = async () => {
    await axios.post('/logout');
    return navigate('/account/login');
  };

  const handleClick = () => {
    console.log('excute 1 ' + visible);
    toogleVisible();
  };

  const handleClickSearchShow = () => {
    console.log('excute 2 ' + visible2);
    toogleVisible2();
    whenDisplaySearch();
  };

  const handleSubmitSearch = (value) => {
    toogleVisible2();
    handleSearch(value);
    console.log(value);
  };

  return (
    <>
      <header>
        {/* branch section */}
        <div className={style.logo}>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>

        {hide !== 'find' && (
          <div className={style.search_bounding} ref={ref2}>
            <div className={style.find} onClick={handleClickSearchShow}>
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
            {visible2 && (
              <div className={style.search_tab}>
                <SearchTab handleSubmitSearch={handleSubmitSearch} />
              </div>
            )}
          </div>
        )}

        {/* settin section */}
        <div className={style.setting}>
          <div className={style.yourhome}>
            <Link to="/host">Airbnb your home</Link>
          </div>
          <div className={style.language_btn}>
            <TfiWorld />
          </div>
          <div className={style.account_btn} onClick={handleClick} ref={ref}>
            <div className={style.account_icon}>
              <BsList size={16} />
              <FaUserCircle size={16} />
            </div>

            {visible && (
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

      {/* for bottom navbar when is mobile device */}
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
