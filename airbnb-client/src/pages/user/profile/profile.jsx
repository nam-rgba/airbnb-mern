import style from "./profile.module.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Image from "../../../Image";

export default function ProfilePage() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();

  if (ready && !user) {
    return navigate("/account/login");
  } else if (!ready) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={style.info}>
        <section className={style.card}>
          <div className={style.avt}>
            <Image name="profile" type="jpeg" />
            <h3>{user.name}</h3>
            <p>Guest</p>
          </div>
          <div className={style.verification}>
            <h4>{user.name} confirmed infomation </h4>
          </div>
        </section>

        <section className={style.create_profile}>
          <h3> It is time to create your profile </h3>
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
