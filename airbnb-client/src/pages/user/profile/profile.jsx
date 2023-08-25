import style from "./profile.module.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Image from "../../../Image";
import { MdOutlineDone } from "react-icons/md";

export default function ProfilePage() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();
  const time = () => {
    const now = Date.parse(new Date());
    const timeCreate = Date.parse(user.timeCreate);
    const totals = now - timeCreate;
    console.log(now);
    console.log(timeCreate);
    return Math.floor(totals / 86400000) + 1;
  };

  if (ready && !user) {
    return navigate("/account/login");
  } else if (!ready) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={style.info}>
        <section className={style.card}>
          <div className={style.card_info}>
            <div className={style.avt}>
              <Image name="profile" type="jpeg" />
              <h3>{user.name}</h3>
              <p>Guest</p>
            </div>
            <div className={style.countTime}>
              <span>{time()}</span>
              <p> days on Airbnb!</p>{" "}
            </div>
          </div>
          <div className={style.verification}>
            <div className={style.email}>
              <h3>Your confirmed infomation </h3>
              <span>
                <MdOutlineDone />
                <p>Email address</p>
              </span>
            </div>
            <div className={style.identify}>
              <h3>Verify your identity </h3>

              <p>
                Before you book or Host on Airbnb, you’ll need to complete this
                step.
              </p>
            </div>
          </div>
        </section>

        <section className={style.create_profile}>
          <h2> It is time to create your profile </h2>
          <p>
            Your Airbnb profile is an important part of every reservation.
            Create yours to help other Hosts and guests get to know you.
          </p>
          <button>
            <Link>Create profile</Link>
          </button>
        </section>
      </div>

      <div className={style.action}></div>
    </>
  );
}
