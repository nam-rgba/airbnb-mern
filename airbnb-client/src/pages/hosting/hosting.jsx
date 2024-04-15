import style from './hosting.module.css';
// import Image from "../../Image";
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

export default function Hosting() {
  const menuOptions = ['today', 'inbox', 'carlender', 'insight'];
  const url = '/hosting/';
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}></div>
        <div className={style.menu}>
          {menuOptions.map((item) => (
            <Link key={item} to={url + item}>
              {item}
            </Link>
          ))}

          <button className={style.menusub}>
            Menu <AiOutlineCaretDown />
            <div className={style.menuexpand}>
              <div className={style.menucontainer}>
                <div className={style.part1}>
                  <div>
                    Get early access <span>new</span>
                  </div>
                </div>
                <div className={style.part}>
                  <div>Listing</div>
                  <div>Reversation</div>
                  <div>Creat a new listing</div>
                </div>
                <div className={style.part}>
                  <div>Guidebooks</div>
                  <div>Transaction history</div>
                  <div>Explore hosting resources</div>
                  <div>Connect with hosts near you</div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={style.account}>
          <div className={style.notifi}>
            <FiBell />
          </div>
          <div className={style.avt}>Đ</div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
