import Image from "../../Image";
import { TfiWorld } from "react-icons/tfi";
import { BsList } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const [account, setAccount] = useState(false);
  const { user } = useContext(UserContext);

  const expandAccount = () => {
    setAccount(!account);
  };
  console.log(user);
  return (
    <>
      <header>
        <div className={style.logo}>
          <a href="">
            <Image name="airbnb" type="svg" />
          </a>
        </div>

        <div className={style.find}>
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

        <div className={style.setting}>
          <div className={style.yourhome}>
            <a href="">Airbnb your home</a>
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
                    <Link to={"/account/login"}>Login</Link>
                    <Link to={"/account/register"}>Register</Link>
                    <Link>Airbnb your home</Link>
                    <Link>Help</Link>
                  </>
                ) : (
                  <>
                    <Link>
                      2023 Summer Release <span>New</span>
                    </Link>
                    <Link>Message</Link>
                    <Link>
                      {" "}
                      View my profile <span> {user.name}</span>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
