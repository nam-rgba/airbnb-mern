import style from "./profile.module.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
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
          <div className={style.verification}></div>
        </section>

        <section className={style.create_profile}></section>
      </div>

      <div className={style.action}></div>
    </>
  );
}
